window.UNIT = {
  slug: "off-the-cuff",
  number: 43,
  title: "Off the Cuff",
  level: "C2",
  minutes: 90,
  speakers: { "Host": "f", "Guest": "m", "Coach": "f", "Interviewer": "m" },
  focus: ["self-correction: or rather, I mean, Let me put that another way", "rephrasing and clarifying: What I'm getting at is, The point I'm trying to make is", "elaborating: To expand on that, What's more, Not only that, but", "holding the floor and buying time naturally: How shall I put it?, It's a good question, and one I've thought about", "responding to unexpected questions with fluency and precision"],

  presentation: {
    scene: "🎙️⚡💬🌀",
    situation: "A young scientist is a guest on a live radio programme. The host keeps asking unexpected questions, and he has to think on his feet.",
    warmup: {
      prompt: "Which situations require you to speak without preparation? Choose all that apply.",
      options: ["job interviews", "class discussions", "meetings", "phone calls", "Q&A after a presentation", "meeting new people", "oral exams", "debates", "live interviews", "customer complaints", "family arguments", "giving directions"],
      response: "Even very fluent speakers hesitate, correct themselves and rephrase. At C2, the goal isn't to avoid this, but to do it so smoothly that listeners barely notice."
    },
    dialogueTitle: "Live on air",
    dialogue: [
      { who: "Host", line: "So, in one sentence: why should ordinary people care about soil?" },
      { who: "Guest", line: "*How shall I put it?* Soil is, well, it's the skin of the planet. Or *rather*, it's the living layer that everything else depends on." },
      { who: "Host", line: "That's poetic. But is it really in danger?" },
      { who: "Guest", line: "Very much so. We're losing it ten times faster than it forms. *I mean*, not everywhere, but in most farmland." },
      { who: "Host", line: "Ten times? That sounds alarmist." },
      { who: "Guest", line: "*Let me put that another way.* Nature takes centuries to make a few centimetres. Bad farming can destroy them in a decade. *What I'm getting at is* that we're spending capital, not income." },
      { who: "Host", line: "And what can listeners do?" },
      { who: "Guest", line: "*It's a good question, and one I get asked a lot.* Composting, for a start. *What's more*, supporting farmers who protect their soil. *Not only* is it better for the planet, *but* the food often tastes better too." }
    ]
  },

  objectives: [
    "I can correct and rephrase myself smoothly while speaking.",
    "I can clarify and elaborate on my ideas spontaneously.",
    "I can buy time naturally when responding to unexpected questions.",
    "I can speak fluently and precisely without preparation."
  ],

  explanation: {
    vocabTitle: "Spontaneous speech",
    vocab: [
      { word: "off the cuff", icon: "👔" }, { word: "think on your feet", icon: "🦶" }, { word: "ad lib", icon: "🎭" },
      { word: "spontaneous", icon: "⚡" }, { word: "improvise", icon: "🎷" }, { word: "be put on the spot", icon: "🎯" },
      { word: "lose your train of thought", icon: "🚂" }, { word: "be lost for words", icon: "😶" }, { word: "waffle", icon: "🧇" },
      { word: "get to the point", icon: "➡️" }, { word: "a slip of the tongue", icon: "👅" }, { word: "rephrase", icon: "🔄" },
      { word: "elaborate", icon: "🔍" }, { word: "articulate", icon: "🗣️" }, { word: "fluent", icon: "🌊" }
    ],
    grammar: [
      {
        title: "Self-correction and rephrasing",
        head: ["Function", "Language", "Example"],
        rows: [
          ["correcting a word", "*or rather / I mean / sorry, I meant*", "*It's the skin, or rather, the living layer.*"],
          ["rephrasing an idea", "*Let me put that another way. / To put it differently,…*", "*Let me put that another way: we're spending capital.*"],
          ["making your point clear", "*What I'm getting at is… / The point I'm trying to make is…*", "*What I'm getting at is that it's urgent.*"],
          ["narrowing down", "*Well, not exactly. / To be more precise,…*", "*To be more precise, in most farmland.*"],
          ["recovering", "*Where was I? / Anyway, as I was saying,…*", "*Anyway, as I was saying, compost helps.*"]
        ]
      },
      {
        title: "Elaborating and buying time",
        head: ["Function", "Language"],
        rows: [
          ["elaborating", "*To expand on that,… / What's more,… / Not only that, but… / On top of that,…*"],
          ["emphatic addition", "*Not only is it…, but it's also…*"],
          ["buying time naturally", "*How shall I put it? / It's a good question, and one I've thought about a lot. / That's a tricky one.*"],
          ["acknowledging complexity", "*It's not a simple yes or no. / There are a couple of ways of looking at it.*"],
          ["returning to the question", "*So, to answer your question directly,…*"]
        ],
        note: "At C2, fillers should sound **purposeful**. Avoid repeating the same one (*um*, *like*, *you know*) constantly. Varying them and following them with a clear point makes you sound reflective, not lost."
      }
    ],
    watchOut: [
      ["(Silence for ten seconds)", "*How shall I put it?* … / *That's a tricky one.*"],
      ["It's bad, no, it's not bad, it's, um, it's…", "It's bad, *or rather*, it's more complicated than that."],
      ["Um, like, you know, um, like…", "Vary fillers and follow them with a clear point."],
      ["Not only it is cheap, but…", "Not only *is it* cheap, but… (inversion)"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each phrase with one word.",
      items: [
        "It's a problem, or [[rather]], a challenge.",
        "Let me put that [[another|differently]] way.",
        "What I'm getting [[at]] is that we need to act now.",
        "How [[shall|should]] I put it?",
        "Not only [[is]] it cheaper, but it's also faster."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a speaking coach explaining how to sound fluent when you're unprepared.",
      title: "The art of thinking aloud",
      script: [
        { who: "Interviewer", line: "Many advanced learners say they speak well when they've prepared, but freeze when they're put on the spot. Why is that?" },
        { who: "Coach", line: "Because they're trying to produce perfect sentences in real time. Nobody does that, not even native speakers. If you listen to recordings of fluent people speaking spontaneously, they're constantly rephrasing, correcting and restarting. The difference is that they do it confidently." },
        { who: "Interviewer", line: "So hesitation isn't the problem." },
        { who: "Coach", line: "Silence is the problem, and panic. A phrase like that's a good question, let me think about it for a second, buys you time and signals that you're thinking, not lost. Then you can start with something general and refine it: Well, broadly speaking, yes, or rather, in most cases." },
        { who: "Interviewer", line: "What about when you make a mistake in the middle of a sentence?" },
        { who: "Coach", line: "Correct it lightly and move on. I mean, or sorry, I meant, then the right word. Don't apologize at length. Listeners care far more about your ideas than about a wrong preposition." },
        { who: "Interviewer", line: "Any exercise you'd recommend?" },
        { who: "Coach", line: "Yes, something I call random topics. Pick a topic at random, set a timer for one minute and speak, without stopping. Record it. At first it feels terrible. After a few weeks, you'll notice that you've built up a repertoire of phrases for starting, rephrasing and elaborating, and that's exactly what fluency is: not perfection, but recovery." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "Native speakers produce perfect sentences when speaking spontaneously.", a: false },
            { s: "The coach thinks silence and panic are the real problems.", a: true },
            { s: "She recommends apologizing at length for mistakes.", a: false },
            { s: "The random topics exercise involves speaking for one minute without stopping.", a: true },
            { s: "For her, fluency means perfection.", a: false }
          ]
        },
        {
          type: "match", title: "Strategies",
          prompt: "Match each strategy with an example from the interview.",
          pairs: [
            ["buying time", "That's a good question, let me think about it."],
            ["refining", "Broadly speaking, yes, or rather, in most cases."],
            ["correcting lightly", "Sorry, I meant…"],
            ["practising", "random topics with a one-minute timer"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a transcript of a spontaneous answer in an interview. Notice how the speaker manages it.",
      title: "Thinking on your feet",
      text: [
        { author: "Interviewer", body: "If you could change one thing about the education system, what would it be?" },
        { author: "Candidate", body: "Oh, that's a big question. How shall I put it? I think the one thing I'd change is, well, the obsession with exams. Or rather, not exams themselves, because I think assessment is necessary, but the idea that a single exam can decide a student's future." },
        { author: "", body: "What I'm getting at is that we've created a system where students learn to pass tests rather than to think. To expand on that a little, in my own school, we spent the whole final year practising past papers. Not only did that make the year incredibly stressful, but it also meant we hardly read a single book that wasn't on the syllabus." },
        { author: "", body: "So, to answer your question directly, I'd replace some of the final exams with long-term projects, sorry, I mean, projects assessed over several months, where students research a real problem and present their findings. That way, you're assessing curiosity and persistence, not just memory." },
        { author: "Interviewer", body: "Isn't that harder to grade fairly?" },
        { author: "Candidate", body: "That's a fair point, and I'm not sure there's a perfect answer. Let me put it another way: exams are easier to grade, but easier isn't the same as better. I'd rather have a slightly messier system that rewards the right things." }
      ],
      activities: [
        {
          type: "sort", title: "What is the speaker doing?",
          prompt: "Sort the phrases by their function in the answer.",
          bins: ["buying time", "rephrasing or correcting", "elaborating"],
          items: [
            { text: "Oh, that's a big question.", bin: 0 }, { text: "How shall I put it?", bin: 0 },
            { text: "Or rather, not exams themselves,…", bin: 1 }, { text: "sorry, I mean,…", bin: 1 }, { text: "Let me put it another way:", bin: 1 },
            { text: "To expand on that a little,…", bin: 2 }, { text: "Not only did that…, but it also…", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The candidate wants to abolish all assessment.", a: false },
            { s: "Her final school year focused heavily on past papers.", a: true },
            { s: "She suggests replacing some exams with long-term projects.", a: true },
            { s: "She claims her system would be easy to grade.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the language of spontaneous speech, then script and analyse an answer.",
      activities: [
        {
          type: "rewrite", title: "Add emphasis",
          prompt: "Rewrite each sentence using *Not only… but…* with inversion.",
          items: [
            { q: "It's cheaper and it's also faster.", a: ["Not only is it cheaper, but it's also faster.", "Not only is it cheaper, but it is also faster.", "Not only is it cheaper but it's also faster."] },
            { q: "The project saved money and it also created jobs.", a: ["Not only did the project save money, but it also created jobs.", "Not only did the project save money but it also created jobs."] },
            { q: "She speaks four languages and she also teaches them.", a: ["Not only does she speak four languages, but she also teaches them.", "Not only does she speak four languages but she also teaches them."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Let me put that another way." },
            { a: "What I'm getting at is this." },
            { a: "That's a tricky one, actually." },
            { a: "So, to answer your question directly," }
          ]
        },
        {
          type: "write", title: "Script a spontaneous answer",
          prompt: "Choose **one** unexpected interview question: *1) If you could have dinner with anyone, living or dead, who would it be? 2) What's the most important lesson you've learned from a failure? 3) Is technology making us smarter or more stupid?* Write a **natural spoken answer** (180–220 words) that includes buying time, at least one self-correction, rephrasing and elaboration. Then write a short **analysis** (60–80 words) explaining which strategies you used and why. Total: 250–300 words.",
          minWords: 250, maxWords: 300,
          model: "Answer: Is technology making us smarter or more stupid?<br>Hmm, that's a tricky one, and I don't think there's a simple yes or no. How shall I put it? I'd say technology is making us smarter in some ways and, well, lazier in others. Or rather, it's changing what we consider worth remembering.<br>What I'm getting at is this: we don't memorize phone numbers or directions any more, because our phones do it for us. Some people see that as a loss. But to expand on that, it also frees up mental space for other things, like solving problems or learning new skills. Not only can I find any fact in seconds, but I can also learn almost anything online for free, which my grandparents simply couldn't do.<br>That said, I do worry about attention. Sorry, I mean concentration, specifically. I notice that I find it much harder to read a long book than I did ten years ago.<br>So, to answer your question directly, I don't think technology makes us stupid, but it can make us distracted, and distraction, if we're not careful, can look very much like stupidity.<br><br>Analysis: I bought time at the start with \"that's a tricky one\" and \"How shall I put it?\" so I could organize my ideas. I used \"or rather\" and \"Sorry, I mean\" to correct myself and make my point more precise. I elaborated with \"to expand on that\" and an inverted \"Not only… but\". Finally, I returned to the question directly to give a clear conclusion.",
          bank: ["That's a tricky one.", "How shall I put it?", "or rather", "What I'm getting at is…", "to expand on that,", "Not only can I…, but I can also…", "Sorry, I mean…", "So, to answer your question directly,"],
          checklist: [
            "My answer sounds **natural and spoken**.",
            "I included **buying time**, a **self-correction** and **rephrasing**.",
            "I **elaborated** and returned to the question at the end.",
            "My **analysis** explains the strategies clearly."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Sound relaxed and in control.",
          items: [
            "How shall I put it?",
            "It's the skin, or rather, the living layer.",
            "Let me put that another way.",
            "What I'm getting at is this.",
            "Not only is it cheaper, but faster.",
            "So, to answer your question directly."
          ]
        },
        {
          type: "speak", title: "Random topics challenge",
          prompt: "Record yourself answering **four** unexpected questions, about one minute each, **without preparing**. Read each question only when you're ready to answer it. *1) What would you do if you were invisible for a day? 2) Should zoos exist? 3) What's something everyone should learn before the age of twenty? 4) Is it ever acceptable to lie?* Use strategies to buy time, rephrase, correct yourself and elaborate.",
          language: ["That's a tricky one.", "How shall I put it?", "It's a good question, and one I've thought about.", "or rather / I mean", "Let me put that another way.", "What I'm getting at is…", "To expand on that,…", "So, to answer your question directly,…"],
          seconds: 270,
          checklist: ["answer all four questions without long silences?", "buy time naturally?", "rephrase or correct yourself smoothly?", "elaborate and return to the question?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can correct myself smoothly with or rather and I mean.", review: "Explanation: self-correction and rephrasing" },
    { can: "I can rephrase my ideas with Let me put that another way.", review: "Explanation: self-correction and rephrasing; Reading" },
    { can: "I can clarify my point with What I'm getting at is…", review: "Explanation: self-correction and rephrasing" },
    { can: "I can elaborate with To expand on that and Not only… but…", review: "Explanation: elaborating; Writing activity 1" },
    { can: "I can buy time naturally when put on the spot.", review: "Explanation: buying time; Listening" },
    { can: "I can answer unexpected questions fluently and precisely.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
