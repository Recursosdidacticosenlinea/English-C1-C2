window.UNIT = {
  slug: "fine-distinctions",
  number: 28,
  title: "Fine Distinctions",
  level: "C2",
  minutes: 90,
  speakers: { "Claire": "f", "Omar": "m", "Host": "f", "Philosopher": "m" },
  focus: ["be to: You are to report at 9 (instruction), If we are to succeed (condition), He was never to return (destiny)", "needn't have done vs didn't need to do", "could conceivably, may well, might just, can't possibly", "would sooner / would as soon / might as well", "shall, ought to have, was supposed to: obligation, expectation and reproach"],

  presentation: {
    scene: "⚖️🔬🎚️🧭",
    situation: "Claire and Omar are planning a scientific expedition to a remote island. They're going through the instructions from the research institute, which are full of fine distinctions in meaning.",
    warmup: {
      prompt: "Which of these have you done that turned out to be unnecessary? Choose all that apply.",
      options: ["taking an umbrella", "studying for a cancelled exam", "booking a table at an empty restaurant", "bringing cash", "arriving very early", "printing tickets", "buying a gift twice", "learning a speech by heart", "cleaning before a visit that was cancelled", "packing extra clothes", "charging a power bank", "translating a document someone already had"],
      response: "English makes very precise distinctions about necessity, possibility and obligation. In this unit you'll master the subtle differences that distinguish C2 users."
    },
    dialogueTitle: "The expedition instructions",
    dialogue: [
      { who: "Omar", line: "It says here: *All participants are to report to the port at 6 a.m.* So that's an order, not a suggestion." },
      { who: "Claire", line: "Yes. And: *If the expedition is to succeed, strict water rationing will be necessary.*" },
      { who: "Omar", line: "Water rationing? I *needn't have bought* all those bottles of mineral water, then." },
      { who: "Claire", line: "Well, you *didn't need to* buy them, but they *may well* come in useful. The weather *could conceivably* delay the supply boat." },
      { who: "Omar", line: "Delay it for how long? I'd *sooner* not spend a week eating tinned beans." },
      { who: "Claire", line: "It *can't possibly* be more than a few days. And if it is, we *might as well* enjoy the view." },
      { who: "Omar", line: "You know, the last team leader *was supposed to* send us a map. He *ought to have done* it a month ago." },
      { who: "Claire", line: "Apparently, he left for another island and *was never to be* heard from again. I'm joking. He's just very disorganized." }
    ]
  },

  objectives: [
    "I can use be to for instructions, conditions and future destiny.",
    "I can distinguish needn't have done from didn't need to do.",
    "I can express fine degrees of possibility with could conceivably, may well and can't possibly.",
    "I can express preference, reproach and unfulfilled expectations precisely."
  ],

  explanation: {
    vocabTitle: "Necessity and possibility",
    vocab: [
      { word: "obligatory", icon: "📜" }, { word: "optional", icon: "🔘" }, { word: "redundant", icon: "♻️" },
      { word: "unnecessary", icon: "🚫" }, { word: "inevitable", icon: "⏳" }, { word: "conceivable", icon: "💭" },
      { word: "far-fetched", icon: "🚀" }, { word: "a remote possibility", icon: "🏝️" }, { word: "a foregone conclusion", icon: "🏁" },
      { word: "in all probability", icon: "📊" }, { word: "against all odds", icon: "🎲" }, { word: "by no means certain", icon: "❓" },
      { word: "a moral obligation", icon: "🧭" }, { word: "a reproach", icon: "👆" }, { word: "fate", icon: "🌌" }
    ],
    grammar: [
      {
        title: "Be to + infinitive",
        head: ["Use", "Example"],
        rows: [
          ["official instructions or orders", "*All participants are to report at 6 a.m. / You are not to touch the samples.*"],
          ["formal arrangements", "*The minister is to visit the island next month.*"],
          ["condition (*if… be to*) = if we want to", "*If the expedition is to succeed, we must ration water.*"],
          ["destiny (past)", "*He left, and was never to return.*"],
          ["passive possibility", "*Nothing was to be seen. / She was nowhere to be found.*"]
        ]
      },
      {
        title: "Needn't have done vs didn't need to",
        head: ["Form", "Meaning", "Example"],
        rows: [
          ["*needn't have + pp*", "I did it, but it wasn't necessary", "*I needn't have bought water. (I bought it.)*"],
          ["*didn't need to + verb*", "it wasn't necessary (maybe I did it, maybe not)", "*I didn't need to buy water, so I didn't.*"],
          ["*ought to have / should have + pp*", "it was right, but I didn't do it", "*He ought to have sent the map.*"],
          ["*was / were supposed to*", "it was expected, but didn't happen", "*He was supposed to send a map.*"]
        ]
      },
      {
        title: "Fine degrees of possibility and preference",
        head: ["Form", "Meaning", "Example"],
        rows: [
          ["*can't possibly / couldn't possibly*", "it's impossible (emphatic)", "*It can't possibly take more than a week.*"],
          ["*could conceivably*", "it's just about possible", "*The storm could conceivably delay the boat.*"],
          ["*may well / might well*", "it's quite likely", "*They may well come in useful.*"],
          ["*might just*", "small chance, but hopeful", "*We might just make it in time.*"],
          ["*would sooner / would rather*", "preference", "*I'd sooner walk than wait for the bus.*"],
          ["*might as well*", "there's no better alternative", "*We might as well enjoy the view.*"]
        ],
        note: "*Shall* in contracts and rules expresses legal obligation: *The tenant shall pay the rent monthly.*"
      }
    ],
    watchOut: [
      ["I needn't have bought it, so I didn't.", "I *didn't need to* buy it, so I didn't."],
      ["If we are succeed, we need funds.", "If we are *to* succeed, we need funds."],
      ["I'd sooner to walk.", "I'd sooner *walk*."],
      ["It can't conceivably take a week.", "It *could conceivably* take a week. / It *can't possibly* take a week."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with one word.",
      items: [
        "All visitors [[are]] to sign in at reception.",
        "I needn't [[have]] cooked so much; only three people came.",
        "If we are [[to]] finish on time, we must start now.",
        "The flight could [[conceivably|possibly]] be delayed, but it's unlikely.",
        "There's nothing on TV. We might as [[well]] go to bed."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a philosopher discussing the language of moral obligation.",
      title: "Should, ought and must",
      script: [
        { who: "Host", line: "We use words like should, ought and must all the time. Do they really mean different things?" },
        { who: "Philosopher", line: "In everyday speech the differences are subtle, but they matter. Must and have to express strong necessity, often imposed by rules or circumstances. Should and ought to express what is right or advisable, but they leave room for choice. You must stop at a red light. You ought to visit your grandmother." },
        { who: "Host", line: "And when we talk about the past?" },
        { who: "Philosopher", line: "That's where the language becomes morally charged. If I say you ought to have told me, I'm not just describing a missed obligation; I'm reproaching you. Whereas you didn't need to tell me is almost the opposite: it releases you from blame." },
        { who: "Host", line: "What about needn't have?" },
        { who: "Philosopher", line: "That one's fascinating. You needn't have brought a gift implies that you did bring one. It's often used politely, with gratitude. Oh, you needn't have! It's a little like saying thank you while pretending to protest." },
        { who: "Host", line: "Is there a link with ethics more generally?" },
        { who: "Philosopher", line: "Certainly. Philosophers have long debated whether ought implies can: whether it makes sense to say someone ought to have done something they couldn't possibly have done. Most would say it doesn't. Moral language, in that sense, is built on the same fine distinctions as grammar." }
      ],
      activities: [
        {
          type: "match", title: "What does it express?",
          prompt: "Match each form with what it expresses, according to the philosopher.",
          pairs: [
            ["must / have to", "strong necessity, often from rules"],
            ["should / ought to", "what is right or advisable"],
            ["ought to have told me", "a reproach"],
            ["didn't need to tell me", "release from blame"],
            ["you needn't have brought a gift", "polite gratitude"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again and decide.",
          items: [
            { s: "Should leaves more room for choice than must.", a: true },
            { s: "You needn't have brought a gift means you didn't bring one.", a: false },
            { s: "Ought implies can means we can only be obliged to do what is possible.", a: true },
            { s: "The philosopher thinks grammar and ethics are unrelated.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an extract from a historical account of a polar expedition.",
      title: "The last expedition",
      text: [
        { body: "When the expedition left the port in November, its leader was confident. The ship was to sail south for six weeks before landing on the ice, and the team were to establish three supply depots before winter. If the journey to the Pole was to succeed, every depot had to be in place by March." },
        { body: "From the beginning, things went wrong. The motor sledges, which were supposed to carry most of the supplies, broke down within days. The ponies, which the leader would sooner have relied on than dogs, could not cope with the cold. Later critics would argue that he ought to have trusted the dogs, as his rival had done, and that the outcome could conceivably have been very different." },
        { body: "The final depot was established thirty miles short of its planned position. At the time, this seemed a minor setback; nobody could possibly have known how significant it would become. On the return journey, the exhausted men were caught by a blizzard just eleven miles from that depot. They were never to reach it." },
        { body: "Reading the diaries today, one is struck less by the mistakes than by the calm with which the men faced them. *We might as well die like gentlemen*, one wrote. Historians still debate whether they need have died at all. What is certain is that the story was to become one of the most famous, and most argued about, in the history of exploration." }
      ],
      activities: [
        {
          type: "match", title: "What does be to mean here?",
          prompt: "Match each sentence with the meaning of *be to* or the modal.",
          pairs: [
            ["The ship was to sail south for six weeks.", "a plan or arrangement"],
            ["If the journey was to succeed,…", "a condition (if they wanted…)"],
            ["They were never to reach it.", "destiny: it didn't happen"],
            ["…he ought to have trusted the dogs.", "a criticism of a past decision"],
            ["We might as well die like gentlemen.", "there is no better alternative"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The motor sledges worked well throughout the expedition.", a: false },
            { s: "The leader preferred ponies to dogs.", a: true },
            { s: "The men reached the final depot during the blizzard.", a: false },
            { s: "Historians agree on whether the deaths were avoidable.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice fine distinctions in modality, then write a reflective narrative.",
      activities: [
        {
          type: "rewrite", title: "Say it precisely",
          prompt: "Rewrite each sentence using the words in brackets.",
          items: [
            { q: "I took a coat, but it wasn't necessary. (needn't)", a: ["I needn't have taken a coat."] },
            { q: "It wasn't necessary to book, so we didn't. (didn't need)", a: ["We didn't need to book, so we didn't."] },
            { q: "It was expected that he would call, but he didn't. (supposed)", a: ["He was supposed to call.", "He was supposed to call, but he didn't."] },
            { q: "Candidates must not use phones during the exam. (are not to)", a: ["Candidates are not to use phones during the exam."] },
            { q: "It's just about possible that she missed the train. (conceivably)", a: ["She could conceivably have missed the train."] }
          ]
        },
        {
          type: "sort", title: "Done or not done?",
          prompt: "In each sentence, did the action actually happen?",
          bins: ["it happened", "it didn't happen"],
          items: [
            { text: "I needn't have worried.", bin: 0 }, { text: "You needn't have brought flowers!", bin: 0 }, { text: "He was to become famous.", bin: 0 },
            { text: "She ought to have apologized.", bin: 1 }, { text: "They were supposed to arrive at six.", bin: 1 }, { text: "He was never to see her again.", bin: 1 }
          ]
        },
        {
          type: "write", title: "Looking back",
          prompt: "Write a reflective narrative (250–300 words) about a trip, project or event that didn't go as planned. Describe what was supposed to happen, what actually happened, what you needn't have done, what you or others ought to have done, and what could conceivably have happened. Use at least **eight** of the modal structures from this unit.",
          minWords: 250, maxWords: 300,
          model: "Last year, a group of us organized a weekend trip to the mountains of Veracruz. It was to be the perfect break before final exams: two days of hiking, a night in a cabin and a sunrise from the summit of a volcano.<br>The plan was meticulous, or so we thought. We were to meet at the bus station at five in the morning, and everyone was supposed to bring their own food and a sleeping bag. Our friend Mateo, who knew the area, was to guide us to the cabin.<br>Things started to go wrong almost immediately. Mateo overslept and missed the first bus, which meant that we arrived three hours late. He ought to have set two alarms, as we teased him for months afterwards. Then, halfway up the trail, it began to pour with rain. I had packed four jumpers and a heavy coat, convinced it would be freezing. As it turned out, I needn't have carried any of them; it was surprisingly warm, just extremely wet.<br>By the time we reached the cabin, we were soaked and exhausted. If we were to reach the summit for sunrise, we would have to leave at three in the morning. Most of the group said they would sooner sleep than climb in the dark, and in the end we decided that we might as well stay in bed.<br>Looking back, the trip could conceivably have been a disaster. Someone may well have been hurt on the slippery path. Yet, strangely, it remains one of my favourite memories. We didn't need to reach the summit to have a wonderful time; we just needed a dry cabin, a lot of tea and good friends.",
          bank: ["was to be", "were to meet", "was supposed to", "ought to have", "needn't have", "If we were to…", "would sooner", "might as well", "could conceivably have", "may well have", "didn't need to"],
          checklist: [
            "I described the **plan** and what **actually** happened.",
            "I used both **needn't have** and **didn't need to** correctly.",
            "I used **be to** with at least two different meanings.",
            "I used at least **eight** modal structures."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice the weak form of *have* in past modals.",
          items: [
            "All participants are to report at six.",
            "I needn't have bought so much water.",
            "If we are to succeed, we must start.",
            "He was never to return.",
            "It can't possibly take more than a week.",
            "We might as well enjoy the view."
          ]
        },
        {
          type: "speak", title: "Plans and outcomes",
          prompt: "Record yourself for about four minutes. **Part 1:** Describe a historical event, a famous mistake or a personal experience where things didn't go as planned. Use *be to*, *was supposed to*, *ought to have* and *could conceivably have*. **Part 2:** Talk about a plan you have for the future. What conditions must be met *if it is to succeed*? What *may well* happen, and what *can't possibly* go wrong?",
          language: ["It was to be…", "… was supposed to…", "… ought to have…", "… needn't have…", "It could conceivably have…", "If it is to succeed,…", "It may well…", "It can't possibly…", "I'd sooner… than…"],
          seconds: 270,
          checklist: ["describe a past plan and its outcome?", "use be to with different meanings?", "use needn't have or didn't need to?", "talk about conditions for a future plan?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use be to for instructions, conditions and destiny.", review: "Explanation: be to + infinitive; Reading activity 1" },
    { can: "I can distinguish needn't have done from didn't need to do.", review: "Explanation: needn't have done vs didn't need to; Writing activity 2" },
    { can: "I can express reproach with ought to have and was supposed to.", review: "Explanation: needn't have done…; Listening" },
    { can: "I can express fine degrees of possibility.", review: "Explanation: fine degrees of possibility" },
    { can: "I can use would sooner and might as well naturally.", review: "Explanation: fine degrees of possibility and preference" },
    { can: "I can narrate plans and outcomes with precise modality.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
