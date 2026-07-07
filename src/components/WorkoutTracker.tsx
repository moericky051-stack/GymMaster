import React, { useState } from "react";
import { WorkoutPlan, Exercise } from "../types";
import { CheckSquare, Square, Flame, Clock, Award, Play, History, Calendar, CheckCircle2 } from "lucide-react";
import { 
  type Language, 
  TRANSLATIONS, 
  tPlanName, 
  tPlanDesc, 
  tDayName, 
  tDayFocus, 
  translateExercise 
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

interface WorkoutTrackerProps {
  workoutPlans: WorkoutPlan[];
  exercises: Exercise[];
  onAddWorkoutHistory: (entry: { date: string; planName: string; dayName: string; completedExercisesCount: number }) => void;
  workoutHistoryList: { date: string; planName: string; dayName: string; completedExercisesCount: number }[];
  language?: Language;
}

export default function WorkoutTracker({
  workoutPlans,
  exercises,
  onAddWorkoutHistory,
  workoutHistoryList,
  language = "en"
}: WorkoutTrackerProps) {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(workoutPlans[0]?.id || "");
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  
  // Tracks completed exercise IDs for the CURRENT ACTIVE workout day session
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>({});
  
  // Custom set/rep logs for the session
  const [customLogs, setCustomLogs] = useState<Record<string, string>>({});
  
  const [sessionCompleted, setSessionCompleted] = useState(false);

  const isMy = language === "my";
  const t = TRANSLATIONS[language];

  const activePlan = workoutPlans.find((p) => p.id === selectedPlanId);
  const activeDay = activePlan?.days[selectedDayIndex];

  // Localized/translated version of the active plan strings
  const localizedPlanName = activePlan ? tPlanName(activePlan.id, activePlan.name, language) : "";
  const localizedDayName = activePlan && activeDay ? tDayName(activePlan.id, activeDay.dayName, language) : "";
  const localizedDayFocus = activePlan && activeDay ? tDayFocus(activePlan.id, activeDay.dayName, language, activeDay.focus) : "";

  const handleToggleExercise = (exerciseId: string) => {
    setCompletedExercises((prev) => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const handleLogChange = (exerciseId: string, val: string) => {
    setCustomLogs((prev) => ({
      ...prev,
      [exerciseId]: val
    }));
  };

  const handleFinishWorkout = () => {
    if (!activePlan || !activeDay) return;
    
    // Count how many exercises were completed in this session
    const totalExercises = activeDay.exercises.length;
    const completedCount = activeDay.exercises.filter(
      (e) => completedExercises[e.exerciseId]
    ).length;

    const todayStr = new Date().toLocaleDateString(isMy ? "my-MM" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });

    onAddWorkoutHistory({
      date: todayStr,
      planName: localizedPlanName,
      dayName: localizedDayName,
      completedExercisesCount: completedCount
    });

    setSessionCompleted(true);
    // Clear logs for next session
    setTimeout(() => {
      setCompletedExercises({});
      setCustomLogs({});
      setSessionCompleted(false);
    }, 5000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Active Workout Tracker Panel */}
      <div className="lg:col-span-8 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Play className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-100 font-sans tracking-tight">{t.activeTracker}</h3>
              <p className="text-[10px] text-neutral-400">{t.activeTrackerDesc}</p>
            </div>
          </div>

          {/* Plan selector */}
          <div className="flex gap-2">
            <select
              value={selectedPlanId}
              onChange={(e) => {
                setSelectedPlanId(e.target.value);
                setSelectedDayIndex(0);
                setCompletedExercises({});
                setCustomLogs({});
              }}
              className="bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 font-bold rounded-xl px-3 py-2 focus:border-emerald-500/40 focus:outline-none transition-all"
            >
              {workoutPlans.map((p) => (
                <option key={p.id} value={p.id}>
                  {tPlanName(p.id, p.name, language)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {activePlan && (
          <div className="space-y-6">
            {/* Day Selector Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {activePlan.days.map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedDayIndex(idx);
                    setCompletedExercises({});
                    setCustomLogs({});
                  }}
                  className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all shrink-0 ${
                    selectedDayIndex === idx
                      ? "bg-emerald-500 text-neutral-950 border-emerald-400 font-bold"
                      : "bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {tDayName(activePlan.id, day.dayName, language)}
                </button>
              ))}
            </div>

            {/* Day details */}
            <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-850/60">
              <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider font-bold">
                {t.dailyFocus}
              </span>
              <p className="text-sm font-bold text-neutral-100 mt-1">{localizedDayFocus}</p>
              <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                {t.trackerTip}
              </p>
            </div>

            {/* Session Completion Card */}
            {sessionCompleted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center flex flex-col items-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
                <h4 className="text-lg font-bold text-neutral-100 font-sans">{t.workoutLogged}</h4>
                <p className="text-xs text-neutral-400 max-w-sm">
                  {t.workoutLoggedDesc}
                </p>
              </div>
            ) : (
              /* Checklist of exercises */
              <div className="space-y-3">
                {activeDay?.exercises.map((item) => {
                  const rawExerciseDetail = exercises.find((e) => e.id === item.exerciseId);
                  const exerciseDetail = rawExerciseDetail ? translateExercise(rawExerciseDetail, language) : null;
                  const isDone = !!completedExercises[item.exerciseId];
                  if (!exerciseDetail) return null;

                  return (
                    <div
                      key={item.exerciseId}
                      className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isDone
                          ? "bg-emerald-500/5 border-emerald-500/20"
                          : "bg-neutral-950/40 border-neutral-850 hover:border-neutral-800"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => handleToggleExercise(item.exerciseId)}
                          className="mt-1.5 text-neutral-400 hover:text-emerald-400 transition-all shrink-0"
                        >
                          {isDone ? (
                            <CheckSquare className="w-5 h-5 text-emerald-400 fill-emerald-400/10" />
                          ) : (
                            <Square className="w-5 h-5 text-neutral-600 hover:text-neutral-400" />
                          )}
                        </button>

                        {/* Beautiful 3D Thumbnail */}
                        {CATEGORY_3D_IMAGES[exerciseDetail.category] && (
                          <div className="w-12 h-12 rounded-xl overflow-hidden border border-neutral-850 shrink-0 relative bg-neutral-900 group">
                            <img
                              src={CATEGORY_3D_IMAGES[exerciseDetail.category]}
                              alt={exerciseDetail.name}
                              referrerPolicy="no-referrer"
                              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                                isDone ? "opacity-30 brightness-[0.4]" : "opacity-90 brightness-[0.8]"
                              }`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          </div>
                        )}

                        <div>
                          <p className={`text-sm font-bold ${isDone ? "text-neutral-400 line-through" : "text-neutral-100"}`}>
                            {exerciseDetail.name}
                          </p>
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-[11px] text-neutral-400 font-sans">
                            <span className="font-mono bg-neutral-900 px-1.5 py-0.5 border border-neutral-800 rounded">
                              {isMy ? "ပစ်မှတ် -" : "Target:"} {item.customSetsReps}
                            </span>
                            {item.notes && (
                              <span className="text-neutral-500 italic">• {item.notes}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Log custom performance input */}
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="e.g., 60kg x 10"
                          value={customLogs[item.exerciseId] || ""}
                          onChange={(e) => handleLogChange(item.exerciseId, e.target.value)}
                          className="bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-neutral-300 w-32 focus:outline-none focus:border-emerald-500/40 placeholder-neutral-600"
                        />
                        <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest hidden sm:inline">
                          {t.log}
                        </span>
                      </div>
                    </div>
                  );
                })}

                <button
                  onClick={handleFinishWorkout}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold py-3.5 rounded-xl transition-all text-xs uppercase tracking-widest mt-4"
                >
                  {t.completeSession}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Workout History Dashboard */}
      <div className="lg:col-span-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl flex flex-col gap-5">
        <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <History className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-neutral-100 font-sans tracking-tight">{t.workoutHistory}</h3>
            <p className="text-[10px] text-neutral-400">{t.consistentTracking}</p>
          </div>
        </div>

        {/* Dynamic Streak counter based on history list size */}
        <div className="bg-neutral-950 p-4.5 rounded-2xl border border-neutral-800 flex items-center gap-4">
          <div className="w-11 h-11 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 text-orange-400" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase text-neutral-500 block">{t.weeklyStreak}</span>
            <p className="text-xl font-extrabold text-neutral-100 mt-0.5">
              {workoutHistoryList.length} {t.completed}
            </p>
          </div>
        </div>

        {/* History stream list */}
        <div className="flex-1 overflow-y-auto max-h-[300px] space-y-2.5 pr-1">
          {workoutHistoryList.length === 0 ? (
            <div className="text-center py-8">
              <Calendar className="w-8 h-8 text-neutral-700 mx-auto mb-2" />
              <p className="text-xs text-neutral-500 italic">{t.noHistory}</p>
            </div>
          ) : (
            <div className="space-y-2">
              {workoutHistoryList.slice().reverse().map((entry, idx) => (
                <div key={idx} className="p-3 bg-neutral-950 border border-neutral-850 rounded-xl flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-neutral-500">{entry.date}</span>
                    <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      {entry.completedExercisesCount} {isMy ? "ခုပြီးပြီ" : "Ex Done"}
                    </span>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-neutral-200">{entry.planName}</h5>
                    <p className="text-[10px] text-neutral-400 mt-0.5">{entry.dayName}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
