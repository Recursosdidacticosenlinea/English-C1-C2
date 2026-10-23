window.UNIT = {
  slug: "the-lecture",
  number: 40,
  title: "The Lecture",
  level: "C2",
  minutes: 95,
  speakers: { "Professor": "f", "Student": "m", "Paulina": "f", "Andrés": "m" },
  focus: ["lecture signposting: I'd like to begin by…, Turning now to…, Let me digress for a moment", "recognizing emphasis and key points: The crucial point here is…, What I want you to take away is…", "digressions and asides: Incidentally,…, As an aside,…, But I digress", "note-taking: abbreviations, symbols and structure", "asking academic questions: Could you elaborate on…?, How does that square with…?"],

  presentation: {
    scene: "🎓🏛️📝🎙️",
    situation: "Paulina and Andrés have just arrived at a university in the UK for their master's. After their first lecture, they compare notes, and realize they have understood very different things.",
    warmup: {
      prompt: "What do you find most difficult about lectures in English? Choose all that apply.",
      options: ["the speed", "accents", "technical vocabulary", "jokes", "taking notes", "digressions", "long sentences", "no slides", "asking questions", "concentration", "references to culture", "understanding the main point"],
      response: "Lecturers guide listeners through complex ideas with signposting language. Recognizing these signals is the key to understanding, and taking notes on, academic talks."
    },
    dialogueTitle: "Comparing notes",
    dialogue: [
      { who: "Andrés", line: "I wrote down everything about the history of the Roman aqueducts. Pages and pages." },
      { who: "Paulina", line: "Really? I think that was a digression. She said *Let me digress for a moment* before it." },
      { who: "Andrés", line: "Oh. I didn't notice. So what was the main point?" },
      { who: "Paulina", line: "She said *What I really want you to take away from today is* that water infrastructure shapes how cities grow." },
      { who: "Andrés", line: "I missed that completely. I was still writing about Rome." },
      { who: "Paulina", line: "And then *Turning now to* modern cities, she talked about Mexico City sinking because of water extraction." },
      { who: "Andrés", line: "That part I understood. And at the end, when the student asked *How does that square with* the new reservoir project?" },
      { who: "Paulina", line: "Exactly. Next time, listen for the signposts. They tell you what's important and what's just a story." }
    ]
  },

  objectives: [
    "I can recognize signposting language that structures a lecture.",
    "I can identify key points, digressions and asides.",
    "I can take efficient, well-structured notes from academic talks.",
    "I can ask precise academic questions after a lecture."
  ],

  explanation: {
    vocabTitle: "Academic listening",
    vocab: [
      { word: "a lecture", icon: "🎓" }, { word: "a seminar", icon: "🪑" }, { word: "a handout", icon: "📄" },
      { word: "a digression", icon: "↪️" }, { word: "an aside", icon: "💬" }, { word: "a key point", icon: "🔑" },
      { word: "a case study", icon: "📊" }, { word: "a framework", icon: "🧱" }, { word: "a premise", icon: "🧩" },
      { word: "the literature", icon: "📚" }, { word: "elaborate on", icon: "🔍" }, { word: "reconcile", icon: "🤝" },
      { word: "a caveat", icon: "⚠️" }, { word: "a takeaway", icon: "🥡" }, { word: "jot down", icon: "✏️" }
    ],
    grammar: [
      {
        title: "Lecture signposting",
        head: ["Function", "Language"],
        rows: [
          ["introducing the topic", "*Today I'd like to look at… / I'd like to begin by… / The focus of this session is…*"],
          ["outlining", "*I'll divide this into three parts. First,… then,… and finally,…*"],
          ["moving on", "*Turning now to… / This brings me to… / Let's move on to…*"],
          ["emphasizing", "*The crucial point here is… / I want to stress that… / What I want you to take away is…*"],
          ["giving examples", "*A case in point is… / Take, for instance,… / To illustrate this,…*"],
          ["digressing", "*Let me digress for a moment. / Incidentally,… / As an aside,…*"],
          ["returning", "*But I digress. / Anyway, to get back to the main point,… / Where was I?*"],
          ["concluding", "*To sum up,… / So, what can we conclude from this? / Next week, we'll…*"]
        ]
      },
      {
        title: "Note-taking symbols and abbreviations",
        head: ["Symbol / abbreviation", "Meaning"],
        rows: [
          ["*→*", "leads to, causes"],
          ["*←*", "is caused by, results from"],
          ["*↑ / ↓*", "increase / decrease"],
          ["*= / ≠*", "is, equals / is not, differs from"],
          ["*e.g. / i.e.*", "for example / that is"],
          ["*cf.*", "compare"],
          ["*∴ / ∵*", "therefore / because"],
          ["*NB*", "important (note well)"]
        ],
        note: "Don't write everything. Note the **main points**, **examples** and **links** between ideas. Use indentation to show what supports what."
      },
      {
        title: "Asking academic questions",
        head: ["Function", "Language"],
        rows: [
          ["asking for more detail", "*Could you elaborate on…? / Could you say a bit more about…?*"],
          ["checking understanding", "*Am I right in thinking that…? / If I understood correctly,…*"],
          ["challenging politely", "*How does that square with…? / How would you reconcile that with…?*"],
          ["asking for sources", "*Is there any research you'd recommend on…?*"]
        ]
      }
    ],
    watchOut: [
      ["(Writing down every word of a digression)", "Listen for *Let me digress* and *But I digress*: note only the main point."],
      ["Excuse me, I don't understand nothing.", "*Could you elaborate on* the second point?"],
      ["Your argument is wrong because…", "*How would you reconcile that with*…?"],
      ["e.g. = that is", "*e.g.* = for example; *i.e.* = that is"]
    ],
    check: {
      type: "sort", title: "Quick check",
      prompt: "What is the lecturer doing with each phrase?",
      bins: ["moving on", "emphasizing", "digressing"],
      items: [
        { text: "Turning now to…", bin: 0 }, { text: "This brings me to…", bin: 0 },
        { text: "The crucial point here is…", bin: 1 }, { text: "What I want you to take away is…", bin: 1 },
        { text: "Let me digress for a moment.", bin: 2 }, { text: "Incidentally,…", bin: 2 }
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an extract from a university lecture on urban geography. Take notes as you listen.",
      title: "Cities and water",
      script: [
        { who: "Professor", line: "Good morning, everyone. Today I'd like to look at the relationship between cities and water. I'll divide this into three parts: first, a historical perspective; then, a contemporary case study; and finally, some implications for urban planning." },
        { who: "Professor", line: "Historically, almost every major city was founded near a reliable water source: a river, a lake or a coast. Water meant drinking, farming, transport and, crucially, trade. Let me digress for a moment. When I was a student, I spent a summer walking along the remains of a Roman aqueduct, and I was struck by how much engineering effort went into bringing water to a single city. But I digress." },
        { who: "Professor", line: "Turning now to a contemporary case study: Mexico City. The city was built on the bed of a lake, Lake Texcoco, which the Spanish gradually drained. Today, the city extracts enormous amounts of water from the aquifer beneath it. As a result, parts of the city are sinking, in some areas by up to forty centimetres a year. This damages buildings, pipes and the metro system." },
        { who: "Professor", line: "The crucial point here is that the problem is self-reinforcing. Sinking ground breaks water pipes; leaking pipes waste water; and the wasted water must be replaced by extracting even more from the aquifer." },
        { who: "Professor", line: "So, what can planners learn? What I really want you to take away from today is this: water infrastructure doesn't just serve cities; it shapes how they grow, and, in some cases, whether they can survive. Next week, we'll look at cities that are redesigning themselves to live with water rather than fight it." },
        { who: "Student", line: "Could you elaborate on how that squares with the new reservoir projects? Wouldn't they reduce extraction?" },
        { who: "Professor", line: "Good question. In theory, yes. But most experts argue that reservoirs alone can't solve it. Unless leaks are repaired and rainwater is captured, demand will simply keep growing." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The lecture is divided into three parts.", a: true },
            { s: "The story about the Roman aqueduct is a key point.", a: false },
            { s: "Mexico City was built on a lake bed.", a: true },
            { s: "Some areas of Mexico City are sinking up to forty centimetres a year.", a: true },
            { s: "The professor thinks reservoirs alone will solve the problem.", a: false }
          ]
        },
        {
          type: "gap", title: "Complete the notes",
          prompt: "Complete the student's notes with one word or number.",
          items: [
            "Part 1: historical perspective. Cities founded near [[water]].",
            "Part 2: case study = Mexico City, built on Lake [[Texcoco]].",
            "Water extraction from aquifer → city [[sinking]] (up to 40 cm/year).",
            "Key point: problem is self-[[reinforcing]]: sinking → broken pipes → more extraction.",
            "Takeaway: water infrastructure [[shapes]] how cities grow."
          ]
        }
      ]
    },

    reading: {
      intro: "Read two students' notes on the same lecture. Which notes are more effective?",
      title: "Two sets of notes",
      text: [
        { author: "Student A's notes", body: "The lecturer said good morning and that today she would talk about cities and water. She said it would have three parts. Then she said cities were always built near water, like rivers or lakes or the coast, because of drinking water and farming and transport and trade. She talked about when she was a student and she walked along a Roman aqueduct in the summer and she was impressed by the engineering. Then she talked about Mexico City, which was built on a lake called Texcoco, and the Spanish drained it." },
        { author: "Student B's notes", body: "**Cities & water** (3 parts: history / case study / planning)<br>1. HISTORY: cities founded near water ∵ drinking, farming, transport, trade<br>2. CASE STUDY: Mexico City<br>– built on Lake Texcoco (drained by Spanish)<br>– extraction from aquifer → sinking (up to 40 cm/yr) → damage (buildings, pipes, metro)<br>– NB self-reinforcing: sinking → broken pipes → leaks → ↑ extraction<br>3. PLANNING: water infrastructure shapes city growth & survival<br>Q&A: reservoirs ≠ enough; need leak repair + rainwater capture<br>Next week: cities living with water" }
      ],
      activities: [
        {
          type: "sort", title: "Which student?",
          prompt: "Sort the features of the two sets of notes.",
          bins: ["Student A", "Student B"],
          items: [
            { text: "writes full sentences", bin: 0 }, { text: "includes the digression in detail", bin: 0 }, { text: "includes greetings", bin: 0 },
            { text: "uses symbols and abbreviations", bin: 1 }, { text: "shows the structure of the lecture", bin: 1 }, { text: "highlights the key point with NB", bin: 1 }
          ]
        },
        {
          type: "match", title: "Decode the notes",
          prompt: "Match the symbols from Student B's notes with their meaning.",
          pairs: [
            ["∵", "because"],
            ["→", "leads to"],
            ["↑ extraction", "more extraction"],
            ["≠ enough", "is not enough"],
            ["NB", "important point"]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice signposting and note-taking, then write a summary from notes.",
      activities: [
        {
          type: "rewrite", title: "Notes to sentences",
          prompt: "Rewrite each note as a full sentence.",
          items: [
            { q: "extraction → sinking", a: ["Water extraction causes the city to sink.", "Extraction leads to sinking.", "Extraction causes sinking.", "Water extraction leads to sinking."] },
            { q: "cities near water ∵ trade", a: ["Cities were built near water because of trade.", "Cities were founded near water because of trade."] },
            { q: "reservoirs ≠ enough", a: ["Reservoirs are not enough.", "Reservoirs aren't enough.", "Reservoirs alone are not enough."] }
          ]
        },
        {
          type: "match", title: "Academic questions",
          prompt: "Match each question with its purpose.",
          pairs: [
            ["Could you elaborate on the second point?", "asking for more detail"],
            ["Am I right in thinking that…?", "checking understanding"],
            ["How would you reconcile that with…?", "challenging politely"],
            ["Is there any research you'd recommend?", "asking for sources"]
          ]
        },
        {
          type: "write", title: "Write up the lecture",
          prompt: "Using **Student B's notes** from the Reading, write a summary of the lecture (250–300 words) for a classmate who missed it. Write in full, connected sentences in a clear academic style. Include the structure, the key point, the case study and the answer given in the Q&A. Then write **two** questions you would ask the lecturer.",
          minWords: 250, maxWords: 300,
          model: "Summary of the lecture: Cities and water<br>The lecture examined the relationship between cities and water and was divided into three parts: a historical perspective, a contemporary case study and the implications for urban planning.<br>The lecturer began by explaining that, historically, almost all major cities were founded close to a reliable source of water, such as a river, a lake or the sea. This was because water was essential not only for drinking and agriculture, but also for transport and trade.<br>The second part focused on Mexico City as a case study. The city was originally built on Lake Texcoco, which was gradually drained after the Spanish conquest. Today, the city depends heavily on water extracted from the aquifer beneath it. As a consequence, the ground is sinking, in some areas by as much as forty centimetres a year, causing serious damage to buildings, pipes and the metro. The lecturer stressed that the problem is self-reinforcing: as the ground sinks, pipes break and leak, and the lost water must be replaced by extracting even more from the aquifer.<br>The main takeaway was that water infrastructure does not simply serve cities; it shapes how they grow and, in some cases, whether they can survive.<br>In the question-and-answer session, a student asked whether new reservoirs would reduce extraction. The lecturer replied that reservoirs alone would not be sufficient, and that repairing leaks and capturing rainwater would also be necessary.<br>Next week's lecture will look at cities that are adapting to live with water.<br>My questions for the lecturer:<br>1. Could you elaborate on which cities have successfully reduced their dependence on aquifers?<br>2. How would you reconcile the need to reduce extraction with the city's growing population?",
          bank: ["The lecture examined…", "was divided into three parts", "The lecturer began by explaining that…", "The second part focused on…", "As a consequence,…", "The lecturer stressed that…", "The main takeaway was that…", "Could you elaborate on…?", "How would you reconcile…?"],
          checklist: [
            "I described the **structure** of the lecture.",
            "I included the **key point**, the **case study** and the **Q&A**.",
            "I wrote in **full, connected sentences**.",
            "I wrote **two** precise academic questions."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat these signposting phrases.",
          items: [
            "I'd like to begin by looking at history.",
            "Turning now to a case study.",
            "Let me digress for a moment.",
            "But I digress.",
            "The crucial point here is this.",
            "Could you elaborate on that point?"
          ]
        },
        {
          type: "speak", title: "Give a mini-lecture",
          prompt: "Record a mini-lecture (about four minutes) on a topic you know well (from your degree, your job or a hobby). Use clear signposting: introduce and outline the topic, move between at least three parts, emphasize the key point, include one short digression and return from it, give an example, and conclude with a takeaway.",
          language: ["Today I'd like to look at…", "I'll divide this into three parts.", "Turning now to…", "A case in point is…", "Let me digress for a moment…", "But I digress.", "The crucial point here is…", "What I want you to take away is…"],
          seconds: 270,
          checklist: ["introduce and outline the topic?", "use signposting to move between parts?", "include a digression and return from it?", "end with a clear takeaway?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can recognize signposting that structures a lecture.", review: "Explanation: lecture signposting" },
    { can: "I can distinguish key points from digressions.", review: "Listening activity 1; Quick check" },
    { can: "I can take structured notes with symbols and abbreviations.", review: "Explanation: note-taking; Reading activities" },
    { can: "I can turn notes into a clear written summary.", review: "Writing activities 1 and 3" },
    { can: "I can ask precise academic questions.", review: "Explanation: asking academic questions; Writing activity 2" },
    { can: "I can deliver a short, well-signposted talk.", review: "Speaking activity 2" }
  ]
};
