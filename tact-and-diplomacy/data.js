window.UNIT = {
  slug: "tact-and-diplomacy",
  number: 8,
  title: "Tact and Diplomacy",
  level: "C1",
  minutes: 80,
  speakers: { "Mónica": "f", "Javier": "m", "Host": "m", "Consultant": "f" },
  focus: ["distancing with past tenses: I was wondering, I was hoping", "softening with modals and conditionals: Would it be possible…?, It might be better if…", "negative questions as suggestions: Wouldn't it be better to…?", "understatement: not entirely, a bit of a, not ideal", "vocabulary of tact: diplomatic, blunt, sensitive, beat around the bush"],

  presentation: {
    scene: "🕊️🗣️🤝😬",
    situation: "Mónica manages a small design team. Javier, one of her designers, has presented a logo the client will almost certainly reject. She needs to tell him without discouraging him.",
    warmup: {
      prompt: "Which of these situations require the most tact? Choose all that apply.",
      options: ["giving feedback", "refusing an invitation", "asking for a pay rise", "telling a friend about bad breath", "complaining to a neighbour", "ending a relationship", "disagreeing with a boss", "rejecting a job candidate", "asking someone to repay money", "commenting on a gift", "correcting a teacher", "saying no to a favour"],
      response: "Being diplomatic doesn't mean being dishonest. In this unit you'll learn how English speakers soften difficult messages."
    },
    dialogueTitle: "Feedback on the logo",
    dialogue: [
      { who: "Mónica", line: "Javier, *I was wondering* if we could talk about the logo for a minute." },
      { who: "Javier", line: "Sure. Do you like it?" },
      { who: "Mónica", line: "There's a lot I like. The colours are great. *I'm just not entirely sure* the font fits the client's style." },
      { who: "Javier", line: "Oh. What's wrong with it?" },
      { who: "Mónica", line: "Nothing's *wrong* exactly. *It might be a little too* playful for a law firm. *Wouldn't it be better* to try something more classic?" },
      { who: "Javier", line: "I suppose so. I did think it was a risk." },
      { who: "Mónica", line: "*It was a bit of a* bold choice, but that's what I like about your work. *Would it be possible* to show me two alternatives by Thursday?" },
      { who: "Javier", line: "Definitely. Thanks for being so diplomatic about it." }
    ]
  },

  objectives: [
    "I can use past tenses and modals to make requests and criticism less direct.",
    "I can use negative questions to make tactful suggestions.",
    "I can use understatement to soften negative opinions.",
    "I can give constructive feedback and refuse requests diplomatically."
  ],

  explanation: {
    vocabTitle: "Tact and directness",
    vocab: [
      { word: "tactful", icon: "🕊️" }, { word: "tactless", icon: "🐘" }, { word: "diplomatic", icon: "🤝" },
      { word: "blunt", icon: "🔨" }, { word: "to the point", icon: "🎯" }, { word: "beat around the bush", icon: "🌳" },
      { word: "sugar-coat", icon: "🍬" }, { word: "constructive criticism", icon: "🧱" }, { word: "tread carefully", icon: "👣" },
      { word: "a sensitive issue", icon: "⚠️" }, { word: "save face", icon: "🙂" }, { word: "put your foot in it", icon: "🦶" },
      { word: "come across as rude", icon: "😠" }, { word: "soften the blow", icon: "🪶" }, { word: "read between the lines", icon: "📃" }
    ],
    grammar: [
      {
        title: "Distancing and softening",
        intro: "English speakers often make messages less direct by moving them into the past, adding modals or using conditionals.",
        head: ["Technique", "Direct", "Tactful"],
        rows: [
          ["past tenses", "*I want to ask you something.*", "*I was wondering if I could ask you something.*"],
          ["past continuous", "*I hope you can help.*", "*I was hoping you could help.*"],
          ["modals", "*This is too expensive.*", "*This might be a little too expensive.*"],
          ["conditionals", "*Send it today.*", "*It would be great if you could send it today.*"],
          ["seem / appear", "*There's a mistake.*", "*There seems to be a small mistake.*"],
          ["impersonal passive", "*You forgot the deadline.*", "*The deadline seems to have been missed.*"]
        ]
      },
      {
        title: "Negative questions and understatement",
        head: ["Technique", "Example", "Meaning"],
        rows: [
          ["*Wouldn't it be better to…?*", "*Wouldn't it be better to wait?*", "I think we should wait."],
          ["*Don't you think…?*", "*Don't you think it's a bit early?*", "I think it's too early."],
          ["*not very / not entirely / not exactly*", "*It's not exactly what we expected.*", "It's quite different (negative)."],
          ["*a bit of a / slightly / rather*", "*It was a bit of a disappointment.*", "It was a disappointment."],
          ["*not ideal / not the best*", "*The timing isn't ideal.*", "The timing is bad."]
        ],
        note: "Use positive words with *not* to criticize: *not very clear* sounds kinder than *unclear*; *not my favourite* is kinder than *I hate it*."
      },
      {
        title: "Refusing and disagreeing politely",
        head: ["Function", "Language"],
        rows: [
          ["refusing", "*I'd love to, but I'm afraid… / I'm not sure I'll be able to…*"],
          ["disagreeing", "*I see your point, but… / I'm not sure I'd go that far.*"],
          ["criticizing", "*One thing you might want to look at is… / It could be even better if…*"],
          ["cushioning", "*To be honest,… / I hope you don't mind me saying, but…*"]
        ]
      }
    ],
    watchOut: [
      ["Your report is bad.", "Your report *isn't quite* there yet. *It could be even better if* you added data."],
      ["I am wondering if you help me.", "I *was wondering* if you *could* help me."],
      ["Isn't it better wait?", "*Wouldn't it be better to* wait?"],
      ["No. I won't come.", "*I'd love to, but I'm afraid* I won't be able to make it."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the tactful phrases with one word.",
      items: [
        "I was [[wondering]] if you could lend me your notes.",
        "[[Wouldn't]] it be better to discuss this tomorrow?",
        "The colour isn't [[exactly|quite|really]] what we had in mind.",
        "There [[seems|appears]] to be a slight problem with the invoice.",
        "I'd love to, but I'm [[afraid]] I'm busy that evening."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an intercultural consultant talking about directness at work.",
      title: "Direct or diplomatic?",
      script: [
        { who: "Host", line: "You train international teams. How big a problem is directness?" },
        { who: "Consultant", line: "It's one of the biggest. What sounds honest in one culture can sound rude in another. And English, especially British English, has a reputation for being very indirect." },
        { who: "Host", line: "Can you give an example?" },
        { who: "Consultant", line: "If a British manager says, That's an interesting idea, it may well mean they think it's a terrible one. And Perhaps you could consider another approach often means Change it now. Speakers from more direct cultures sometimes miss the message completely." },
        { who: "Host", line: "So should learners avoid being direct?" },
        { who: "Consultant", line: "Not necessarily. But they need to recognize softening when they hear it, and use some of it themselves. A sentence like I'm not sure that works is direct enough to be clear but soft enough not to offend." },
        { who: "Host", line: "What about feedback?" },
        { who: "Consultant", line: "Many people use what's called the sandwich: something positive, then the criticism, then something positive again. It can work, but if you overdo it, people learn to ignore the bread and only listen for the filling. Often it's better to be clear and kind at the same time: Here's what works, here's one thing to change, and here's why." }
      ],
      activities: [
        {
          type: "match", title: "What do they really mean?",
          prompt: "Match the indirect phrases from the interview with their real meaning.",
          pairs: [
            ["That's an interesting idea.", "I think it's a bad idea."],
            ["Perhaps you could consider another approach.", "Change it now."],
            ["I'm not sure that works.", "I think there's a problem with it."],
            ["something positive, criticism, something positive", "the feedback sandwich"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again and decide.",
          items: [
            { s: "British English has a reputation for being very indirect.", a: true },
            { s: "Learners should never be direct.", a: false },
            { s: "The consultant thinks the feedback sandwich always works perfectly.", a: false },
            { s: "She recommends being clear and kind at the same time.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an advice column from a workplace magazine.",
      title: "Ask Clara: How do I say no to my boss?",
      text: [
        { author: "Reader's letter", body: "My manager keeps asking me to take on extra projects. I'm already working until nine most nights, but I'm afraid that if I refuse, she'll think I'm not committed. How can I say no without damaging my career? — Exhausted in Querétaro" },
        { author: "Clara replies", body: "Dear Exhausted, first of all, saying no is not the same as being uncommitted. In fact, managers often respect people who are realistic about their workload. The key is how you say it." },
        { author: "", body: "Avoid a flat refusal. Instead, show that you take the request seriously: *I'd really like to help with this.* Then explain the problem in terms of the work, not your feelings: *At the moment I'm working on the annual report and the client presentation, and I'm not sure I'd be able to give this project the attention it deserves.*" },
        { author: "", body: "Next, and this is crucial, offer an alternative. *Would it be possible to postpone the report by a week?* or *I could take it on if someone else picked up the presentation.* This turns a refusal into a conversation about priorities, which is exactly what your manager needs to have." },
        { author: "", body: "Finally, don't apologize excessively. One *I'm afraid* is polite; five sound guilty. If your manager still insists, it might be worth asking directly which tasks she considers most important. You may find she simply hadn't realized how much you were already doing." }
      ],
      activities: [
        {
          type: "sort", title: "Clara's advice",
          prompt: "Sort the actions: does Clara recommend them or not?",
          bins: ["recommended", "not recommended"],
          items: [
            { text: "show you take the request seriously", bin: 0 }, { text: "explain the problem in terms of the work", bin: 0 }, { text: "offer an alternative", bin: 0 }, { text: "ask about priorities", bin: 0 },
            { text: "give a flat refusal", bin: 1 }, { text: "apologize many times", bin: 1 }, { text: "focus on your feelings", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "Clara believes saying no shows a lack of commitment.", a: false },
            { s: "She suggests turning a refusal into a conversation about priorities.", a: true },
            { s: "She recommends apologizing as much as possible.", a: false },
            { s: "She thinks the manager may not know how busy the reader is.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice softening language, then write a tactful message.",
      activities: [
        {
          type: "rewrite", title: "Soften it",
          prompt: "Make each sentence more tactful using the words in brackets.",
          items: [
            { q: "Your presentation was too long. (bit)", a: ["Your presentation was a bit too long.", "Your presentation was a bit long."] },
            { q: "I want to leave early on Friday. (wondering)", a: ["I was wondering if I could leave early on Friday.", "I was wondering whether I could leave early on Friday."] },
            { q: "We should change the date. (Wouldn't)", a: ["Wouldn't it be better to change the date?"] },
            { q: "There's a mistake in your calculation. (seems)", a: ["There seems to be a mistake in your calculation.", "There seems to be a small mistake in your calculation.", "There seems to be a slight mistake in your calculation."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I'm not sure I'd go that far." },
            { a: "It's not exactly what we expected." },
            { a: "I was hoping you could help me." },
            { a: "Don't you think it's a bit early?" }
          ]
        },
        {
          type: "write", title: "A diplomatic email",
          prompt: "A colleague has sent you a draft of a report you are writing together. It is disorganized, has several errors and is much longer than required. Write a **tactful email** (220–260 words) giving feedback. Start with something positive, make three specific suggestions, and propose a next step. Use distancing, softening and at least one negative question.",
          minWords: 220, maxWords: 260,
          model: "Hi Esteban,<br>Thanks so much for sending the draft. I can see how much work you've put into it, and the section on customer interviews is particularly strong: the quotes really bring the data to life.<br>I've been through the whole document and I was wondering if we could look at a few things together before we send it to the director.<br>First, the structure. At the moment the findings and recommendations are a little mixed up, which might make it slightly difficult for a busy reader to follow. Wouldn't it be clearer to have separate sections, with a short summary at the start?<br>Second, I noticed a couple of figures in the sales table that don't seem to match the original spreadsheet. It's probably just a copying error, but it might be worth double-checking them, as the director is bound to look closely at those numbers.<br>Third, the report is currently about twenty pages, and the brief asked for ten. I'm not sure we need all the background information in the introduction; perhaps some of it could go in an appendix?<br>None of this is major, and the hard part, collecting the information, is already done. Would it be possible to meet for half an hour tomorrow afternoon to go through it? I'd be happy to take on the summary and the appendix if you could look at the figures.<br>Thanks again for all your effort on this.<br>Best,<br>Ana",
          bank: ["I was wondering if…", "It might be worth…", "a little / slightly", "Wouldn't it be clearer to…?", "I'm not sure we need…", "don't seem to match", "Would it be possible to…?", "None of this is major"],
          checklist: [
            "I started with something **positive** and specific.",
            "I made **three** clear suggestions.",
            "I used **distancing** and **softening** language.",
            "I used at least one **negative question** and proposed a **next step**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Use a soft, friendly intonation.",
          items: [
            "I was wondering if we could talk.",
            "I'm not entirely sure it works.",
            "Wouldn't it be better to wait?",
            "It might be a little too playful.",
            "There seems to be a slight problem.",
            "I'd love to, but I'm afraid not."
          ]
        },
        {
          type: "speak", title: "Handle it with tact",
          prompt: "Record yourself responding to **three** situations, about one minute each. *1) Your friend asks what you think of their new haircut, which you don't like. 2) Your boss asks you to work this Saturday, but you have a family event. 3) A classmate in your group project hasn't done their part for two weeks.* Be honest but diplomatic.",
          language: ["To be honest,…", "I'm not sure it's…", "It's not exactly…", "I'd love to, but I'm afraid…", "I was wondering if…", "Wouldn't it be better if…?", "One thing that might help is…", "I hope you don't mind me saying,…"],
          seconds: 210,
          checklist: ["respond to all three situations?", "use distancing (I was wondering…)?", "use understatement or a negative question?", "stay honest while being kind?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use past tenses and modals to soften requests.", review: "Explanation: distancing and softening; Writing activity 1" },
    { can: "I can make tactful suggestions with negative questions.", review: "Explanation: negative questions and understatement" },
    { can: "I can use understatement to criticize gently.", review: "Explanation: negative questions and understatement (note)" },
    { can: "I can refuse requests and disagree politely.", review: "Explanation: refusing and disagreeing; Reading" },
    { can: "I can recognize what indirect phrases really mean.", review: "Listening activities" },
    { can: "I can give constructive feedback in writing and speech.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
