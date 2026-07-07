import { Exercise } from "../types";

export const EXERCISES: Exercise[] = [
  // --- CHEST ---
  {
    id: "bench-press",
    name: "Barbell Bench Press",
    category: "Chest",
    targetMuscles: ["Pectoralis Major (Chest)", "Anterior Deltoids (Front Shoulder)", "Triceps Brachii"],
    difficulty: "Intermediate",
    equipment: "Barbell & Flat Bench",
    recommendedSetRep: "4 sets x 8-12 reps",
    startingPosition: "Lie flat on a bench, grip the barbell slightly wider than shoulder-width. Feet flat on the floor, eyes directly under the bar. Retract your shoulder blades.",
    stepByStep: [
      "Unrack the barbell and hold it directly over your chest with elbows locked.",
      "Inhale and lower the barbell slowly to your mid-chest level, maintaining a 45-degree angle with your elbows.",
      "Touch your chest lightly without bouncing.",
      "Exhale and drive the bar back up to the starting position by pushing through your feet and squeezing your chest."
    ],
    breathing: "Inhale as you lower the barbell; exhale as you press the bar upwards.",
    commonMistakes: [
      "Bouncing the bar off your chest.",
      "Flaring elbows out to 90 degrees, putting excessive strain on rotator cuffs.",
      "Lifting your feet or hips off the bench during the press."
    ],
    safetyTips: [
      "Always use a spotter or safety pins when lifting heavy weights.",
      "Keep wrists straight; do not let them bend backwards."
    ],
    variations: [
      { level: "Beginner", name: "Dumbbell Press", description: "Use dumbbells for better range of motion and joint comfort." },
      { level: "Advanced", name: "Pause Bench Press", description: "Pause the bar on your chest for 2 seconds before pressing up to eliminate kinetic momentum." }
    ],
    movementFrames: {
      before: "Barbell suspended above chest with arms extended",
      after: "Barbell hovering just above mid-chest, elbows bent at 45 degrees"
    }
  },
  {
    id: "incline-bench-press",
    name: "Incline Barbell Bench Press",
    category: "Chest",
    targetMuscles: ["Upper Pectoralis (Upper Chest)", "Anterior Deltoids", "Triceps Brachii"],
    difficulty: "Intermediate",
    equipment: "Barbell & Incline Bench (30-45 degrees)",
    recommendedSetRep: "3 sets x 8-12 reps",
    startingPosition: "Lie back on an incline bench angled at about 30-45 degrees. Lift the bar with a medium-wide grip, holding it straight over your shoulders.",
    stepByStep: [
      "Lower the bar in a controlled path to your upper chest (just below the collarbone).",
      "Keep elbows slightly tucked rather than flared.",
      "Press the barbell back up in a slight arc back to the starting point, extending your arms fully but not locking elbows."
    ],
    breathing: "Inhale during the descent; exhale forcefully on the ascend.",
    commonMistakes: [
      "Using an incline angle greater than 45 degrees, which shifts the emphasis too much onto the front shoulders.",
      "Lowering the bar too low on the stomach instead of the upper chest."
    ],
    safetyTips: [
      "Ensure the bench is firmly locked into position before loading weights.",
      "Avoid wrapping thumbs under the bar (thumbless 'suicide' grip)."
    ],
    variations: [
      { level: "Beginner", name: "Incline Dumbbell Press", description: "Allows natural arm pathways and reduces shoulder strain." },
      { level: "Advanced", name: "Incline Dumbbell Fly-Press", description: "Begin as a fly, but bend elbows at the bottom to press up, combining benefits." }
    ]
  },
  {
    id: "dumbbell-fly",
    name: "Flat Dumbbell Fly",
    category: "Chest",
    targetMuscles: ["Pectoralis Major (Outer Chest Squeeze)", "Anterior Deltoids"],
    difficulty: "Intermediate",
    equipment: "Dumbbells & Flat Bench",
    recommendedSetRep: "3 sets x 12-15 reps",
    startingPosition: "Lie flat on a bench holding dumbbells above your chest with palms facing each other (neutral grip). Maintain a slight bend in your elbows.",
    stepByStep: [
      "With a slight bend in your elbows, lower your arms out to the sides in a wide arc.",
      "Lower until you feel a deep stretch in your chest muscles, usually when your upper arms are parallel to the floor.",
      "Squeeze your chest muscles to pull the dumbbells back up along the same wide arc path."
    ],
    breathing: "Inhale as you open your arms to stretch the chest; exhale as you fly the weights back together.",
    commonMistakes: [
      "Turning the exercise into a press by excessively bending the elbows at the bottom.",
      "Lowering the weights too far down, risking shoulder hyper-extension and injury."
    ],
    safetyTips: [
      "Keep the movement slow and controlled. Do not use jerky motions.",
      "Ensure you keep a constant, gentle bend in the elbow joints throughout."
    ],
    variations: [
      { level: "Beginner", name: "Floor Dumbbell Fly", description: "Perform on the floor to limit the range of motion and protect vulnerable shoulders." },
      { level: "Advanced", name: "Incline Cable Fly", description: "Provides constant mechanical tension throughout the entire range of motion." }
    ]
  },
  {
    id: "push-up",
    name: "Classic Push Up",
    category: "Chest",
    targetMuscles: ["Pectoralis Major", "Triceps Brachii", "Anterior Deltoids", "Core (Rectus Abdominis)"],
    difficulty: "Beginner",
    equipment: "Bodyweight",
    recommendedSetRep: "3 sets x max reps",
    startingPosition: "Place hands flat on the floor, slightly wider than shoulder-width. Extend legs straight back, balancing on your toes. Your body should form a straight line from head to heels.",
    stepByStep: [
      "Inhale and lower your body by bending your elbows, keeping them tucked at about 45 degrees.",
      "Lower yourself until your chest is just an inch off the floor.",
      "Squeeze your chest and push through your hands to return to the starting high-plank position."
    ],
    breathing: "Inhale on the way down; exhale as you push your body up.",
    commonMistakes: [
      "Letting your hips sag or your lower back arch excessively.",
      "Flaring elbows directly outwards, creating shoulder impingement.",
      "Looking forward or craning the neck down instead of keeping a neutral spine."
    ],
    safetyTips: [
      "Engage your core and glutes tightly to protect your lower back.",
      "If you experience wrist pain, perform push-ups holding onto dumbbells or push-up bars."
    ],
    variations: [
      { level: "Beginner", name: "Knee Push Up", description: "Shortens the lever, making the exercise easier while practicing form." },
      { level: "Advanced", name: "Decline Push Up", description: "Elevate your feet on a bench or step to place more focus on the upper chest." }
    ]
  },
  {
    id: "cable-crossover",
    name: "Cable Crossover",
    category: "Chest",
    targetMuscles: ["Lower & Inner Pectoralis", "Anterior Deltoids"],
    difficulty: "Intermediate",
    equipment: "Cable Crossover Machine",
    recommendedSetRep: "3 sets x 12-15 reps",
    startingPosition: "Set the pulleys above head height. Stand in the center of the machine, take one step forward, grasp the handles, and lean your torso slightly forward.",
    stepByStep: [
      "Extend your arms out to the sides with a slight bend in the elbows.",
      "In a wide sweep, bring your hands forward and down until they meet or cross over in front of your lower chest/waist.",
      "Squeeze your inner pectorals hard at the peak contraction.",
      "Slowly return your arms to the starting stretched position under control."
    ],
    breathing: "Exhale as you bring your hands together; inhale as you slowly return to the stretch.",
    commonMistakes: [
      "Using momentum or swinging the torso to move the weight.",
      "Allowing the elbows to bend completely, turning it into a press."
    ],
    safetyTips: [
      "Always verify that the pins are secure in the weight stacks.",
      "Release the cables slowly at the end of the set."
    ],
    variations: [
      { level: "Beginner", name: "Single-Arm Cable Fly", description: "Focus on one side at a time to correct muscular imbalances." },
      { level: "Advanced", name: "Low-to-High Cable Fly", description: "Set pulleys at the lowest point and bring hands up and together to highlight upper chest fibers." }
    ]
  },

  // --- BACK ---
  {
    id: "pull-up",
    name: "Bodyweight Pull Up",
    category: "Back",
    targetMuscles: ["Latissimus Dorsi (Lats / Back Width)", "Biceps Brachii", "Rhomboids", "Trapezius"],
    difficulty: "Advanced",
    equipment: "Pull Up Bar",
    recommendedSetRep: "3 sets x 6-10 reps",
    startingPosition: "Hang from the bar with an overhand grip (palms facing away), hands wider than shoulder-width. Keep your arms fully extended and legs crossed.",
    stepByStep: [
      "Depress your shoulder blades first (pull them down and together).",
      "Pull yourself up by driving your elbows down toward your hips.",
      "Continue pulling until your chin completely clears the bar, keeping your chest tall and shoulders back.",
      "Lower yourself slowly under complete control back to a dead hang position."
    ],
    breathing: "Exhale as you pull your body up; inhale as you lower yourself down.",
    commonMistakes: [
      "Kicking or swinging your legs (kipping) instead of using back strength.",
      "Not using a full range of motion (not going all the way down, or not getting chin over the bar).",
      "Rounding the shoulders forward at the top."
    ],
    safetyTips: [
      "If you cannot perform a full pull-up, do not strain; use resistance bands or the assisted machine.",
      "Warm up your shoulders thoroughly before starting."
    ],
    variations: [
      { level: "Beginner", name: "Assisted Pull Up", description: "Use a resistance band or assisted machine to offset bodyweight." },
      { level: "Advanced", name: "Weighted Pull Up", description: "Wear a dipping belt or hold a dumbbell between your feet to add extra resistance." }
    ]
  },
  {
    id: "lat-pulldown",
    name: "Cable Lat Pulldown",
    category: "Back",
    targetMuscles: ["Latissimus Dorsi", "Teres Major", "Biceps Brachii", "Rear Deltoids"],
    difficulty: "Beginner",
    equipment: "Lat Pulldown Machine",
    recommendedSetRep: "4 sets x 10-12 reps",
    startingPosition: "Sit on the seat, adjust the thigh pads tightly. Grasp the bar with a wide overhand grip. Lean back slightly (about 10 degrees) and pull your shoulders down.",
    stepByStep: [
      "Inhale, then exhale as you pull the bar down toward your upper chest.",
      "Concentrate on squeezing your elbows down and back, leading the movement with your elbows rather than pulling with your hands.",
      "Touch the bar to your upper chest briefly, then slowly extend your arms back up to the stretch."
    ],
    breathing: "Exhale as you pull the bar down; inhale as you allow the bar to go up.",
    commonMistakes: [
      "Pulling the bar down behind your neck, which causes severe neck and shoulder strain.",
      "Leaning back excessively and swinging your body weight to yank the cable down."
    ],
    safetyTips: [
      "Keep your back arched slightly and your chest puffed up to recruit lat fibers correctly.",
      "Control the ascent; do not let the weights slam."
    ],
    variations: [
      { level: "Beginner", name: "Close Grip Lat Pulldown", description: "Use a V-bar attachment; this emphasizes the lower lats and arms more." },
      { level: "Advanced", name: "Single-Arm Lat Pulldown", description: "Sit sideways or kneel, pulling a single handle to maximize contraction and stretch." }
    ]
  },
  {
    id: "barbell-row",
    name: "Bent Over Barbell Row",
    category: "Back",
    targetMuscles: ["Latissimus Dorsi", "Rhomboids (Mid Back)", "Trapezius", "Erector Spinae (Lower Back Core)"],
    difficulty: "Advanced",
    equipment: "Barbell & Plates",
    recommendedSetRep: "3 sets x 8-10 reps",
    startingPosition: "Stand with feet shoulder-width apart. Bend your knees slightly and hinge forward at your hips until your torso is almost parallel to the floor, keeping your back flat and core tight.",
    stepByStep: [
      "Hold the barbell with an overhand grip, arms hanging straight down.",
      "Exhale and pull the barbell up to your lower ribs/navel, keeping your elbows close to your body and squeezing your shoulder blades together.",
      "Briefly pause and squeeze your back at the top.",
      "Inhale and slowly lower the bar back to the starting hanging position."
    ],
    breathing: "Exhale as you pull the bar toward your ribs; inhale as you lower the barbell.",
    commonMistakes: [
      "Rounding your lower back, which can cause severe disc compression.",
      "Using a bouncing or standing-up motion to hoist the weight up."
    ],
    safetyTips: [
      "Keep your head neutral (look at the floor a few feet in front of you) to avoid neck strain.",
      "Brace your core very hard; if you feel lower back pain, drop the weight immediately."
    ],
    variations: [
      { level: "Beginner", name: "Chest-Supported Row", description: "Lie face down on an incline bench to support the torso, taking strain off the lower back." },
      { level: "Intermediate", name: "Underhand Barbell Row", description: "Reverse your grip to recruit more lower lats and biceps." }
    ]
  },
  {
    id: "seated-cable-row",
    name: "Seated Cable Row",
    category: "Back",
    targetMuscles: ["Rhomboids", "Middle Trapezius", "Latissimus Dorsi", "Rear Deltoids"],
    difficulty: "Beginner",
    equipment: "Seated Cable Row Machine",
    recommendedSetRep: "3 sets x 10-12 reps",
    startingPosition: "Sit on the bench with knees slightly bent. Reach forward to grasp the handles (typically a V-bar), sit up tall with your back straight, shoulders back, and chest pushed forward.",
    stepByStep: [
      "Keep your torso stationary and squeeze your shoulder blades back.",
      "Pull the handles toward your lower abdomen by driving your elbows straight back.",
      "Squeeze your mid-back muscles firmly at the peak.",
      "Slowly extend your arms back forward, letting your shoulder blades stretch but without hunching your spine."
    ],
    breathing: "Exhale as you pull the handles toward your abdomen; inhale as you slowly return.",
    commonMistakes: [
      "Swinging your body forward and backward to gain momentum.",
      "Shrugging your shoulders up to your ears, which shifts emphasis to the upper traps."
    ],
    safetyTips: [
      "Do not lock out your knees on the footpads; keep a soft bend.",
      "Keep your spine tall and neutral throughout the movement."
    ],
    variations: [
      { level: "Intermediate", name: "Wide-Grip Seated Row", description: "Use a wide lat bar to target the rhomboids, rear delts, and upper back more intensely." },
      { level: "Advanced", name: "Single-Arm Cable Row", description: "Incorporate a torso rotation at the end to maximize lat contraction." }
    ]
  },
  {
    id: "deadlift",
    name: "Conventional Deadlift",
    category: "Back",
    targetMuscles: ["Erector Spinae", "Gluteus Maximus", "Hamstrings", "Quadriceps", "Trapezius", "Forearms"],
    difficulty: "Advanced",
    equipment: "Barbell & Plates",
    recommendedSetRep: "3 sets x 5 reps",
    startingPosition: "Stand with feet hip-width apart, shins about an inch from the bar. Hinge at your hips and bend your knees to grip the bar. Keep your back completely flat, chest up, shoulders directly over or slightly in front of the bar.",
    stepByStep: [
      "Take a deep breath, brace your core, and pull the slack out of the bar.",
      "Drive through your legs, pushing the floor away to lift the bar.",
      "Keep the bar as close to your shins and thighs as possible.",
      "Once the bar passes your knees, drive your hips forward to lock out in an upright standing position. Squeeze your glutes.",
      "Hinge at your hips first, then bend your knees to lower the bar back to the floor under control."
    ],
    breathing: "Inhale and brace your core at the bottom; hold your breath during the lift; exhale at lock-out; inhale on descent.",
    commonMistakes: [
      "Rounding the lower back (cat back) under load, which is highly dangerous.",
      "Starting with the bar too far away, which shifts the load onto the lumbar spine."
    ],
    safetyTips: [
      "Always lift off a dead stop (do not bounce the weights off the floor).",
      "Never hyperextend your spine at the top of the lift."
    ],
    variations: [
      { level: "Intermediate", name: "Trap Bar Deadlift", description: "Uses a hexagonal bar which aligns the load with your center of gravity, making it easier on the back." },
      { level: "Advanced", name: "Sumo Deadlift", description: "Stance is wide with hands inside knees, placing more emphasis on quads and adductors." }
    ]
  },

  // --- SHOULDERS ---
  {
    id: "shoulder-press",
    name: "Overhead Dumbbell Press",
    category: "Shoulders",
    targetMuscles: ["Anterior Deltoids (Front Shoulder)", "Lateral Deltoids (Side Shoulder)", "Triceps Brachii"],
    difficulty: "Intermediate",
    equipment: "Dumbbells & Seat",
    recommendedSetRep: "4 sets x 8-12 reps",
    startingPosition: "Sit on a bench with back support. Raise dumbbells to shoulder height with palms facing forward, elbows bent at 90 degrees.",
    stepByStep: [
      "Exhale and press the dumbbells vertically upward until your arms are fully extended over your head.",
      "Keep your wrists stacked directly over your elbows.",
      "Slowly lower the weights back down to ear level under control."
    ],
    breathing: "Exhale as you press the weights up; inhale as you lower them down.",
    commonMistakes: [
      "Arching your lower back excessively, which indicates the weight is too heavy or lack of core activation.",
      "Allowing the dumbbells to touch or crash together at the top, removing tension from the muscles."
    ],
    safetyTips: [
      "Keep your core contracted to stabilize your spine.",
      "If you have shoulder issues, try a neutral grip with palms facing each other."
    ],
    variations: [
      { level: "Beginner", name: "Seated Dumbbell Shoulder Press", description: "Provides lower back support, reducing stability requirements." },
      { level: "Advanced", name: "Standing Barbell Overhead Press (OHP)", description: "Requires intense core, glute, and full-body stability." }
    ]
  },
  {
    id: "lateral-raise",
    name: "Dumbbell Lateral Raise",
    category: "Shoulders",
    targetMuscles: ["Lateral Deltoids (Side Shoulder / Shoulder Width)"],
    difficulty: "Beginner",
    equipment: "Dumbbells",
    recommendedSetRep: "3 sets x 12-15 reps",
    startingPosition: "Stand tall holding dumbbells at your sides, palms facing inward. Tilt your torso slightly forward and bend your elbows very slightly.",
    stepByStep: [
      "Raise your arms out to the sides in a wide arc, leading with your elbows.",
      "Lift until your arms are parallel to the floor (shoulder height), with your pinky fingers tilted slightly upward at the top.",
      "Pause for a split second, then slowly lower the weights back to the starting position."
    ],
    breathing: "Exhale as you raise the dumbbells; inhale as you slowly lower them.",
    commonMistakes: [
      "Swinging the body or using legs to hoist the weights.",
      "Raising the hands higher than the elbows, which transfers tension to the front delts."
    ],
    safetyTips: [
      "Use relatively light weights. The side deltoid is a small muscle and responds better to high quality contractions than heavy weight.",
      "Do not lift above shoulder level to prevent impingement."
    ],
    variations: [
      { level: "Beginner", name: "Seated Lateral Raise", description: "Reduces leg drive, forcing shoulder isolation." },
      { level: "Advanced", name: "Leaning Cable Lateral Raise", description: "Hold onto a cable post and lean outward, creating a massive stretch at the bottom of the movement." }
    ]
  },
  {
    id: "front-raise",
    name: "Dumbbell Front Raise",
    category: "Shoulders",
    targetMuscles: ["Anterior Deltoids (Front Shoulder)"],
    difficulty: "Beginner",
    equipment: "Dumbbells",
    recommendedSetRep: "3 sets x 10-12 reps",
    startingPosition: "Stand with feet shoulder-width apart, holding dumbbells in front of your thighs, palms facing your legs.",
    stepByStep: [
      "Raise the dumbbells straight in front of you with arms nearly locked.",
      "Lift until your arms are slightly above parallel to the floor.",
      "Slowly lower the weights back down to your thighs under control."
    ],
    breathing: "Exhale as you lift; inhale as you lower the dumbbells.",
    commonMistakes: [
      "Rocking your body back and forth to swing the dumbbells up.",
      "Using excessively heavy weight, causing traps to take over."
    ],
    safetyTips: [
      "Perform the raises alternately (one arm at a time) if you find it hard to keep your torso upright."
    ],
    variations: [
      { level: "Beginner", name: "Plate Front Raise", description: "Grasp a single bumper plate with both hands to raise, which is easy to control." },
      { level: "Advanced", name: "Incline Dumbbell Front Raise", description: "Sit on an incline bench face up, raising dumbbells to create tension in a stretched position." }
    ]
  },
  {
    id: "reverse-fly",
    name: "Dumbbell Reverse Fly (Rear Delt Fly)",
    category: "Shoulders",
    targetMuscles: ["Posterior Deltoids (Rear Shoulder)", "Rhomboids", "Trapezius"],
    difficulty: "Intermediate",
    equipment: "Dumbbells & Flat Bench",
    recommendedSetRep: "3 sets x 12-15 reps",
    startingPosition: "Hinge at your hips to bend forward, keeping your back flat. Alternatively, lie face down on an incline bench. Hold dumbbells hanging straight down, palms facing each other.",
    stepByStep: [
      "With a slight bend in your elbows, raise your arms out to the sides in a wide arc.",
      "Focus on squeezing your rear shoulders at the top of the movement.",
      "Lower the weights slowly back to the starting hanging position."
    ],
    breathing: "Exhale as you raise the dumbbells; inhale as you lower them.",
    commonMistakes: [
      "Squeezing the shoulder blades together too much, which makes it a back row instead of shoulder isolation.",
      "Using heavy momentum rather than light muscle control."
    ],
    safetyTips: [
      "Keep your neck aligned with your spine; do not look up."
    ],
    variations: [
      { level: "Beginner", name: "Pec Deck Rear Delt Fly", description: "Use the reverse fly machine for a guided path of motion." },
      { level: "Advanced", name: "Cable Rear Delt Crossover", description: "Perform standing using high cables without handles for intense continuous tension." }
    ]
  },

  // --- ARMS ---
  {
    id: "barbell-curl",
    name: "Barbell Bicep Curl",
    category: "Arms",
    targetMuscles: ["Biceps Brachii (Short & Long Head)", "Brachialis", "Forearms"],
    difficulty: "Beginner",
    equipment: "Barbell / EZ Bar",
    recommendedSetRep: "3 sets x 8-12 reps",
    startingPosition: "Stand tall with feet hip-width apart. Hold a barbell with an underhand grip (palms facing up), hands shoulder-width apart. Keep elbows close to your torso.",
    stepByStep: [
      "Squeeze your biceps and curl the barbell upward toward your shoulders, keeping your upper arms locked in place.",
      "Squeeze your biceps tightly at the top contraction.",
      "Slowly lower the barbell back to the starting position, fully extending your arms."
    ],
    breathing: "Exhale on the way up; inhale as you lower the bar down.",
    commonMistakes: [
      "Swinging your body or hips to lift the bar.",
      "Letting your elbows drift forward, which shifts the load to the front delts."
    ],
    safetyTips: [
      "Keep your wrists stiff; do not let them limp or curl excessively.",
      "Stand with a slight bend in your knees to support your back."
    ],
    variations: [
      { level: "Beginner", name: "EZ Bar Curl", description: "The angled bar reduces wrist and elbow strain." },
      { level: "Advanced", name: "Barbell Drag Curl", description: "Pull your elbows back as you curl, dragging the bar up your torso to isolate the bicep." }
    ]
  },
  {
    id: "dumbbell-curl",
    name: "Supinated Dumbbell Bicep Curl",
    category: "Arms",
    targetMuscles: ["Biceps Brachii", "Brachioradialis"],
    difficulty: "Beginner",
    equipment: "Dumbbells",
    recommendedSetRep: "3 sets x 10-12 reps",
    startingPosition: "Stand holding dumbbells at your sides, palms facing each other (neutral grip).",
    stepByStep: [
      "Begin curling the dumbbell up, and rotate your wrist so your palm faces upward (supination) by mid-rep.",
      "Squeeze your bicep hard at the shoulder level.",
      "Lower the dumbbell slowly, rotating your wrist back to neutral at the bottom."
    ],
    breathing: "Exhale as you curl up; inhale as you lower down.",
    commonMistakes: [
      "Not twisting (supinating) the wrist, which misses peak bicep contraction.",
      "Performing the rep too fast without control."
    ],
    safetyTips: [
      "Keep your core braced and chest high; do not hunch."
    ],
    variations: [
      { level: "Beginner", name: "Seated Dumbbell Curl", description: "Sit on a bench to prevent lower body swing." },
      { level: "Advanced", name: "Incline Dumbbell Curl", description: "Sit on a 45-degree incline bench to place a maximum stretch on the bicep long-head." }
    ]
  },
  {
    id: "hammer-curl",
    name: "Dumbbell Hammer Curl",
    category: "Arms",
    targetMuscles: ["Brachialis (Adds Bicep Thickness)", "Brachioradialis (Forearm Outer Upper)"],
    difficulty: "Beginner",
    equipment: "Dumbbells",
    recommendedSetRep: "3 sets x 10-12 reps",
    startingPosition: "Stand tall holding dumbbells with a neutral grip (palms facing each other) throughout the entire movement.",
    stepByStep: [
      "Curl the dumbbells up toward your shoulders, maintaining palms facing each other.",
      "Do not swing. Keep your elbows strictly pinned to your sides.",
      "Lower the weights slowly back down to full arm extension."
    ],
    breathing: "Exhale as you lift; inhale as you lower.",
    commonMistakes: [
      "Letting the elbows flare out to the sides.",
      "Shortening the range of motion (not extending fully at the bottom)."
    ],
    safetyTips: [
      "Keep a tall posture and avoid bending forward."
    ],
    variations: [
      { level: "Beginner", name: "Cable Hammer Curl", description: "Use a rope attachment on a low pulley for constant tension." },
      { level: "Advanced", name: "Cross Body Hammer Curl", description: "Curl the dumbbell across your torso toward the opposite shoulder, emphasizing brachialis." }
    ]
  },
  {
    id: "triceps-pushdown",
    name: "Cable Triceps Pushdown",
    category: "Arms",
    targetMuscles: ["Triceps Brachii (Lateral & Medial Head)"],
    difficulty: "Beginner",
    equipment: "Cable Pulley & Rope/Bar",
    recommendedSetRep: "3 sets x 12-15 reps",
    startingPosition: "Attach a rope or straight bar to a high pulley. Grasp it, stand close, tuck your elbows against your ribcage, and bend your knees slightly.",
    stepByStep: [
      "Push the cable attachment straight down by fully extending your elbows.",
      "If using a rope, pull the ends apart at the bottom to maximize contraction.",
      "Squeeze your triceps hard at the bottom.",
      "Slowly bring the attachment back up to the starting point (elbows bent slightly past 90 degrees) without letting your elbows move from your sides."
    ],
    breathing: "Exhale as you push down; inhale as you slowly return.",
    commonMistakes: [
      "Allowing elbows to flare or move forward and backward, which recruits shoulders and chest.",
      "Leaning your full body weight over the bar to push it down."
    ],
    safetyTips: [
      "Keep your wrists locked and rigid throughout."
    ],
    variations: [
      { level: "Beginner", name: "Underhand Triceps Pushdown", description: "Use a straight bar with an underhand grip to target the medial head." },
      { level: "Advanced", name: "Single-Arm Cable Pushdown", description: "Use a single-handle grip without a bar to maximize tricep isolation." }
    ]
  },
  {
    id: "skull-crusher",
    name: "Lying Triceps Extension (Skull Crusher)",
    category: "Arms",
    targetMuscles: ["Triceps Brachii (Long Head / Tricep Meat)"],
    difficulty: "Intermediate",
    equipment: "EZ Bar & Flat Bench",
    recommendedSetRep: "3 sets x 10-12 reps",
    startingPosition: "Lie flat on a bench, hold an EZ bar directly over your chest with arms extended. Angle your arms back slightly (about 10 degrees) toward your head to keep constant tension on the triceps.",
    stepByStep: [
      "Inhale, and bend only at the elbows to lower the bar towards your forehead or slightly behind your head.",
      "Keep your elbows pointed straight up and tucked in close (do not let them flare).",
      "Squeeze your triceps and extend your elbows to push the bar back to the starting angled position."
    ],
    breathing: "Inhale as you lower the bar; exhale as you press it back up.",
    commonMistakes: [
      "Letting your elbows flare outwards, which stresses the elbow joints.",
      "Moving the shoulders back and forth, turning the lift into a pull-over."
    ],
    safetyTips: [
      "Be extremely careful of the bar path (hence the name 'skull crusher').",
      "Always start with lighter weights to master the form and elbow stability."
    ],
    variations: [
      { level: "Beginner", name: "Dumbbell Skull Crusher", description: "Use dumbbells with palms facing each other to reduce elbow stress." },
      { level: "Advanced", name: "Incline Skull Crusher", description: "Perform on an incline bench to place an even greater stretch on the tricep long-head." }
    ]
  },

  // --- LEGS ---
  {
    id: "squat",
    name: "Barbell Back Squat",
    category: "Legs",
    targetMuscles: ["Quadriceps", "Gluteus Maximus", "Hamstrings", "Core", "Erector Spinae"],
    difficulty: "Advanced",
    equipment: "Barbell & Squat Rack",
    recommendedSetRep: "4 sets x 6-10 reps",
    startingPosition: "Rest the barbell on your upper traps (not your neck). Place feet slightly wider than shoulder-width, toes turned slightly out (15-30 degrees). Keep chest up, core braced.",
    stepByStep: [
      "Inhale deeply, brace your abdomen, and initiate the movement by hinging your hips back and bending your knees.",
      "Lower yourself as if sitting back in a chair, keeping your knees in line with your toes.",
      "Descend until your thighs are parallel to the floor (or slightly below).",
      "Keep your heels flat on the floor and drive back up to the starting position, exhaling as you clear the hardest point."
    ],
    breathing: "Inhale at the top, hold/brace during descent; exhale forcefully as you complete the ascent.",
    commonMistakes: [
      "Knees collapsing inward (valgus collapse), putting extreme stress on ACL.",
      "Allowing heels to lift off the floor.",
      "Rounding your lower back at the bottom of the squat ('butt wink')."
    ],
    safetyTips: [
      "Never squat without safety bar pins in the rack.",
      "Keep your chest proud and spine neutral; do not look down."
    ],
    variations: [
      { level: "Beginner", name: "Goblet Squat", description: "Hold a dumbbell or kettlebell in front of your chest. Excellent for practicing deep squat posture." },
      { level: "Advanced", name: "Barbell Front Squat", description: "Rest the bar on your front shoulders. Focuses heavily on the quadriceps and core strength." }
    ]
  },
  {
    id: "leg-press",
    name: "Machine Leg Press",
    category: "Legs",
    targetMuscles: ["Quadriceps", "Gluteus Maximus", "Hamstrings"],
    difficulty: "Beginner",
    equipment: "45-Degree Leg Press Machine",
    recommendedSetRep: "3 sets x 10-12 reps",
    startingPosition: "Sit in the leg press machine, place feet shoulder-width apart on the sled platform. Release safety locks.",
    stepByStep: [
      "Inhale and lower the sled slowly toward your chest by bending your knees to about 90 degrees.",
      "Do not let your lower back or tailbone lift off the padded seat.",
      "Exhale and press the sled back up by pushing through your heels, stop just short of locking your knees."
    ],
    breathing: "Inhale as you lower the sled; exhale as you press it away.",
    commonMistakes: [
      "Locking out (hyperextending) your knees at the top, which is extremely dangerous.",
      "Lowering the weight too far down, causing your pelvis to tilt and lift off the seat."
    ],
    safetyTips: [
      "Always keep the safety pins configured in case of muscle failure.",
      "Never push on your knees with your hands."
    ],
    variations: [
      { level: "Beginner", name: "High Foot-Placement Leg Press", description: "Shifts more focus to hamstrings and glutes." },
      { level: "Advanced", name: "Single-Leg Press", description: "Excellent for isolating legs and building unilateral balance." }
    ]
  },
  {
    id: "lunges",
    name: "Walking Dumbbell Lunges",
    category: "Legs",
    targetMuscles: ["Quadriceps", "Gluteus Maximus", "Hamstrings", "Calves"],
    difficulty: "Intermediate",
    equipment: "Dumbbells",
    recommendedSetRep: "3 sets x 12 steps per leg",
    startingPosition: "Stand tall holding dumbbells in each hand at your sides, feet together.",
    stepByStep: [
      "Take a large step forward with your right leg.",
      "Lower your hips until your right thigh is parallel to the floor and your left knee is hovering just an inch above the ground.",
      "Keep your front knee aligned directly over your ankle (not past your toes).",
      "Push off your right foot and step forward to bring your feet together, then repeat with the left leg."
    ],
    breathing: "Inhale as you step and lower; exhale as you push up and step together.",
    commonMistakes: [
      "Taking steps that are too short, causing the front knee to push too far over the toes.",
      "Leaning your torso excessively far forward."
    ],
    safetyTips: [
      "Maintain a upright torso and tight core to keep balance.",
      "Ensure you perform this on a flat, non-slippery surface."
    ],
    variations: [
      { level: "Beginner", name: "Static Lunge (Split Squat)", description: "Keep feet in a fixed split position and simply lower and raise your hips." },
      { level: "Advanced", name: "Jumping Lunges", description: "Adds a powerful cardiovascular and plyometric explosive element." }
    ]
  },
  {
    id: "leg-extension",
    name: "Seated Leg Extension",
    category: "Legs",
    targetMuscles: ["Quadriceps (Isolation)"],
    difficulty: "Beginner",
    equipment: "Leg Extension Machine",
    recommendedSetRep: "3 sets x 12-15 reps",
    startingPosition: "Sit in the machine. Position the padded lever so it rests comfortably against your lower shins (just above ankles). Secure thigh supports.",
    stepByStep: [
      "Grasp the hand grips at the sides of the seat to anchor your pelvis down.",
      "Exhale and extend your legs straight out, squeezing your quadriceps hard at the peak contraction.",
      "Hold the contraction for a full second.",
      "Slowly lower the pad back down to the starting point under resistance."
    ],
    breathing: "Exhale on extension; inhale on lowering.",
    commonMistakes: [
      "Using momentum to swing the weight up.",
      "Allowing the lower back to arch off the seat back support."
    ],
    safetyTips: [
      "Do not set the starting angle so far back that it strains your knee joints."
    ],
    variations: [
      { level: "Beginner", name: "Light Extensions", description: "High reps with very light weight for knee rehabilitation and warmups." },
      { level: "Advanced", name: "Single-Leg Extension with Twist", description: "Extend one leg and slightly point toes outward to isolate the vastus medialis (teardrop muscle)." }
    ]
  },
  {
    id: "leg-curl",
    name: "Lying Leg Curl",
    category: "Legs",
    targetMuscles: ["Hamstrings (Biceps Femoris)"],
    difficulty: "Beginner",
    equipment: "Lying Leg Curl Machine",
    recommendedSetRep: "3 sets x 12-15 reps",
    startingPosition: "Lie face down on the leg curl bench. Adjust the padded roller so it rests just below your calf muscles. Grasp handles.",
    stepByStep: [
      "Keep your hips pressed firmly into the pad.",
      "Exhale and curl your legs upward as far as possible, pulling your heels toward your glutes.",
      "Squeeze your hamstrings at the top.",
      "Inhale and slowly lower your legs back to full extension under control."
    ],
    breathing: "Exhale as you curl the weight; inhale as you lower.",
    commonMistakes: [
      "Lifting your hips/pelvis off the bench to assist in pulling, which reduces hamstring load.",
      "Jerking the weight quickly."
    ],
    safetyTips: [
      "Always fully control the eccentric (lowering) phase to avoid hamstring pulls."
    ],
    variations: [
      { level: "Beginner", name: "Seated Leg Curl", description: "Seated variation keeps hamstrings under a pre-stretched state, which is highly effective." },
      { level: "Advanced", name: "Dumbbell Lying Leg Curl", description: "Perform lying on a flat bench squeezing a dumbbell between your feet, requiring high stabilizer support." }
    ]
  },
  {
    id: "calf-raise",
    name: "Standing Calf Raise",
    category: "Legs",
    targetMuscles: ["Gastrocnemius (Calves)", "Soleus"],
    difficulty: "Beginner",
    equipment: "Calf Raise Machine or Step Block",
    recommendedSetRep: "4 sets x 15-20 reps",
    startingPosition: "Stand with the balls of your feet on the edge of a step block, heels hanging off. Hold a dumbbell or use a machine shoulder pad.",
    stepByStep: [
      "Lower your heels as far as possible to feel a deep, comfortable stretch in your calves.",
      "Pause for 1-2 seconds in the fully stretched position.",
      "Push through the balls of your feet to raise your body as high as possible (standing on tip-toes).",
      "Squeeze your calves at the top, then slowly lower your heels back to the stretch."
    ],
    breathing: "Exhale as you rise up; inhale as you lower your heels down.",
    commonMistakes: [
      "Bouncing quickly up and down. This utilizes Achilles tendon elasticity rather than calf muscle fibers.",
      "Bending knees during standing raises, which shifts load away from the gastrocnemius."
    ],
    safetyTips: [
      "Ensure the step or platform is stable.",
      "Avoid cramping by staying hydrated and stretching."
    ],
    variations: [
      { level: "Beginner", name: "Bodyweight Calf Raise on Floor", description: "Perform without weights, focus on balance and contractions." },
      { level: "Advanced", name: "Seated Calf Raise", description: "Bend knees at 90 degrees to isolate the Soleus muscle." }
    ]
  },

  // --- CORE ---
  {
    id: "plank",
    name: "Forearm Plank",
    category: "Core",
    targetMuscles: ["Rectus Abdominis (Abs)", "Transverse Abdominis (Deep Core)", "Obliques", "Glutes", "Shoulders"],
    difficulty: "Beginner",
    equipment: "Bodyweight / Mat",
    recommendedSetRep: "3 sets x 30-60 second holds",
    startingPosition: "Place forearms flat on the floor, elbows aligned directly under your shoulders. Extend legs straight back, balancing on toes. Keep your head looking down.",
    stepByStep: [
      "Engage your abdominal muscles, squeeze your glutes and quads.",
      "Ensure your body forms a completely straight line from your ears to your heels.",
      "Maintain this rigid posture, focusing on deep breathing and keeping your hips from sagging."
    ],
    breathing: "Perform slow, controlled nasal diaphragmatic breathing throughout the hold.",
    commonMistakes: [
      "Sinking your hips, which strains the lumbar spine.",
      "Poking your hips up into a 'V' shape, which reduces core tension.",
      "Clasping hands together and shrugging shoulders."
    ],
    safetyTips: [
      "If you experience lower back pain, shorten the hold time or drop to knee plank."
    ],
    variations: [
      { level: "Beginner", name: "Knee Plank", description: "Rest knees on the ground to reduce intensity while building foundational core strength." },
      { level: "Advanced", name: "Plank Jacks or Single-Leg Plank", description: "Lift one leg or perform jumping jack motions with legs to add extreme anti-rotational stability demands." }
    ]
  },
  {
    id: "crunch",
    name: "Abdominal Crunch",
    category: "Core",
    targetMuscles: ["Upper Rectus Abdominis"],
    difficulty: "Beginner",
    equipment: "Bodyweight",
    recommendedSetRep: "3 sets x 15-20 reps",
    startingPosition: "Lie on your back with knees bent and feet flat on the floor, hip-width apart. Place hands lightly behind your head or crossed over your chest.",
    stepByStep: [
      "Engage your abs and exhale as you slowly curl your head, neck, and shoulder blades off the floor.",
      "Keep your lower back flat against the ground (do not lift your whole torso).",
      "Squeeze your upper abs for a second.",
      "Inhale as you slowly lower back down to the floor."
    ],
    breathing: "Exhale on curl-up; inhale on lowering.",
    commonMistakes: [
      "Yanking your neck forward with your hands.",
      "Lifting your entire lower back off the ground (which is a sit-up and uses hip flexors instead)."
    ],
    safetyTips: [
      "Do not tuck your chin completely into your chest; keep a fist-sized gap."
    ],
    variations: [
      { level: "Beginner", name: "Deadbug", description: "Excellent alternative for spine safety while recruiting core." },
      { level: "Advanced", name: "Weighted Decline Crunch", description: "Hold a weight plate on your chest while crunched on a decline bench." }
    ]
  },
  {
    id: "leg-raise",
    name: "Lying Leg Raise",
    category: "Core",
    targetMuscles: ["Lower Rectus Abdominis", "Hip Flexors"],
    difficulty: "Intermediate",
    equipment: "Bodyweight / Mat",
    recommendedSetRep: "3 sets x 12-15 reps",
    startingPosition: "Lie flat on your back, legs straight, arms flat at your sides. If needed, place hands under your lower glutes to support your lumbar spine.",
    stepByStep: [
      "Press your lower back flat into the floor.",
      "Exhale and slowly raise both legs straight up until they are perpendicular to the floor.",
      "Squeeze your lower abs.",
      "Inhale and lower your legs slowly back down, stopping an inch or two before they touch the ground to maintain constant muscle tension."
    ],
    breathing: "Exhale as you raise your legs; inhale as you slowly lower them.",
    commonMistakes: [
      "Allowing the lower back to arch off the floor, which causes hip flexors to take over and puts dangerous shear stress on lumbar discs.",
      "Letting legs drop quickly without control."
    ],
    safetyTips: [
      "If your lower back arches, bend your knees slightly or perform single-leg raises."
    ],
    variations: [
      { level: "Beginner", name: "Bent Knee Tuck", description: "Bend knees at 90 degrees and bring knees to chest, much easier on the back." },
      { level: "Advanced", name: "Hanging Leg Raise", description: "Hang from a pull-up bar and raise your legs to 90 degrees or touch the toes to the bar." }
    ]
  },
  {
    id: "russian-twist",
    name: "Russian Twist",
    category: "Core",
    targetMuscles: ["Obliques (Side Abs)", "Transverse Abdominis"],
    difficulty: "Beginner",
    equipment: "Bodyweight / Light Dumbbell",
    recommendedSetRep: "3 sets x 20 twists (10 per side)",
    startingPosition: "Sit on the floor, bend your knees, and lift your feet a few inches off the ground, balancing on your tailbone. Lean back slightly at a 45-degree angle.",
    stepByStep: [
      "Hold your hands together in front of your chest (or hold a light weight/dumbbell).",
      "Exhale and twist your torso to the right, tapping your hands or weight on the floor beside your hip.",
      "Inhale and return to center, then exhale and twist to the left side.",
      "Keep your knees and legs as still as possible throughout."
    ],
    breathing: "Exhale on each twist to the side; inhale as you transition through the center.",
    commonMistakes: [
      "Twisting only the arms rather than rotating your entire ribcage.",
      "Hunching or rounding your upper back."
    ],
    safetyTips: [
      "If balancing with feet up is too difficult or painful on the lower back, place your heels flat on the floor."
    ],
    variations: [
      { level: "Beginner", name: "Heels-on-Floor Twist", description: "Keep heels touching the ground to stabilize." },
      { level: "Advanced", name: "Weighted Medicine Ball Russian Twist", description: "Hold a medicine ball or plate, rotating quickly while keeping feet elevated." }
    ]
  },

  // --- CARDIO ---
  {
    id: "running",
    name: "Steady-State Running",
    category: "Cardio",
    targetMuscles: ["Cardiovascular System (Heart/Lungs)", "Quadriceps", "Hamstrings", "Glutes", "Calves"],
    difficulty: "Beginner",
    equipment: "Running Shoes",
    recommendedSetRep: "20-45 minutes",
    startingPosition: "Stand tall, shoulder blades relaxed. Lean your torso slightly forward.",
    stepByStep: [
      "Begin jogging, landing on your mid-foot rather than slamming your heel.",
      "Keep your arms bent at 90 degrees, swinging them smoothly forward and backward.",
      "Maintain a steady, conversational pace where you can talk but not sing."
    ],
    breathing: "Practice regular, deep rhythmic breathing (e.g., inhale for 3 steps, exhale for 3 steps).",
    commonMistakes: [
      "Overstriding (landing with your foot too far in front of your knee), which causes joint shock.",
      "Craning neck forward or looking directly down at your feet."
    ],
    safetyTips: [
      "Always wear supportive, fitted running footwear.",
      "Stay hydrated and avoid high heat."
    ],
    variations: [
      { level: "Beginner", name: "Brisk Walking / Jog-Walk intervals", description: "Walk for 2 minutes, jog for 1 minute." },
      { level: "Advanced", name: "Hill Sprints", description: "Sprint up a steep hill for 20-30 seconds, walk down to recover." }
    ]
  },
  {
    id: "cycling",
    name: "Road or Stationary Cycling",
    category: "Cardio",
    targetMuscles: ["Cardiovascular System", "Quadriceps", "Glutes", "Hamstrings", "Calves"],
    difficulty: "Beginner",
    equipment: "Bicycle or Stationary Bike",
    recommendedSetRep: "30-60 minutes",
    startingPosition: "Adjust the bicycle seat height so that when your pedal is at the lowest position, your knee has a slight bend (about 10-15 degrees).",
    stepByStep: [
      "Grasp the handlebars lightly, relax your shoulders.",
      "Pedal at a smooth, quick cadence (80-90 RPM is ideal for cardiovascular efficiency).",
      "Keep your knees aligned with your toes, avoiding let them flare outward."
    ],
    breathing: "Breathe deeply and regularly in sync with your pedaling cadence.",
    commonMistakes: [
      "Setting the seat too low, which can cause severe knee pain.",
      "Slouching or rounding the shoulders heavily over the handlebars."
    ],
    safetyTips: [
      "Always wear a helmet when cycling outdoors.",
      "Ensure your feet are securely locked into pedals or cages."
    ],
    variations: [
      { level: "Beginner", name: "Recumbent Cycling", description: "Leaned-back stationary bike that is highly comfortable and easy on the spine." },
      { level: "Advanced", name: "HIIT Cycling Intervals", description: "Sprint at max resistance for 30 seconds, pedaling easily for 60 seconds." }
    ]
  },
  {
    id: "jump-rope",
    name: "Jump Rope Training",
    category: "Cardio",
    targetMuscles: ["Calves", "Shoulders", "Cardiovascular System", "Forearms", "Core"],
    difficulty: "Intermediate",
    equipment: "Jump Rope",
    recommendedSetRep: "5-10 sets x 1 minute jump / 30s rest",
    startingPosition: "Stand tall holding handles, rope behind your heels. Keep elbows bent and close to your ribs.",
    stepByStep: [
      "Swing the rope over your head using only small wrist rotations.",
      "Jump only 1-2 inches off the ground, just enough to let the rope clear under your feet.",
      "Land softly on the balls of your feet with knees slightly bent to absorb impact."
    ],
    breathing: "Maintain short, rapid, relaxed breaths.",
    commonMistakes: [
      "Jumping too high and bending knees too much.",
      "Swinging arms widely from the shoulders instead of using wrists."
    ],
    safetyTips: [
      "Jump on a slightly cushioned surface (gym mat, wood floor) rather than concrete to protect joints.",
      "Adjust the rope length so the handles reach your armpits when stepped on in the middle."
    ],
    variations: [
      { level: "Beginner", name: "Single Jump with Bounce", description: "Jump once, do a mini-bounce, then jump again to establish timing." },
      { level: "Advanced", name: "Double Unders", description: "Spin the rope twice as fast, passing it under your feet twice per single jump." }
    ]
  },
  {
    id: "hiit-training",
    name: "HIIT Bodyweight Training",
    category: "Cardio",
    targetMuscles: ["Full Body", "Heart Rate Engine"],
    difficulty: "Advanced",
    equipment: "Bodyweight",
    recommendedSetRep: "4 rounds (40s work, 20s rest)",
    startingPosition: "Prepare an open space. Stand with feet hip-width apart.",
    stepByStep: [
      "Perform explosive exercises in high-intensity intervals (e.g. Burpees, Mountain Climbers, High Knees).",
      "Give 100% effort during the 'work' interval (usually 30-40 seconds).",
      "Completely rest or walk slowly during the 'rest' interval (usually 15-20 seconds)."
    ],
    breathing: "Forcefully exhale during the explosive phase; take rapid deep recovery breaths during the rest intervals.",
    commonMistakes: [
      "Sacrificing form and safety for speed.",
      "Not resting enough, which turns it into steady cardio rather than high-intensity intervals."
    ],
    safetyTips: [
      "Stop immediately if you feel dizzy or nauseous.",
      "Ensure proper warm-up and cool-down are completed."
    ],
    variations: [
      { level: "Beginner", name: "Modified low-impact HIIT", description: "Perform squats, marches, and wall push-ups with longer rest." },
      { level: "Advanced", name: "Tabata HIIT", description: "8 rounds of 20s absolute max effort followed by 10s of complete rest." }
    ]
  }
];
