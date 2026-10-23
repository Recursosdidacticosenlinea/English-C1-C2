window.UNIT = {
  slug: "first-impressions",
  number: 1,
  title: "First Impressions",
  level: "C1",
  minutes: 80,
  speakers: { "Lucía": "f", "Mateo": "m", "Host": "f", "Dr. Okafor": "m" },
  focus: ["speculating about the present: must be, can't be, might well be", "speculating about the past: must have been, can't have known, may have been", "continuous and passive forms: must have been waiting, can't have been told", "probability expressions: is bound to, is likely to, there's every chance that", "vocabulary of impressions: come across as, give the impression, judge someone"],

  presentation: {
    scene: "☕👀🤝💭",
    situation: "Lucía and Mateo are having coffee after a job interview panel. They are comparing their first impressions of the candidates they met this morning.",
    warmup: {
      prompt: "What do you notice first when you meet someone new? Choose all that apply.",
      options: ["their smile", "their clothes", "their handshake", "eye contact", "their voice", "their posture", "how punctual they are", "their shoes", "their accent", "how they listen", "their phone habits", "their sense of humour"],
      response: "Research suggests we form an impression in less than a second. In this unit you'll learn to speculate precisely about people and situations, and to say how sure you are."
    },
    dialogueTitle: "After the interviews",
    dialogue: [
      { who: "Lucía", line: "So, what did you make of the second candidate? He barely said a word." },
      { who: "Mateo", line: "He *must have been* incredibly nervous. His hands were shaking when he picked up the glass of water." },
      { who: "Lucía", line: "Maybe. But he *can't have prepared* much. He didn't know the first thing about the company." },
      { who: "Mateo", line: "True, although he *might well have been told* the wrong time. He arrived out of breath, remember?" },
      { who: "Lucía", line: "Fair point. And the woman in the green jacket? She came across as extremely confident." },
      { who: "Mateo", line: "She *must be* used to presenting. I'd say she's *bound to* get a second interview." },
      { who: "Lucía", line: "*There's every chance* she will. Though she *may have been rehearsing* those answers for weeks." },
      { who: "Mateo", line: "Well, that's hardly a crime. If anything, it shows she *must really want* the job." }
    ]
  },

  objectives: [
    "I can speculate about the present and the past with modal verbs, saying how certain I am.",
    "I can use continuous and passive modal forms such as must have been waiting.",
    "I can use expressions of probability such as is bound to and there's every chance.",
    "I can discuss first impressions and why they can be misleading."
  ],

  explanation: {
    vocabTitle: "Talking about impressions",
    vocab: [
      { word: "come across as", icon: "🎭" }, { word: "give the impression that", icon: "💡" }, { word: "jump to conclusions", icon: "🦘" },
      { word: "take someone at face value", icon: "🪞" }, { word: "size someone up", icon: "📏" }, { word: "a snap judgment", icon: "⚡" },
      { word: "a gut feeling", icon: "🫀" }, { word: "body language", icon: "🙆" }, { word: "self-assured", icon: "😎" },
      { word: "standoffish", icon: "🧊" }, { word: "approachable", icon: "🤗" }, { word: "unassuming", icon: "🌱" },
      { word: "the halo effect", icon: "😇" }, { word: "misleading", icon: "🔀" }, { word: "first impressions count", icon: "⭐" }
    ],
    grammar: [
      {
        title: "Modals of deduction: present and past",
        intro: "Choose the modal according to **how sure** you are. Use modal + *be* / *be -ing* for the present, and modal + *have* + past participle for the past.",
        head: ["Certainty", "Present", "Past"],
        rows: [
          ["almost certain (yes)", "*She must be used to presenting.*", "*He must have been nervous.*"],
          ["almost certain (no)", "*He can't / couldn't be serious.*", "*He can't / couldn't have prepared.*"],
          ["possible", "*She may / might / could be the manager.*", "*He may / might / could have got lost.*"],
          ["quite likely", "*She might well be the best candidate.*", "*He might well have been told the wrong time.*"],
          ["not possible (weak)", "*She may not / might not know.*", "*He may not / might not have seen the email.*"]
        ],
        note: "Don't use *mustn't* for deduction. *Mustn't* means prohibition. Say *He can't be at home* (deduction), not *He mustn't be at home*."
      },
      {
        title: "Continuous and passive forms",
        head: ["Form", "Example"],
        rows: [
          ["modal + be + -ing (present, in progress)", "*He must be waiting outside.*"],
          ["modal + have been + -ing (past, in progress)", "*She may have been rehearsing for weeks.*"],
          ["modal + be + past participle (present passive)", "*The results could be published tomorrow.*"],
          ["modal + have been + past participle (past passive)", "*He can't have been told about the change.*"]
        ]
      },
      {
        title: "Other ways to express probability",
        head: ["Expression", "Example"],
        rows: [
          ["be bound to / be sure to + infinitive", "*She's bound to get a second interview.*"],
          ["be (highly / quite) likely / unlikely to", "*He's highly unlikely to be chosen.*"],
          ["There's every / a good / little chance (that)", "*There's every chance she'll accept.*"],
          ["In all likelihood, … / The chances are (that) …", "*In all likelihood, they'll call her tomorrow.*"],
          ["I dare say / I doubt (whether) …", "*I doubt whether he slept much last night.*"]
        ]
      }
    ],
    watchOut: [
      ["He mustn't be at home; the lights are off.", "He *can't* be at home; the lights are off."],
      ["She must have be tired.", "She must *have been* tired."],
      ["He can have forgotten.", "He *could / may / might* have forgotten."],
      ["She's bound to getting the job.", "She's bound to *get* the job."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with one or two words.",
      items: [
        "He's not answering. He [[must]] be in the meeting still.",
        "She can't [[have]] seen the message, or she'd have replied.",
        "They must have been [[waiting|standing|sitting]] for hours; they look exhausted.",
        "With her experience, she's [[bound|sure|likely]] to be offered the job.",
        "There's every [[chance]] the interview will be moved to Friday."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a psychologist talking about how we judge people in the first few seconds.",
      title: "The seven-second rule",
      script: [
        { who: "Host", line: "Dr. Okafor, people often say we decide what we think of someone in seven seconds. Is that true?" },
        { who: "Dr. Okafor", line: "If anything, seven seconds is generous. Studies show we judge whether a face looks trustworthy in about a tenth of a second. Our ancestors must have needed that speed to survive." },
        { who: "Host", line: "But surely those snap judgments can't always be accurate." },
        { who: "Dr. Okafor", line: "Not at all. They're surprisingly consistent between people, but consistency isn't accuracy. We all might well agree that someone looks competent and still be completely wrong." },
        { who: "Host", line: "So what's going on in the brain?" },
        { who: "Dr. Okafor", line: "We're filling in gaps. If someone is attractive or well dressed, we tend to assume they're also intelligent or kind. That's known as the halo effect. It's bound to influence interviewers, however professional they are." },
        { who: "Host", line: "Can we change an impression once it's formed?" },
        { who: "Dr. Okafor", line: "Yes, but it takes time. In one experiment, it took about eight positive interactions to cancel out a single negative first impression. So if you've had a bad start with a colleague, the chances are you'll need patience, not one grand gesture." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "According to Dr. Okafor, we judge trustworthiness in about seven seconds.", a: false },
            { s: "People tend to agree with each other in their snap judgments.", a: true },
            { s: "He says that consistent judgments are usually accurate.", a: false },
            { s: "The halo effect means assuming one good quality implies others.", a: true },
            { s: "One positive interaction is enough to repair a bad first impression.", a: false }
          ]
        },
        {
          type: "match", title: "Who or what?",
          prompt: "Match the beginnings and endings to summarize the talk.",
          pairs: [
            ["Our ancestors must have", "needed fast judgments to survive."],
            ["Snap judgments can't", "always be accurate."],
            ["The halo effect is bound to", "influence interviewers."],
            ["Repairing a bad impression", "takes several positive interactions."]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short article about a famous experiment with a violinist in a subway station.",
      title: "The violinist nobody noticed",
      text: [
        { body: "On a cold January morning, a young man in jeans and a baseball cap took out a violin at the entrance of a busy subway station and began to play. For forty-five minutes he performed some of the most difficult pieces ever written. More than a thousand people walked past him." },
        { body: "Only seven stopped to listen for more than a minute. He collected just over thirty dollars. What none of the commuters realized was that the musician was one of the finest violinists in the world, playing an instrument worth several million dollars. Two days earlier, he had sold out a concert hall where the cheapest seats cost about a hundred dollars." },
        { body: "The experiment, organized by a newspaper, is often quoted as proof that people have lost the ability to appreciate beauty. Yet that conclusion may well be unfair. The commuters were in a hurry, many of them must have been worried about being late for work, and context matters enormously. A man in a cap in a noisy corridor simply doesn't give the impression of a world-class artist." },
        { body: "Interestingly, the people most likely to stop were children, and almost every one of them was pulled away by a parent. Children can't have been influenced by the setting in the same way; they responded to the sound itself. Perhaps the real lesson is not that we fail to recognize talent, but that we rarely look beyond the frame in which it is presented." }
      ],
      activities: [
        {
          type: "sort", title: "Fact or interpretation?",
          prompt: "Is each statement a fact from the article or the writer's interpretation?",
          bins: ["Fact reported", "Writer's interpretation"],
          items: [
            { text: "More than a thousand people walked past.", bin: 0 }, { text: "Only seven people stopped for over a minute.", bin: 0 },
            { text: "The concert hall seats cost about a hundred dollars.", bin: 0 }, { text: "Children were the most likely to stop.", bin: 0 },
            { text: "Many commuters must have been worried about being late.", bin: 1 }, { text: "The usual conclusion may well be unfair.", bin: 1 },
            { text: "We rarely look beyond the frame.", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Speculate about the story",
          prompt: "Rewrite each sentence using the modal in brackets. Keep the meaning.",
          items: [
            { q: "I'm sure the commuters were in a hurry. (must)", a: ["The commuters must have been in a hurry.", "The commuters must have been in a hurry"] },
            { q: "It's impossible that the children recognized him. (can't)", a: ["The children can't have recognized him.", "The children cannot have recognized him.", "The children couldn't have recognized him."] },
            { q: "Perhaps the parents were thinking about work. (might)", a: ["The parents might have been thinking about work.", "The parents might well have been thinking about work."] },
            { q: "It's very likely that he will play there again. (bound)", a: ["He is bound to play there again.", "He's bound to play there again."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice precise speculation, then write a short analytical text.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "She must have been rehearsing for weeks." },
            { a: "He can't have been told about the change." },
            { a: "There's every chance they'll call her back." },
            { a: "The results are bound to surprise us." }
          ]
        },
        {
          type: "gap", title: "Choose the right form",
          prompt: "Complete with the correct form of the verb in brackets after the modal.",
          items: [
            "The office is empty. Everyone must [[have gone|have left]] (go) home already.",
            "Listen! Someone must [[be playing]] (play) the piano upstairs.",
            "Her phone was off all day. She might [[have been travelling|have been traveling]] (travel).",
            "The decision can't [[have been made]] (make) without the director's approval.",
            "It's late. They're likely [[to be]] (be) asleep by now."
          ]
        },
        {
          type: "write", title: "Analyse a first impression",
          prompt: "Write a short analytical text (220–260 words) for a psychology blog. Describe a time when your first impression of a person, a place or an event turned out to be wrong. Speculate about **why** you formed that impression and **why** it was misleading. Use at least four modal or probability structures from this unit.",
          minWords: 220, maxWords: 260,
          model: "When I started my first job, I was introduced to a colleague who barely looked up from her screen. She said hello without smiling, and I immediately decided she must be cold and unfriendly. For weeks I avoided asking her anything.<br>Looking back, I can see that my snap judgment can't have been based on much more than a few seconds of body language. She might well have been in the middle of a difficult task; in fact, I later found out that she had been preparing an urgent report that morning. She may also have been shy, which is often mistaken for arrogance.<br>Things changed when we were assigned to the same project. She turned out to be generous, funny and incredibly patient with newcomers. There's every chance that, without that project, I would still believe my original impression.<br>Why was I so quick to judge? I suspect I must have been nervous myself, and nervous people tend to read rejection into neutral behaviour. Our brains are bound to fill in the gaps when we have little information, and they usually fill them with our own fears.<br>The experience taught me to treat first impressions as hypotheses rather than conclusions. Nowadays, when I catch myself sizing someone up, I remind myself that I'm seeing a single frame of a very long film.",
          bank: ["must have been", "can't have", "might well have", "may also have", "there's every chance that", "is bound to", "came across as", "jumped to conclusions"],
          checklist: [
            "I described the **first impression** and what **really** happened.",
            "I speculated about the **reasons** with past modals.",
            "I used at least **four** modal or probability structures.",
            "I ended with a **reflection** or lesson."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Pay attention to the weak forms of *have* (/əv/) and *been* (/bɪn/).",
          items: [
            "He must have been incredibly nervous.",
            "She can't have prepared very much.",
            "They might well have been told the wrong time.",
            "She's bound to get a second interview.",
            "There's every chance she'll accept the offer.",
            "First impressions can be very misleading."
          ]
        },
        {
          type: "speak", title: "What's the story?",
          prompt: "Imagine you see these three situations. Record yourself speculating about each one for about a minute (three to four minutes in total). Say what **must**, **might** or **can't** have happened and how sure you are. *1) A man in a suit is sitting on a park bench at 11 a.m. on a Tuesday, staring at his phone. 2) A young woman runs out of a building in tears, holding a letter. 3) A family arrives at an airport with eight suitcases and a cat.*",
          language: ["He must be…", "He might well have…", "She can't have…", "She may have been…ing", "They're bound to…", "There's every chance that…", "I doubt whether…", "In all likelihood,…"],
          seconds: 240,
          checklist: ["speculate about all three situations?", "use present and past modals?", "use a continuous or passive form?", "say how certain you were?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can speculate about the present with must, can't, might well and could.", review: "Explanation: modals of deduction" },
    { can: "I can speculate about the past with must have, can't have and may have.", review: "Explanation: modals of deduction; Reading activity 2" },
    { can: "I can use continuous and passive modal forms.", review: "Explanation: continuous and passive forms; Writing activity 2" },
    { can: "I can express probability with bound to, likely to and every chance.", review: "Explanation: other ways to express probability" },
    { can: "I can follow a talk about psychology and summarize its main ideas.", review: "Listening activities" },
    { can: "I can analyse a first impression in writing and in speech.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
