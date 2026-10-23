window.UNIT = {
  slug: "chairing-a-meeting",
  number: 14,
  title: "Chairing a Meeting",
  level: "C1",
  minutes: 80,
  speakers: { "Chair": "f", "Marcos": "m", "Lupita": "f", "Joel": "m", "Trainer": "f", "Host": "m" },
  focus: ["opening a meeting and setting the agenda", "bringing people in: What's your take on this?", "interrupting and handling interruptions", "keeping the discussion on track: Let's get back to…", "summarizing and closing: So, to recap,… / Action points"],

  presentation: {
    scene: "🗓️🪑🗣️✅",
    situation: "The manager of a language school is chairing a meeting about whether to move some classes online. Two teachers have very different opinions.",
    warmup: {
      prompt: "What makes a meeting frustrating? Choose all that apply.",
      options: ["no agenda", "it starts late", "one person talks too much", "no decisions are made", "people check their phones", "it goes off topic", "nobody listens", "it's too long", "too many people", "no follow-up", "people interrupt", "the same discussion every week"],
      response: "A good chair can turn a frustrating meeting into a productive one. In this unit you'll learn the language to lead discussions effectively."
    },
    dialogueTitle: "The online classes meeting",
    dialogue: [
      { who: "Chair", line: "*Right, let's get started.* The aim today is to decide whether to move evening classes online. *Marcos, would you like to kick off?*" },
      { who: "Marcos", line: "Sure. Attendance in evening classes has dropped by thirty per cent. Students say traffic makes it impossible to arrive on time." },
      { who: "Lupita", line: "*Sorry to interrupt*, but online classes have a much higher dropout rate. We tried it in 2021." },
      { who: "Chair", line: "*That's a good point, Lupita, but could we let Marcos finish first?*" },
      { who: "Marcos", line: "Thanks. I'm only suggesting we try it with two groups, as a pilot." },
      { who: "Chair", line: "*Joel, we haven't heard from you yet. What's your take on this?*" },
      { who: "Joel", line: "A pilot sounds sensible, as long as we measure dropout carefully." },
      { who: "Chair", line: "*OK, so, to recap*: we'll run a pilot with two groups for one term. *Marcos, could you draw up a proposal by Friday?* *Let's leave it there for today.*" }
    ]
  },

  objectives: [
    "I can open a meeting, state its aim and manage the agenda.",
    "I can bring people into the discussion and deal with interruptions.",
    "I can keep a discussion on track and move between points.",
    "I can summarize decisions and assign action points."
  ],

  explanation: {
    vocabTitle: "Meeting vocabulary",
    vocab: [
      { word: "the agenda", icon: "📋" }, { word: "the chair", icon: "🪑" }, { word: "minutes", icon: "📝" },
      { word: "an action point", icon: "✅" }, { word: "any other business (AOB)", icon: "➕" }, { word: "reach a consensus", icon: "🤝" },
      { word: "a show of hands", icon: "✋" }, { word: "table a proposal", icon: "📄" }, { word: "go off on a tangent", icon: "↗️" },
      { word: "a pilot", icon: "🧪" }, { word: "follow up on", icon: "🔁" }, { word: "a deadline", icon: "⏰" },
      { word: "kick off", icon: "⚽" }, { word: "wrap up", icon: "🎁" }, { word: "hold the floor", icon: "🎤" }
    ],
    grammar: [
      {
        title: "Chairing language",
        head: ["Function", "Language"],
        rows: [
          ["opening", "*Right, let's get started. / The aim of today's meeting is to… / We've got three items on the agenda.*"],
          ["starting a point", "*Let's start with… / Marcos, would you like to kick off?*"],
          ["bringing people in", "*What's your take on this? / We haven't heard from you yet. / How do you feel about that?*"],
          ["controlling interruptions", "*Could we let Marcos finish first? / Hold that thought, Lupita. We'll come back to you.*"],
          ["keeping on track", "*Let's get back to the main point. / I'm afraid that's outside the scope of today's meeting.*"],
          ["moving on", "*If there's nothing else on that, let's move on to… / That brings us to item two.*"],
          ["summarizing", "*So, to recap,… / Let me just summarize what we've agreed.*"],
          ["closing", "*Let's leave it there for today. / Thanks, everyone. Same time next week.*"]
        ]
      },
      {
        title: "Participating: interrupting and responding",
        head: ["Function", "Language"],
        rows: [
          ["interrupting politely", "*Sorry to interrupt, but… / Could I just come in here? / If I could just add something,…*"],
          ["resisting interruption", "*If I could just finish my point,… / Bear with me a moment.*"],
          ["agreeing partly", "*I take your point, but… / That's true to some extent.*"],
          ["asking for clarification", "*Just to clarify, are you saying…? / What exactly do you mean by…?*"]
        ],
        note: "Polite modals and *just* soften interruptions: *Could I just…?* sounds far less aggressive than *Wait!*"
      }
    ],
    watchOut: [
      ["Stop! You talk too much.", "*Could we let others come in here?* / *Hold that thought.*"],
      ["Joel, speak now.", "*Joel, what's your take on this?*"],
      ["That's not important.", "*I'm afraid that's outside the scope of today's meeting.*"],
      ["Finish. Bye.", "*Let's leave it there for today. Thanks, everyone.*"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the chairing phrases with one word.",
      items: [
        "Right, let's get [[started]].",
        "What's your [[take]] on this, Joel?",
        "Could we let Marcos [[finish]] first?",
        "Let's get [[back]] to the main point.",
        "So, to [[recap|summarize|sum]], we've agreed to run a pilot."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a communication trainer giving advice on chairing meetings.",
      title: "The invisible chair",
      script: [
        { who: "Host", line: "What's the most common mistake people make when chairing a meeting?" },
        { who: "Trainer", line: "Talking too much. Many chairs think their job is to give their own opinion. It isn't. A good chair is almost invisible: they guide the discussion, make sure everyone is heard and keep an eye on the time." },
        { who: "Host", line: "How do you deal with someone who dominates?" },
        { who: "Trainer", line: "Acknowledge them, then redirect. Something like Thanks, Pedro, that's really useful. Let's hear some other views on this. If it keeps happening, speak to them privately afterwards. Never humiliate anyone in front of colleagues." },
        { who: "Host", line: "And people who never speak?" },
        { who: "Trainer", line: "Invite them in by name, but give them a moment. Ana, you've worked on this; what's your experience been? Quieter people often have the most considered views. Sometimes it helps to send questions before the meeting so they can prepare." },
        { who: "Host", line: "What about the end of the meeting?" },
        { who: "Trainer", line: "That's where many meetings fail. Always finish by summarizing the decisions and the action points: who's doing what, and by when. Then send the minutes within twenty-four hours. Without that, people leave with three different ideas of what was agreed." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The trainer says chairs should mainly give their own opinions.", a: false },
            { s: "A dominant speaker should be criticized in front of the group.", a: false },
            { s: "Quieter people can be invited to speak by name.", a: true },
            { s: "Sending questions in advance can help quieter participants.", a: true },
            { s: "Minutes should be sent within a week.", a: false }
          ]
        },
        {
          type: "match", title: "Problem and solution",
          prompt: "Match each problem with the trainer's advice.",
          pairs: [
            ["someone dominates", "acknowledge them, then redirect"],
            ["it keeps happening", "speak to them privately afterwards"],
            ["someone never speaks", "invite them in by name"],
            ["confusion after the meeting", "summarize action points and send minutes"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read the minutes of the meeting from the presentation.",
      title: "Minutes: staff meeting",
      text: [
        { author: "Minutes", body: "**Date:** 14 March · **Present:** M. Ríos (chair), M. Salas, L. Pérez, J. Cano · **Apologies:** R. Díaz" },
        { author: "Item 1 · Evening classes", body: "MS reported that attendance at evening classes had fallen by approximately 30% over the past year, mainly owing to traffic problems. He proposed moving some classes online. LP expressed concern about higher dropout rates, citing the school's experience in 2021. JC suggested that a pilot scheme would allow the school to assess both attendance and dropout before making a final decision." },
        { author: "Decision", body: "It was agreed to run a one-term pilot with two evening groups taught online. Dropout and attendance will be compared with two groups taught in person." },
        { author: "Action points", body: "MS to draw up a detailed proposal for the pilot by Friday 21 March. LP to share data from the 2021 online courses by Wednesday 19 March. JC to survey current evening students about their preferences by the end of the month." },
        { author: "Next meeting", body: "28 March, 10:00, Room 4." }
      ],
      activities: [
        {
          type: "match", title: "Who does what?",
          prompt: "Match each person with their action point.",
          pairs: [
            ["M. Salas", "draw up a proposal by 21 March"],
            ["L. Pérez", "share data from 2021 by 19 March"],
            ["J. Cano", "survey current evening students"],
            ["R. Díaz", "was not at the meeting"]
          ]
        },
        {
          type: "rewrite", title: "Spoken to written",
          prompt: "Minutes use formal, reported language. Find the phrase in the minutes that reports each spoken sentence.",
          items: [
            { q: "Marcos: Attendance has dropped by thirty per cent.", a: ["MS reported that attendance at evening classes had fallen by approximately 30% over the past year", "attendance at evening classes had fallen by approximately 30%", "MS reported that attendance at evening classes had fallen by approximately 30%"] },
            { q: "Lupita: Online classes have a much higher dropout rate.", a: ["LP expressed concern about higher dropout rates", "LP expressed concern about higher dropout rates, citing the school's experience in 2021"] },
            { q: "Chair: We'll run a pilot with two groups for one term.", a: ["It was agreed to run a one-term pilot with two evening groups taught online", "It was agreed to run a one-term pilot with two evening groups taught online."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the language of meetings, then write minutes or a follow-up email.",
      activities: [
        {
          type: "sort", title: "Chair or participant?",
          prompt: "Who would normally say each phrase?",
          bins: ["the chair", "a participant"],
          items: [
            { text: "Let's move on to item two.", bin: 0 }, { text: "We haven't heard from you yet.", bin: 0 }, { text: "Let's leave it there for today.", bin: 0 }, { text: "Hold that thought.", bin: 0 },
            { text: "Could I just come in here?", bin: 1 }, { text: "If I could just finish my point,", bin: 1 }, { text: "I take your point, but…", bin: 1 }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Could we let Marcos finish first?" },
            { a: "What's your take on this, Joel?" },
            { a: "That brings us to item two." },
            { a: "Let me just summarize what we've agreed." }
          ]
        },
        {
          type: "write", title: "Write the minutes",
          prompt: "Imagine you chaired a meeting of your student association about organizing a cultural festival. Three people had different ideas about the date, the budget and the type of activities. Write the **minutes** (220–260 words), including: date and people present, a summary of each item discussed, the decisions made, and clear action points with names and deadlines. Use formal, reported language.",
          minWords: 220, maxWords: 260,
          model: "Minutes: Student Association meeting<br>Date: 10 October · Present: Ana Ruiz (chair), Carlos Medina, Sofía León, Iván Torres · Apologies: Paola Gil<br>Item 1: Date of the festival<br>AR explained that the aim of the meeting was to agree on the main details of the International Cultural Festival. CM proposed holding the event in late November, before final exams. SL expressed concern that this would clash with the university's sports week and suggested the first weekend of December instead. After some discussion, it was agreed that SL's proposal was more practical.<br>Item 2: Budget<br>IT reported that the association currently has 45,000 pesos available. CM argued that most of the budget should be spent on a professional sound system for the concerts, while SL felt that funds should be divided more evenly between music, food and workshops. It was agreed to allocate 40% to music, 30% to food stalls and 30% to workshops and decoration.<br>Item 3: Activities<br>The group agreed that the festival should include performances by student groups, food from at least eight countries and two language workshops. IT suggested inviting the international students' office to participate, which was welcomed by all.<br>Action points<br>SL to book the main square for 6–7 December by 15 October.<br>IT to contact the international students' office by 17 October.<br>CM to request quotes from three sound companies by 20 October.<br>Next meeting: 24 October, 13:00, Room B12.",
          bank: ["Present:", "Apologies:", "X explained / reported / proposed that…", "X expressed concern that…", "It was agreed to / that…", "Action points", "X to + verb + by + date", "Next meeting:"],
          checklist: [
            "I included the **date** and **people present**.",
            "I summarized each item using **reported language**.",
            "I stated the **decisions** clearly.",
            "Each action point has a **name** and a **deadline**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Sound friendly but in control.",
          items: [
            "Right, let's get started.",
            "Would you like to kick off?",
            "Sorry to interrupt, but could I come in?",
            "Let's get back to the main point.",
            "So, to recap, we'll run a pilot.",
            "Let's leave it there for today."
          ]
        },
        {
          type: "speak", title: "Chair the meeting",
          prompt: "Record yourself **chairing** a short meeting (about three minutes) about a real or imagined problem: for example, your class wants to change the timetable, or your team must choose a new supplier. Imagine the other participants. Open the meeting, bring in at least two people by name, handle one interruption, bring the discussion back on track, summarize the decision and assign action points.",
          language: ["Right, let's get started. The aim today is…", "Would you like to kick off?", "What's your take on this?", "Could we let… finish first?", "Let's get back to…", "So, to recap,…", "Could you… by…?", "Let's leave it there for today."],
          seconds: 210,
          checklist: ["open the meeting and state the aim?", "bring in at least two people?", "handle an interruption politely?", "summarize and give action points?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can open a meeting and introduce the agenda.", review: "Explanation: chairing language" },
    { can: "I can bring quieter people into a discussion.", review: "Explanation: chairing language; Listening" },
    { can: "I can interrupt and handle interruptions politely.", review: "Explanation: participating" },
    { can: "I can keep a discussion on track and move between items.", review: "Explanation: chairing language; Writing activity 2" },
    { can: "I can summarize decisions and write minutes.", review: "Reading and Writing activity 3" },
    { can: "I can chair a short meeting in English.", review: "Speaking activity 2" }
  ]
};
