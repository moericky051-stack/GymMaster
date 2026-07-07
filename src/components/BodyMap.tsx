import React, { useState } from "react";
import { type Language, tMuscle } from "../utils/translations";

interface BodyMapProps {
  selectedMuscle: string | null;
  onSelectMuscle: (muscle: string | null) => void;
  language?: Language;
}

export default function BodyMap({ selectedMuscle, onSelectMuscle, language = "en" }: BodyMapProps) {
  const [view, setView] = useState<"anterior" | "posterior">("anterior");
  const isMy = language === "my";

  const muscleCategories = [
    { id: "Chest", label: isMy ? "ရင်ဘတ် (ရင်အုပ်)" : "Chest", view: "anterior", target: "Chest" },
    { id: "Back", label: isMy ? "ကျောပြင် (Lats & Mid)" : "Back (Lats & Mid)", view: "posterior", target: "Back" },
    { id: "Shoulders", label: isMy ? "ပုခုံး (Deltoids)" : "Shoulders", view: "both", target: "Shoulders" },
    { id: "Arms", label: isMy ? "လက်မောင်း (Biceps & Triceps)" : "Arms (Biceps & Triceps)", view: "both", target: "Arms" },
    { id: "Legs", label: isMy ? "ခြေထောက် (Quads & Glutes)" : "Legs (Quads & Glutes)", view: "both", target: "Legs" },
    { id: "Core", label: isMy ? "ဝမ်းဗိုက် (Abs)" : "Core (Abs)", view: "anterior", target: "Core" },
  ];

  const handleMuscleClick = (muscle: string) => {
    if (selectedMuscle === muscle) {
      onSelectMuscle(null); // Deselect
    } else {
      onSelectMuscle(muscle);
    }
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-neutral-100 font-sans tracking-tight">
            {isMy ? "၃D အပြန်အလှန်အကျိုးပြု ကြွက်သားခန္ဓာဗေဒမြေပုံ" : "Interactive Muscle Anatomy Map"}
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            {isMy ? "လေ့ကျင့်ခန်းလမ်းညွှန်များကို တိုက်ရိုက်ကြည့်ရှုရန် ကြွက်သားအုပ်စုတစ်ခုခုကို နှိပ်ပါ။" : "Click any muscle group to instantly load targeted exercise guides."}
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-lg border border-neutral-800 self-start">
          <button
            onClick={() => setView("anterior")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              view === "anterior"
                ? "bg-emerald-500 text-neutral-950 shadow-md font-bold"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            {isMy ? "ခန္ဓာကိုယ်အရှေ့ခြမ်း" : "Anterior (Front)"}
          </button>
          <button
            onClick={() => setView("posterior")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              view === "posterior"
                ? "bg-emerald-500 text-neutral-950 shadow-md font-bold"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            {isMy ? "ခန္ဓာကိုယ်အနောက်ခြမ်း" : "Posterior (Back)"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* SVG Visualization Column */}
        <div className="md:col-span-5 flex justify-center bg-neutral-950/60 py-6 rounded-xl border border-neutral-800/40 relative">
          <span className="absolute top-3 left-3 text-[10px] font-mono uppercase text-emerald-400/80 tracking-widest px-2 py-0.5 bg-neutral-950/80 border border-neutral-800 rounded-full">
            {view === "anterior" ? (isMy ? "အရှေ့ခြမ်းစကင်" : "Frontal Scan") : (isMy ? "အနောက်ခြမ်းစကင်" : "Dorsal Scan")}
          </span>

          {view === "anterior" ? (
            /* ANTERIOR SVG */
            <svg
              viewBox="0 0 200 320"
              className="w-full max-w-[170px] h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.05)]"
            >
              {/* Head / Neck */}
              <circle cx="100" cy="35" r="16" className="fill-neutral-800 stroke-neutral-700 stroke-1" />
              <path d="M92,50 L108,50 L104,65 L96,65 Z" className="fill-neutral-800 stroke-neutral-700" />

              {/* Shoulders (Deltoids) */}
              <g
                onClick={() => handleMuscleClick("Shoulders")}
                className="cursor-pointer group"
              >
                {/* Left Shoulder */}
                <path
                  d="M65,68 C55,72 50,85 52,95 C54,105 60,110 65,95 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Shoulders"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                {/* Right Shoulder */}
                <path
                  d="M135,68 C145,72 150,85 148,95 C146,105 140,110 135,95 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Shoulders"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
              </g>

              {/* Chest (Pectorals) */}
              <g
                onClick={() => handleMuscleClick("Chest")}
                className="cursor-pointer group"
              >
                <path
                  d="M70,72 L100,75 L100,105 L68,100 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Chest"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                <path
                  d="M130,72 L100,75 L100,105 L132,100 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Chest"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
              </g>

              {/* Arms (Biceps & Forearms) */}
              <g
                onClick={() => handleMuscleClick("Arms")}
                className="cursor-pointer group"
              >
                {/* Left Bicep */}
                <path
                  d="M51,95 C46,105 45,115 50,125 C54,125 56,115 55,98 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Arms"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                {/* Right Bicep */}
                <path
                  d="M149,95 C154,105 155,115 150,125 C146,125 144,115 145,98 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Arms"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                {/* Left Forearm */}
                <path
                  d="M48,125 L38,160 L45,160 L52,125 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Arms"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                {/* Right Forearm */}
                <path
                  d="M152,125 L162,160 L155,160 L148,125 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Arms"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
              </g>

              {/* Core (Abs) */}
              <g
                onClick={() => handleMuscleClick("Core")}
                className="cursor-pointer group"
              >
                <path
                  d="M72,104 L128,104 L122,150 L78,150 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Core"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                {/* Ab lines decoration */}
                <line x1="85" y1="116" x2="115" y2="116" className="stroke-neutral-900 stroke-1" />
                <line x1="83" y1="128" x2="117" y2="128" className="stroke-neutral-900 stroke-1" />
                <line x1="85" y1="140" x2="115" y2="140" className="stroke-neutral-900 stroke-1" />
              </g>

              {/* Hips / Pelvis */}
              <path d="M74,150 L126,150 L130,170 L70,170 Z" className="fill-neutral-850 stroke-neutral-700" />

              {/* Legs (Quads) */}
              <g
                onClick={() => handleMuscleClick("Legs")}
                className="cursor-pointer group"
              >
                {/* Left Quad */}
                <path
                  d="M72,170 L98,172 L96,238 L68,235 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Legs"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                {/* Right Quad */}
                <path
                  d="M128,170 L102,172 L104,238 L132,235 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Legs"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                {/* Calves (Front side) */}
                <path
                  d="M70,246 L92,246 L88,300 L74,300 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Legs"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                <path
                  d="M130,246 L108,246 L112,300 L126,300 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Legs"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
              </g>

              {/* Knees */}
              <circle cx="83" cy="242" r="5" className="fill-neutral-900" />
              <circle cx="117" cy="242" r="5" className="fill-neutral-900" />
            </svg>
          ) : (
            /* POSTERIOR SVG */
            <svg
              viewBox="0 0 200 320"
              className="w-full max-w-[170px] h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.05)]"
            >
              {/* Head / Neck */}
              <circle cx="100" cy="35" r="16" className="fill-neutral-800 stroke-neutral-700" />
              <path d="M92,50 L108,50 L104,63 L96,63 Z" className="fill-neutral-800 stroke-neutral-700" />

              {/* Shoulders (Rear Deltoids) */}
              <g
                onClick={() => handleMuscleClick("Shoulders")}
                className="cursor-pointer group"
              >
                {/* Left Rear Shoulder */}
                <path
                  d="M65,65 C55,70 50,82 52,92 L65,85 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Shoulders"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                {/* Right Rear Shoulder */}
                <path
                  d="M135,65 C145,70 150,82 148,92 L135,85 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Shoulders"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
              </g>

              {/* Back (Traps, Rhomboids, Lats) */}
              <g
                onClick={() => handleMuscleClick("Back")}
                className="cursor-pointer group"
              >
                {/* Traps & Rhomboids (Upper Back) */}
                <path
                  d="M100,55 L75,70 L125,70 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Back"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                <path
                  d="M74,70 L126,70 L120,104 L80,104 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Back"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                {/* Lats (Lower Mid Back) */}
                <path
                  d="M80,104 L120,104 L114,146 L86,146 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Back"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
              </g>

              {/* Arms (Triceps) */}
              <g
                onClick={() => handleMuscleClick("Arms")}
                className="cursor-pointer group"
              >
                {/* Left Tricep */}
                <path
                  d="M52,90 C47,100 46,112 51,123 L55,95 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Arms"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                {/* Right Tricep */}
                <path
                  d="M148,90 C153,100 154,112 149,123 L145,95 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Arms"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                {/* Forearms Back */}
                <path
                  d="M49,123 L39,158 L46,158 L52,123 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Arms"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                {/* Right Forearm Back */}
                <path
                  d="M151,123 L161,158 L154,158 L148,123 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Arms"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
              </g>

              {/* Gluteus / Buttocks */}
              <g
                onClick={() => handleMuscleClick("Legs")}
                className="cursor-pointer group"
              >
                <path
                  d="M72,146 L128,146 L130,178 L70,178 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Legs"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                {/* Hamstrings */}
                <path
                  d="M71,178 L98,178 L95,238 L68,238 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Legs"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                <path
                  d="M129,178 L102,178 L105,238 L132,238 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Legs"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                {/* Back Calves */}
                <path
                  d="M70,246 L92,246 L88,300 L74,300 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Legs"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
                <path
                  d="M130,246 L108,246 L112,300 L126,300 Z"
                  className={`transition-all duration-300 ${
                    selectedMuscle === "Legs"
                      ? "fill-emerald-400 stroke-emerald-300"
                      : "fill-neutral-800 hover:fill-emerald-900/60 stroke-neutral-700"
                  }`}
                />
              </g>

              {/* Knees Back */}
              <circle cx="83" cy="242" r="4" className="fill-neutral-900" />
              <circle cx="117" cy="242" r="4" className="fill-neutral-900" />
            </svg>
          )}
        </div>

        {/* Info Column */}
        <div className="md:col-span-7 flex flex-col gap-3">
          <p className="text-sm text-neutral-400 leading-relaxed mb-1">
            {isMy ? "ကျွန်ုပ်တို့သည် အဓိကကြွက်သားအုပ်စုများကို ၃D မော်ဒယ်နှင့် ချိတ်ဆက်ပေးထားပါသည်။ လေ့ကျင့်ခန်းများကို စစ်ထုတ်ရန် အောက်တွင်နှိပ်ပါ သို့မဟုတ် ပုံပေါ်တွင် တိုက်ရိုက်ရွေးချယ်ပါ။" : "We've mapped major muscle groups to our interactive anatomy model. Tap below to filter exercises or use the visual pins on the graphic."}
          </p>

          <div className="grid grid-cols-2 gap-2">
            {muscleCategories.map((m) => {
              const isActive = selectedMuscle === m.target;
              return (
                <button
                  key={m.id}
                  onClick={() => handleMuscleClick(m.target)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl border transition-all text-left ${
                    isActive
                      ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400 font-bold shadow-[0_0_10px_rgba(16,185,129,0.05)]"
                      : "bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold">{m.label}</span>
                    <span className="text-[10px] text-neutral-500 capitalize">
                      {m.view === "both" ? (isMy ? "အရှေ့နှင့်အနောက်စကင်" : "Front & Back") : (isMy ? `${m.view === "anterior" ? "အရှေ့ခြမ်း" : "အနောက်ခြမ်း"}စကင်` : m.view + " scan")}
                    </span>
                  </div>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isActive ? "bg-emerald-400 animate-pulse" : "bg-neutral-750"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {selectedMuscle && (
            <div className="mt-2 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-between">
              <span className="text-xs text-emerald-400">
                {isMy ? "စစ်ထုတ်ထားသော ကြွက်သားအုပ်စု - " : "Filtering by: "}<strong className="uppercase">{tMuscle(selectedMuscle, language)}</strong>
              </span>
              <button
                onClick={() => onSelectMuscle(null)}
                className="text-xs font-semibold text-neutral-400 hover:text-neutral-100"
              >
                {isMy ? "စစ်ထုတ်မှုဖျက်ရန်" : "Clear Filter"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
