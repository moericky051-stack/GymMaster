import React, { useState, useEffect, useRef } from "react";
import { Exercise, DifficultyLevel } from "../types";
import { Search, Info, ShieldAlert, Heart, RefreshCw, Layers, Sparkles, BookOpen, UserCheck, Play, ArrowRight, Eye } from "lucide-react";
import { 
  type Language, 
  TRANSLATIONS, 
  translateExercise, 
  tCategory, 
  tDifficulty, 
  tMuscle, 
  tEquipment 
} from "../utils/translations";

// @ts-ignore
import bPressImg from "../assets/images/3d_bench_press_1783422233239.jpg";
// @ts-ignore
import squatImg from "../assets/images/3d_squat_1783422249233.jpg";
// @ts-ignore
import pullupImg from "../assets/images/3d_pullup_1783422263125.jpg";
// @ts-ignore
import curlImg from "../assets/images/3d_bicep_curl_1783422281926.jpg";
// @ts-ignore
import sPressImg from "../assets/images/3d_shoulder_press_1783422302811.jpg";
// @ts-ignore
import plankImg from "../assets/images/3d_plank_1783422318482.jpg";

const CATEGORY_3D_IMAGES: Record<string, string> = {
  Chest: bPressImg,
  Legs: squatImg,
  Back: pullupImg,
  Arms: curlImg,
  Shoulders: sPressImg,
  Core: plankImg,
  Cardio: plankImg,
};

interface ExerciseLibraryProps {
  exercises: Exercise[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  selectedMuscleFilter: string | null;
  onClearMuscleFilter: () => void;
  language?: Language;
}

export default function ExerciseLibrary({
  exercises,
  selectedCategory,
  onSelectCategory,
  selectedMuscleFilter,
  onClearMuscleFilter,
  language = "en"
}: ExerciseLibraryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("All");
  const [activeExerciseId, setActiveExerciseId] = useState<string | null>(null);
  
  // Simulated kinetic posture state for the interactive visual guide (before/after loop)
  const [posturePhase, setPosturePhase] = useState<"before" | "after">("before");
  const [motionTimer, setMotionTimer] = useState<number>(0);
  const timerRef = useRef<any>(null);
  const intervalRef = useRef<any>(null);

  const categories = ["All", "Chest", "Back", "Shoulders", "Arms", "Legs", "Core", "Cardio"] as const;
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"] as const;

  const isMy = language === "my";
  const t = TRANSLATIONS[language];

  // Translate all exercises first for unified search & rendering in Burmese
  const localizedExercises = exercises.map((ex) => translateExercise(ex, language));

  // Filter exercises
  const filteredExercises = localizedExercises.filter((ex) => {
    // Search query match (should match localized and original text)
    const matchesSearch =
      ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.targetMuscles.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase())) ||
      ex.equipment.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter match
    const matchesCategory =
      !selectedCategory || selectedCategory === "All" || ex.category === tCategory(selectedCategory, language);

    // Muscle filter match (from BodyMap SVG click)
    const matchesMuscle =
      !selectedMuscleFilter ||
      ex.category === tCategory(selectedMuscleFilter, language) ||
      ex.targetMuscles.some((m) => m.toLowerCase().includes(tMuscle(selectedMuscleFilter, language).toLowerCase()) || m.toLowerCase().includes(selectedMuscleFilter.toLowerCase()));

    // Difficulty match
    const matchesDifficulty =
      difficultyFilter === "All" || ex.difficulty === tDifficulty(difficultyFilter, language);

    return matchesSearch && matchesCategory && matchesMuscle && matchesDifficulty;
  });

  const activeExercise = localizedExercises.find((ex) => ex.id === activeExerciseId);

  // Toggle posture phase animation with a 5-second hold and reset
  const handleTogglePosture = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (posturePhase === "before") {
      setPosturePhase("after");
      setMotionTimer(5);

      intervalRef.current = setInterval(() => {
        setMotionTimer((prev) => {
          if (prev <= 1) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      timerRef.current = setTimeout(() => {
        setPosturePhase("before");
        setMotionTimer(0);
      }, 5000);
    } else {
      setPosturePhase("before");
      setMotionTimer(0);
    }
  };

  // Clean up timers on active exercise change or unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeExerciseId]);

  return (
    <div className="space-y-6">
      {/* Search and Filters panel */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 shadow-xl flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Keyword Search */}
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-neutral-500" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 focus:border-emerald-500/40 rounded-xl pl-11 pr-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none transition-all"
            />
          </div>

          {/* Difficulty selector */}
          <div className="md:col-span-3">
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 font-bold rounded-xl px-4 py-3.5 focus:border-emerald-500/40 focus:outline-none transition-all cursor-pointer"
            >
              {difficulties.map((diff) => (
                <option key={diff} value={diff}>
                  {t.difficultyLabel}: {diff === "All" ? (isMy ? "အားလုံး" : "All") : tDifficulty(diff, language)}
                </option>
              ))}
            </select>
          </div>

          {/* Preset Category list */}
          <div className="md:col-span-3">
            <select
              value={selectedCategory || "All"}
              onChange={(e) => onSelectCategory(e.target.value === "All" ? null : e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 font-bold rounded-xl px-4 py-3.5 focus:border-emerald-500/40 focus:outline-none transition-all cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {t.categoryLabel}: {cat === "All" ? (isMy ? "အားလုံး" : "All") : tCategory(cat, language)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Categories Pills for rapid filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-neutral-800/60 pt-3">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat || (!selectedCategory && cat === "All");
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat === "All" ? null : cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all shrink-0 ${
                  isSelected
                    ? "bg-emerald-500/10 border-emerald-500/35 text-emerald-400 font-bold"
                    : "bg-neutral-950/60 border-neutral-850 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200"
                }`}
              >
                {cat === "All" ? (isMy ? "အားလုံး" : "All") : tCategory(cat, language)}
              </button>
            );
          })}
        </div>

        {/* Active muscle filter indicator */}
        {selectedMuscleFilter && (
          <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-2.5 rounded-xl text-xs text-emerald-400">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
              <span>
                {isMy ? (
                  <>ခန္ဓာဗေဒ စစ်ထုတ်မှု- <strong className="uppercase">{tMuscle(selectedMuscleFilter, language)}</strong> ကို သက်ရောက်စေသော လေ့ကျင့်ခန်းများ ပြသနေသည်</>
                ) : (
                  <>Anatomy filter: Showing exercises targeting <strong className="uppercase">{tMuscle(selectedMuscleFilter, language)}</strong></>
                )}
              </span>
            </span>
            <button
              onClick={onClearMuscleFilter}
              className="font-bold underline hover:text-emerald-300 transition-all text-[10px] uppercase tracking-wider"
            >
              {t.resetFilter}
            </button>
          </div>
        )}
      </div>

      {/* Main Grid & Detail Modal/Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Exercises Grid */}
        <div className={`${activeExerciseId ? "lg:col-span-6" : "lg:col-span-12"} grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-300`}>
          {filteredExercises.length === 0 ? (
            <div className="sm:col-span-2 text-center py-16 bg-neutral-900 border border-neutral-800 rounded-2xl">
              <BookOpen className="w-10 h-10 text-neutral-700 mx-auto mb-3" />
              <p className="text-sm text-neutral-300 font-sans font-semibold">{t.noExercises}</p>
              <p className="text-xs text-neutral-500 mt-1">{t.resetFiltersTip}</p>
            </div>
          ) : (
            filteredExercises.map((ex) => {
              const isActive = activeExerciseId === ex.id;
              const isBeginner = ex.difficulty === "Beginner" || ex.difficulty === "အခြေခံ" || ex.difficulty?.includes("အခြေခံ");
              const isIntermediate = ex.difficulty === "Intermediate" || ex.difficulty === "အလယ်အလတ်" || ex.difficulty?.includes("အလယ်အလတ်");
              const isAdvanced = ex.difficulty === "Advanced" || ex.difficulty === "အဆင့်မြင့်" || ex.difficulty?.includes("အဆင့်မြင့်");
              
              return (
                <div
                  key={ex.id}
                  onClick={() => {
                    setActiveExerciseId(ex.id);
                    setPosturePhase("before"); // Reset animation phase
                  }}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between h-[180px] group ${
                    isActive
                      ? "bg-emerald-500/5 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.05)]"
                      : "bg-neutral-900 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-850/60"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <span className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${
                        isBeginner ? "bg-blue-500/10 text-blue-400 border-blue-500/20" : ""
                      } ${
                        isIntermediate ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : ""
                      } ${
                        isAdvanced ? "bg-red-500/10 text-red-400 border-red-500/20" : ""
                      }`}>
                        {ex.difficulty}
                      </span>
                      <span className="text-[10px] text-neutral-500 font-mono uppercase">
                        {ex.category}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors mt-3">
                      {ex.name}
                    </h4>
                    
                    <p className="text-[11px] text-neutral-400 line-clamp-2 mt-1.5 leading-relaxed">
                      {isMy ? "အဓိကသက်ရောက်မှု -" : "Target:"} {ex.targetMuscles[0]}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-neutral-800/60 pt-3 mt-3">
                    <span className="text-[10px] font-mono text-neutral-500">
                      {ex.equipment}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      {t.viewGuide} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right exercise details visual encyclopedia slide-in */}
        {activeExercise && (
          <div className="lg:col-span-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl space-y-6 sticky top-6">
            <div className="flex items-start justify-between border-b border-neutral-800 pb-4">
              <div>
                <span className="text-[9px] font-mono uppercase text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                  {activeExercise.category} {isMy ? "လမ်းညွှန်" : "Guide"}
                </span>
                <h3 className="text-lg font-bold text-neutral-100 mt-2 font-sans tracking-tight">
                  {activeExercise.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {isMy ? "ကြွက်သားတည်ဆောက်ပုံ ဇီဝစက်မှုစနစ်နှင့် လေ့ကျင့်နည်းများ" : "Anatomical target and correct mechanics"}
                </p>
              </div>
              <button
                onClick={() => setActiveExerciseId(null)}
                className="text-neutral-500 hover:text-neutral-200 text-xs font-semibold px-2.5 py-1.5 bg-neutral-950 border border-neutral-850 rounded-lg transition-all"
              >
                {t.close}
              </button>
            </div>

            {/* Visual Frame Posture Panel */}
            <div className="bg-neutral-950 rounded-2xl p-5 border border-neutral-850 relative overflow-hidden group">
              <span className="absolute top-3 left-3 z-10 text-[9px] font-mono uppercase text-emerald-400 font-bold bg-neutral-950/80 backdrop-blur-md border border-neutral-800 px-2.5 py-1 rounded-full tracking-wider">
                {t.kineticGuide} • {posturePhase === "before" ? (isMy ? "မစတင်မီ" : "BEFORE") : (isMy ? "လှုပ်ရှားပြီး" : "AFTER")}
              </span>

              {/* 3D Illustration Canvas */}
              <div className="h-48 relative rounded-xl border border-neutral-900 overflow-hidden mb-4 bg-neutral-950 flex items-center justify-center">
                {CATEGORY_3D_IMAGES[activeExercise.category] || CATEGORY_3D_IMAGES["Chest"] ? (
                  <img
                    src={CATEGORY_3D_IMAGES[activeExercise.category] || CATEGORY_3D_IMAGES["Chest"]}
                    alt={`${activeExercise.name} 3D Demonstration`}
                    referrerPolicy="no-referrer"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                      posturePhase === "before" 
                        ? "scale-100 brightness-[0.35]" 
                        : "scale-105 brightness-[0.5] contrast-[1.1]"
                    }`}
                  />
                ) : (
                  <div className="absolute inset-0 bg-neutral-900" />
                )}

                {/* Hologram aesthetic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50 pointer-events-none" />
                
                {/* Simulated posture avatar block on top of image */}
                <div className="absolute inset-x-0 bottom-4 px-4 text-center space-y-2 z-10">
                  {/* Pulsing focal point indicator */}
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center mx-auto relative mb-1">
                    <Play className={`w-4 h-4 text-emerald-400 transition-transform duration-500 ${posturePhase === "after" ? "rotate-90 scale-110" : ""}`} />
                    <div className="absolute inset-0 rounded-full border border-emerald-400/30 animate-ping" />
                  </div>
                  
                  {/* Dynamic description of movement path */}
                  <p className="text-[11px] text-neutral-200 font-medium px-4 text-center leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {posturePhase === "before" 
                      ? activeExercise.startingPosition 
                      : (activeExercise.movementFrames?.after || activeExercise.stepByStep[1])}
                  </p>
                </div>

                {/* Range of motion live status indicator */}
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 px-2 py-1 rounded-full text-[9px] font-mono">
                  <span className={`w-1.5 h-1.5 rounded-full ${posturePhase === "before" ? "bg-amber-400 animate-pulse" : "bg-emerald-400 animate-pulse"}`} />
                  <span className="text-neutral-400">
                    ROM: {posturePhase === "before" ? (isMy ? "၀%" : "0%") : (isMy ? "၁၀၀% (အမြင့်ဆုံး)" : "100% (Peak)")}
                    {motionTimer > 0 && ` (${motionTimer}s)`}
                  </span>
                </div>
              </div>

              {/* Action and state controllers */}
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={handleTogglePosture}
                  className="px-4 py-2 bg-neutral-900 hover:bg-neutral-850 hover:text-emerald-300 text-xs font-mono font-bold text-emerald-400 border border-neutral-800 rounded-xl transition-all flex items-center gap-2 shadow-inner group/btn"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-emerald-400 ${motionTimer > 0 ? "animate-spin" : "group-hover/btn:rotate-180"} transition-transform duration-500`} />
                  {motionTimer > 0 
                    ? `${isMy ? "လှုပ်ရှားမှုပြသနေသည်" : "Showing Motion"} (${motionTimer}s)` 
                    : t.triggerMotion}
                </button>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  {t.interactiveGuide}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-neutral-900 p-2.5 rounded-xl border border-neutral-850 text-center">
                  <span className="text-[9px] font-mono uppercase text-neutral-500">{t.targetMuscles}</span>
                  <p className="text-xs font-bold text-neutral-200 mt-1 line-clamp-1">{activeExercise.targetMuscles[0]}</p>
                </div>
                <div className="bg-neutral-900 p-2.5 rounded-xl border border-neutral-850 text-center">
                  <span className="text-[9px] font-mono uppercase text-neutral-500">{t.equipment}</span>
                  <p className="text-xs font-bold text-neutral-200 mt-1 line-clamp-1">{activeExercise.equipment}</p>
                </div>
              </div>
            </div>

            {/* Step-by-Step guide */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase text-neutral-200 tracking-widest">
                {t.movementInstructions}
              </h4>
              <ol className="space-y-2.5">
                {activeExercise.stepByStep.map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-xs leading-relaxed text-neutral-300">
                    <span className="w-5 h-5 rounded-full bg-neutral-950 border border-neutral-800 text-[10px] font-mono text-emerald-400 flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Breathing Method */}
            <div className="bg-neutral-950/60 border border-neutral-850 p-4 rounded-xl space-y-1">
              <span className="text-[10px] font-mono uppercase text-neutral-500 block">{t.correctBreathing}</span>
              <p className="text-xs text-neutral-300 leading-relaxed italic">
                {activeExercise.breathing}
              </p>
            </div>

            {/* Common Mistakes & Safety Tips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase text-neutral-200 tracking-widest flex items-center gap-1 text-red-400">
                  <ShieldAlert className="w-4 h-4" /> {t.commonMistakes}
                </h4>
                <ul className="space-y-2">
                  {activeExercise.commonMistakes.map((mistake, idx) => (
                    <li key={idx} className="text-xs text-neutral-400 leading-relaxed flex items-start gap-1.5">
                      <span className="text-red-400/80 mt-1 shrink-0">•</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase text-neutral-200 tracking-widest flex items-center gap-1 text-emerald-400">
                  <Info className="w-4 h-4" /> {t.safetyCues}
                </h4>
                <ul className="space-y-2">
                  {activeExercise.safetyTips.map((tip, idx) => (
                    <li key={idx} className="text-xs text-neutral-400 leading-relaxed flex items-start gap-1.5">
                      <span className="text-emerald-400/80 mt-1 shrink-0">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Variations */}
            <div className="space-y-3 border-t border-neutral-800 pt-5">
              <h4 className="text-xs font-bold uppercase text-neutral-200 tracking-widest">
                {t.levelAdaptations}
              </h4>
              <div className="space-y-2">
                {activeExercise.variations.map((v, idx) => {
                  const isBegVar = v.level === "Beginner" || v.level === "အခြေခံ" || v.level?.includes("အခြေခံ");
                  const isIntVar = v.level === "Intermediate" || v.level === "အလယ်အလတ်" || v.level?.includes("အလယ်အလတ်");
                  const isAdvVar = v.level === "Advanced" || v.level === "အဆင့်မြင့်" || v.level?.includes("အဆင့်မြင့်");

                  return (
                    <div key={idx} className="bg-neutral-950 p-3 rounded-xl border border-neutral-850 flex items-center justify-between gap-4">
                      <div>
                        <h5 className="text-xs font-bold text-neutral-200">{v.name}</h5>
                        <p className="text-[10px] text-neutral-500 mt-0.5 leading-relaxed">{v.description}</p>
                      </div>
                      <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border ${
                        isBegVar ? "bg-blue-500/10 text-blue-400 border-blue-500/10" : ""
                      } ${
                        isIntVar ? "bg-amber-500/10 text-amber-400 border-amber-500/10" : ""
                      } ${
                        isAdvVar ? "bg-red-500/10 text-red-400 border-red-500/10" : ""
                      }`}>
                        {v.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
