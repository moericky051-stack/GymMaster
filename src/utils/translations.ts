export type Language = "en" | "my";

export const TRANSLATIONS = {
  en: {
    // Header & Tabs
    title: "GymMaster",
    subtitle: "Exercise Guide",
    tabLibrary: "Anatomy & Library",
    tabPrograms: "Workout Programs",
    tabTracker: "Active Tracker",
    tabCoach: "AI Coach Assistant",
    tabProfile: "My Physical Profile",
    currentGoal: "Current Goal",
    anatomicalBmi: "Anatomical BMI",
    support: "Support",
    active: "Active",

    // Banner
    bannerBadge: "Interactive Encyclopedia",
    bannerTitle: "Master Form. Avoid Injuries. Lift Heavy.",
    bannerDesc: "Interactive gym workout education, biomechanical anatomy mappings, structured schedules, and sports-scientist AI feedback. Explore correct posture details below.",
    btnViewPlans: "View Workout Plans",
    btnConsultCoach: "Consult AI Coach",

    // Library & Search
    exerciseLibrary: "Interactive Exercise Library",
    searchPlaceholder: "Search Chest, Back, Squats, Barbell or targeted muscle...",
    difficultyLabel: "Difficulty",
    categoryLabel: "Category",
    all: "All",
    anatomyFilter: "Anatomy filter: Showing exercises targeting",
    resetFilter: "Reset Anatomy Filter",
    viewGuide: "View Guide",
    noExercises: "No exercise matches found",
    resetFiltersTip: "Try resetting your anatomy map, filters or query terms.",
    close: "Close",

    // Exercise details
    kineticGuide: "3D Kinetic Guide",
    triggerMotion: "Trigger 3D Motion Frame",
    interactiveGuide: "Interactive Guide",
    targetMuscles: "Target Muscles",
    equipment: "Equipment",
    movementInstructions: "Movement Instructions",
    correctBreathing: "Correct Breathing Method",
    commonMistakes: "Common Mistakes",
    safetyCues: "Safety Cues",
    levelAdaptations: "Level Adaptations & Variations",

    // Profile & Analytics
    activeProfile: "Active User Profile",
    profileDesc: "Configure your physical metrics & target goals",
    age: "Age (Years)",
    height: "Height (cm)",
    weight: "Weight (kg)",
    fitnessGoal: "Fitness Goal",
    updateBtn: "Update Physical Profile",
    statsUpdated: "Profile stats updated successfully!",
    loggedWeight: "Logged new weight:",
    loggedMeasurements: "Logged body measurements!",
    anatomicalAnalysis: "Anatomical Analysis",
    metabolicGuide: "Current BMI and metabolic guide",
    bmiCategory: "BMI Category",
    goalRecs: "Goal Recommendations",
    bodyLogHistory: "Body Log History",
    trackHistoryDesc: "Track weight logs and muscle measurements",
    logWeightBtn: "Log Weight",
    weightLogHistory: "Weight Log history",
    noWeightLogs: "No weight changes logged yet.",
    logTape: "Log Measurements (cm)",
    chest: "Chest",
    waist: "Waist",
    biceps: "Biceps",
    thighs: "Thighs",
    logTapeBtn: "Log Body tape measurements",
    latestTape: "LATEST TAPE MEASUREMENTS:",

    // Programs
    curatedPrograms: "Curated Workout Programs",
    programsDesc: "Choose a ready-made gym split crafted by certified strength coaches. Each plan details target frequencies, volume splits, and matches directly to biomechanical exercises.",
    totalExercises: "Total Exercises",
    loadTracker: "Load into Tracker",
    daySplitFocus: "Day Split Focus",
    guidedProgram: "3D Guided Program",

    // Tracker
    activeTracker: "Active Training Tracker",
    activeTrackerDesc: "Perform and log your active training day routine",
    dailyFocus: "Daily Focus Highlight",
    trackerTip: "Check off each exercise once you complete the target reps and sets. You can customize the logged weight or reps manually in the log input box.",
    workoutLogged: "Workout Day Logged!",
    workoutLoggedDesc: "Awesome work! Your workout day has been successfully recorded to your history dashboard. Keep up the consistency to maximize muscle building and fat burning!",
    target: "Target",
    log: "Log",
    completeSession: "Complete & Log Workout Session",
    workoutHistory: "Workout History",
    consistentTracking: "Consistent tracking log details",
    weeklyStreak: "Weekly Streak",
    completed: "Completed",
    noHistory: "No historical entries found. Tap start to complete your first gym session!",
    exDone: "Ex Done",

    // AI Coach
    coachDesc: "Personalized sports science & workout advice",
    coachWelcome: "Hello! I am your **GymMaster AI Coach**. I have access to sports science data, anatomy insights, and your active profile.\n\nAsk me to **recommend a workout**, **create custom routines**, or **explain correct technique cues and safety protocols**!",
    coachPlaceholderProfile: "Ask details, customize a split, or seek safety tips...",
    coachPlaceholderGuest: "Ask your coach fitness questions...",
    coachThinking: "Coach is thinking...",
    connectionAlert: "Connection Alert",
    presetLeg: "Leg Strength",
    presetLegText: "Can you recommend a leg workout for strength?",
    presetSquat: "Squat Technique",
    presetSquatText: "How do I do a perfect Barbell Squat?",
    presetFatLoss: "Fat-Loss Plan",
    presetFatLossText: "Create a customized fat-loss plan for me",
    presetBench: "Bench Press Cues",
    presetBenchText: "What are the most common bench press mistakes?",

    // Support Panel
    supportDev: "Support Developer",
    supportDevMM: "ပံ့ပိုးကူညီမှု ဆက်တင်",
    supportDesc: "Scan QR Code to buy a coffee or tip for the application development",
    supportBurmeseText: "ကျေးဇူးပြု၍ GymMaster ဆော့ဝဲလ် ပိုမိုကောင်းမွန်လာစေရန်နှင့် ဆက်လက်ပံ့ပိုးကူညီရန်အတွက် အောက်ပါ KBZPay QR Code ကိုအသုံးပြု၍ လှူဒါန်းပေးနိုင်ပါသည်။ သင်၏ ပံ့ပိုးမှုသည် ကျွန်ုပ်တို့အတွက် များစွာတန်ဖိုးရှိပါသည်။",
    accHolder: "Account Holder",
    paymentMethod: "Payment Method",
    kbzPayInstruction: "မိမိထံ ငွေပေးချေရန် KBZPay QR Scanner ကို အသုံးပြုပါ။",
    secureTransfer: "SECURE TRANSFER",
    alternativeTransfer: "Alternative Transfer Info",
    service: "Service",
    beneficiary: "Beneficiary",
    action: "Action",
    tipSupport: "Tip / Support Developer",
    closePanel: "Close Panel",

    // Goals & Difficulty
    goal1: "Build Muscle",
    goal2: "Lose Fat",
    goal3: "Increase Strength",
    goal4: "Improve Fitness",
    diffBeginner: "Beginner",
    diffIntermediate: "Intermediate",
    diffAdvanced: "Advanced",
    diffFatLoss: "Fat Loss"
  },
  my: {
    // Header & Tabs
    title: "GymMaster",
    subtitle: "လေ့ကျင့်ခန်း လမ်းညွှန်",
    tabLibrary: "ခန္ဓာဗေဒနှင့် လေ့ကျင့်ခန်းများ",
    tabPrograms: "လေ့ကျင့်ခန်း အစီအစဉ်များ",
    tabTracker: "ယနေ့ လေ့ကျင့်ခန်း မှတ်တမ်း",
    tabCoach: "AI နည်းပြလက်ထောက်",
    tabProfile: "ကိုယ်ခန္ဓာဆိုင်ရာ အချက်အလက်",
    currentGoal: "လက်ရှိ ရည်မှန်းချက်",
    anatomicalBmi: "ခန္ဓာကိုယ် ညွှန်းကိန်း (BMI)",
    support: "ပံ့ပိုးရန်",
    active: "အသုံးပြုနေဆဲ",

    // Banner
    bannerBadge: "အပြန်အလှန် လေ့လာနိုင်သော လေ့ကျင့်ခန်းစွယ်စုံကျမ်း",
    bannerTitle: "မှန်ကန်သောပုံစံ။ ဒဏ်ရာကင်းဝေးခြင်း။ ပိုမိုမတင်နိုင်ခြင်း။",
    bannerDesc: "အပြန်အလှန်တုံ့ပြန်လေ့လာနိုင်သော အားကစားခန်းမ လေ့ကျင့်ခန်းပညာပေး၊ ဇီဝစက်မှုဆိုင်ရာ ခန္ဓာဗေဒမြေပုံ၊ စနစ်ကျသော အစီအစဉ်ဇယားများနှင့် အားကစားသိပ္ပံပညာရှင် AI နည်းပြတို့ ပါဝင်သည်။",
    btnViewPlans: "လေ့ကျင့်ခန်း အစီအစဉ်များ ကြည့်ရန်",
    btnConsultCoach: "AI နည်းပြနှင့် တိုင်ပင်ရန်",

    // Library & Search
    exerciseLibrary: "အပြန်အလှန်တုံ့ပြန်နိုင်သော လေ့ကျင့်ခန်းစွယ်စုံကျမ်း",
    searchPlaceholder: "ရင်အုပ်၊ ကျော၊ ထိုင်ထ၊ ဘားတန်း သို့မဟုတ် သက်ရောက်မည့် ကြွက်သား ရှာဖွေရန်...",
    difficultyLabel: "အခက်လဲအဆင့်",
    categoryLabel: "အမျိုးအစား",
    all: "အားလုံး",
    anatomyFilter: "ခန္ဓာဗေဒ စစ်ထုတ်မှု- ဤကြွက်သားကို အဓိက ဦးတည်သော လေ့ကျင့်ခန်းများ-",
    resetFilter: "စစ်ထုတ်မှု ပြန်လည်ပြင်ဆင်ရန်",
    viewGuide: "လမ်းညွှန် ကြည့်မည်",
    noExercises: "ကိုက်ညီသော လေ့ကျင့်ခန်း ရှာမတွေ့ပါ",
    resetFiltersTip: "ခန္ဓာဗေဒ မြေပုံ သို့မဟုတ် စစ်ထုတ်မှုများကို ပြန်လည်ပြင်ဆင်ပြီး ထပ်မံရှာဖွေကြည့်ပါ။",
    close: "ပိတ်ရန်",

    // Exercise details
    kineticGuide: "3D ကာယလှုပ်ရှားမှု လမ်းညွှန်",
    triggerMotion: "3D လှုပ်ရှားမှုပုံစံ စမ်းသပ်ရန်",
    interactiveGuide: "အပြန်အလှန်တုံ့ပြန်မှု လမ်းညွှန်",
    targetMuscles: "သက်ရောက်မည့် ကြွက်သားများ",
    equipment: "အသုံးပြုသော ကိရိယာ",
    movementInstructions: "လေ့ကျင့်ခန်း ဆောင်ရွက်ပုံ အဆင့်ဆင့်",
    correctBreathing: "မှန်ကန်သော အသက်ရှူစနစ်",
    commonMistakes: "အဖြစ်များတတ်သည့် အမှားများ",
    safetyCues: "ဘေးကင်းလုံခြုံရေး အကြံပြုချက်များ",
    levelAdaptations: "အဆင့်အလိုက် လေ့ကျင့်ခန်း ပုံစံကွဲများ",

    // Profile & Analytics
    activeProfile: "အသုံးပြုသူ၏ ကိုယ်ခန္ဓာ အချက်အလက်",
    profileDesc: "သင်၏ ကိုယ်ခန္ဓာ ညွှန်းကိန်းများနှင့် ရည်မှန်းချက်များကို ထည့်သွင်းပါ",
    age: "အသက် (နှစ်)",
    height: "အရပ်အမြင့် (စင်တီမီတာ)",
    weight: "ကိုယ်အလေးချိန် (ကီလိုဂရမ်)",
    fitnessGoal: "ရည်မှန်းချက် ပန်းတိုင်",
    updateBtn: "အချက်အလက်များ အသစ်ပြင်မည်",
    statsUpdated: "ကိုယ်ခန္ဓာအချက်အလက်ကို အောင်မြင်စွာ ပြင်ဆင်ပြီးပါပြီ။",
    loggedWeight: "ကိုယ်အလေးချိန်အသစ် သတ်မှတ်ပြီးပါပြီ-",
    loggedMeasurements: "ကြွက်သားတိုင်းတာချက် အသစ်မှတ်တမ်းတင်ပြီးပါပြီ။",
    anatomicalAnalysis: "ခန္ဓာဗေဒဆိုင်ရာ ဆန်းစစ်ချက်",
    metabolicGuide: "လက်ရှိ BMI နှင့် ဇီဝကမ္မလမ်းညွှန်",
    bmiCategory: "BMI အဆင့်သတ်မှတ်ချက်",
    goalRecs: "အကြံပြုချက် လမ်းညွှန်ချက်များ",
    bodyLogHistory: "ကိုယ်ခန္ဓာ တိုးတက်မှု မှတ်တမ်း",
    trackHistoryDesc: "ကိုယ်အလေးချိန်နှင့် ကြွက်သားအတိုင်းအတာ မှတ်တမ်းများ",
    logWeightBtn: "ကိုယ်အလေးချိန် မှတ်တမ်းတင်ရန်",
    weightLogHistory: "ကိုယ်အလေးချိန် မှတ်တမ်းများ",
    noWeightLogs: "မှတ်တမ်းတင်ထားသော အလေးချိန် မရှိသေးပါ။",
    logTape: "ကြွက်သားတိုင်းတာချက် မှတ်တမ်းတင်ရန် (စင်တီမီတာ)",
    chest: "ရင်အုပ်",
    waist: "ခါး",
    biceps: "လက်မောင်း",
    thighs: "ပေါင်",
    logTapeBtn: "တိုင်းတာချက်များကို မှတ်တမ်းတင်မည်",
    latestTape: "နောက်ဆုံး တိုင်းတာရရှိသော အတိုင်းအတာများ-",

    // Programs
    curatedPrograms: "အထူးစီစဉ်ထားသော လေ့ကျင့်ခန်းဇယားများ",
    programsDesc: "ကျွမ်းကျင်သော ကြံ့ခိုင်ရေးနည်းပြများ ကိုယ်တိုင်ရေးဆွဲထားသော လေ့ကျင့်ခန်းဇယားများထဲမှ ရွေးချယ်ပါ။ လေ့ကျင့်ခန်းအကြိမ်ရေ၊ ကြွက်သားအုပ်စုအလိုက် ခွဲခြားမှုများကို အသေးစိတ် ဖော်ပြပေးထားပါသည်။",
    totalExercises: "စုစုပေါင်း လေ့ကျင့်ခန်းအရေအတွက်",
    loadTracker: "လေ့ကျင့်ခန်း မှတ်တမ်းထဲသို့ ထည့်သွင်းမည်",
    daySplitFocus: "ယနေ့ အဓိက ဦးတည်ချက်",
    guidedProgram: "3D စနစ်သုံး လေ့ကျင့်ခန်း အစီအစဉ်",

    // Tracker
    activeTracker: "လက်ရှိ လေ့ကျင့်ခန်း မှတ်တမ်းဇယား",
    activeTrackerDesc: "ယနေ့ လေ့ကျင့်ခန်းဆောင်ရွက်မှုများကို မှတ်တမ်းတင်ပါ",
    dailyFocus: "ယနေ့ အဓိက သက်ရောက်မည့် ကြွက်သားများ",
    trackerTip: "သတ်မှတ်ထားသော အကြိမ်ရေနှင့် အဝိုင်းအရေအတွက် ပြည့်တိုင်း အမှန်ခြစ်ပေးပါ။ သင်မတင်နိုင်ခဲ့သော အလေးချိန်နှင့် အကြိမ်ရေများကို စိတ်ကြိုက် ပြင်ဆင်မှတ်တမ်းတင်နိုင်ပါသည်။",
    workoutLogged: "လေ့ကျင့်ခန်း ပြီးမြောက်ကြောင်း မှတ်တမ်းတင်ပြီးပါပြီ။",
    workoutLoggedDesc: "တကယ်တော်ပါတယ်။ ယနေ့ လေ့ကျင့်ခန်း ဆောင်ရွက်မှု မှတ်တမ်းကို သိမ်းဆည်းလိုက်ပါပြီ။ ဆက်လက်ပြီး တစိုက်မတ်မတ် ကြိုးစားပေးပါဦး။",
    target: "သတ်မှတ်ချက်",
    log: "မှတ်တမ်း",
    completeSession: "ယနေ့ လေ့ကျင့်ခန်း ပြီးဆုံးကြောင်း မှတ်တမ်းတင်မည်",
    workoutHistory: "လေ့ကျင့်ခန်း ဆောင်ရွက်မှု သမိုင်းမှတ်တမ်း",
    consistentTracking: "သမိုင်းမှတ်တမ်း အသေးစိတ်များ",
    weeklyStreak: "အပတ်စဉ် ရက်ဆက် လုပ်ဆောင်နိုင်မှု",
    completed: "ပြီးမြောက်မှု",
    noHistory: "သမိုင်းမှတ်တမ်း မရှိသေးပါ။ ယနေ့ လေ့ကျင့်ခန်း စတင်လုပ်ဆောင်လိုက်ပါ။",
    exDone: "ခုပြီးပြီ",

    // AI Coach
    coachDesc: "ကိုယ်ပိုင် အားကစားသိပ္ပံနှင့် လေ့ကျင့်ခန်း အကြံပြုချက်များ",
    coachWelcome: "မင်္ဂလာပါ! ကျွန်တော်ကတော့ သင်၏ **GymMaster AI နည်းပြ** ဖြစ်ပါတယ်။ ကျွန်တော့်မှာ အားကစားသိပ္ပံဆိုင်ရာ အချက်အလက်များ၊ ခန္ဓာဗေဒ လေ့လာချက်များနှင့် သင်၏ ကိုယ်ခန္ဓာ အချက်အလက်များ ရှိပါတယ်။\n\nလေ့ကျင့်ခန်း အကြံပြုတောင်းဆိုခြင်း၊ စိတ်ကြိုက် ဇယားများ ရေးဆွဲခိုင်းခြင်း သို့မဟုတ် မှန်ကန်သောပုံစံနှင့် ဘေးကင်းရေး အကြံပြုချက်များကို မေးမြန်းနိုင်ပါတယ်!",
    coachPlaceholderProfile: "မေးခွန်းများ မေးမြန်းခြင်း သို့မဟုတ် ဇယားရေးဆွဲခိုင်းခြင်းများ ပြုလုပ်နိုင်ပါသည်...",
    coachPlaceholderGuest: "အားကစားဆိုင်ရာ မေးခွန်းများကို မေးမြန်းပါ...",
    coachThinking: "နည်းပြ AI စဉ်းစားနေပါသည်...",
    connectionAlert: "ချိတ်ဆက်မှု အချက်ပေးချက်",
    presetLeg: "ပေါင်ကြွက်သား ခွန်အား",
    presetLegText: "ပေါင်ကြွက်သား သန်မာဖို့အတွက် ဘယ်လိုဆော့ရမလဲ အကြံပြုပေးပါ?",
    presetSquat: "ထိုင်ထ စနစ်ကျပုံ",
    presetSquatText: "Barbell Squat (ထိုင်ထ) ဆော့တဲ့အခါ မှန်ကန်တဲ့ပုံစံ ဖြစ်အောင် ဘယ်လိုလုပ်ရမလဲ?",
    presetFatLoss: "အဆီချ အစီအစဉ်",
    presetFatLossText: "ကျွန်တော့်အတွက် သီးသန့် အဆီချဖို့ လေ့ကျင့်ခန်းဇယား ရေးဆွဲပေးပါ",
    presetBench: "ရင်အုပ် ဆော့ကစားပုံ",
    presetBenchText: "Bench Press ဆော့တဲ့အခါ အဖြစ်အများဆုံး အမှားတွေက ဘာတွေလဲ?",

    // Support Panel
    supportDev: "ပံ့ပိုးကူညီသူများသို့",
    supportDevMM: "ပံ့ပိုးကူညီမှု ဆက်တင်",
    supportDesc: "ဆော့ဝဲလ် ဆက်လက်ဖွံ့ဖြိုးတိုးတက်စေရန် လှူဒါန်းပေးနိုင်ပါသည်",
    supportBurmeseText: "ကျေးဇူးပြု၍ GymMaster ဆော့ဝဲလ် ပိုမိုကောင်းမွန်လာစေရန်နှင့် ဆက်လက်ပံ့ပိုးကူညီရန်အတွက် အောက်ပါ KBZPay QR Code ကိုအသုံးပြု၍ လှူဒါန်းပေးနိုင်ပါသည်။ သင်၏ ပံ့ပိုးမှုသည် ကျွန်ုပ်တို့အတွက် များစွာတန်ဖိုးရှိပါသည်။",
    accHolder: "အကောင့်ပိုင်ရှင်",
    paymentMethod: "ငွေပေးချေမှုစနစ်",
    kbzPayInstruction: "မိမိထံ ငွေပေးချေရန် KBZPay QR Scanner ကို အသုံးပြုပါ။",
    secureTransfer: "ဘေးကင်းစိတ်ချရသော လွှဲပြောင်းမှု",
    alternativeTransfer: "အခြား ငွေလွှဲ အချက်အလက်များ",
    service: "ဝန်ဆောင်မှု",
    beneficiary: "လက်ခံသူ",
    action: "လုပ်ဆောင်ချက်",
    tipSupport: "တီထွင်သူအား ပံ့ပိုးကူညီရန် / လှူဒါန်းရန်",
    closePanel: "ပိတ်မည်",

    // Goals & Difficulty
    goal1: "ကြွက်သား တည်ဆောက်ရန်",
    goal2: "အဆီချရန်",
    goal3: "ခွန်အား တိုးမြှင့်ရန်",
    goal4: "ကျန်းမာကြံ့ခိုင်စေရန်",
    diffBeginner: "အခြေခံ",
    diffIntermediate: "အလယ်အလတ်",
    diffAdvanced: "အဆင့်မြင့်",
    diffFatLoss: "အဆီချရန်"
  }
};

// Map original strings dynamically to Burmese
const CATEGORIES: Record<string, string> = {
  "Chest": "ရင်အုပ် (Chest)",
  "Back": "ကျောပြင် (Back)",
  "Shoulders": "ပုခုံး (Shoulders)",
  "Arms": "လက်မောင်း (Arms)",
  "Legs": "ခြေထောက် (Legs)",
  "Core": "ဗိုက်နှင့်ခါး (Core)",
  "Cardio": "ကာဒီယို (Cardio)"
};

const DIFFICULTIES: Record<string, string> = {
  "Beginner": "အခြေခံ (Beginner)",
  "Intermediate": "အလယ်အလတ် (Intermediate)",
  "Advanced": "အဆင့်မြင့် (Advanced)",
  "Fat Loss": "အဆီချခြင်း (Fat Loss)"
};

const GOALS: Record<string, string> = {
  "Build Muscle": "ကြွက်သား တည်ဆောက်ရန် (Build Muscle)",
  "Lose Fat": "အဆီချရန် (Lose Fat)",
  "Increase Strength": "ခွန်အား တိုးမြှင့်ရန် (Increase Strength)",
  "Improve Fitness": "ကျန်းမာကြံ့ခိုင်စေရန် (Improve Fitness)"
};

const MUSCLES: Record<string, string> = {
  "Pectoralis Major": "ရင်အုပ်ကြွက်သားကြီး (Pectoralis Major)",
  "Pectoralis Major (Chest)": "ရင်အုပ်ကြွက်သားကြီး (Chest)",
  "Anterior Deltoids": "ပုခုံးရှေ့ကြွက်သား (Anterior Deltoids)",
  "Anterior Deltoids (Front Shoulder)": "ပုခုံးရှေ့ကြွက်သား (Front Shoulder)",
  "Triceps Brachii": "လက်မောင်းနောက်ကြွက်သား (Triceps)",
  "Clavicular Head (Upper Chest)": "ရင်အုပ်အပေါ်ကြွက်သား (Upper Chest)",
  "Lateral Deltoids (Side Shoulder)": "ပုခုံးဘေးကြွက်သား (Side Shoulder)",
  "Latissimus Dorsi": "ကျောပြင်ကျယ်ကြွက်သား (Lats)",
  "Latissimus Dorsi (Lats)": "ကျောပြင်ကျယ်ကြွက်သား (Lats)",
  "Teres Major": "ကျောပြင်အပေါ်ကြွက်သား (Teres Major)",
  "Rhomboids": "ကျောလယ်ကြွက်သား (Rhomboids)",
  "Posterior Deltoids": "ပုခုံးနောက်ကြွက်သား (Posterior Deltoids)",
  "Biceps Brachii": "လက်မောင်းရှေ့ကြွက်သား (Biceps)",
  "Brachialis": "လက်မောင်းအပြင်ကြွက်သား (Brachialis)",
  "Forearms (Brachioradialis)": "လက်ဖျံကြွက်သား (Forearms)",
  "Quadriceps": "ပေါင်ရှေ့ကြွက်သား (Quads)",
  "Quadriceps (Quads)": "ပေါင်ရှေ့ကြွက်သား (Quads)",
  "Gluteus Maximus": "တင်ပါးကြွက်သား (Glutes)",
  "Gluteus Maximus (Glutes)": "တင်ပါးကြွက်သား (Glutes)",
  "Hamstrings": "ပေါင်နောက်ကြွက်သား (Hamstrings)",
  "Gastrocnemius (Calves)": "ခြေသလုံးကြွက်သား (Calves)",
  "Calves": "ခြေသလုံးကြွက်သား (Calves)",
  "Rectus Abdominis": "ဗိုက်အလယ်ကြွက်သား (Abs)",
  "Rectus Abdominis (Abs)": "ဗိုက်အလယ်ကြွက်သား (Abs)",
  "Obliques": "ဗိုက်ဘေးစောင်းကြွက်သား (Obliques)",
  "Transverse Abdominis": "ဗိုက်အတွင်းပိုင်းကြွက်သား (Deep Core)",
  "Cardiovascular System": "နှလုံးသွေးလှည့်ပတ်မှုစနစ် (Cardio)",
  "Lower Back": "ခါးအောက်ပိုင်းကြွက်သား (Lower Back)"
};

const EQUIPMENTS: Record<string, string> = {
  "Barbell & Flat Bench": "ဘားတန်းနှင့် ခုံပြား",
  "Barbell & Incline Bench": "ဘားတန်းနှင့် စောင်းခုံ",
  "Dumbbells": "ဒမ်ဘယ်များ",
  "Dumbbells & Flat Bench": "ဒမ်ဘယ်နှင့် ခုံပြား",
  "Dumbbells & Incline Bench": "ဒမ်ဘယ်နှင့် စောင်းခုံ",
  "Pull-Up Bar": "ဆွဲတန်း (Pull-Up Bar)",
  "Cable Machine": "ကေဘယ်စက် (Cable Machine)",
  "Cable Machine & Flat Bench": "ကေဘယ်စက်နှင့် ခုံပြား",
  "Bodyweight": "ကိုယ်အလေးချိန် (Bodyweight)",
  "Yoga Mat": "ယောဂဖျာ",
  "Barbell": "ဘားတန်း (Barbell)",
  "Leg Press Machine": "ခြေထောက်တွန်းစက် (Leg Press Machine)",
  "Leg Extension Machine": "ပေါင်ဆန့်စက် (Leg Extension Machine)",
  "Leg Curl Machine": "ပေါင်ကွေးစက် (Leg Curl Machine)",
  "Calf Raise Machine": "ခြေသလုံးမြှင့်စက် (Calf Raise Machine)",
  "Stationary Bicycle": "စက်ဘီးစီးစက် (Stationary Bike)",
  "Jump Rope": "ခုန်ကြိုး",
  "Flat Bench / Floor": "ကြမ်းပြင် သို့မဟုတ် ခုံပြား"
};

// Dynamic translator helpers
export function tCategory(cat: string, lang: Language): string {
  if (lang === "en") return cat;
  return CATEGORIES[cat] || cat;
}

export function tDifficulty(diff: string, lang: Language): string {
  if (lang === "en") return diff;
  return DIFFICULTIES[diff] || diff;
}

export function tGoal(goal: string, lang: Language): string {
  if (lang === "en") return goal;
  return GOALS[goal] || goal;
}

export function tMuscle(muscle: string, lang: Language): string {
  if (lang === "en") return muscle;
  return MUSCLES[muscle] || muscle;
}

export function tEquipment(equip: string, lang: Language): string {
  if (lang === "en") return equip;
  return EQUIPMENTS[equip] || equip;
}

// Translate Workout Plan details
const PLAN_TRANSLATIONS: Record<string, { name: string; desc: string; days: Record<string, { dayName: string; focus: string }> }> = {
  "beg-full-body": {
    name: "အခြေခံ ၃ ရက် တစ်ကိုယ်လုံးဆော့ကစားနည်း",
    desc: "လေ့ကျင့်ခန်းစတင်လုပ်ဆောင်သူများအတွက် ကြွက်သားအခြေခံ၊ အဆစ်အမြစ်တည်ငြိမ်မှုနှင့် မှန်ကန်သော ပုံစံရရှိစေရန် ရည်ရွယ်သည်။ စနစ်တကျထိန်းချုပ်ဆော့ရန် အဓိကဖြစ်သည်။",
    days: {
      "Day 1: Foundation": { dayName: "နေ့စဉ် ၁: အခြေခံတည်ဆောက်မှု", focus: "တစ်ကိုယ်လုံးပေါင်းစပ်လေ့ကျင့်ခန်း" },
      "Day 2: Recovery Cardio": { dayName: "နေ့စဉ် ၂: အပန်းဖြေကာဒီယို", focus: "တက်ကြွစွာအနားယူခြင်းနှင့် ဝမ်းဗိုက်လေ့ကျင့်ခန်း" },
      "Day 3: Strength Builders": { dayName: "နေ့စဉ် ၃: ခွန်အားမြှင့်တင်ခြင်း", focus: "တစ်ကိုယ်လုံးမျှတစေမှု" }
    }
  },
  "int-push-pull-legs": {
    name: "အလယ်အလတ် Push Pull Legs (PPL)",
    desc: "ဂန္ထဝင်ကြွက်သားတည်ဆောက်မှုပုံစံ။ ဇီဝစက်မှုစနစ်အလိုက် တွန်းခြင်း (Push)၊ ဆွဲခြင်း (Pull)နှင့် ခြေထောက် (Legs) ကြွက်သားစုများခွဲခြားကာ အကောင်းဆုံးပြန်လည်နာလန်ထူမှုကို ရရှိစေသည်။",
    days: {
      "Day 1: Push Focus": { dayName: "နေ့စဉ် ၁: တွန်းခြင်းအုပ်စု", focus: "ရင်အုပ်၊ ပုခုံးနှင့် လက်မောင်းနောက်ကြွက်သား" },
      "Day 2: Pull Focus": { dayName: "နေ့စဉ် ၂: ဆွဲခြင်းအုပ်စု", focus: "ကျောပြင်နှင့် လက်မောင်းရှေ့ကြွက်သား" },
      "Day 3: Legs & Core": { dayName: "နေ့စဉ် ၃: ခြေထောက်နှင့် ဝမ်းဗိုက်", focus: "ပေါင်ရှေ့၊ ပေါင်နောက်နှင့် ဗိုက်" }
    }
  },
  "int-muscle-hypertrophy": {
    name: "ဂန္ထဝင် ကြွက်သားထု တည်ဆောက်ရေးဇယား",
    desc: "ကြွက်သားအုပ်စုတစ်ခုစီကို တစ်ပတ်လျှင် နှစ်ကြိမ်စီ အချိန်နှင့်အမျှ ထုထည်အားကောင်းစွာ ဆော့ကစားပြီး ကြွက်သားကြီးထွားမှုကို အမြင့်မားဆုံးဖြစ်စေသည်။",
    days: {
      "Day 1: Upper Body Power": { dayName: "နေ့စဉ် ၁: အပေါ်ပိုင်း ခွန်အား", focus: "ရင်အုပ်နှင့် ကျောပြင်ထုထည်" },
      "Day 2: Lower Body Hypertrophy": { dayName: "နေ့စဉ် ၂: အောက်ပိုင်း ကြီးထွားမှု", focus: "ပေါင်ရှေ့နှင့် ပေါင်နောက်" },
      "Day 3: Upper Body Sculpt": { dayName: "နေ့စဉ် ၃: အပေါ်ပိုင်း အချိုးအစား", focus: "ပုခုံး၊ လက်မောင်းနှင့် အသေးစိတ်" },
      "Day 4: Lower Body Details": { dayName: "နေ့စဉ် ၄: အောက်ပိုင်း အသေးစိတ်", focus: "ခြေတစ်ဖက်ချင်းလေ့ကျင့်ခန်းနှင့် ဝမ်းဗိုက်" }
    }
  },
  "adv-strength": {
    name: "အဆင့်မြင့် ခွန်အားနှင့် အားကစားသမားများအတွက်ဇယား",
    desc: "အဓိကအလေးမခြင်းဖြစ်သော Deadlift, Squat, Bench နှင့် Row လေ့ကျင့်ခန်းများကို အလေးချိန်ပြင်းပြင်းဖြင့် စနစ်တကျဆော့ကစားပြီး ခွန်အားအပြည့်အဝရရှိစေရန်။",
    days: {
      "Day 1: Squat & Leg Strength": { dayName: "နေ့စဉ် ၁: ထိုင်ထနှင့် ခြေထောက်ခွန်အား", focus: "အပြင်းအထန် ခြေထောက်တွန်းအား" },
      "Day 2: Heavy Bench & Press": { dayName: "နေ့စဉ် ၂: အိပ်မခြင်းနှင့် တွန်းအား", focus: "ခန္ဓာကိုယ်အပေါ်ပိုင်းစွမ်းအား" },
      "Day 3: Deadlift & Back Power": { dayName: "နေ့စဉ် ၃: ဒက်လစ်ဖ်နှင့် ကျောပြင်ခွန်အား", focus: "ခန္ဓာကိုယ်နောက်ခြမ်းကြွက်သားများ" }
    }
  },
  "fat-loss-hiit": {
    name: "HIIT နှင့် ပြင်းထန်သော အဆီချပုံဖော်ရေးဇယား",
    desc: "နှလုံးခုန်နှုန်းကို မြှင့်တင်ပေးပြီး ကယ်လိုရီလောင်ကျွမ်းမှုကို အမြင့်မားဆုံးဖြစ်စေကာ ရှိပြီးသားကြွက်သားထုကို ထိန်းသိမ်းပေးသည်။",
    days: {
      "Day 1: High Intensity Core & Chest": { dayName: "နေ့စဉ် ၁: ပြင်းထန်သော ဗိုက်နှင့် ရင်အုပ်", focus: "ဇီဝကမ္မဖြစ်စဉ် လှုံ့ဆော်မှု" },
      "Day 2: Steady Calorie Burn": { dayName: "နေ့စဉ် ၂: တသမတ်တည်း ကယ်လိုရီလောင်ကျွမ်းခြင်း", focus: "နှေးကွေးပြင်းထန်ကာဒီယိုနှင့် ခြေထောက်ခံနိုင်ရည်" },
      "Day 3: Full Body Cardio-Weights": { dayName: "နေ့စဉ် ၃: တစ်ကိုယ်လုံး ကာဒီယိုအလေးမခြင်း", focus: "ခံနိုင်ရည် ပတ်လမ်းလေ့ကျင့်ခန်း" }
    }
  }
};

export function tPlanName(id: string, defName: string, lang: Language): string {
  if (lang === "en") return defName;
  return PLAN_TRANSLATIONS[id]?.name || defName;
}

export function tPlanDesc(id: string, defDesc: string, lang: Language): string {
  if (lang === "en") return defDesc;
  return PLAN_TRANSLATIONS[id]?.desc || defDesc;
}

export function tDayName(planId: string, dayName: string, lang: Language): string {
  if (lang === "en") return dayName;
  return PLAN_TRANSLATIONS[planId]?.days[dayName]?.dayName || dayName;
}

export function tDayFocus(planId: string, dayName: string, lang: Language, originalFocus: string): string {
  if (lang === "en") return originalFocus;
  return PLAN_TRANSLATIONS[planId]?.days[dayName]?.focus || originalFocus;
}

const EXERCISE_TRANSLATIONS: Record<string, {
  name: string;
  startingPosition: string;
  stepByStep: string[];
  breathing: string;
  commonMistakes: string[];
  safetyTips: string[];
  variations?: { name: string; description: string }[];
  movementFrames?: { before: string; after: string };
}> = {
  "bench-press": {
    name: "ဘားတန်း အိပ်မခြင်း (Barbell Bench Press)",
    startingPosition: "ခုံတန်းလျားပေါ်တွင် ပက်လက်လှဲအိပ်ပါ၊ ဘားတန်းကို ပုခုံးအကျယ်ထက် အနည်းငယ်ပိုကျယ်ပြီး ဆုပ်ကိုင်ပါ။ ခြေထောက်နှစ်ဖက်ကို ကြမ်းပြင်ပေါ်တွင် ပြားပြားချထားပါ။ ပခုံးရိုးကို နောက်သို့ ဆွဲကပ်ထားပါ။",
    stepByStep: [
      "ဘားတန်းကို မတင်ပြီး လက်မောင်းများကို ဆန့်ထုတ်ကာ ရင်ဘတ်ပေါ်တည့်တည့်တွင် ထိန်းထားပါ။",
      "အသက်ကို ရှူသွင်းပြီး ဘားတန်းကို ရင်အုပ်အလယ်သို့ ဖြည်းညှင်းစွာ ချပါ၊ တံတောင်ဆစ်များကို ၄၅ ဒီဂရီ ထောင့်တွင် ထားရှိပါ။",
      "ရင်ဘတ်ကို မဆောင့်မိစေဘဲ ဘားတန်းဖြည်းဖြည်းထိရုံ ထိပါစေ။",
      "အသက်ကို ပြင်းပြင်းရှူထုတ်ပြီး ခြေထောက်အားကိုသုံးကာ ဘားတန်းကို မူလအနေအထားသို့ တွန်းတင်ပါ။ ရင်ဘတ်ကြွက်သားကို ညှစ်ထားပါ။"
    ],
    breathing: "ဘားတန်းချချိန်တွင် အသက်ရှူသွင်းပြီး မတင်ချိန်တွင် အသက်ရှူထုတ်ပါ။",
    commonMistakes: [
      "ဘားတန်းကို ရင်ဘတ်နှင့် ဆောင့်ကန်မတင်ခြင်း။",
      "တံတောင်ဆစ်ကို ၉၀ ဒီဂရီအထိ ကားထုတ်လွန်းခြင်း (ပုခုံးဒဏ်ရာ ရစေနိုင်သည်)။",
      "တွန်းတင်စဉ် တင်ပါး သို့မဟုတ် ခြေထောက်ကို ခုံပေါ်မှ ကြွခြင်း။"
    ],
    safetyTips: [
      "အဝိတ်ပြင်းပြင်းမကစားမီ ကူညီပေးမည့်သူ (Spotter) ထားရှိပါ။",
      "လက်ကောက်ဝတ်ကို အနောက်သို့ ကွေးမသွားစေဘဲ တည့်တည့်မတ်မတ် ထိန်းထားပါ။"
    ],
    variations: [
      { name: "ဒမ်ဘယ် ရင်အုပ်တွန်းခြင်း (Dumbbell Press)", description: "ဒမ်ဘယ်များကိုသုံး၍ လှုပ်ရှားမှုအကွာအဝေးကို ပိုမိုကောင်းမွန်စေပြီး အဆစ်အမြစ်များကို သက်သာစေသည်။" },
      { name: "Pause Bench Press", description: "ရင်ဘတ်ပေါ်တွင် ဘားတန်းကို ၂ စက္ကန့်ခန့် ရပ်နားပြီးမှ တွန်းတင်ပါ (ခွန်အားပိုမို တက်စေသည်)။" }
    ],
    movementFrames: {
      before: "လက်မောင်းဆန့်လျက် ဘားတန်းကို ရင်ဘတ်အထက်တွင် ထိန်းထားသည့် အနေအထား",
      after: "ဘားတန်းကို ရင်ဘတ်အလယ်နားအထိ ဖြည်းဖြည်းချင်းချထားသည့် အနေအထား"
    }
  },
  "incline-bench-press": {
    name: "အပေါ်ရင်အုပ် ဘားတန်းတွန်းခြင်း (Incline Barbell Bench Press)",
    startingPosition: "၃၀-၄၅ ဒီဂရီ စောင်းထားသော ခုံတန်းပေါ်တွင် လှဲအိပ်ပါ။ ဘားတန်းကို အလယ်အလတ်အကျယ်ဖြင့် ဆုပ်ကိုင်ပြီး ပုခုံးအထက်တွင် တည့်တည့်မတ်မတ် ကိုင်ထားပါ။",
    stepByStep: [
      "ဘားတန်းကို ထိန်းချုပ်ကာ ရင်ဘတ်အပေါ်ပိုင်း (ညှပ်ရိုးအောက်နား) သို့ ဖြည်းဖြည်းချင်းချပါ။",
      "တံတောင်ဆစ်များကို ကားမထွက်စေဘဲ ကိုယ်ခန္ဓာနား ကပ်ထားပါ။",
      "ဘားတန်းကို အနည်းငယ် ကွေးသော လမ်းကြောင်းအတိုင်း မူလအနေအထားသို့ တွန်းတင်ပါ။ လက်မောင်းကို ဆန့်ထုတ်သော်လည်း တံတောင်ဆစ်ကို အလွန်အမင်း မလော့ခ်ချပါနှင့်။"
    ],
    breathing: "ဘားတန်းချစဉ် အသက်ရှူသွင်းပြီး တွန်းတင်စဉ် အသက်ပြင်းပြင်း ရှူထုတ်ပါ။",
    commonMistakes: [
      "စောင်းထောင့်ကို ၄၅ ဒီဂရီထက် ပိုစောင်းခြင်း (ပုခုံးရှေ့ကြွက်သားသို့ အလေးချိန် ရောက်သွားစေသည်)။",
      "ဘားတန်းကို ရင်အုပ်အပေါ်ပိုင်းအစား ဝမ်းဗိုက်နားသို့ ချခြင်း။"
    ],
    safetyTips: [
      "အလေးတင်မကစားမီ ခုံစောင်းနေရာ စနစ်တကျ လော့ခ်ကျမကျ သေချာစစ်ဆေးပါ။",
      "လက်မကို ဘားတန်းအောက်မှ ပတ်ကိုင်သည့် စနစ်မသုံးပါနှင့် (အလွန်အန္တရာယ်များပါသည်)။"
    ],
    variations: [
      { name: "အပေါ်ရင်အုပ် ဒမ်ဘယ်တွန်းခြင်း", description: "ဒမ်ဘယ်များဖြင့် ပိုမို သဘာဝကျသော လက်လှုပ်ရှားမှု လမ်းကြောင်း ရစေသည်။" },
      { name: "Incline Cable Press", description: "ကေဘယ်စက်ကို အသုံးပြု၍ ရင်အုပ်ပေါ် fibers များကို အဆက်မပြတ် တင်းအားပေးသည်။" }
    ]
  },
  "dumbbell-fly": {
    name: "ဒမ်ဘယ် ရင်အုပ်ကားခြင်း (Flat Dumbbell Fly)",
    startingPosition: "ခုံပြားပေါ်တွင် ပက်လက်လှဲအိပ်ပြီး ဒမ်ဘယ်များကို ရင်ဘတ်ပေါ်တွင် လက်ဖဝါးချင်း မျက်နှာချင်းဆိုင် ကိုင်ထားပါ။ တံတောင်ဆစ်ကို အနည်းငယ် ကွေးထားပါ။",
    stepByStep: [
      "တံတောင်ဆစ် အနည်းငယ် ကွေးလျက်၊ လက်မောင်းနှစ်ဖက်ကို ဘေးဘက်သို့ စက်ဝိုင်းပုံစံ ကားချပါ။",
      "ရင်အုပ်ကြွက်သား ဆန့်ထွက်သွားသည်ဟု ခံစားရသည်အထိ (လက်မောင်း ကြမ်းပြင်နှင့် မျဉ်းပြိုင်အထိ) ကားချပါ။",
      "ရင်အုပ်ကြွက်သားကို ညှစ်အားပေးပြီး ဒမ်ဘယ်များကို မူလစက်ဝိုင်းပုံလမ်းကြောင်းအတိုင်း ပြန်လည် စုစည်းပါ။"
    ],
    breathing: "လက်မောင်းကားချစဉ် အသက်ရှူသွင်းပြီး၊ ပြန်စုစဉ် အသက်ရှူထုတ်ပါ။",
    commonMistakes: [
      "အောက်ခြေတွင် တံတောင်ဆစ်ကို အလွန်အမင်း ကွေးပြီး တွန်းတင်ခြင်း (Press ပုံစံ ဖြစ်သွားစေသည်)။",
      "ဒမ်ဘယ်ကို အလွန်အမင်း အောက်ချလွန်း၍ ပုခုံးဆစ်ကို နာကျင်စေခြင်း။"
    ],
    safetyTips: [
      "လှုပ်ရှားမှုများကို ဖြည်းဖြည်းနှင့် မှန်မှန် ပြုလုပ်ပါ။ ဆောင့်ကစားခြင်း မပြုရ။",
      "ကစားစဉ်တစ်လျှောက် တံတောင်ဆစ်ကို အနည်းငယ် အမြဲ ကွေးထားပေးပါ။"
    ],
    variations: [
      { name: "Floor Dumbbell Fly", description: "ကြမ်းပြင်ပေါ်တွင် ပြုလုပ်ခြင်းဖြင့် ပုခုံးဒဏ်ရာရခြင်းမှ ကာကွယ်ပေးသည်။" },
      { name: "Incline Cable Fly", description: "ကေဘယ်ကို သုံး၍ ရင်အုပ်ကြွက်သားဆီသို့ အဆက်မပြတ် တင်းအား ပေးစွမ်းသည်။" }
    ]
  },
  "push-up": {
    name: "ဒိုက်ထိုးခြင်း (Classic Push Up)",
    startingPosition: "လက်နှစ်ဖက်ကို ကြမ်းပြင်ပေါ် ပုခုံးထက် အနည်းငယ်ကျယ်ချထားပါ။ ခြေထောက်များကို ဆန့်ထုတ်ပြီး ခြေဖျားထောက်ပါ။ ခန္ဓာကိုယ်ကို ခေါင်းမှ ခြေဖနောင့်အထိ မျဉ်းဖြောင့်အတိုင်း ထိန်းထားပါ။",
    stepByStep: [
      "အသက်ရှူသွင်းပြီး တံတောင်ဆစ်များကို ၄၅ ဒီဂရီခန့် ကွေးကာ ခန္ဓာကိုယ်ကို ဖြည်းဖြည်းချင်း အောက်ချပါ။",
      "ရင်ဘတ်ကို ကြမ်းပြင်နှင့် ၁ လက်မခန့် အကွာအထိ ချပါ။",
      "ရင်အုပ်ကို ညှစ်ပြီး လက်ဝါးနှစ်ဖက်ဖြင့် ကြမ်းပြင်ကို တွန်းကာ မူလ high-plank အနေအထားသို့ ပြန်တက်ပါ။"
    ],
    breathing: "အောက်ချစဉ် အသက်ရှူသွင်းပြီး၊ အထက်သို့ တွန်းတင်စဉ် အသက်ရှူထုတ်ပါ။",
    commonMistakes: [
      "တင်ပါးများ အောက်သို့ လျှောကျခြင်း သို့မဟုတ် ခါးလွန်းခြင်း။",
      "တံတောင်ဆစ်ကို ၉၀ ဒီဂရီအပြင်ဘက်သို့ ကားထုတ်မိခြင်း။",
      "ခေါင်းကို အောက်သို့ ငိုက်ချခြင်း သို့မဟုတ် အရှေ့သို့ ကော့ကြည့်ခြင်း။"
    ],
    safetyTips: [
      "ခါးအောက်ပိုင်းကို ကာကွယ်ရန် ဝမ်းဗိုက်နှင့် တင်ပါးကြွက်သားများကို တင်းတင်းညှစ်ထားပါ။",
      "လက်ကောက်ဝတ် နာကျင်ပါက push-up bar သို့မဟုတ် ဒမ်ဘယ်ကို အသုံးပြုပါ။"
    ],
    variations: [
      { name: "ဒူးထောက် ဒိုက်ထိုးခြင်း (Knee Push Up)", description: "အလေးချိန် သက်သာစေပြီး စတင်လေ့ကျင့်သူများ ပုံစံမှန်စေရန် ကူညီပေးသည်။" },
      { name: "Decline Push Up", description: "ခြေထောက်ကို ခုံပေါ်တင်ပြီး ဒိုက်ထိုးခြင်းဖြင့် ရင်အုပ်အပေါ်ပိုင်းကို ပိုမို သက်ရောက်စေသည်။" }
    ]
  },
  "cable-crossover": {
    name: "ကေဘယ် ရင်အုပ်ဆွဲခြင်း (Cable Crossover)",
    startingPosition: "ကေဘယ်သီးများကို ခေါင်းအထက်တွင် ထားပါ။ စက်အလယ်တွင် ရပ်ပြီး ခြေတစ်လှမ်း ရှေ့တိုးပါ၊ ကိုယ်ကို အနည်းငယ် ရှေ့သို့ ကိုင်းထားပါ။",
    stepByStep: [
      "လက်မောင်းကို ဘေးဘက်သို့ ဆန့်ထုတ်ပြီး တံတောင်ဆစ်ကို အနည်းငယ် ကွေးထားပါ။",
      "စက်ဝိုင်းပုံစံ ဆွဲယူပြီး လက်နှစ်ဖက်ကို ရင်အုပ်အောက်ပိုင်း သို့မဟုတ် ခါးအရှေ့နားအထိ ဖြည်းဖြည်းချင်း ယူဆောင်လာပါ။",
      "ရင်အုပ်ကြွက်သားကို အဆုံးထိ ညှစ်အားပေးပါ။",
      "ထိန်းချုပ်ပြီး လက်မောင်းကို မူလဆွဲဆန့်ထားသည့် အနေအထားသို့ ဖြည်းဖြည်းချင်း ပြန်လွှတ်ပါ။"
    ],
    breathing: "လက်နှစ်ဖက် စုဆွဲစဉ် အသက်ရှူထုတ်ပြီး၊ ပြန်လွှတ်စဉ် အသက်ရှူသွင်းပါ။",
    commonMistakes: [
      "ကိုယ်ခန္ဓာကို လွှဲပြီး အရှိန်ဖြင့် ဆွဲခြင်း။",
      "တံတောင်ဆစ်ကို အလွန်ကွေးပြီး တွန်းသည့်ပုံစံ ဖြစ်သွားခြင်း။"
    ],
    safetyTips: [
      "အလေးတုံးညှပ်တံများ စနစ်တကျ ဝင်မဝင် အမြဲစစ်ဆေးပါ။",
      "လေ့ကျင့်ခန်းပြီးဆုံးချိန် ကေဘယ်ကို ဖြည်းဖြည်းချင်း ပြန်လွှတ်ပါ။"
    ],
    variations: [
      { name: "Single-Arm Cable Fly", description: "တစ်ဖက်စီဆော့ခြင်းဖြင့် ဘယ်ညာကြွက်သား မျှတမှု ရှိစေသည်။" },
      { name: "Low-to-High Cable Fly", description: "ကေဘယ်ကို အောက်ခြေတွင်ထားပြီး အပေါ်သို့ ဆွဲတင်ခြင်းဖြင့် ရင်အုပ်အပေါ်ပိုင်းကို သက်ရောက်စေသည်။" }
    ]
  },
  "pull-up": {
    name: "အပေါ်တန်းဆွဲခြင်း (Bodyweight Pull Up)",
    startingPosition: "တန်းကို အပေါ်မှ ဆုပ်ကိုင်ပါ (လက်ဖဝါး အပြင်ဘက်)၊ လက်ကို ပုခုံးထက် ပိုကျယ်စွာ ထားပါ။ ခြေထောက်နှစ်ဖက်ကို နောက်တွင် ချိတ်ထားပါ။",
    stepByStep: [
      "ပခုံးရိုးကို အောက်သို့ ဆွဲချပြီး အရင် စုစည်းလိုက်ပါ။",
      "တံတောင်ဆစ်များကို ခါးဘက်သို့ ဆွဲချသလို အားစိုက်ပြီး ကိုယ်ကို အပေါ်သို့ ဆွဲတင်ပါ။",
      "မေးစေ့သည် တန်းကို ကျော်သည်အထိ ဆွဲတင်ပါ၊ ရင်ဘတ်ကို မတ်မတ်ထားပါ။",
      "ခန္ဓာကိုယ်ကို ဖြည်းဖြည်းချင်း ထိန်းချုပ်ပြီး အောက်သို့ ပြန်ချပါ။"
    ],
    breathing: "ဆွဲတင်စဉ် အသက်ရှူထုတ်ပြီး၊ အောက်ချစဉ် အသက်ရှူသွင်းပါ။",
    commonMistakes: [
      "ခန္ဓာကိုယ်ကို လွှဲပြီး ခြေထောက်ဖြင့် ကန်ကာ တက်ခြင်း။",
      "အဆုံးထိ ဆန့်မချခြင်း သို့မဟုတ် မေးစေ့ တန်းကို မကျော်ခြင်း။",
      "အပေါ်တွင် ပုခုံးများကို ရှေ့သို့ ကုန်းဝင်သွားခြင်း။"
    ],
    safetyTips: [
      "ဆွဲတန်းမဆွဲနိုင်သေးပါက ပံ့ပိုးကြိုး (Resistance band) သို့မဟုတ် အကူစက်ကို အသုံးပြုပါ။",
      "မစတင်မီ ပုခုံးကြွက်သားများကို သေချာ နွေးပေးပါ။"
    ],
    variations: [
      { name: "အကူစက်သုံး ဆွဲတန်းဆွဲခြင်း (Assisted Pull Up)", description: "အဝိတ်ကို လျှော့ချပေးပြီး စတင်သူများအတွက် အထူးသင့်လျော်သည်။" },
      { name: "Weighted Pull Up", description: "ခါးပတ်တွင် အလေးတုံးချိတ်ဆွဲကာ အဆင့်မြင့် ခွန်အားတိုးစေရန် ဆော့ကစားခြင်း။" }
    ],
    movementFrames: {
      before: "တန်းတွင် လက်မောင်းဆန့်လျက် အောက်သို့ တွဲလောင်းဆွဲထားသည့် အနေအထား",
      after: "ခန္ဓာကိုယ်ကို ဆွဲတင်ပြီး မေးစေ့သည် တန်းကို ကျော်သွားသည့် အနေအထား"
    }
  },
  "lat-pulldown": {
    name: "ကျောပြင် ကေဘယ်ဆွဲခြင်း (Cable Lat Pulldown)",
    startingPosition: "ထိုင်ခုံတွင် ထိုင်ပါ၊ ပေါင်အထိန်းတုံးကို တင်းကျပ်စွာ ညှိပါ။ ဘားတန်းကို အပေါ်မှ ကျယ်ကျယ်ဆုပ်ကိုင်ပြီး ကိုယ်ကို နောက်သို့ ၁၀ ဒီဂရီခန့် စောင်းထားပါ။",
    stepByStep: [
      "အသက်ရှူသွင်းပြီး၊ ပြန်ရှူထုတ်စဉ် ဘားတန်းကို ရင်အုပ်အပေါ်ပိုင်းသို့ ဆွဲချပါ။",
      "လက်မောင်းအားထက် တံတောင်ဆစ်များကို နောက်နှင့်အောက်သို့ ဆွဲချသလို ကျောပြင်အားကို သုံးပါ။",
      "ဘားတန်းကို ရင်ဘတ်အပေါ်ပိုင်းတွင် ခဏထိပြီးမှ ဖြည်းဖြည်းချင်း အပေါ်သို့ ပြန်လွှတ်ပါ။"
    ],
    breathing: "ဆွဲချစဉ် အသက်ရှူထုတ်ပြီး၊ အပေါ်လွှတ်စဉ် အသက်ရှူသွင်းပါ။",
    commonMistakes: [
      "ကိုယ်ခန္ဓာကို အလွန်အမင်း နောက်သို့ လွှဲဆွဲခြင်း။",
      "ဘားတန်းကို လည်ပင်းအနောက်သို့ ဆွဲချခြင်း (လည်ပင်းကို ထိခိုက်စေသည်)။"
    ],
    safetyTips: [
      "ပေါင်ထိန်းတုံးသည် မိမိပေါင်နှင့် ကောင်းစွာကပ်နေရန် သေချာညှိပါ။"
    ],
    variations: [
      { name: "Close Grip Pulldown", description: "ကျောလယ်ပိုင်းနှင့် ကြွက်သားအထူအတွက် ပိုမိုသက်ရောက်စေသည်။" }
    ]
  },
  "barbell-row": {
    name: "ဘားတန်း ကျောပြင်ဆွဲခြင်း (Bent Over Barbell Row)",
    startingPosition: "ခြေထောက်ကို ပုခုံးအကျယ်ထားပါ၊ ဘားတန်းကို ကိုင်ပါ။ ဒူးကို အနည်းငယ်ကွေးပြီး တင်ပါးကို နောက်သို့ ပို့ကာ ကိုယ်ကို ၄၅ ဒီဂရီ ကိုင်းထားပါ။ ကျောကို တည့်တည့်ထားပါ။",
    stepByStep: [
      "ဘားတန်းကို ဝမ်းဗိုက်အောက်ပိုင်း/ချက် နားအထိ ဆွဲတင်ပါ၊ တံတောင်ဆစ်များကို ခန္ဓာကိုယ်နား ကပ်ထားပါ။",
      "အပေါ်ဆုံးတွင် ကျောပြင်ကြွက်သားကို ညှစ်ထားပါ။",
      "ဘားတန်းကို ဖြည်းဖြည်းချင်း အောက်သို့ ပြန်ချပါ။"
    ],
    breathing: "ဆွဲတင်စဉ် အသက်ရှူထုတ်ပြီး၊ အောက်ချစဉ် အသက်ရှူသွင်းပါ။",
    commonMistakes: [
      "ခါးကို ကုန်းထားခြင်း (ကျောရိုးပြင်းထန်စွာ ထိခိုက်စေနိုင်သည်)။",
      "ကိုယ်ခန္ဓာကို အပေါ်အောက် လွှဲပြီး ဆွဲတင်ခြင်း။"
    ],
    safetyTips: [
      "ကျောရိုးတည့်တည့် ထားရန် ဝမ်းဗိုက်ကြွက်သားကို အမြဲတောင့်ထားပါ။"
    ]
  },
  "deadlift": {
    name: "ဒက်လစ်ဖ် အလေးမခြင်း (Barbell Deadlift)",
    startingPosition: "ဘားတန်းရှေ့တွင် မတ်တပ်ရပ်ပါ၊ ခြေဖဝါးသည် ဘားတန်းအောက်တွင် ရှိပါစေ။ တင်ပါးကို နောက်သို့ပို့ပြီး ဒူးကိုကွေးကာ ဘားတန်းကို ကိုင်ပါ။ ကျောရိုးကို လုံးဝ မကုန်းပါစေနှင့်။",
    stepByStep: [
      "ခြေဖဝါးဖြင့် ကြမ်းပြင်ကို ပြင်းထန်စွာ တွန်းကန်ပြီး ဘားတန်းနှင့်အတူ မတ်တပ်ရပ်ပါ။",
      "ဘားတန်းကို ခြေထောက်နှင့် ကပ်လျက် မတင်ပြီး တင်ပါးကို ရှေ့သို့ တွန်းကာ တည့်တည့်မတ်မတ်ရပ်ပါ။",
      "တင်ပါးကို နောက်သို့ ပြန်ပို့ပြီး ဘားတန်းကို ခြေထောက်တစ်လျှောက် ဖြည်းဖြည်းချင်း အောက်သို့ ပြန်ချပါ။"
    ],
    breathing: "အောက်တွင် အသက်ရှူသွင်း၊ အသက်အောင့်လျက် မတင်ပြီး၊ အပေါ်ရောက်မှ အသက်ရှူထုတ်ပါ။",
    commonMistakes: [
      "ခါးကို ကုန်းပြီး မခြင်း (အလွန် အန္တရာယ်များပါသည်)။",
      "ဘားတန်းကို ကိုယ်ခန္ဓာနှင့် အလှမ်းဝေးကွာစွာ ထားခြင်း။"
    ],
    safetyTips: [
      "ကျောရိုးကို အမြဲ မျဉ်းဖြောင့်အတိုင်း ထားရှိပါ။ ဖိနပ်အပါး သို့မဟုတ် ခြေဗလာဖြင့် ကစားရန် အကြံပြုသည်။"
    ],
    movementFrames: {
      before: "ခါးတည့်တည့် ဒူးကွေးလျက် ဘားတန်းကို ကိုင်ထားသည့် အောက်ခြေအနေအထား",
      after: "ခန္ဓာကိုယ် မတ်မတ် တင်ပါးညှစ်လျက် ဘားတန်းကို မတင်ထားသည့် အနေအထား"
    }
  },
  "shoulder-press": {
    name: "ဘားတန်း ပုခုံးတွန်းခြင်း (Overhead Barbell Shoulder Press)",
    startingPosition: "ဘားတန်းကို ရင်ဘတ်အပေါ်ပိုင်း ညှပ်ရိုးနားတွင် ထားပါ၊ လက်ဖဝါးကို ရှေ့သို့ လှည့်ကိုင်ပါ။ ခြေထောက်ကို ပုခုံးအကျယ် ဖွင့်ရပ်ပါ။",
    stepByStep: [
      "အသက်ရှူထုတ်ပြီး ဘားတန်းကို ခေါင်းအထက်သို့ တည့်တည့် တွန်းတင်ပါ။ ခေါင်းကို ဘားတန်းလွတ်အောင် အနည်းငယ် နောက်ဆုတ်ပြီးမှ တွန်းပါ။",
      "အပေါ်တွင် လက်မောင်းဆန့်သော်လည်း တံတောင်ဆစ် မလော့ခ်ပါနှင့်။",
      "ဘားတန်းကို ချက်ချင်းမချဘဲ ဖြည်းဖြည်းချင်း ရင်ဘတ်အပေါ်ပိုင်းသို့ ပြန်ချပါ။"
    ],
    breathing: "တွန်းတင်စဉ် အသက်ရှူထုတ်ပြီး၊ ချစဉ် အသက်ရှူသွင်းပါ။",
    commonMistakes: [
      "ခါးကို နောက်သို့ အလွန်အမင်း ကော့ခြင်း (ခါးနာစေသည်)။",
      "ဘားတန်းကို ခေါင်းအရှေ့ဘက်တွင် ဝေးကွာစွာ တွန်းခြင်း။"
    ],
    safetyTips: [
      "ခါးကို ကာကွယ်ရန် ဝမ်းဗိုက်နှင့် တင်ပါးကို တင်းတင်း ညှစ်ထားပါ။"
    ],
    movementFrames: {
      before: "ဘားတန်းကို ရင်အုပ်အပေါ်ပိုင်းတွင် ကိုင်ထားသည့် အနေအထား",
      after: "ဘားတန်းကို ခေါင်းအထက်သို့ တည့်တည့်မတ်မတ် တွန်းတင်ထားသည့် အနေအထား"
    }
  },
  "squat": {
    name: "ထိုင်ထခြင်း (Barbell Back Squat)",
    startingPosition: "ဘားတန်းကို ကျောအပေါ်ပိုင်း (Traps) ကြွက်သားပေါ် တင်ပါ။ ခြေထောက်ကို ပုခုံးအကျယ်ထက် အနည်းငယ် ကျယ်ပြီး ခြေဖျားကို အနည်းငယ် အပြင်လှည့်ပါ။ ကျောမတ်မတ်ထားပါ။",
    stepByStep: [
      "တင်ပါးကို ကုလားထိုင်ပေါ် ထိုင်သလို နောက်သို့ ပို့ပြီး ဒူးကိုကွေးကာ ထိုင်ချပါ။",
      "ပေါင်သည် ကြမ်းပြင်နှင့် မျဉ်းပြိုင် သို့မဟုတ် ထိုထက် နိမ့်သည်အထိ ထိုင်ချပါ။",
      "ဒူးကို အတွင်းသို့ မချပ်စေဘဲ ခြေဖနောင့်ကို အားပြုကာ မူလအနေအထားသို့ ပြန်ထပါ။"
    ],
    breathing: "ထိုင်ချစဉ် အသက်ရှူသွင်းပြီး၊ ပြန်ထစဉ် အသက်ရှူထုတ်ပါ။",
    commonMistakes: [
      "ထိုင်ချစဉ် ဒူးကို အတွင်းသို့ ချပ်မိခြင်း။",
      "ဖနောင့်ကို ကြမ်းပြင်မှ ကြွခြင်း။",
      "ခါးကို ကုန်းပြီး ရှေ့သို့ ကိုင်းကျသွားခြင်း။"
    ],
    safetyTips: [
      "ဒူးခေါင်းကို ခြေဖျားလမ်းကြောင်းအတိုင်း အမြဲ အပြင်သို့ ညွှန်ပြပါ။",
      "ဘေးကင်းရေး တန်းများ (Safety bars) အမြဲ သုံးပါ။"
    ],
    variations: [
      { name: "Goblet Squat", description: "ဒမ်ဘယ်ကို ရင်ဘတ်တွင်ကိုင်၍ ထိုင်ခြင်းဖြင့် ခါးအတွက် ပိုမို ဘေးကင်းစေသည်။" }
    ],
    movementFrames: {
      before: "ဘားတန်းကို ကျောပေါ်တင်ကာ မတ်မတ်ရပ်ထားသည့် အနေအထား",
      after: "တင်ပါးကိုနောက်ပို့ကာ ပေါင်ကြမ်းပြင်နှင့် မျဉ်းပြိုင်အထိ ထိုင်ချထားသည့် အနေအထား"
    }
  },
  "plank": {
    name: "ပလန့်ထောက်ခြင်း (Forearm Plank)",
    startingPosition: "တံတောင်ဆစ်ကို ကြမ်းပြင်ပေါ် ပုခုံးအောက် တည့်တည့်ချပါ။ ခြေဖျားထောက်ပြီး ခန္ဓာကိုယ်တစ်ခုလုံးကို မျဉ်းဖြောင့်အတိုင်း တည့်တည့် ထိန်းထားပါ။",
    stepByStep: [
      "ဝမ်းဗိုက်၊ တင်ပါးနှင့် ပေါင်ကြွက်သားများကို အစွမ်းကုန် တင်းထားပါ။",
      "လည်ပင်းကို သဘာဝကျကျထားပြီး ကြမ်းပြင်ကို စိုက်ကြည့်ပါ။",
      "ခန္ဓာကိုယ်ကို အောက်သို့ လျှောမကျစေဘဲ သတ်မှတ်ထားသော စက္ကန့်ပြည့်အောင် ထိန်းထားပါ။"
    ],
    breathing: "အသက်ကို အောင့်မထားဘဲ ပုံမှန်အတိုင်း ဖြည်းဖြည်းချင်း ရှူသွင်း ရှူထုတ်ပါ။",
    commonMistakes: [
      "တင်ပါးကို အပေါ်သို့ မြှင့်လွန်းခြင်း သို့မဟုတ် ခါးကို အောက်သို့ လျှောချခြင်း။",
      "အသက်အောင့်ထားခြင်း။"
    ],
    safetyTips: [
      "ခါးနာကျင်လာပါက ချက်ချင်းရပ်ပြီး ခေတ္တ အနားယူပါ။"
    ],
    movementFrames: {
      before: "တံတောင်ဆစ် ထောက်ကာ ခန္ဓာကိုယ်ကို မျဉ်းဖြောင့်အတိုင်း တောင့်ထားသည့် အနေအထား",
      after: "ဝမ်းဗိုက်ကို ပိုမိုညှစ်အားပေးပြီး တံတောင့်ဆစ်အားဖြင့် ခန္ဓာကိုယ်ကို တောင့်တင်းစွာ ထိန်းထားသည့် အနေအထား"
    }
  },
  "barbell-curl": {
    name: "ဘားတန်း လက်မောင်းရှေ့ကွေးခြင်း (Barbell Bicep Curl)",
    startingPosition: "ဘားတန်းကို အောက်မှ ပက်လက်ကိုင်ပြီး (Underhand Grip)၊ မတ်မတ်ရပ်ပါ။ တံတောင်ဆစ်များကို နံဘေးတွင် ကပ်ထားပါ။",
    stepByStep: [
      "တံတောင်ဆစ်ကို မလှုပ်စေဘဲ ဘားတန်းကို ပုခုံးနားအထိ ကွေးတင်ပါ။",
      "အပေါ်ဆုံးတွင် လက်မောင်းရှေ့ (Bicep) ကြွက်သားကို တင်းကျပ်စွာ ညှစ်ပါ။",
      "ဘားတန်းကို ဖြည်းဖြည်းချင်း မူလအနေအထားသို့ ဆန့်ချပါ။"
    ],
    breathing: "မတင်စဉ် အသက်ရှူထုတ်ပြီး၊ အောက်ချစဉ် အသက်ရှူသွင်းပါ။",
    commonMistakes: [
      "ခန္ဓာကိုယ်ကို လွှဲပြီး အရှိန်ဖြင့် မတင်ခြင်း။",
      "တံတောင်ဆစ်ကို ရှေ့သို့ အလွန်အမင်း ရွှေ့ခြင်း။"
    ],
    safetyTips: [
      "ခန္ဓာကိုယ်မတ်မတ်နေရန် ဝမ်းဗိုက်ကို တင်းထားပါ။"
    ],
    movementFrames: {
      before: "လက်မောင်းဆန့်လျက် ဘားတန်းကို အောက်ချထားသည့် အနေအထား",
      after: "ဘားတန်းကို အပေါ်သို့ ကွေးတင်ပြီး လက်မောင်းရှေ့ကြွက်သားကို ညှစ်ထားသည့် အနေအထား"
    }
  }
};

export function translateExercise(ex: any, lang: Language): any {
  if (lang === "en") return ex;
  const t = EXERCISE_TRANSLATIONS[ex.id];
  if (!t) {
    // Basic automatic translation fallback for unknown exercise IDs
    return {
      ...ex,
      name: ex.name,
      category: tCategory(ex.category, lang),
      targetMuscles: ex.targetMuscles.map((m: string) => tMuscle(m, lang)),
      equipment: tEquipment(ex.equipment, lang),
      difficulty: tDifficulty(ex.difficulty, lang)
    };
  }
  return {
    ...ex,
    name: t.name,
    startingPosition: t.startingPosition,
    stepByStep: t.stepByStep,
    breathing: t.breathing,
    commonMistakes: t.commonMistakes,
    safetyTips: t.safetyTips,
    category: tCategory(ex.category, lang),
    targetMuscles: ex.targetMuscles.map((m: string) => tMuscle(m, lang)),
    equipment: tEquipment(ex.equipment, lang),
    difficulty: tDifficulty(ex.difficulty, lang),
    variations: ex.variations ? ex.variations.map((v: any, idx: number) => ({
      ...v,
      name: t.variations?.[idx]?.name || v.name,
      description: t.variations?.[idx]?.description || v.description,
      level: tDifficulty(v.level, lang)
    })) : [],
    movementFrames: ex.movementFrames && t.movementFrames ? {
      before: t.movementFrames.before,
      after: t.movementFrames.after
    } : ex.movementFrames
  };
}

