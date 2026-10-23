window.UNIT = {
  slug: "my-c2-journey",
  number: 45,
  title: "My C2 Journey",
  level: "C2",
  minutes: 100,
  speakers: { "Andrea": "f", "Dr. Ortiz": "m", "Examiner": "f", "Candidate": "m" },
  focus: ["C2 review: connotation, implicature, fine modality and nominal clauses", "literary inversion, fronting and advanced hypotheses", "evaluating claims, legal register and generalizing and qualifying", "summarizing, mediating, spontaneous speech and humour", "final project: My C2 Journey"],

  presentation: {
    scene: "🏁🌌📚✨",
    situation: "Andrea has completed all forty-five units of the C1–C2 programme. She presents her final project, *My C2 Journey*, to her adviser, Dr. Ortiz, and a small group of fellow students.",
    warmup: {
      prompt: "What can you do now that you couldn't do before C2? Choose all that apply.",
      options: ["read between the lines", "choose words with the right connotation", "write a critical review", "understand legal language", "summarize complex texts", "mediate between people", "speak off the cuff", "use irony and humour", "evaluate claims critically", "write an opinion column", "follow academic lectures", "write in a literary style"],
      response: "That is the profile of a proficient user of English. In this final unit you'll review the C2 programme and reflect on where your English can take you next."
    },
    dialogueTitle: "Andrea's final presentation",
    dialogue: [
      { who: "Andrea", line: "Good afternoon. *Little did I imagine*, when I started C1, that I'd one day be analysing legal contracts in English for fun." },
      { who: "Andrea", line: "*What has changed most is* not how much I know, but how precisely I can say it. *Strictly speaking*, I knew most of these words before. I just didn't know their *shades of meaning*." },
      { who: "Andrea", line: "*Were I to* choose one unit that transformed me, it would be *Reading the Room*. I'd been taking British understatement literally for years. *Not bad*, it turns out, can mean *excellent*." },
      { who: "Andrea", line: "*By and large*, my writing has become more concise. *Such was* my love of long sentences *that* my adviser once returned an essay with a single comment: *Breathe.*" },
      { who: "Dr. Ortiz", line: "*I needn't have worried*, as it turned out. What are your plans now?" },
      { who: "Andrea", line: "I'm *to* start a master's in Edinburgh in September. *The extent to which* I'll still need help remains to be seen, but I'm *ostensibly* ready." },
      { who: "Andrea", line: "*In a nutshell*, this journey has been, *to put it mildly*, a bit of an adventure. Thank you, and I'd be delighted to take any questions." }
    ]
  },

  objectives: [
    "I can use a wide range of C2 structures with precision and flexibility.",
    "I can reflect critically and in detail on my development as a proficient user.",
    "I can write a sophisticated reflective text with a clear personal voice.",
    "I can give a fluent, engaging presentation and respond to questions spontaneously."
  ],

  explanation: {
    vocabTitle: "Reflecting on mastery",
    vocab: [
      { word: "mastery", icon: "🏁" }, { word: "proficiency", icon: "🎓" }, { word: "precision", icon: "🎯" },
      { word: "nuance", icon: "🎨" }, { word: "subtlety", icon: "🪶" }, { word: "a near-native command", icon: "🗣️" },
      { word: "idiomatic", icon: "💬" }, { word: "effortless", icon: "🌊" }, { word: "a lifelong learner", icon: "♾️" },
      { word: "intellectual curiosity", icon: "🔭" }, { word: "polish", icon: "✨" }, { word: "refine", icon: "💎" },
      { word: "versatility", icon: "🤹" }, { word: "eloquence", icon: "🎤" }, { word: "the road ahead", icon: "🛤️" }
    ],
    grammar: [
      {
        title: "C2 at a glance (1): meaning and grammar",
        head: ["Use", "Structure", "Unit", "Example"],
        rows: [
          ["connotation", "*thrifty / stingy, determined / stubborn*", "26", "*He's thrifty, not stingy.*"],
          ["implied meaning", "*understatement, litotes*", "27", "*Not bad can mean excellent.*"],
          ["fine modality", "*be to, needn't have, could conceivably*", "28", "*I needn't have worried.*"],
          ["nominal clauses", "*the extent to which, whether*", "31", "*The extent to which I'll need help remains to be seen.*"],
          ["advanced hypotheses", "*Were I to…, Suppose…, It's high time…*", "34", "*Were I to choose one unit,…*"],
          ["literary fronting", "*Little did I…, Such was… that*", "36", "*Such was my love of long sentences that…*"]
        ]
      },
      {
        title: "C2 at a glance (2): skills and style",
        head: ["Use", "Structure", "Unit", "Example"],
        rows: [
          ["evaluating claims", "*ostensibly, unfounded, corroborate*", "32", "*The claim is unfounded.*"],
          ["legal register", "*shall, notwithstanding, provided that*", "33", "*The tenant shall pay monthly.*"],
          ["generalizing", "*by and large, strictly speaking*", "39", "*Strictly speaking, I knew the words.*"],
          ["summarizing", "*In a nutshell, The central claim is*", "41", "*In a nutshell, it was an adventure.*"],
          ["spontaneous speech", "*or rather, Let me put that another way*", "43", "*It was hard, or rather, demanding.*"],
          ["humour", "*irony, understatement*", "44", "*It's been, to put it mildly, a bit of an adventure.*"]
        ]
      }
    ],
    watchOut: [
      ["Little I did imagine that…", "Little *did I imagine* that…"],
      ["I needn't have worried, so I didn't worry.", "I *didn't need to* worry, so I didn't. / I *needn't have* worried (but I did)."],
      ["The extent which I improved…", "The extent *to which* I improved…"],
      ["Were I choose one unit,…", "Were I *to* choose one unit,…"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with one word.",
      items: [
        "Little [[did]] I know how much I would enjoy legal English.",
        "Such [[was]] my progress that I was offered a scholarship.",
        "[[Were]] I to start again, I would read more fiction.",
        "I needn't [[have]] worried about the exam; it went well.",
        "[[Whether]] I'll ever stop learning is doubtful."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to part of a mock C2 speaking exam. The candidate discusses language and success.",
      title: "A C2 speaking exam",
      script: [
        { who: "Examiner", line: "Some people say that you can never truly master a foreign language. What's your view?" },
        { who: "Candidate", line: "That's a fascinating question, and one I've thought about a great deal. In a sense, they're right. Strictly speaking, even native speakers don't master their language completely; there are always registers, dialects and specialist vocabularies they don't know. So if mastery means knowing everything, it's, to all intents and purposes, impossible." },
        { who: "Examiner", line: "And if it means something else?" },
        { who: "Candidate", line: "Then I'd argue it's entirely achievable. What I'm getting at is that mastery isn't perfection; it's control. A proficient speaker can choose the right word for the right effect, understand what's implied as well as what's said, and adapt to almost any situation. Not only that, but they can recover gracefully when something goes wrong." },
        { who: "Examiner", line: "Is there anything you think learners at your level still find difficult?" },
        { who: "Candidate", line: "Humour, without a doubt. Or rather, the cultural knowledge humour depends on. I can understand every word of a comedy show and still miss why the audience is laughing, because the joke relies on something every British teenager knew in 1995." },
        { who: "Examiner", line: "How do you deal with that?" },
        { who: "Candidate", line: "With a certain amount of humility, and a lot of curiosity. Were I to give one piece of advice to other learners, it would be this: stop measuring yourself against an imaginary native speaker. By and large, the people you're talking to care far more about what you say than about your accent. And if you laugh at the wrong moment now and then, well, it's hardly a catastrophe." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The candidate thinks mastery meaning knowing everything is possible.", a: false },
            { s: "For the candidate, mastery means control rather than perfection.", a: true },
            { s: "The candidate finds humour easy to understand.", a: false },
            { s: "Cultural knowledge is a challenge even at C2.", a: true },
            { s: "The candidate advises comparing yourself to native speakers.", a: false }
          ]
        },
        {
          type: "match", title: "Identify the C2 structure",
          prompt: "Match each extract from the exam with the structure it shows.",
          pairs: [
            ["Strictly speaking, even native speakers…", "a qualifying expression"],
            ["…to all intents and purposes, impossible.", "an approximating expression"],
            ["What I'm getting at is that…", "clarifying in spontaneous speech"],
            ["Humour, without a doubt. Or rather,…", "self-correction"],
            ["Were I to give one piece of advice,…", "a formal hypothesis"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read two learners' reflections at the end of C2.",
      title: "The view from the summit",
      text: [
        { author: "Rafael, architect", body: "When I began C2, I was, by most measures, already a fluent speaker. I worked with international clients, gave presentations and wrote reports in English every day. What I lacked, I now realize, was range. I had one voice for everything: competent, clear and utterly forgettable. The units on connotation and on the opinion column forced me to experiment. Writing two versions of the same portrait, one admiring and one critical, was a revelation; it was the first time I understood that vocabulary is not neutral. My clients have since commented that my proposals are more persuasive, although, admittedly, that may have more to do with the coffee I now serve at meetings." },
        { author: "Lucía, journalist", body: "For me, the turning point came with the units on truth and evaluation. As a journalist, I had always been careful with facts, but I hadn't appreciated how much judgment is concealed in a single reporting verb or adverb. Ostensibly, the difference between said and claimed is tiny. In practice, it can shape the reader's view of an entire story. I also discovered, slightly to my horror, that I had been using vague passives to hide weak sources. Were I to go back to my early articles, I suspect I would rewrite half of them. My next goal is literary translation, a field in which, as one unit taught me, every word carries weight." }
      ],
      activities: [
        {
          type: "sort", title: "Who says it?",
          prompt: "Sort the ideas according to who expresses them.",
          bins: ["Rafael", "Lucía"],
          items: [
            { text: "had one competent but forgettable voice", bin: 0 }, { text: "wrote two versions of the same portrait", bin: 0 }, { text: "clients find his proposals more persuasive", bin: 0 },
            { text: "realized reporting verbs carry judgment", bin: 1 }, { text: "had used vague passives to hide weak sources", bin: 1 }, { text: "wants to work in literary translation", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "C2 grammar challenge",
          prompt: "Rewrite each sentence using the word in brackets. Keep the meaning.",
          items: [
            { q: "I didn't know how useful the course would be. (Little)", a: ["Little did I know how useful the course would be."] },
            { q: "If I went back to my early articles, I would rewrite them. (Were)", a: ["Were I to go back to my early articles, I would rewrite them.", "Were I to go back to my early articles, I'd rewrite them."] },
            { q: "My progress was so fast that my adviser was surprised. (Such)", a: ["Such was my progress that my adviser was surprised."] },
            { q: "It is not clear how much I will still need help. (extent)", a: ["The extent to which I will still need help is not clear.", "The extent to which I'll still need help is not clear.", "The extent to which I will still need help is unclear.", "The extent to which I'll still need help is unclear."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Review C2 language, then write your final reflective essay.",
      activities: [
        {
          type: "rewrite", title: "Find the mistake",
          prompt: "Each sentence has one mistake. Write the correct sentence.",
          items: [
            { q: "Little I did know what was coming.", a: ["Little did I know what was coming."] },
            { q: "The claim is completely unfound.", a: ["The claim is completely unfounded."] },
            { q: "It's high time we decide.", a: ["It's high time we decided.", "It is high time we decided."] },
            { q: "To all intensive purposes, the work is finished.", a: ["To all intents and purposes, the work is finished."] },
            { q: "If this will work remains unclear.", a: ["Whether this will work remains unclear."] }
          ]
        },
        {
          type: "match", title: "Which unit?",
          prompt: "Match each skill with the unit where you practised it.",
          pairs: [
            ["choosing words with the right connotation", "Shades of Meaning"],
            ["interpreting what is implied", "Reading the Room"],
            ["rewriting legal language clearly", "The Letter of the Law"],
            ["explaining a text to someone else", "The Go-Between"],
            ["speaking without preparation", "Off the Cuff"]
          ]
        },
        {
          type: "write", title: "My C2 journey",
          prompt: "Write a reflective essay (280–340 words) about your journey through the C2 units. Describe where you started, two or three units that changed the way you use English and why, the challenges that remain, and your plans for using English in the future. Write with a clear personal voice, use a wide range of C2 structures (at least **ten**) and include at least one touch of humour or understatement.",
          minWords: 280, maxWords: 340,
          model: "My C2 Journey<br>When I started the C2 units, I considered myself, not unreasonably, a confident user of English. I had passed a C1 exam, I read novels in English and I could hold my own in most conversations. Little did I realize how much of the language I had been using in black and white.<br>What changed first was my sense of connotation. In Shades of Meaning, I wrote two portraits of the same football coach, one admiring and one hostile, without changing a single fact. Such was the difference between them that a classmate refused to believe they described the same man. Since then, I have become almost obsessive about word choice; my friends say that asking me to recommend a restaurant now involves a short lecture on the difference between cosy and cramped.<br>The second turning point was Reading the Room. For years, I had taken understatement literally. Were I to count the British colleagues I had misunderstood, the number would, to put it mildly, be embarrassing. Learning to recognize what is implied rather than said has made me a far more sensitive listener, in English and, interestingly, in Spanish too.<br>Finally, the units on summarizing and mediation showed me that mastery is not only about expressing my own ideas, but about helping others understand theirs. Strictly speaking, I had been mediating for my family for years; I simply hadn't known it was a skill.<br>Challenges remain, of course. By and large, I still find fast, colloquial humour difficult, and I suspect that the cultural knowledge it relies on will take a lifetime to acquire. That is, in a sense, the point: a language is not something you finish.<br>I am to begin a master's degree in translation next year. The extent to which I am prepared remains to be seen, but I needn't have worried quite as much as I did a year ago. In a nutshell, I have learned that proficiency is not the end of the journey, merely a much better view of the road ahead.",
          bank: ["Little did I realize…", "Such was… that…", "Were I to…", "to put it mildly", "Strictly speaking,", "By and large,", "in a sense,", "I am to begin…", "The extent to which…", "I needn't have worried", "In a nutshell,"],
          checklist: [
            "I described my **starting point** and **two or three units** that changed me.",
            "I discussed the **challenges** that remain and my **future plans**.",
            "I used at least **ten** different C2 structures.",
            "My essay has a clear **personal voice** and a touch of **humour**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat these C2 sentences.",
          items: [
            "Little did I imagine where it would lead.",
            "Were I to choose one unit, it'd be this.",
            "Strictly speaking, I knew most of the words.",
            "I needn't have worried, as it turned out.",
            "Such was my progress that I was surprised.",
            "In a nutshell, it's been quite an adventure."
          ]
        },
        {
          type: "speak", title: "Final project: My C2 Journey",
          prompt: "Record a presentation of about five minutes about your C1–C2 journey. Structure it clearly: **1)** an engaging opening, **2)** your starting point, **3)** two or three units or skills that changed the way you use English, with examples, **4)** what you still find challenging, **5)** how you will use English in the future, and **6)** a memorable closing line. Then imagine one unexpected question from the audience and answer it spontaneously.",
          language: ["Little did I imagine…", "What has changed most is…", "Were I to choose one…,", "Such was… that…", "Strictly speaking,…", "By and large,…", "The extent to which…", "In a nutshell,…", "That's a fascinating question, and one I've thought about."],
          seconds: 330,
          checklist: ["follow the six-part structure?", "give specific examples from the units?", "use a wide range of C2 structures?", "answer an unexpected question fluently?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can choose words with precise connotation and interpret implied meaning.", review: "Units 26 and 27; Explanation: C2 at a glance (1)" },
    { can: "I can use advanced modality, nominal clauses and formal hypotheses.", review: "Units 28, 31 and 34" },
    { can: "I can write in literary, legal, critical and persuasive styles.", review: "Units 30, 33, 35 and 36" },
    { can: "I can evaluate claims and discuss abstract ideas with nuance.", review: "Units 32 and 39; Explanation: C2 at a glance (2)" },
    { can: "I can summarize, mediate and speak spontaneously with precision.", review: "Units 41, 42 and 43" },
    { can: "I can give a fluent presentation about my journey and answer questions.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
