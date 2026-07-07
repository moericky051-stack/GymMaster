import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

// Load environment variables
dotenv.config();

const isProduction = process.env.NODE_ENV === "production";
const PORT = 3000;

// Lazy initialize Gemini client to avoid crashing on start if API key is missing
let aiClient: GoogleGenAI | null = null;

function getAIClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not set. Please add it in Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();

  // Middleware for body parsing
  app.use(express.json());

  // API endpoints FIRST
  app.post("/api/coach", async (req, res) => {
    try {
      const { message, history, userProfile, language } = req.body;

      if (!message) {
         res.status(400).json({ error: "Message is required" });
         return;
      }

      const ai = getAIClient();

      // Setup a system instruction with context about the user if available
      let userContext = "";
      if (userProfile) {
         const { height, weight, age, goal, bmi } = userProfile;
         userContext = `\nActive User Profile: Age: ${age || "N/A"}, Height: ${height || "N/A"} cm, Weight: ${weight || "N/A"} kg, BMI: ${bmi || "N/A"}, Fitness Goal: ${goal || "Build muscle"}. Consider this profile when giving personalized recommendations.`;
      }

      let languageGuideline = "";
      if (language === "my") {
         languageGuideline = "\nCRITICAL RESPONSE LANGUAGE GUIDELINE: The user's active interface language is Burmese. You MUST respond ENTIRELY in clean, friendly, and professional Burmese language (မြန်မာဘာသာ). Write exercise names or technical terms in both Burmese and English if helpful (e.g. Squat - ထိုင်ထ) so they are easy to read and understand. Maintain an encouraging personal trainer tone in Burmese.";
      }

      const systemInstruction = `You are GymMaster AI Coach, a highly professional, encouraging, and certified personal trainer and strength coach.
You specialize in:
1. Explaining proper exercise execution (stance, breathing, motion range).
2. Recommending customized gym workouts and structuring training routines (Beginner PPL, Upper/Lower splits, fat loss).
3. Providing critical safety tips and correct form cues to prevent injuries.
4. Answering questions about sports nutrition, muscle recovery, and hydration.

Tone guidelines:
- Motivating, supportive, scientifically accurate, and crisp.
- Use bullet points, bold key phrases, and short structured paragraphs.
- Keep recommendations highly practical and focused on proper mechanics.
- Do not make up facts. If a question is entirely unrelated to sports, fitness, gym, or nutrition, politely guide the user back to fitness training.
${userContext}${languageGuideline}`;

      // Call Gemini API using gemini-3.5-flash
      const contents = [];

      // Append chat history for multi-turn conversations
      if (history && Array.isArray(history)) {
        for (const chatTurn of history) {
          contents.push({
            role: chatTurn.role === "user" ? "user" : "model",
            parts: [{ text: chatTurn.text || chatTurn.parts?.[0]?.text || "" }]
          });
        }
      }

      // Add the final user message
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const text = response.text || "I apologize, I could not generate a response. Please try again.";
      res.json({ text });
    } catch (error: any) {
      console.error("Gemini Coach API Error:", error);
      res.status(500).json({
        error: error.message || "An error occurred with the AI Coach. Make sure GEMINI_API_KEY is configured."
      });
    }
  });

  // Serve static assets/Vite applet
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[GymMaster] Express server listening on http://localhost:${PORT} (Production: ${isProduction})`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
