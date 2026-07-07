import { WorkoutPlan } from "../types";

export const WORKOUT_PLANS: WorkoutPlan[] = [
  // --- BEGINNER ---
  {
    id: "beg-full-body",
    name: "Beginner 3-Day Full Body Plan",
    difficulty: "Beginner",
    frequency: "3 Days / Week (e.g., Mon, Wed, Fri)",
    description: "Designed for beginners to build foundational strength, joint stability, and master correct exercise form. Focus on lifting under control.",
    days: [
      {
        dayName: "Day 1: Foundation",
        focus: "Full Body Compound Movement",
        exercises: [
          { exerciseId: "push-up", customSetsReps: "3 sets x 8-12 reps", notes: "Use knee push-ups if standard push-ups are too difficult." },
          { exerciseId: "seated-cable-row", customSetsReps: "3 sets x 10-12 reps", notes: "Focus on squeezing your shoulder blades." },
          { exerciseId: "leg-press", customSetsReps: "3 sets x 12 reps", notes: "Do not lock your knees at the top." },
          { exerciseId: "lateral-raise", customSetsReps: "2 sets x 12-15 reps", notes: "Keep weights light, focus on deltoid squeeze." },
          { exerciseId: "plank", customSetsReps: "3 sets x 30-45 sec", notes: "Keep your spine completely neutral and core braced." }
        ]
      },
      {
        dayName: "Day 2: Recovery Cardio",
        focus: "Active Recovery & Core",
        exercises: [
          { exerciseId: "cycling", customSetsReps: "20-30 mins steady", notes: "Keep pedal rate at around 80 RPM." },
          { exerciseId: "crunch", customSetsReps: "3 sets x 15 reps", notes: "Slow and controlled, do not yank your neck." },
          { exerciseId: "calf-raise", customSetsReps: "3 sets x 15 reps", notes: "Pause for a second at the peak contraction." }
        ]
      },
      {
        dayName: "Day 3: Strength Builders",
        focus: "Full Body Balance",
        exercises: [
          { exerciseId: "lat-pulldown", customSetsReps: "3 sets x 10-12 reps", notes: "Pull down to upper chest, keep shoulders down." },
          { exerciseId: "dumbbell-curl", customSetsReps: "3 sets x 10-12 reps", notes: "Rotate your palms up as you curl." },
          { exerciseId: "triceps-pushdown", customSetsReps: "3 sets x 12 reps", notes: "Pin your elbows to your ribcage." },
          { exerciseId: "lunges", customSetsReps: "3 sets x 10 steps per leg", notes: "Take slow walking steps, maintain upright balance." },
          { exerciseId: "russian-twist", customSetsReps: "3 sets x 20 twists", notes: "Keep your knees still, rotate your torso." }
        ]
      }
    ]
  },

  // --- INTERMEDIATE ---
  {
    id: "int-push-pull-legs",
    name: "Intermediate Push Pull Legs (PPL)",
    difficulty: "Intermediate",
    frequency: "3 to 6 Days / Week",
    description: "The classic muscle-building split. Groups muscles by their biomechanical actions (Pushing, Pulling, Leg Drive) for optimal stimulus and recovery.",
    days: [
      {
        dayName: "Day 1: Push Focus",
        focus: "Chest, Shoulders & Triceps",
        exercises: [
          { exerciseId: "bench-press", customSetsReps: "4 sets x 8-10 reps", notes: "Warm up with light barbell first." },
          { exerciseId: "shoulder-press", customSetsReps: "3 sets x 10 reps", notes: "Keep wrists straight, do not arch your back." },
          { exerciseId: "dumbbell-fly", customSetsReps: "3 sets x 12 reps", notes: "Feel the stretch at the bottom." },
          { exerciseId: "triceps-pushdown", customSetsReps: "3 sets x 12-15 reps", notes: "Squeeze hard at the bottom." },
          { exerciseId: "front-raise", customSetsReps: "2 sets x 12 reps", notes: "Alternate arms smoothly." }
        ]
      },
      {
        dayName: "Day 2: Pull Focus",
        focus: "Lats, Upper Back & Biceps",
        exercises: [
          { exerciseId: "lat-pulldown", customSetsReps: "4 sets x 8-12 reps", notes: "Vary with close grip if desired." },
          { exerciseId: "seated-cable-row", customSetsReps: "3 sets x 10 reps", notes: "Squeeze the mid-back together." },
          { exerciseId: "reverse-fly", customSetsReps: "3 sets x 12-15 reps", notes: "Isolate the rear delts." },
          { exerciseId: "barbell-curl", customSetsReps: "3 sets x 10 reps", notes: "No hip swinging." },
          { exerciseId: "hammer-curl", customSetsReps: "2 sets x 12 reps", notes: "Neutral grip to build forearm thickness." }
        ]
      },
      {
        dayName: "Day 3: Legs & Core",
        focus: "Quads, Hamstrings & Abs",
        exercises: [
          { exerciseId: "leg-press", customSetsReps: "4 sets x 10-12 reps", notes: "Press through your heels." },
          { exerciseId: "lunges", customSetsReps: "3 sets x 12 steps per leg", notes: "Maintain steady pacing." },
          { exerciseId: "leg-curl", customSetsReps: "3 sets x 12-15 reps", notes: "Lying down, control the negative." },
          { exerciseId: "calf-raise", customSetsReps: "4 sets x 15 reps", notes: "Stretch fully at the bottom." },
          { exerciseId: "leg-raise", customSetsReps: "3 sets x 12-15 reps", notes: "Keep your lower back flat on the floor." }
        ]
      }
    ]
  },
  {
    id: "int-muscle-hypertrophy",
    name: "Classic Muscle Building Hypertrophy Plan",
    difficulty: "Intermediate",
    frequency: "4 Days / Week (Upper / Lower Split)",
    description: "Maximizes muscle building (hypertrophy) by hitting each muscle group twice a week with higher set volumes and perfect time under tension.",
    days: [
      {
        dayName: "Day 1: Upper Body Power",
        focus: "Chest and Back Mass",
        exercises: [
          { exerciseId: "bench-press", customSetsReps: "3 sets x 8-10 reps" },
          { exerciseId: "barbell-row", customSetsReps: "3 sets x 8-10 reps" },
          { exerciseId: "incline-bench-press", customSetsReps: "3 sets x 10-12 reps" },
          { exerciseId: "lat-pulldown", customSetsReps: "3 sets x 10 reps" },
          { exerciseId: "skull-crusher", customSetsReps: "3 sets x 10-12 reps" }
        ]
      },
      {
        dayName: "Day 2: Lower Body Hypertrophy",
        focus: "Quad & Hamstring Growth",
        exercises: [
          { exerciseId: "squat", customSetsReps: "3 sets x 8 reps", notes: "Slightly lighter weight, focus on deep parallel depth." },
          { exerciseId: "leg-extension", customSetsReps: "3 sets x 15 reps" },
          { exerciseId: "leg-curl", customSetsReps: "3 sets x 12 reps" },
          { exerciseId: "calf-raise", customSetsReps: "4 sets x 15-20 reps" },
          { exerciseId: "plank", customSetsReps: "3 sets x 60 sec holds" }
        ]
      },
      {
        dayName: "Day 3: Upper Body Sculpt",
        focus: "Shoulders, Arms & Details",
        exercises: [
          { exerciseId: "shoulder-press", customSetsReps: "3 sets x 10 reps" },
          { exerciseId: "dumbbell-fly", customSetsReps: "3 sets x 12 reps" },
          { exerciseId: "lateral-raise", customSetsReps: "4 sets x 12-15 reps" },
          { exerciseId: "barbell-curl", customSetsReps: "3 sets x 10 reps" },
          { exerciseId: "triceps-pushdown", customSetsReps: "3 sets x 15 reps" }
        ]
      },
      {
        dayName: "Day 4: Lower Body Details",
        focus: "Single Leg Work & Core Stability",
        exercises: [
          { exerciseId: "lunges", customSetsReps: "3 sets x 12 steps per leg" },
          { exerciseId: "leg-press", customSetsReps: "3 sets x 12 reps" },
          { exerciseId: "leg-raise", customSetsReps: "3 sets x 15 reps" },
          { exerciseId: "russian-twist", customSetsReps: "3 sets x 20 twists" }
        ]
      }
    ]
  },

  // --- ADVANCED ---
  {
    id: "adv-strength",
    name: "Advanced Power & Strength Builder",
    difficulty: "Advanced",
    frequency: "4 Days / Week",
    description: "Intense strength program centered around heavy compound lifts: Deadlift, Squat, Bench, and Row. Best for building physical power.",
    days: [
      {
        dayName: "Day 1: Squat & Leg Strength",
        focus: "Heavy Leg Drive",
        exercises: [
          { exerciseId: "squat", customSetsReps: "5 sets x 5 reps", notes: "Use 80-85% of 1 Rep Max. Rest 3 mins between sets." },
          { exerciseId: "leg-press", customSetsReps: "3 sets x 8 reps", notes: "Heavy, controlled reps." },
          { exerciseId: "lunges", customSetsReps: "3 sets x 10 steps per leg", notes: "Hold heavy dumbbells." },
          { exerciseId: "plank", customSetsReps: "3 sets x 60 sec", notes: "Add weight plate on back if possible." }
        ]
      },
      {
        dayName: "Day 2: Heavy Bench & Press",
        focus: "Upper Body Power",
        exercises: [
          { exerciseId: "bench-press", customSetsReps: "5 sets x 5 reps", notes: "Warm up properly. Focus on explosive push." },
          { exerciseId: "shoulder-press", customSetsReps: "3 sets x 8 reps" },
          { exerciseId: "skull-crusher", customSetsReps: "3 sets x 8 reps", notes: "Use heavy EZ bar." },
          { exerciseId: "push-up", customSetsReps: "3 sets x max reps", notes: "Finisher chest pump." }
        ]
      },
      {
        dayName: "Day 3: Deadlift & Back Power",
        focus: "Posterior Chain Dominance",
        exercises: [
          { exerciseId: "deadlift", customSetsReps: "3 sets x 5 reps", notes: "Keep spine perfectly straight. Squeeze glutes at lock." },
          { exerciseId: "pull-up", customSetsReps: "3 sets x max bodyweight reps" },
          { exerciseId: "barbell-row", customSetsReps: "3 sets x 8 reps", notes: "Do not let hips bounce." },
          { exerciseId: "seated-cable-row", customSetsReps: "3 sets x 8-10 reps" }
        ]
      }
    ]
  },

  // --- FAT LOSS / HIIT ---
  {
    id: "fat-loss-hiit",
    name: "HIIT & Fat Burning Shred Plan",
    difficulty: "Fat Loss",
    frequency: "4 Days / Week",
    description: "A fast-paced program designed to elevate heart rate, maximize calorie burning during and after workouts, and preserve lean muscle.",
    days: [
      {
        dayName: "Day 1: High Intensity Core & Chest",
        focus: "Metabolic Conditioning",
        exercises: [
          { exerciseId: "hiit-training", customSetsReps: "4 rounds Tabata style", notes: "20 seconds on, 10 seconds off for 4 minutes." },
          { exerciseId: "push-up", customSetsReps: "3 sets x 15 reps", notes: "Keep rest to 30 seconds." },
          { exerciseId: "jump-rope", customSetsReps: "5 sets x 1 minute", notes: "Keep feet light on the ground." },
          { exerciseId: "russian-twist", customSetsReps: "3 sets x 20 twists" },
          { exerciseId: "leg-raise", customSetsReps: "3 sets x 15 reps" }
        ]
      },
      {
        dayName: "Day 2: Steady Calorie Burn",
        focus: "LISS Cardio & Legs Endurance",
        exercises: [
          { exerciseId: "running", customSetsReps: "30-40 mins steady state", notes: "Run at a conversational, fat-burning speed." },
          { exerciseId: "lunges", customSetsReps: "3 sets x 15 steps per leg" },
          { exerciseId: "calf-raise", customSetsReps: "3 sets x 20 reps" },
          { exerciseId: "plank", customSetsReps: "3 sets x 45 sec" }
        ]
      },
      {
        dayName: "Day 3: Full Body Cardio-Weights",
        focus: "Resistance Circuit Training",
        exercises: [
          { exerciseId: "hiit-training", customSetsReps: "3 rounds", notes: "Perform movements consecutively with minimal rest." },
          { exerciseId: "lat-pulldown", customSetsReps: "3 sets x 15 reps", notes: "Lighter weight, fast paced." },
          { exerciseId: "dumbbell-curl", customSetsReps: "3 sets x 15 reps" },
          { exerciseId: "triceps-pushdown", customSetsReps: "3 sets x 15 reps" },
          { exerciseId: "crunch", customSetsReps: "3 sets x 20 reps" }
        ]
      }
    ]
  }
];
