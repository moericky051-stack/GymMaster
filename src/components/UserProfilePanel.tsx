import React, { useState, useEffect } from "react";
import { UserProfile, WeightLog, BodyMeasurementLog } from "../types";
import { User, Scale, Calculator, Dumbbell, Award, Flame, Zap, Compass, Check, Heart } from "lucide-react";
import { 
  type Language, 
  TRANSLATIONS, 
  tGoal 
} from "../utils/translations";

// @ts-ignore
import kbzpayQrImg from "../assets/images/kbzpay_qr_1783423063523.jpg";

interface UserProfilePanelProps {
  profile: UserProfile;
  onChangeProfile: (profile: UserProfile) => void;
  weightLogs: WeightLog[];
  onAddWeightLog: (weight: number) => void;
  measurementLogs: BodyMeasurementLog[];
  onAddMeasurementLog: (measurements: { chest?: number; waist?: number; biceps?: number; thighs?: number }) => void;
  language?: Language;
}

export default function UserProfilePanel({
  profile,
  onChangeProfile,
  weightLogs,
  onAddWeightLog,
  measurementLogs,
  onAddMeasurementLog,
  language = "en"
}: UserProfilePanelProps) {
  const isMy = language === "my";
  const t = TRANSLATIONS[language];

  const [heightInput, setHeightInput] = useState(profile.height.toString());
  const [weightInput, setWeightInput] = useState(profile.weight.toString());
  const [ageInput, setAgeInput] = useState(profile.age.toString());
  const [goalSelection, setGoalSelection] = useState(profile.goal);

  // Temporary local states for adding logs
  const [newWeight, setNewWeight] = useState("");
  const [chestInput, setChestInput] = useState("");
  const [waistInput, setWaistInput] = useState("");
  const [bicepsInput, setBicepsInput] = useState("");
  const [thighsInput, setThighsInput] = useState("");

  const [notification, setNotification] = useState<string | null>(null);

  // Calculate BMI and Category
  const calculateBMI = (h: number, w: number) => {
    if (h <= 0) return { bmi: 0, cat: "Unknown" };
    const meters = h / 100;
    const bmiVal = w / (meters * meters);
    const rounded = Math.round(bmiVal * 10) / 10;

    let category = "Normal";
    if (rounded < 18.5) {
      category = isMy ? "ကိုယ်အလေးချိန် လျော့နည်းခြင်း" : "Underweight";
    } else if (rounded < 25) {
      category = isMy ? "ပုံမှန် ကိုယ်အလေးချိန်" : "Normal weight";
    } else if (rounded < 30) {
      category = isMy ? "ကိုယ်အလေးချိန် လွန်ကဲခြင်း" : "Overweight";
    } else {
      category = isMy ? "အဝလွန်ခြင်း" : "Obese";
    }

    return { bmi: rounded, cat: category };
  };

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(heightInput) || 175;
    const w = parseFloat(weightInput) || 70;
    const a = parseInt(ageInput) || 25;

    const { bmi, cat } = calculateBMI(h, w);

    const updated: UserProfile = {
      height: h,
      weight: w,
      age: a,
      goal: goalSelection,
      bmi,
      bmiCategory: cat
    };

    onChangeProfile(updated);
    triggerNotification(t.statsUpdated);
  };

  const handleAddWeight = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(newWeight);
    if (w > 0) {
      onAddWeightLog(w);
      setNewWeight("");
      triggerNotification(`${t.loggedWeight} ${w} kg`);

      // Auto update current weight in profile too
      const { bmi, cat } = calculateBMI(profile.height, w);
      onChangeProfile({
        ...profile,
        weight: w,
        bmi,
        bmiCategory: cat
      });
      setWeightInput(w.toString());
    }
  };

  const handleAddMeasurements = (e: React.FormEvent) => {
    e.preventDefault();
    onAddMeasurementLog({
      chest: chestInput ? parseFloat(chestInput) : undefined,
      waist: waistInput ? parseFloat(waistInput) : undefined,
      biceps: bicepsInput ? parseFloat(bicepsInput) : undefined,
      thighs: thighsInput ? parseFloat(thighsInput) : undefined,
    });
    setChestInput("");
    setWaistInput("");
    setBicepsInput("");
    setThighsInput("");
    triggerNotification(t.loggedMeasurements);
  };

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Input / Profile Form */}
      <div className="lg:col-span-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl flex flex-col gap-6">
        <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <User className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-neutral-100 font-sans tracking-tight">{t.activeProfile}</h3>
            <p className="text-[10px] text-neutral-400">{t.profileDesc}</p>
          </div>
        </div>

        {notification && (
          <div className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs px-3 py-2 rounded-xl flex items-center gap-2">
            <Check className="w-4 h-4 shrink-0" />
            <span>{notification}</span>
          </div>
        )}

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase tracking-wider">
              {t.age}
            </label>
            <input
              type="number"
              value={ageInput}
              onChange={(e) => setAgeInput(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-neutral-200 focus:border-emerald-500/40 focus:outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase tracking-wider">
                {t.height}
              </label>
              <input
                type="number"
                value={heightInput}
                onChange={(e) => setHeightInput(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-neutral-200 focus:border-emerald-500/40 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase tracking-wider">
                {t.weight}
              </label>
              <input
                type="number"
                value={weightInput}
                onChange={(e) => setWeightInput(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-neutral-200 focus:border-emerald-500/40 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase tracking-wider">
              {t.fitnessGoal}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(["Build Muscle", "Lose Fat", "Increase Strength", "Improve Fitness"] as const).map((g) => {
                const isSelected = goalSelection === g;
                return (
                  <button
                    type="button"
                    key={g}
                    onClick={() => setGoalSelection(g)}
                    className={`px-3 py-2.5 text-left text-xs rounded-xl border font-bold transition-all ${
                      isSelected
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200"
                    }`}
                  >
                    {g === "Build Muscle" && <Dumbbell className="w-3.5 h-3.5 mb-1 text-emerald-400" />}
                    {g === "Lose Fat" && <Flame className="w-3.5 h-3.5 mb-1 text-emerald-400" />}
                    {g === "Increase Strength" && <Zap className="w-3.5 h-3.5 mb-1 text-emerald-400" />}
                    {g === "Improve Fitness" && <Award className="w-3.5 h-3.5 mb-1 text-emerald-400" />}
                    {tGoal(g, language)}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold py-3 rounded-xl transition-all text-xs uppercase tracking-widest mt-2"
          >
            {t.updateBtn}
          </button>
        </form>
      </div>

      {/* BMI Stats & Custom Advice Column */}
      <div className="lg:col-span-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl flex flex-col gap-6">
        <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-neutral-100 font-sans tracking-tight">{t.anatomicalAnalysis}</h3>
            <p className="text-[10px] text-neutral-400">{t.metabolicGuide}</p>
          </div>
        </div>

        {/* BMI Card */}
        <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">{isMy ? "ကိုယ်ခန္ဓာ ညွှန်းကိန်း (BMI)" : "Body Mass Index"}</span>
            <p className="text-3xl font-extrabold text-neutral-100 mt-1 font-sans tracking-tight">{profile.bmi}</p>
            <span className="text-[11px] font-bold text-emerald-400 mt-1 inline-block">
              {profile.bmiCategory}
            </span>
          </div>

          {/* Graphical ring or dot */}
          <div className="w-16 h-16 rounded-full border-4 border-neutral-800 flex items-center justify-center relative">
            <div className="absolute inset-0.5 rounded-full border border-dashed border-emerald-500/30 animate-spin" style={{ animationDuration: "20s" }} />
            <span className="text-xs font-mono text-emerald-400 font-bold">
              {profile.bmi < 18.5 && (isMy ? "နည်း" : "Low")}
              {profile.bmi >= 18.5 && profile.bmi < 25 && (isMy ? "မျှတ" : "Fit")}
              {profile.bmi >= 25 && profile.bmi < 30 && (isMy ? "များ" : "Heavy")}
              {profile.bmi >= 30 && (isMy ? "လွန်" : "High")}
            </span>
          </div>
        </div>

        {/* Personalized Muscle advice */}
        <div className="flex-1 flex flex-col gap-3.5">
          <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-widest flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-emerald-400" /> {t.goalRecs}
          </h4>

          <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/60 space-y-3">
            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0" />
              <p className="text-xs text-neutral-300 leading-relaxed">
                {isMy ? (
                  <>သင်၏ လက်ရှိရည်မှန်းချက်မှာ <strong className="text-emerald-400">{tGoal(profile.goal, language)}</strong> ဖြစ်သည်။
                    {profile.goal === "Build Muscle" && " တိုးတက်သောအလေးချိန်စနစ် (progressive overload) ကို အသုံးပြု၍ ရင်အုပ်နှင့် ထိုင်ထ ကဲ့သို့သော လေ့ကျင့်ခန်းများတွင် ၈ ကြိမ်မှ ၁၂ ကြိမ်အပြီးသတ်ရန် အဓိကထားဆော့ကစားပါ။"}
                    {profile.goal === "Lose Fat" && " အဆီလောင်ကျွမ်းမှုကို မြှင့်တင်ရန်အတွက် အလေးမခြင်းနှင့်အတူ ၁၅ မိနစ်မှ ၂၀ မိနစ်ခန့် ပြင်းထန်သော (HIIT) ကာဒီယို လေ့ကျင့်ခန်းကို ပူးတွဲလုပ်ဆောင်ပေးပါ။"}
                    {profile.goal === "Increase Strength" && " အလေးချိန်များများဆော့ကစားပြီး တစ်အုပ်စုလျှင် ၅ ကြိမ်မှ ၆ ကြိမ်အထိသာ ဆော့ပါ။ ဒက်လစ်ဖ်နှင့် ပုခုံးတွန်းခြင်းများတွင် အနားယူချိန် ပိုပေးပါ။"}
                    {profile.goal === "Improve Fitness" && " တစ်ပတ်လျှင် သုံးကြိမ် တစ်ကိုယ်လုံးလေ့ကျင့်ခန်းများနှင့် ကာဒီယိုကို ဟန်ချက်ညီညီ ပေါင်းစပ်ဆော့ကစားခြင်းက အကောင်းဆုံးဖြစ်သည်။"}
                  </>
                ) : (
                  <>Your target goal is <strong className="text-emerald-400">{profile.goal}</strong>.
                    {profile.goal === "Build Muscle" && " Focus on progressive overload, targeting 8-12 reps per set with heavy compound exercises like the Squat and Bench Press."}
                    {profile.goal === "Lose Fat" && " Incorporate 15-20 minutes of high intensity interval cardio alongside resistance training to elevate fat oxidation."}
                    {profile.goal === "Increase Strength" && " Keep reps low (5-6 per set) and rest times high. Maximize your performance in the conventional deadlift and barbell overhead press."}
                    {profile.goal === "Improve Fitness" && " A balanced full body routine hitting chest, lats, and legs three times per week with active cardio recovery works best."}
                  </>
                )}
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0" />
              <p className="text-xs text-neutral-300 leading-relaxed">
                {isMy ? (
                  <>သင်၏ <strong className="text-emerald-400">{profile.bmiCategory}</strong> အဆင့်အရ -
                    {profile.bmi < 18.5 ? " ကြွက်သားထု တက်လာစေရန် ပုံမှန်စားသုံးမှုထက် ကယ်လိုရီ ၃၀၀ မှ ၅၀၀ ပိုမိုစားသုံးရန် အကြံပြုပါသည်။" : ""}
                    {profile.bmi >= 18.5 && profile.bmi < 25 ? " လက်ရှိကိုယ်ခန္ဓာ အချိုးအစားကို ထိန်းသိမ်းရန် ကယ်လိုရီ ပုံမှန်အတိုင်း စားသုံးပေးနိုင်ပါသည်။" : ""}
                    {profile.bmi >= 25 ? " ကျန်းမာစွာ အဆီကျစေရန်အတွက် ကယ်လိုရီ ၂၀၀ မှ ၄၀၀ အထိ လျှော့ချစားသုံးပြီး ခန္ဓာကိုယ်အလေးချိန် ၁ ကီလိုလျှင် ပရိုတင်း ၁.၆ မှ ၂ ဂရမ်အထိ စားသုံးပါ။" : ""}
                  </>
                ) : (
                  <>Based on your <strong className="text-emerald-400">{profile.bmiCategory}</strong> rating, we recommend a caloric
                    {profile.bmi < 18.5 ? " surplus of 300-500kcal to support healthy lean muscle synthesis." : ""}
                    {profile.bmi >= 18.5 && profile.bmi < 25 ? " maintenance or slight surplus depending on your daily workout volume." : ""}
                    {profile.bmi >= 25 ? " deficit of 200-400kcal while consuming 1.6g-2g of protein per kg of bodyweight to trigger safe fat loss." : ""}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Logging / History Column */}
      <div className="lg:col-span-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl flex flex-col gap-6">
        <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <Scale className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-neutral-100 font-sans tracking-tight">{t.bodyLogHistory}</h3>
            <p className="text-[10px] text-neutral-400">{t.trackHistoryDesc}</p>
          </div>
        </div>

        {/* Add weight form */}
        <form onSubmit={handleAddWeight} className="flex gap-2">
          <input
            type="number"
            step="0.1"
            placeholder={isMy ? "ကိုယ်အလေးချိန်မှတ်တမ်း (ကီလို)" : "Log weight (kg)"}
            value={newWeight}
            onChange={(e) => setNewWeight(e.target.value)}
            className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-500/40"
          />
          <button
            type="submit"
            className="px-4 bg-neutral-800 hover:bg-neutral-750 text-neutral-200 border border-neutral-700 text-xs font-bold rounded-xl transition-all"
          >
            {t.logWeightBtn}
          </button>
        </form>

        {/* Display weight history list */}
        <div className="flex-1 overflow-y-auto max-h-[140px] space-y-2 pr-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">{t.weightLogHistory}</span>
          {weightLogs.length === 0 ? (
            <p className="text-xs text-neutral-500 italic">{t.noWeightLogs}</p>
          ) : (
            <div className="space-y-1.5">
              {weightLogs.slice().reverse().map((log, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs bg-neutral-950 px-3 py-2 rounded-lg border border-neutral-850">
                  <span className="text-neutral-400 font-mono">{log.date}</span>
                  <span className="font-bold text-neutral-100">{log.weight} kg</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Display measurement logs */}
        <div className="border-t border-neutral-800 pt-4 flex flex-col gap-3">
          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">{t.logTape}</span>
          <form onSubmit={handleAddMeasurements} className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder={t.chest}
              value={chestInput}
              onChange={(e) => setChestInput(e.target.value)}
              className="bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-500/40"
            />
            <input
              type="number"
              placeholder={t.waist}
              value={waistInput}
              onChange={(e) => setWaistInput(e.target.value)}
              className="bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-500/40"
            />
            <input
              type="number"
              placeholder={t.biceps}
              value={bicepsInput}
              onChange={(e) => setBicepsInput(e.target.value)}
              className="bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-500/40"
            />
            <input
              type="number"
              placeholder={t.thighs}
              value={thighsInput}
              onChange={(e) => setThighsInput(e.target.value)}
              className="bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-500/40"
            />
            <button
              type="submit"
              className="col-span-2 bg-neutral-800 hover:bg-neutral-750 text-neutral-200 text-[10px] font-bold uppercase py-2 rounded-lg transition-all border border-neutral-700"
            >
              {t.logTapeBtn}
            </button>
          </form>

          {measurementLogs.length > 0 && (
            <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-850 text-[11px] text-neutral-400 space-y-1">
              <p className="font-bold text-neutral-300 font-mono text-[10px]">{t.latestTape}</p>
              {measurementLogs[measurementLogs.length - 1].chest && <p>{t.chest}: <span className="text-emerald-400 font-mono font-bold">{measurementLogs[measurementLogs.length - 1].chest} cm</span></p>}
              {measurementLogs[measurementLogs.length - 1].waist && <p>{t.waist}: <span className="text-emerald-400 font-mono font-bold">{measurementLogs[measurementLogs.length - 1].waist} cm</span></p>}
              {measurementLogs[measurementLogs.length - 1].biceps && <p>{t.biceps}: <span className="text-emerald-400 font-mono font-bold">{measurementLogs[measurementLogs.length - 1].biceps} cm</span></p>}
              {measurementLogs[measurementLogs.length - 1].thighs && <p>{t.thighs}: <span className="text-emerald-400 font-mono font-bold">{measurementLogs[measurementLogs.length - 1].thighs} cm</span></p>}
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Support Developer & KBZPay Settings Card */}
    <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden mt-6">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Heart className="w-5 h-5 text-emerald-400 fill-emerald-400/10" />
            </div>
            <div>
              <h3 className="text-base font-black text-neutral-100 uppercase tracking-tight font-mono">{t.supportDev} • {t.supportDevMM}</h3>
              <p className="text-xs text-neutral-400">{t.supportDesc}</p>
            </div>
          </div>
          
          <p className="text-xs text-neutral-300 leading-relaxed">
            {t.supportBurmeseText}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-850 text-xs">
              <span className="text-[10px] font-mono text-neutral-500 block uppercase tracking-wider">{t.accHolder}</span>
              <span className="font-bold text-neutral-200">AUNG MYAT MIN</span>
            </div>
            <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-850 text-xs">
              <span className="text-[10px] font-mono text-neutral-500 block uppercase tracking-wider">{t.paymentMethod}</span>
              <span className="font-bold text-neutral-200">KBZPay QR Scanner</span>
            </div>
          </div>
        </div>

        {/* Authentic KBZPay Design Card */}
        <div className="bg-gradient-to-b from-[#0052b4] to-[#003882] rounded-2xl p-6 border border-blue-500/30 text-white shadow-xl flex flex-col items-center gap-4 relative overflow-hidden shrink-0 w-full max-w-[280px]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
          
          <h4 className="text-[11px] font-bold text-center leading-relaxed tracking-wide px-1 drop-shadow font-sans">
            {t.kbzPayInstruction}
          </h4>

          <div className="bg-white p-3.5 rounded-xl shadow-lg border border-white/10 w-44 h-44 flex items-center justify-center overflow-hidden transition-transform hover:scale-105 duration-300">
            <img
              src={kbzpayQrImg}
              alt="KBZPay QR Code Aung Myat Min"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain rounded"
            />
          </div>

          <div className="text-center">
            <p className="text-xs font-black tracking-widest uppercase drop-shadow font-mono">
              AUNG MYAT MIN
            </p>
            <p className="text-[9px] font-bold text-blue-200 tracking-wider">
              (*******4612)
            </p>
          </div>

          <div className="w-full bg-white rounded-lg py-1.5 flex items-center justify-center gap-1.5 shadow">
            <span className="text-[9px] font-black tracking-tighter text-[#0052b4] font-sans">KBZ Pay</span>
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-[8px] font-bold text-neutral-500 font-mono">{t.secureTransfer}</span>
          </div>
        </div>
      </div>
    </div>
  </>
);
}
