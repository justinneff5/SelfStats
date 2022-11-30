const datapointNotif =
    "Datapoint time! Please respond to these prompts with new info since the last checkin. Respond n for no, all time in military time"

const morningNotif = 
    "Good morning! Please give: <wake time, sleep time, quality>.\nTake your medication!"

const checkNight = 
    "Any more data from last night?"

const reminder = 
    "Please respond to the previous chain before the most recent, or type n to skip datapoint (please don't)"

const eveningNotif = 
    "Good evening! Time to reflect on the day."

const moodPrompt =
    "Rank the following 1-10. Please put a line break between each number entry.\nEnergy\nHappiness\nContentment\nOptimism\nBoredom\nStress\Depression\nDetached\nClearheaded\nPace of Time"

const poTPrompt =
    "Rank the pace of time 1-5."

const taskPrompt =
    "How were your tasks? List of <hours, task, completion quality (1-10), focus (1-10)"

const foodPrompt= 
    "Did you eat? Comma separated list of foods consumed\nopt: Time consumed\nopt: Estimated number of Calories"

const waterPrompt =
    "How many glasses of water?"

const drinkPrompt =
    "Any coffee/soda/other? List of <drinkname, amount> with linebreaks"

const sexPrompt =
    "Any sexual activity? List of <length, time, solo (y/n), porn used (y/n), time, opt: details>"

const spendingPrompt =
    "Did you spend money? List of <item, amount, time>"

const timeOutsidePrompt =
    "Did you go outside? List of <amount, time>"

const exercisePrompt =
    "Did you exercise? List of <intensity, minutes, quality, time, opt: type>"

const medicationPrompts =
    ["Did you take your adderall? <time_taken> or u for unsure", "Did you take your lamictal? <time_taken> or u for unsure"]

const drugUsePrompt =
    "Did you use drugs? List of <drug, amount, opt: time>"

const poopPrompt =
    "Did you poop? List of <time spent, quality, time>"

const healthPrompt =
    "How do you feel physically? Please respond y for healthy, or <sickness level (1-10), symptom1, symptom2, ...>"

const illnessCheck = 
    "Any ongoing labelled illness? List of <name>"

const satisfactionPrompt =
    "How satisfied are you with your: task completion\nself"

const showerPrompt =
    "Did you shower? List of <length, quality, time, washed hair y/n>"

const notableEventPrompt =
    "Any notable events? List of <event, quality (1-5), time, opt: details>"

const regretPrompt = 
    "Any regrets? List of <level (1-10), details>"

const reflectionPrompt = 
    "Any reflections or other notes on the day? This is journal-esque, write whatever."

const morningText = [
    morningNotif,
    moodPrompt,
    healthPrompt,
];

const checkinText = [
    datapointNotif,
    moodPrompt,
    poTPrompt,
    taskPrompt,
    foodPrompt,
    waterPrompt,
    drinkPrompt,
    timeOutsidePrompt,
    exercisePrompt,
    sexPrompt,
    spendingPrompt,
    healthPrompt,
    drugUsePrompt,
]





