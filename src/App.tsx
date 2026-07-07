/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { EXERCISES } from "./data/exercises";
import { WORKOUT_PLANS } from "./data/programs";
import { UserProfile, WeightLog, BodyMeasurementLog } from "./types";

// @ts-ignore
import bPressImg from "./assets/images/3d_bench_press_1783422233239.jpg";
// @ts-ignore
import squatImg from "./assets/images/3d_squat_1783422249233.jpg";
// @ts-ignore
import pullupImg from "./assets/images/3d_pullup_1783422263125.jpg";
// @ts-ignore
import sPressImg from "./assets/images/3d_shoulder_press_1783422302811.jpg";
// @ts-ignore
import plankImg from "./assets/images/3d_plank_1783422318482.jpg";
// @ts-ignore
import kbzpayQrImg from "./assets/images/kbzpay_qr_1783423063523.jpg";

const PLAN_COVER_IMAGES: Record<string, string> = {
  "beg-full-body": bPressImg,
  "int-push-pull-legs": pullupImg,
  "int-muscle-hypertrophy": sPressImg,
  "adv-strength": squatImg,
  "fat-loss-hiit": plankImg,
};

// Components
import BodyMap from "./components/BodyMap";
import ExerciseLibrary from "./components/ExerciseLibrary";
import WorkoutTracker from "./components/WorkoutTracker";
import UserProfilePanel from "./components/UserProfilePanel";
import AICoach from "./components/AICoach";

// Translation helpers
import {
  TRANSLATIONS,
  type Language,
  tCategory,
  tDifficulty,
  tGoal,
  tMuscle,
  tEquipment,
  tPlanName,
  tPlanDesc,
  tDayName,
  tDayFocus
} from "./utils/translations";

// Icons
import {
  Dumbbell,
  BookOpen,
  Calendar,
  Brain,
  User,
  Activity,
  ChevronRight,
  Flame,
  Award,
  Zap,
  Play,
  Heart
} from "lucide-react";

const INITIAL_PROFILE: UserProfile = {
  height: 178,
  weight: 74,
  age: 26,
  goal: "Build Muscle",
  bmi: 23.4,
  bmiCategory: "Normal weight"
};

export default function App() {
  const [activeTab, setActiveTab] = useState<"library" | "programs" | "tracker" | "coach" | "profile">("library");
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("gymmaster_language");
      return (saved === "my" || saved === "en") ? saved : "en";
    } catch {
      return "en";
    }
  });

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem("gymmaster_language", lang);
    } catch (e) {
      console.error(e);
    }
  };

  const t = TRANSLATIONS[language];

  // State managed via local storage for durable user persistence
  const [profile, setProfile] = useState<UserProfile>(INITIAL_PROFILE);
  const [weightLogs, setWeightLogs] = useState<WeightLog[]>([]);
  const [measurementLogs, setMeasurementLogs] = useState<BodyMeasurementLog[]>([]);
  const [workoutHistory, setWorkoutHistory] = useState<{ date: string; planName: string; dayName: string; completedExercisesCount: number }[]>([]);

  // Anatomy filter state shared between Anatomy body map and Exercise library
  const [selectedAnatomyMuscle, setSelectedAnatomyMuscle] = useState<string | null>(null);

  // Load persistence state on mount
  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem("gymmaster_profile_v2");
      if (savedProfile) setProfile(JSON.parse(savedProfile));

      const savedWeightLogs = localStorage.getItem("gymmaster_weights");
      if (savedWeightLogs) setWeightLogs(JSON.parse(savedWeightLogs));

      const savedMeasurementLogs = localStorage.getItem("gymmaster_measurements");
      if (savedMeasurementLogs) setMeasurementLogs(JSON.parse(savedMeasurementLogs));

      const savedHistory = localStorage.getItem("gymmaster_history");
      if (savedHistory) setWorkoutHistory(JSON.parse(savedHistory));
    } catch (e) {
      console.error("Failed to load local storage state:", e);
    }
  }, []);

  // Save changes automatically
  const handleUpdateProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
    localStorage.setItem("gymmaster_profile_v2", JSON.stringify(newProfile));
  };

  const handleAddWeightLog = (weight: number) => {
    const todayStr = new Date().toISOString().split("T")[0];
    const newLog: WeightLog = { date: todayStr, weight };
    const updated = [...weightLogs, newLog];
    setWeightLogs(updated);
    localStorage.setItem("gymmaster_weights", JSON.stringify(updated));
  };

  const handleAddMeasurementLog = (measurements: { chest?: number; waist?: number; biceps?: number; thighs?: number }) => {
    const todayStr = new Date().toISOString().split("T")[0];
    const newLog: BodyMeasurementLog = { date: todayStr, ...measurements };
    const updated = [...measurementLogs, newLog];
    setMeasurementLogs(updated);
    localStorage.setItem("gymmaster_measurements", JSON.stringify(updated));
  };

  const handleAddWorkoutHistory = (entry: { date: string; planName: string; dayName: string; completedExercisesCount: number }) => {
    const updated = [...workoutHistory, entry];
    setWorkoutHistory(updated);
    localStorage.setItem("gymmaster_history", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-neutral-950">
      {/* Premium Header */}
      <header className="bg-neutral-900 border-b border-neutral-800/80 sticky top-0 z-40 backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/10">
              <Dumbbell className="w-5 h-5 text-neutral-950 rotate-45" />
            </div>
            <div>
              <span className="text-sm font-black tracking-widest text-emerald-400 uppercase font-mono">GymMaster</span>
              <h1 className="text-xs font-bold text-neutral-400 -mt-1 font-sans">{t.subtitle}</h1>
            </div>
          </div>

          {/* User quick status bar on desktop */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-neutral-400 font-mono">{t.currentGoal}</span>
              <span className="text-xs font-bold text-emerald-400">{tGoal(profile.goal, language)}</span>
            </div>
            <div className="w-px h-8 bg-neutral-800" />
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-neutral-400 font-mono">{t.anatomicalBmi}</span>
              <span className="text-xs font-bold text-emerald-400">{profile.bmi} ({language === "my" ? (profile.bmiCategory === "Normal weight" ? "ပုံမှန်" : profile.bmiCategory === "Underweight" ? "ကိုယ်အလေးချိန်နည်း" : profile.bmiCategory === "Overweight" ? "ကိုယ်အလေးချိန်များ" : "အဝလွန်") : profile.bmiCategory})</span>
            </div>
            <div className="w-px h-8 bg-neutral-800" />
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher Pill */}
            <div className="flex items-center bg-neutral-950 border border-neutral-800/80 rounded-xl p-1">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-emerald-500 text-neutral-950 font-black shadow"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("my")}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold transition-all cursor-pointer ${
                  language === "my"
                    ? "bg-emerald-500 text-neutral-950 font-black shadow"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                မြန်မာ
              </button>
            </div>

            {/* Premium Support Button */}
            <button
              onClick={() => setIsSupportModalOpen(true)}
              className="px-3.5 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/10 animate-pulse" />
              <span className="hidden sm:inline">{t.support}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main navigation pill-tabs bar */}
      <nav className="bg-neutral-900/60 border-b border-neutral-800/60 py-2.5 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none">
          <button
            onClick={() => setActiveTab("library")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === "library"
                ? "bg-emerald-500 text-neutral-950 font-bold shadow-md shadow-emerald-500/10"
                : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            {t.tabLibrary}
          </button>

          <button
            onClick={() => setActiveTab("programs")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === "programs"
                ? "bg-emerald-500 text-neutral-950 font-bold shadow-md shadow-emerald-500/10"
                : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900"
            }`}
          >
            <Activity className="w-4 h-4" />
            {t.tabPrograms}
          </button>

          <button
            onClick={() => setActiveTab("tracker")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === "tracker"
                ? "bg-emerald-500 text-neutral-950 font-bold shadow-md shadow-emerald-500/10"
                : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900"
            }`}
          >
            <Calendar className="w-4 h-4" />
            {t.tabTracker}
          </button>

          <button
            onClick={() => setActiveTab("coach")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === "coach"
                ? "bg-emerald-500 text-neutral-950 font-bold shadow-md shadow-emerald-500/10"
                : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900"
            }`}
          >
            <Brain className="w-4 h-4" />
            {t.tabCoach}
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === "profile"
                ? "bg-emerald-500 text-neutral-950 font-bold shadow-md shadow-emerald-500/10"
                : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900"
            }`}
          >
            <User className="w-4 h-4" />
            {t.tabProfile}
          </button>
        </div>
      </nav>

      {/* Hero Welcome banner on Home dashboard tabs */}
      {activeTab === "library" && (
        <section className="bg-gradient-to-b from-neutral-900 to-neutral-950 border-b border-neutral-900 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-neutral-900/50 p-6 sm:p-8 rounded-3xl border border-neutral-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />
              <div className="space-y-2 max-w-2xl">
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-md font-mono uppercase tracking-wider font-semibold">
                  {t.bannerBadge}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-neutral-100 font-sans tracking-tight">
                  {t.bannerTitle}
                </h2>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {t.bannerDesc}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveTab("programs")}
                  className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
                >
                  {t.btnViewPlans}
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveTab("coach")}
                  className="px-4 py-2.5 bg-neutral-950 hover:bg-neutral-850 text-neutral-200 border border-neutral-800 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
                >
                  {t.btnConsultCoach}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Container Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* TAB 1: ANATOMY & LIBRARY */}
        {activeTab === "library" && (
          <div className="space-y-8 animate-fade-in">
            {/* Anatomy body map component */}
            <BodyMap
              selectedMuscle={selectedAnatomyMuscle}
              onSelectMuscle={setSelectedAnatomyMuscle}
              language={language}
            />

            {/* List and search guides */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4 font-sans">
                {t.exerciseLibrary}
              </h3>
              <ExerciseLibrary
                exercises={EXERCISES}
                selectedCategory={selectedAnatomyMuscle}
                onSelectCategory={setSelectedAnatomyMuscle}
                selectedMuscleFilter={selectedAnatomyMuscle}
                onClearMuscleFilter={() => setSelectedAnatomyMuscle(null)}
              />
            </div>
          </div>
        )}

        {/* TAB 2: WORKOUT PROGRAMS */}
        {activeTab === "programs" && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-neutral-100 font-sans tracking-tight mb-2">
                {t.curatedPrograms}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {t.programsDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {WORKOUT_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden flex flex-col justify-between transition-all group"
                >
                  {/* Card Cover Banner */}
                  {PLAN_COVER_IMAGES[plan.id] && (
                    <div className="h-32 w-full overflow-hidden relative border-b border-neutral-850">
                      <img
                        src={PLAN_COVER_IMAGES[plan.id]}
                        alt={plan.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 brightness-[0.6] saturate-[0.8]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/20 pointer-events-none" />
                      <span className="absolute bottom-3 left-4 text-[9px] font-mono uppercase bg-emerald-500 text-neutral-950 font-black px-2 py-0.5 rounded shadow">
                        {t.guidedProgram}
                      </span>
                    </div>
                  )}

                  <div className="p-6 space-y-5 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                          plan.difficulty === "Beginner" && "bg-blue-500/10 text-blue-400 border-blue-500/20"
                        } ${
                          plan.difficulty === "Intermediate" && "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        } ${
                          plan.difficulty === "Advanced" && "bg-red-500/10 text-red-400 border-red-500/20"
                        } ${
                          plan.difficulty === "Fat Loss" && "bg-orange-500/10 text-orange-400 border-orange-500/20"
                        }`}>
                          {tDifficulty(plan.difficulty, language)}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500">
                          {language === "my" 
                            ? plan.frequency.replace("Days / Week", "ရက် / တစ်ပတ်").replace("e.g.,", "ဥပမာ -").replace("Mon", "တနင်္လာ").replace("Wed", "ဗုဒ္ဓဟူး").replace("Fri", "သောကြာ") 
                            : plan.frequency}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors">
                        {tPlanName(plan.id, plan.name, language)}
                      </h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {tPlanDesc(plan.id, plan.description, language)}
                      </p>
                    </div>

                    {/* Program Day Splits summary preview */}
                    <div className="space-y-2 bg-neutral-950 p-4 rounded-xl border border-neutral-850">
                      <span className="text-[9px] font-mono uppercase text-neutral-500 block">{t.daySplitFocus}</span>
                      <div className="grid grid-cols-1 gap-1.5">
                        {plan.days.map((day, dIdx) => (
                          <div key={dIdx} className="flex items-center justify-between text-[11px]">
                            <span className="text-neutral-300 font-bold">{tDayName(plan.id, day.dayName, language)}</span>
                            <span className="text-neutral-500">{tDayFocus(plan.id, day.dayName, language, day.focus)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-neutral-800/60 pt-4">
                      <span className="text-[10px] text-neutral-500">
                        {plan.days.reduce((acc, d) => acc + d.exercises.length, 0)} {t.totalExercises}
                      </span>
                      <button
                        onClick={() => {
                          setActiveTab("tracker");
                        }}
                        className="px-3 py-1.5 bg-neutral-950 hover:bg-neutral-850 text-[10px] font-mono font-bold text-emerald-400 border border-neutral-800 rounded-lg transition-all"
                      >
                        {t.loadTracker}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: DAILY TRACKER */}
        {activeTab === "tracker" && (
          <div className="space-y-6 animate-fade-in">
            <WorkoutTracker
              workoutPlans={WORKOUT_PLANS}
              exercises={EXERCISES}
              onAddWorkoutHistory={handleAddWorkoutHistory}
              workoutHistoryList={workoutHistory}
              language={language}
            />
          </div>
        )}

        {/* TAB 4: AI COACH ASSISTANT */}
        {activeTab === "coach" && (
          <div className="space-y-6 animate-fade-in">
            <AICoach userProfile={profile} language={language} />
          </div>
        )}

        {/* TAB 5: MY PHYSICAL PROFILE */}
        {activeTab === "profile" && (
          <div className="space-y-6 animate-fade-in">
            <UserProfilePanel
              profile={profile}
              onChangeProfile={handleUpdateProfile}
              weightLogs={weightLogs}
              onAddWeightLog={handleAddWeightLog}
              measurementLogs={measurementLogs}
              onAddMeasurementLog={handleAddMeasurementLog}
              language={language}
            />
          </div>
        )}
      </main>

      {/* Compact footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800/60 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
            © 2026 GymMaster {t.subtitle} • All rights reserved
          </p>
          <div className="flex items-center gap-4 text-[10px] text-neutral-500 font-mono">
            <span>{language === "my" ? "တိုက်ရိုက်သွင်းခြင်းစနစ် ဖွင့်ထားသည်" : "Direct Entry Mode Enabled"}</span>
            <span>|</span>
            <span>{language === "my" ? "အားကစားသိပ္ပံ ဒေတာဘေ့စ် v1.4" : "Sports Science database v1.4"}</span>
          </div>
        </div>
      </footer>

      {/* Settings & Support Developer Modal */}
      {isSupportModalOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative">
            
            {/* Header */}
            <div className="p-6 border-b border-neutral-850 flex items-center justify-between bg-neutral-950/40">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-neutral-100 uppercase tracking-wider font-mono">
                    {language === "my" ? "လှူဒါန်းရန်နှင့် ပံ့ပိုးရန်" : "Support & Settings"}
                  </h3>
                  <p className="text-[10px] text-neutral-400">{t.supportDesc}</p>
                </div>
              </div>
              <button
                onClick={() => setIsSupportModalOpen(false)}
                className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-750 border border-neutral-700 text-neutral-400 hover:text-neutral-200 text-xs transition-all flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            {/* Content with beautiful KBZPay design */}
            <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl">
                <p className="text-xs text-neutral-300 leading-relaxed text-center">
                  {t.supportBurmeseText}
                </p>
              </div>

              {/* Replica of the original KBZPay user's card */}
              <div className="bg-gradient-to-b from-[#0052b4] to-[#003882] rounded-2xl p-6 border border-blue-500/30 text-white shadow-xl flex flex-col items-center gap-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                
                {/* Top Text */}
                <h4 className="text-xs font-bold text-center leading-relaxed tracking-wide px-2 drop-shadow">
                  {t.kbzPayInstruction}
                </h4>

                {/* QR Image Box */}
                <div className="bg-white p-3.5 rounded-2xl shadow-lg border border-white/20 w-52 h-52 flex items-center justify-center overflow-hidden transition-transform hover:scale-[1.02] duration-300">
                  <img
                    src={kbzpayQrImg}
                    alt="AUNG MYAT MIN KBZPay QR Code"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                {/* User Name */}
                <div className="text-center space-y-1">
                  <p className="text-sm font-extrabold tracking-widest uppercase drop-shadow font-mono">
                    AUNG MYAT MIN
                  </p>
                  <p className="text-[10px] font-semibold text-blue-200 tracking-wider">
                    (*******4612)
                  </p>
                </div>

                {/* KBZPay brand footer */}
                <div className="w-full bg-white rounded-xl py-2 flex items-center justify-center gap-1.5 shadow">
                  <span className="text-[10px] font-black tracking-tighter text-[#0052b4] font-sans">KBZ Pay</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-[9px] font-bold text-neutral-500 font-mono">{t.secureTransfer}</span>
                </div>
              </div>

              {/* Instructions / info */}
              <div className="space-y-3">
                <span className="text-[9px] font-mono uppercase text-neutral-500 block tracking-wider">{t.alternativeTransfer}</span>
                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-850 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-500">{t.service}</span>
                    <span className="font-bold text-neutral-200">KBZPay (Myanmar)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-500">{t.beneficiary}</span>
                    <span className="font-bold text-neutral-200">AUNG MYAT MIN</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-500">{t.action}</span>
                    <span className="text-emerald-400 font-mono font-bold">{t.tipSupport}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-neutral-950/60 border-t border-neutral-850 flex items-center justify-end">
              <button
                onClick={() => setIsSupportModalOpen(false)}
                className="px-5 py-2 bg-neutral-800 hover:bg-neutral-750 text-neutral-300 font-mono text-xs font-bold rounded-xl transition-all"
              >
                {t.closePanel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
