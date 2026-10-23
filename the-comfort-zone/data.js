window.UNIT = {
  slug: "the-comfort-zone",
  number: 3,
  title: "The Comfort Zone",
  level: "C1",
  minutes: 80,
  speakers: { "Valeria": "f", "Iván": "m", "Host": "f", "Coach": "m" },
  focus: ["stance adverbs: arguably, admittedly, presumably, undeniably, seemingly", "position of stance adverbs in the sentence", "attitude adverbs: understandably, ironically, regrettably, surprisingly", "viewpoint adverbs: personally, financially, technically, strictly speaking", "vocabulary of challenge: step out of, push yourself, stretch goals"],

  presentation: {
    scene: "🧗🛋️🚪✨",
    situation: "Valeria has been offered the chance to give a talk at an international conference in English. Her colleague Iván thinks she should accept, but she is not so sure.",
    warmup: {
      prompt: "Which of these would take you out of your comfort zone? Choose all that apply.",
      options: ["public speaking", "travelling alone", "eating unusual food", "learning to swim", "singing in public", "living abroad", "changing careers", "dancing", "talking to strangers", "cutting your hair very short", "camping", "a job interview in English"],
      response: "Everyone's comfort zone is different. In this unit you'll learn adverbs that let you show your attitude and stance in a single word."
    },
    dialogueTitle: "An invitation to speak",
    dialogue: [
      { who: "Iván", line: "So, have you replied to the conference organizers yet?" },
      { who: "Valeria", line: "Not yet. *Admittedly*, it's a fantastic opportunity, but the thought of speaking to five hundred people terrifies me." },
      { who: "Iván", line: "*Understandably.* But you're *arguably* the best person in the department to talk about this project." },
      { who: "Valeria", line: "*Presumably* they'll expect questions at the end, too. In English." },
      { who: "Iván", line: "*Undeniably*, that's the scary part. *Ironically*, though, you're much better at answering questions than reading slides." },
      { who: "Valeria", line: "*Personally*, I'd rather send them a written report." },
      { who: "Iván", line: "*Strictly speaking*, you could. But you'd regret it. Growth happens just outside the comfort zone, or so they say." },
      { who: "Valeria", line: "*Hopefully* not too far outside. Fine. I'll say yes, before I change my mind." }
    ]
  },

  objectives: [
    "I can use stance adverbs to show how certain or committed I am to an idea.",
    "I can use attitude adverbs to comment on a whole statement.",
    "I can use viewpoint adverbs such as financially or strictly speaking.",
    "I can discuss the benefits and limits of leaving our comfort zone."
  ],

  explanation: {
    vocabTitle: "Stepping out of your comfort zone",
    vocab: [
      { word: "step out of your comfort zone", icon: "🚪" }, { word: "push yourself", icon: "💪" }, { word: "a leap of faith", icon: "🦘" },
      { word: "take the plunge", icon: "🏊" }, { word: "out of your depth", icon: "🌊" }, { word: "rise to the challenge", icon: "📈" },
      { word: "a steep learning curve", icon: "⛰️" }, { word: "daunting", icon: "😰" }, { word: "rewarding", icon: "🏅" },
      { word: "complacent", icon: "🛋️" }, { word: "resilience", icon: "🌳" }, { word: "fear of failure", icon: "😨" },
      { word: "a stretch goal", icon: "🎯" }, { word: "baby steps", icon: "👣" }, { word: "growth mindset", icon: "🌱" }
    ],
    grammar: [
      {
        title: "Stance adverbs: how sure or committed you are",
        intro: "These adverbs comment on the **truth** of the whole sentence. They're very common in academic writing and opinion pieces.",
        head: ["Adverb", "Meaning", "Example"],
        rows: [
          ["*arguably*", "it can be argued (cautious opinion)", "*She is arguably the best player of her generation.*"],
          ["*admittedly*", "I accept this (before a contrast)", "*Admittedly, it's expensive, but it's worth it.*"],
          ["*presumably*", "I suppose, based on what I know", "*Presumably they'll call us tomorrow.*"],
          ["*undeniably / undoubtedly*", "it's certain", "*It is undeniably a risky decision.*"],
          ["*seemingly / apparently*", "it appears so (but maybe not)", "*a seemingly simple task*"],
          ["*supposedly*", "people say so (I'm doubtful)", "*The method is supposedly foolproof.*"]
        ]
      },
      {
        title: "Attitude and viewpoint adverbs",
        head: ["Type", "Adverbs", "Example"],
        rows: [
          ["attitude (your feeling)", "*understandably, ironically, regrettably, surprisingly, fortunately, inevitably*", "*Ironically, the safety training caused an accident.*"],
          ["viewpoint (from which angle)", "*financially, technically, legally, politically, emotionally*", "*Financially, it makes sense; emotionally, it doesn't.*"],
          ["speaker's comment", "*personally, frankly, honestly, strictly speaking, broadly speaking*", "*Strictly speaking, you don't need a visa.*"]
        ]
      },
      {
        title: "Position",
        head: ["Position", "Example", "Note"],
        rows: [
          ["front, with a comma", "*Admittedly, it was a mistake.*", "most emphatic; very common"],
          ["mid (after be / auxiliary, before main verb)", "*She has undoubtedly improved.*", "neutral, formal"],
          ["before an adjective", "*a seemingly endless queue*", "comments on the adjective"],
          ["end, with a comma", "*It was a mistake, admittedly.*", "afterthought; spoken"]
        ],
        note: "*Hopefully* now means *I hope* at the start of a sentence: *Hopefully, it won't rain.* This is accepted in modern English."
      }
    ],
    watchOut: [
      ["Arguably, I'm sure he's the best.", "He's *arguably* the best. (arguably = cautious, not sure)"],
      ["She has improved undeniably a lot.", "She has *undeniably* improved a lot."],
      ["Presumably that he'll come.", "*Presumably* he'll come."],
      ["Ironic, the fire station burned down.", "*Ironically*, the fire station burned down."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with a suitable adverb.",
      items: [
        "[[Admittedly]], the course was hard, but I learned a lot.",
        "He's been travelling all night, so he's [[presumably|probably]] exhausted.",
        "[[Ironically]], the man who wrote the book on punctuality arrived late.",
        "[[Financially]], the move is a good idea; emotionally, it's very hard.",
        "[[Strictly|Technically]] speaking, the shop isn't open yet."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio interview with a performance coach about comfort zones.",
      title: "Is discomfort always good?",
      script: [
        { who: "Host", line: "We're constantly told to step out of our comfort zones. Is that good advice?" },
        { who: "Coach", line: "Broadly speaking, yes, but it's often misunderstood. Admittedly, we grow when we take on challenges. But the idea that more discomfort always means more growth is, frankly, nonsense." },
        { who: "Host", line: "Why is that?" },
        { who: "Coach", line: "Psychologists describe three zones. The comfort zone, where we feel safe; the learning or stretch zone, where we feel challenged but capable; and the panic zone, where stress is so high that we can't learn anything at all." },
        { who: "Host", line: "So the aim is the middle zone." },
        { who: "Coach", line: "Exactly. Understandably, people who are pushed straight into the panic zone often give up and become even more cautious. Ironically, then, forcing yourself too hard can shrink your comfort zone instead of expanding it." },
        { who: "Host", line: "What do you recommend?" },
        { who: "Coach", line: "Small, regular stretches. If public speaking terrifies you, don't start with a conference. Speak up in a meeting, then present to a small group. It's seemingly slow, but it's undeniably the method that works best over time. And, crucially, rest in your comfort zone in between. It isn't the enemy; it's where you recover." }
      ],
      activities: [
        {
          type: "sort", title: "Which zone?",
          prompt: "Sort the descriptions into the three zones the coach describes.",
          bins: ["comfort zone", "stretch zone", "panic zone"],
          items: [
            { text: "you feel safe", bin: 0 }, { text: "where you recover", bin: 0 },
            { text: "challenged but capable", bin: 1 }, { text: "where real learning happens", bin: 1 },
            { text: "stress is too high to learn", bin: 2 }, { text: "people often give up", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again and decide.",
          items: [
            { s: "The coach thinks more discomfort always means more growth.", a: false },
            { s: "Being pushed too hard can make people more cautious.", a: true },
            { s: "He suggests starting public speaking with a conference.", a: false },
            { s: "He believes the comfort zone has a useful role.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an opinion article from a student magazine.",
      title: "In defence of the comfort zone",
      text: [
        { body: "Motivational posters would have us believe that life begins where the comfort zone ends. Admittedly, there is some truth in the slogan: few of us would learn a language, change careers or fall in love without some risk. Yet the constant pressure to push ourselves has, arguably, become a new source of anxiety." },
        { body: "Consider the student who joins five societies, applies for three internships and trains for a marathon, all in the same semester. Seemingly, she is the model of a growth mindset. In reality, she is presumably exhausted, and exhaustion is hardly the ideal condition for learning anything. Inevitably, something gives: her grades, her health, or her friendships." },
        { body: "Psychologically, comfort is not the same as laziness. A familiar routine frees mental energy for the tasks that truly matter. The novelist who writes at the same desk every morning, or the athlete who eats the same breakfast before every race, is not avoiding challenge; they are managing it. Regrettably, this distinction is rarely made in the self-help industry, which has every financial reason to keep us feeling inadequate." },
        { body: "None of this means we should never take risks. Undeniably, the most memorable moments of our lives tend to involve some fear. The point is simply that growth requires a base to return to. Perhaps, then, the healthiest goal is not to escape our comfort zone but to expand it gradually, so that what once felt daunting eventually feels like home." }
      ],
      activities: [
        {
          type: "match", title: "What does the writer mean?",
          prompt: "Match each adverb from the article with its function there.",
          pairs: [
            ["Admittedly, there is some truth…", "accepting a point before disagreeing"],
            ["…has, arguably, become…", "giving a cautious opinion"],
            ["…she is presumably exhausted…", "making a logical assumption"],
            ["Regrettably, this distinction is rarely made…", "expressing disappointment"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The writer completely rejects the idea of taking risks.", a: false },
            { s: "The writer believes routines can free mental energy.", a: true },
            { s: "The writer suggests the self-help industry benefits from our insecurity.", a: true },
            { s: "The writer's conclusion is that we should escape our comfort zone quickly.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice using adverbs to express stance, then write an opinion paragraph.",
      activities: [
        {
          type: "rewrite", title: "One word says it all",
          prompt: "Rewrite each sentence using the adverb form of the word in brackets. Start with the adverb.",
          items: [
            { q: "It's ironic, but the safest drivers have the most accidents. (irony)", a: ["Ironically, the safest drivers have the most accidents."] },
            { q: "I admit it's risky, but it's worth trying. (admit)", a: ["Admittedly, it's risky, but it's worth trying.", "Admittedly, it is risky, but it is worth trying."] },
            { q: "It's regrettable, but the event has been cancelled. (regret)", a: ["Regrettably, the event has been cancelled."] },
            { q: "From a financial point of view, the plan makes sense. (finance)", a: ["Financially, the plan makes sense."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "She is arguably the best speaker here." },
            { a: "It was a seemingly endless journey." },
            { a: "He has undoubtedly improved this year." },
            { a: "Strictly speaking, you don't need a ticket." }
          ]
        },
        {
          type: "write", title: "An opinion piece",
          prompt: "Write an opinion piece (220–260 words) for a student magazine with the title *Should we always step out of our comfort zone?* Give a clear position, acknowledge the other side, and use at least **five** different stance, attitude or viewpoint adverbs.",
          minWords: 220, maxWords: 260,
          model: "We are often told that nothing good ever happened in a comfort zone. Admittedly, many of the most important experiences of my life began with fear: moving to a new city, giving my first presentation, applying for a job I felt unqualified for. Undeniably, these challenges made me more confident and more resilient.<br>However, I believe the message has been taken too far. Social media is full of people running ultramarathons and quitting their jobs to travel the world, and, understandably, many of us feel we are failing simply because we enjoy a quiet routine. Ironically, this pressure can make us so anxious that we avoid challenges altogether.<br>Psychologically, there is a difference between healthy stretch and harmful panic. Learning happens when a task is difficult but manageable, not when it is overwhelming. Presumably, this is why gradual goals tend to work better than dramatic gestures: a person who is afraid of water is far more likely to learn to swim in a calm pool than by jumping off a boat.<br>Personally, I see the comfort zone as a base camp rather than a prison. We need it to rest, reflect and recover energy before the next climb. Arguably, the most successful people are not those who never feel comfortable, but those who know when to leave and when to return.<br>So, should we always step out of our comfort zone? Not always, and certainly not all at once. But regularly, and a little further each time? Absolutely.",
          bank: ["Admittedly,", "Undeniably,", "Arguably,", "Presumably,", "Ironically,", "Understandably,", "Personally,", "Psychologically,"],
          checklist: [
            "I stated a **clear position**.",
            "I **acknowledged** the other side.",
            "I used at least **five** different stance, attitude or viewpoint adverbs.",
            "I placed the adverbs **correctly**, with commas where needed."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Make a short pause after the adverb at the start.",
          items: [
            "Admittedly, it's a fantastic opportunity.",
            "She's arguably the best person for it.",
            "Presumably they'll expect questions at the end.",
            "Ironically, the safety training caused an accident.",
            "Strictly speaking, you don't need a visa.",
            "It was a seemingly endless queue."
          ]
        },
        {
          type: "speak", title: "Out of my comfort zone",
          prompt: "Record yourself for about three minutes. Describe a time you stepped out of your comfort zone. How did you feel before, during and after? Was it worth it? Then give your opinion: should schools and companies push people out of their comfort zones?",
          language: ["Admittedly,…", "Understandably, I felt…", "Ironically,…", "Undeniably,…", "Arguably,…", "Personally,…", "It was a steep learning curve", "I took the plunge"],
          seconds: 210,
          checklist: ["describe the experience in detail?", "use at least four stance or attitude adverbs?", "give your opinion on the general question?", "acknowledge a different view?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use arguably, admittedly, presumably and undeniably to show my stance.", review: "Explanation: stance adverbs" },
    { can: "I can comment on a statement with attitude adverbs such as ironically.", review: "Explanation: attitude and viewpoint adverbs; Writing activity 1" },
    { can: "I can use viewpoint adverbs such as financially and strictly speaking.", review: "Explanation: attitude and viewpoint adverbs" },
    { can: "I can place stance adverbs correctly in a sentence.", review: "Explanation: position; Writing activity 2" },
    { can: "I can identify a writer's stance in an opinion article.", review: "Reading activities" },
    { can: "I can give a nuanced opinion on comfort zones and personal growth.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
