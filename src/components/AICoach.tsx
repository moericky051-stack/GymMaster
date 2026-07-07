import React, { useState, useRef, useEffect, useMemo } from "react";
import { Send, Dumbbell, Sparkles, MessageSquare, ShieldAlert, Brain } from "lucide-react";
import { ChatMessage, UserProfile } from "../types";
import { Language, TRANSLATIONS } from "../utils/translations";

interface AICoachProps {
  userProfile: UserProfile | null;
  language?: Language;
}

export default function AICoach({ userProfile, language = "en" }: AICoachProps) {
  const isMy = language === "my";
  const t = TRANSLATIONS[language];

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      text: t.coachWelcome,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sync welcome message when language changes
  useEffect(() => {
    setMessages((prev) =>
      prev.map((m) => (m.id === "welcome" ? { ...m, text: t.coachWelcome } : m))
    );
  }, [language, t.coachWelcome]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      role: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      // Map history to server schema
      const historyPayload = messages.map(m => ({
        role: m.role,
        text: m.text
      }));

      const res = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload,
          language: language,
          userProfile: userProfile ? {
            height: userProfile.height,
            weight: userProfile.weight,
            age: userProfile.age,
            goal: userProfile.goal,
            bmi: userProfile.bmi
          } : null
        })
      });

      if (!res.ok) {
        throw new Error(isMy ? "AI Coach စနစ် ခေတ္တချို့ယွင်းနေပါသည်။ Settings > Secrets တွင် GEMINI_API_KEY ထည့်သွင်းထားကြောင်း သေချာပါစေ။" : "Coach system is momentarily offline. Verify GEMINI_API_KEY is configured.");
      }

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      const coachMsg: ChatMessage = {
        id: Math.random().toString(),
        role: "model",
        text: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, coachMsg]);
    } catch (err: any) {
      console.error(err);
      setError(err.message || (isMy ? "တစ်စုံတစ်ခုမှားယွင်းနေပါသည်။ နောက်တစ်ကြိမ် ထပ်ကြိုးစားကြည့်ပါ။" : "Something went wrong. Please try again."));
    } finally {
      setIsLoading(false);
    }
  };

  // Safe renderer for markdown bullet points, bold text
  const renderMessageText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      let content = line;
      // Handle bold blocks (e.g. **text**)
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        parts.push(<strong key={match.index} className="text-emerald-400 font-extrabold">{match[1]}</strong>);
        lastIndex = boldRegex.lastIndex;
      }
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      const isBullet = line.trim().startsWith("-") || line.trim().startsWith("*");
      const lineContent = parts.length > 0 ? parts : content;

      if (isBullet) {
        // Strip the bullet char
        const stripped = typeof lineContent === "string" 
          ? lineContent.replace(/^[\s-*]+/, "") 
          : lineContent;
        return (
          <li key={idx} className="ml-4 list-disc text-neutral-300 my-1 leading-relaxed text-sm">
            {stripped}
          </li>
        );
      }

      return (
        <p key={idx} className="text-sm text-neutral-300 leading-relaxed my-1.5">
          {lineContent}
        </p>
      );
    });
  };

  const presets = [
    { text: t.presetLegText, label: t.presetLeg },
    { text: t.presetSquatText, label: t.presetSquat },
    { text: t.presetFatLossText, label: t.presetFatLoss },
    { text: t.presetBenchText, label: t.presetBench },
  ];

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl flex flex-col h-[600px] shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-neutral-950 p-4 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center relative">
            <Brain className="w-5 h-5 text-emerald-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-neutral-950 rounded-full animate-ping" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-neutral-950 rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-neutral-100">{isMy ? "GymMaster AI နည်းပြ" : "GymMaster AI Coach"}</span>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded-md font-mono">
                {t.active}
              </span>
            </div>
            <p className="text-[11px] text-neutral-400">{t.coachDesc}</p>
          </div>
        </div>

        {userProfile && (
          <div className="hidden sm:flex items-center gap-2 bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-800 text-[10px] text-neutral-400 font-mono">
            <span>{isMy ? "ရည်မှန်းချက်" : "Goal"}: <strong className="text-emerald-400">{userProfile.goal}</strong></span>
            <span className="text-neutral-700">|</span>
            <span>BMI: <strong className="text-emerald-400">{userProfile.bmi}</strong></span>
          </div>
        )}
      </div>

      {/* Messages Stream */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-950/40">
        {messages.map((m) => {
          const isModel = m.role === "model";
          return (
            <div
              key={m.id}
              className={`flex ${isModel ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 border ${
                  isModel
                    ? "bg-neutral-900 border-neutral-800 text-neutral-100 rounded-tl-none"
                    : "bg-emerald-950/40 border-emerald-500/20 text-neutral-200 rounded-tr-none"
                }`}
              >
                {/* Role label */}
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  {isModel ? (isMy ? "နည်းပြ AI" : "Coach AI") : (isMy ? "သင်" : "You")} • {m.timestamp}
                </span>

                {/* Message text content */}
                <div className="space-y-1">{renderMessageText(m.text)}</div>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[70%] rounded-2xl p-4 bg-neutral-900 border border-neutral-800 rounded-tl-none flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
              <span className="text-xs text-neutral-400 font-mono">{t.coachThinking}</span>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 p-3.5 rounded-xl text-xs text-red-400 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold">{t.connectionAlert}</p>
              <p className="mt-0.5 text-neutral-400 leading-relaxed">{error}</p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Preset / Instant Questions */}
      <div className="bg-neutral-950/80 px-4 py-2 border-t border-neutral-800 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
        {presets.map((p, idx) => (
          <button
            key={idx}
            disabled={isLoading}
            onClick={() => handleSendMessage(p.text)}
            className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-xs text-neutral-300 hover:text-neutral-100 transition-all font-sans flex items-center gap-1.5 shrink-0 disabled:opacity-50"
          >
            <Sparkles className="w-3 h-3 text-emerald-400" />
            {p.label}
          </button>
        ))}
      </div>

      {/* Input controls */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(input);
        }}
        className="p-3 bg-neutral-950 border-t border-neutral-800 flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={userProfile ? t.coachPlaceholderProfile : t.coachPlaceholderGuest}
          className="flex-1 bg-neutral-900 border border-neutral-800 focus:border-emerald-500/40 rounded-xl px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none transition-all"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="px-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold rounded-xl transition-all flex items-center justify-center disabled:opacity-50 disabled:hover:bg-emerald-500"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
