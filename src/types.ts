/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";

export interface ExerciseVariation {
  level: DifficultyLevel;
  name: string;
  description: string;
}

export interface Exercise {
  id: string;
  name: string;
  category: "Chest" | "Back" | "Shoulders" | "Arms" | "Legs" | "Core" | "Cardio";
  targetMuscles: string[];
  difficulty: DifficultyLevel;
  equipment: string;
  recommendedSetRep: string;
  startingPosition: string;
  stepByStep: string[];
  breathing: string;
  commonMistakes: string[];
  safetyTips: string[];
  variations: ExerciseVariation[];
  // SVG or visual guides can be mapped or rendered dynamically
  movementFrames?: {
    before: string; // short text description or style key for posture
    after: string;
  };
}

export interface WorkoutPlan {
  id: string;
  name: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Fat Loss";
  frequency: string;
  description: string;
  days: {
    dayName: string;
    focus: string;
    exercises: {
      exerciseId: string;
      customSetsReps: string;
      notes?: string;
    }[];
  }[];
}

export interface UserProfile {
  height: number; // in cm
  weight: number; // in kg
  age: number;
  goal: "Build Muscle" | "Lose Fat" | "Increase Strength" | "Improve Fitness";
  bmi: number;
  bmiCategory: string;
}

export interface WeightLog {
  date: string; // YYYY-MM-DD
  weight: number;
}

export interface BodyMeasurementLog {
  date: string;
  chest?: number;
  waist?: number;
  biceps?: number;
  thighs?: number;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: string;
}
