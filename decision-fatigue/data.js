window.UNIT = {
  slug: "decision-fatigue",
  number: 2,
  title: "Decision Fatigue",
  level: "C1",
  minutes: 80,
  speakers: { "Andrea": "f", "Tomás": "m", "Host": "m", "Professor Lane": "f" },
  focus: ["conditional inversion: Had I known…, Should you need…, Were it not for…", "Were + to-infinitive for unlikely future events", "alternatives to if: supposing, providing, on condition that, assuming", "but for / if it hadn't been for + noun", "vocabulary of choices: weigh up, second-guess, on a whim"],

  presentation: {
    scene: "🛒🤯⚖️🧠",
    situation: "Andrea is a doctor who has just finished a twelve-hour shift. Her flatmate Tomás asks her to help him choose between two job offers, and she is too tired to think.",
    warmup: {
      prompt: "Which decisions do you find most exhausting? Choose all that apply.",
      options: ["what to eat", "what to wear", "what to watch", "which course to take", "where to live", "which job to accept", "what to buy online", "how to spend the weekend", "whether to reply to a message", "which route to take", "who to trust", "when to stop working"],
      response: "Psychologists talk about decision fatigue: the more choices we make, the worse they become. In this unit you'll learn formal and elegant ways to talk about conditions and their consequences."
    },
    dialogueTitle: "Too tired to choose",
    dialogue: [
      { who: "Tomás", line: "I need your advice. Should I take the job in Monterrey or stay here?" },
      { who: "Andrea", line: "Tomás, I've made about three hundred decisions today. *Had you asked* me this morning, I'd have given you a brilliant answer." },
      { who: "Tomás", line: "Sorry. But they want an answer by Friday." },
      { who: "Andrea", line: "OK. *Supposing* you took the job, would you be happy living so far from your family?" },
      { who: "Tomás", line: "Probably, *providing* I could come back once a month. The salary's much better." },
      { who: "Andrea", line: "*Were it not for* the salary, would you even consider it?" },
      { who: "Tomás", line: "Honestly? No. *But for* the money, I'd stay without thinking twice." },
      { who: "Andrea", line: "Then there's your answer. And *should* they offer you more to stay here, you won't need to choose at all. Now, please, let me sleep." }
    ]
  },

  objectives: [
    "I can use conditional inversion with had, should and were in formal speech and writing.",
    "I can use alternatives to if such as supposing, providing and assuming.",
    "I can use but for and if it hadn't been for to talk about decisive factors.",
    "I can discuss how people make decisions and why choice can be exhausting."
  ],

  explanation: {
    vocabTitle: "Making decisions",
    vocab: [
      { word: "weigh up the pros and cons", icon: "⚖️" }, { word: "second-guess yourself", icon: "🔁" }, { word: "on a whim", icon: "🎲" },
      { word: "a tough call", icon: "📞" }, { word: "sit on the fence", icon: "🚧" }, { word: "make up your mind", icon: "🧠" },
      { word: "a no-brainer", icon: "✅" }, { word: "spoilt for choice", icon: "🍬" }, { word: "have second thoughts", icon: "🤔" },
      { word: "a snap decision", icon: "⚡" }, { word: "opt for", icon: "👉" }, { word: "rule out", icon: "❌" },
      { word: "deliberate", icon: "🕰️" }, { word: "impulsive", icon: "🏃" }, { word: "the paradox of choice", icon: "🌀" }
    ],
    grammar: [
      {
        title: "Conditional inversion",
        intro: "In formal English we can drop *if* and put the auxiliary first. The meaning doesn't change, but the tone is more formal and elegant.",
        head: ["Type", "With if", "Inverted"],
        rows: [
          ["first (unlikely future)", "*If you should need help, call me.*", "*Should you need help, call me.*"],
          ["second (unreal present)", "*If I were you, I'd accept.*", "*Were I you, I'd accept.*"],
          ["second (unlikely future)", "*If the company were to close, we'd all lose our jobs.*", "*Were the company to close, we'd all lose our jobs.*"],
          ["third (unreal past)", "*If I had known, I'd have helped.*", "*Had I known, I'd have helped.*"],
          ["negative", "*If he hadn't called, I'd have missed it.*", "*Had he not called, I'd have missed it.*"]
        ],
        note: "Negative inversion uses the full form: *Had I not known*, never *Hadn't I known*."
      },
      {
        title: "Alternatives to if",
        head: ["Expression", "Meaning", "Example"],
        rows: [
          ["*supposing / suppose*", "imagine that", "*Supposing you lost your job, what would you do?*"],
          ["*providing / provided (that)*", "only if (a condition)", "*I'll go, providing I can leave early.*"],
          ["*on condition that*", "only if (formal)", "*You can borrow it on condition that you return it.*"],
          ["*assuming (that)*", "if we accept that it's true", "*Assuming the train is on time, we'll arrive at six.*"],
          ["*as long as / so long as*", "only if", "*So long as you're honest, I won't be angry.*"],
          ["*unless*", "except if", "*Unless they raise the offer, I'll stay.*"]
        ]
      },
      {
        title: "But for / if it hadn't been for",
        head: ["Structure", "Example"],
        rows: [
          ["*But for* + noun", "*But for the money, I'd stay.*"],
          ["*If it weren't for* + noun (present)", "*If it weren't for my family, I'd move abroad.*"],
          ["*If it hadn't been for* + noun (past)", "*If it hadn't been for her advice, I'd have failed.*"],
          ["*Were it not for / Had it not been for* + noun", "*Had it not been for the rain, the match would have finished.*"]
        ]
      }
    ],
    watchOut: [
      ["Had I knew, I'd have told you.", "Had I *known*, I'd have told you."],
      ["Hadn't she called, we'd have left.", "Had she *not* called, we'd have left."],
      ["Should you will need anything, ask.", "Should you *need* anything, ask."],
      ["Providing it will rain, we'll stay in.", "Providing it *rains*, we'll stay in."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with one word.",
      items: [
        "[[Had]] I known about the traffic, I'd have left earlier.",
        "[[Should]] you have any questions, please contact the office.",
        "[[Were]] the government to raise taxes, there would be protests.",
        "But [[for]] her help, I would never have finished.",
        "[[Supposing|Suppose|Assuming]] you won the lottery, would you stop working?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a podcast interview with a behavioural economist about decision fatigue.",
      title: "Why judges get tired",
      script: [
        { who: "Host", line: "Professor Lane, you've written about decision fatigue. What exactly is it?" },
        { who: "Professor Lane", line: "It's the idea that our ability to make good decisions declines the more decisions we make. Every choice uses mental energy, and that energy isn't unlimited." },
        { who: "Host", line: "Is there evidence for it?" },
        { who: "Professor Lane", line: "One well-known study looked at more than a thousand parole decisions made by judges. Early in the morning, prisoners had about a sixty-five per cent chance of a favourable ruling. Just before lunch, that dropped almost to zero, and after the break it went back up." },
        { who: "Host", line: "That's alarming." },
        { who: "Professor Lane", line: "It is. Had the hearings been scheduled differently, some of those people might have been released. Now, I should say the study has been criticized, because the order of cases wasn't completely random. But the general pattern has been observed elsewhere too." },
        { who: "Host", line: "So what can ordinary people do?" },
        { who: "Professor Lane", line: "Reduce trivial decisions. Some leaders wear the same clothes every day for that reason. And should you have an important decision to make, make it in the morning, providing you've slept well, of course. Were I to give one piece of advice, it would be: never decide anything important when you're hungry." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "Decision fatigue means our decisions improve with practice.", a: false },
            { s: "Prisoners had a better chance early in the morning.", a: true },
            { s: "The chance of a favourable ruling increased just before lunch.", a: false },
            { s: "Professor Lane admits the study has been criticized.", a: true },
            { s: "She recommends making important decisions when you're hungry.", a: false }
          ]
        },
        {
          type: "gap", title: "Complete the quotes",
          prompt: "Complete what Professor Lane said with one word.",
          items: [
            "[[Had]] the hearings been scheduled differently, some might have been released.",
            "[[Should]] you have an important decision to make, make it in the morning.",
            "Make it in the morning, [[providing|provided]] you've slept well.",
            "[[Were]] I to give one piece of advice, it would be this."
          ]
        }
      ]
    },

    reading: {
      intro: "Read an extract from a popular psychology book about the paradox of choice.",
      title: "The jam experiment",
      text: [
        { body: "In a now-famous experiment, researchers set up a tasting stand in an upmarket supermarket. On some days the stand displayed twenty-four varieties of jam; on others, only six. The larger display attracted more visitors, which was hardly surprising. What was surprising was what happened next." },
        { body: "Of the shoppers who stopped at the large display, only three per cent went on to buy a jar. Of those who saw the small display, thirty per cent did. Had the researchers measured only how many people the stand attracted, they would have concluded that more choice is better. Instead, they had stumbled upon what psychologist Barry Schwartz later called *the paradox of choice*." },
        { body: "The explanation seems to be that, beyond a certain point, options become a burden. We worry about choosing the wrong one, we imagine the alternatives we gave up, and we are more likely to regret whatever we pick. Were we purely rational, extra options could only help us; but we are not, and they often paralyse us instead." },
        { body: "It would be a mistake, however, to conclude that choice is bad. Later studies have found that the effect largely disappears provided that people know exactly what they want, or that the options are clearly organized. The lesson, then, is not to eliminate choice but to design it carefully. Supposing you ran a restaurant, a short, well-structured menu might serve your customers better than a book of two hundred dishes." }
      ],
      activities: [
        {
          type: "match", title: "Key ideas",
          prompt: "Match each idea with the correct detail from the text.",
          pairs: [
            ["the large display", "attracted more visitors but fewer buyers"],
            ["the small display", "led ten times as many people to buy"],
            ["the paradox of choice", "more options can make us less satisfied"],
            ["later studies", "found the effect depends on how options are organized"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "Three per cent of visitors to the large display bought jam.", a: true },
            { s: "The writer believes choice is always harmful.", a: false },
            { s: "Knowing exactly what you want reduces the effect.", a: true },
            { s: "The writer recommends very long restaurant menus.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice inversion and alternatives to if, then write a formal piece of advice.",
      activities: [
        {
          type: "rewrite", title: "Make it formal",
          prompt: "Rewrite each sentence starting with the word given. Use inversion.",
          items: [
            { q: "If I had known about the delay, I would have taken a taxi. (Had)", a: ["Had I known about the delay, I would have taken a taxi.", "Had I known about the delay, I'd have taken a taxi."] },
            { q: "If you should require further information, please contact us. (Should)", a: ["Should you require further information, please contact us."] },
            { q: "If the factory were to close, the town would suffer. (Were)", a: ["Were the factory to close, the town would suffer."] },
            { q: "If it had not been for the doctor, he would have died. (Had)", a: ["Had it not been for the doctor, he would have died.", "Had it not been for the doctor, he'd have died."] }
          ]
        },
        {
          type: "sort", title: "Same meaning?",
          prompt: "Does each sentence mean *only if* (a condition) or *imagine that* (a hypothesis)?",
          bins: ["only if (condition)", "imagine that (hypothesis)"],
          items: [
            { text: "Providing you finish on time, you can leave.", bin: 0 }, { text: "You can come on condition that you help.", bin: 0 },
            { text: "As long as it's cheap, I'll buy it.", bin: 0 }, { text: "Supposing nobody came, what would we do?", bin: 1 },
            { text: "Suppose you lived on Mars.", bin: 1 }, { text: "Imagine you had unlimited money.", bin: 1 }
          ]
        },
        {
          type: "write", title: "A formal guide",
          prompt: "Write a short guide (220–260 words) for first-year university students called *Making better decisions*. Explain what decision fatigue is and give practical advice. Use at least **two** inverted conditionals and **three** alternatives to *if*.",
          minWords: 220, maxWords: 260,
          model: "Starting university involves hundreds of new decisions, from which courses to take to where to eat lunch. Psychologists have found that the more choices we make, the worse they tend to become. This is known as decision fatigue, and understanding it can save you a great deal of stress.<br>First, reduce trivial choices. Supposing you spent ten minutes every morning deciding what to wear, you would waste more than an hour a week. Plan your clothes, meals and study timetable in advance, providing you leave some flexibility for the unexpected.<br>Second, schedule important decisions carefully. Should you need to choose a major or sign a contract for a flat, do it in the morning, when your mind is fresh. Never decide anything important when you are hungry or exhausted, as tired brains tend to choose the easiest option rather than the best one.<br>Third, limit your options. Assuming you have already identified the three most suitable courses, do not keep searching for a fourth. More choice often leads to more regret, not more satisfaction.<br>Finally, accept that no decision is perfect. Had our ancestors waited for perfect information, they would never have acted at all. As long as you have weighed up the main pros and cons, trust your judgment and move on.<br>Were you to follow just one of these tips, you would already notice a difference. Follow all four, and university life will feel considerably lighter.",
          bank: ["Should you need…", "Had I known…", "Were you to…", "supposing", "providing", "assuming", "as long as", "on condition that"],
          checklist: [
            "I explained **what decision fatigue is**.",
            "I gave **practical advice** in clear paragraphs.",
            "I used at least **two** inverted conditionals.",
            "I used at least **three** alternatives to *if*."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice how the auxiliary at the start is stressed.",
          items: [
            "Had I known, I'd have helped.",
            "Should you need anything, just call me.",
            "Were it not for the salary, I'd stay.",
            "Supposing you took the job, would you move?",
            "I'll go, providing I can leave early.",
            "But for her advice, I would have failed."
          ]
        },
        {
          type: "speak", title: "A decision that changed my life",
          prompt: "Record yourself for about three minutes. Talk about an important decision you made (a course, a job, a move or a relationship). Explain how you made it, what would have happened had you decided differently, and what you would do in the same situation today.",
          language: ["Had I chosen…, I would have…", "Were I to decide again,…", "If it hadn't been for…", "But for…", "providing / assuming that…", "I weighed up the pros and cons", "It was a tough call", "I had second thoughts"],
          seconds: 210,
          checklist: ["explain the decision and the options?", "use at least one inverted conditional?", "use but for or if it hadn't been for?", "reflect on what you'd do now?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use inversion with had, should and were instead of if.", review: "Explanation: conditional inversion; Writing activity 1" },
    { can: "I can use negative inversion correctly (Had I not…).", review: "Explanation: conditional inversion (note)" },
    { can: "I can use supposing, providing, assuming and on condition that.", review: "Explanation: alternatives to if; Writing activity 2" },
    { can: "I can talk about decisive factors with but for and if it hadn't been for.", review: "Explanation: but for / if it hadn't been for" },
    { can: "I can follow a discussion of research findings and its criticisms.", review: "Listening and Reading activities" },
    { can: "I can talk and write about decisions in a formal, elegant style.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
