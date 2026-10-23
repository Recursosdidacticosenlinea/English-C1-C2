window.UNIT = {
  slug: "the-article",
  number: 20,
  title: "The Article",
  level: "C1",
  minutes: 85,
  speakers: { "Valentina": "f", "Pedro": "m", "Editor": "f", "Host": "m" },
  focus: ["features of a magazine article: catchy title, hook, direct address", "opening techniques: a question, a surprising fact, an anecdote, a bold statement", "rhetorical questions and addressing the reader", "a lively, semi-formal style: contractions, vivid vocabulary, varied sentences", "endings that stay with the reader"],

  presentation: {
    scene: "📰✏️🎣💡",
    situation: "Valentina writes for her university's online magazine. Her editor, Pedro, has just read the first draft of her article about digital detox, and he's not impressed with the opening.",
    warmup: {
      prompt: "What makes you keep reading an article? Choose all that apply.",
      options: ["a funny title", "a surprising fact", "a personal story", "photos", "short paragraphs", "a question", "a strong opinion", "useful tips", "humour", "statistics", "a clear structure", "a good ending"],
      response: "Readers decide in seconds whether to continue. In this unit you'll learn how to write an article that grabs attention and keeps it."
    },
    dialogueTitle: "The first paragraph",
    dialogue: [
      { who: "Pedro", line: "Your first sentence is: *In this article I will discuss digital detox.* Would *you* keep reading?" },
      { who: "Valentina", line: "Probably not. It sounds like an essay." },
      { who: "Pedro", line: "Exactly. An article needs a *hook*. Start with a question, a surprising fact or a short story." },
      { who: "Valentina", line: "What about: *Last month, I locked my phone in a drawer for seven days. On day two, I nearly broke the drawer.*" },
      { who: "Pedro", line: "Much better! Now I want to know what happened. And talk to the reader: *Sound familiar?*" },
      { who: "Valentina", line: "Can I use contractions? And a bit of humour?" },
      { who: "Pedro", line: "Definitely. It's a magazine, not a report. Just keep it clear and organized. And the title?" },
      { who: "Valentina", line: "*Digital detox* is boring, isn't it? How about *Seven Days Without My Phone (and Why I Nearly Cried)*?" }
    ]
  },

  objectives: [
    "I can write a catchy title and an opening that hooks the reader.",
    "I can address the reader directly and use rhetorical questions effectively.",
    "I can write in a lively, semi-formal style appropriate for a magazine.",
    "I can write a well-structured article of 240–280 words with a memorable ending."
  ],

  explanation: {
    vocabTitle: "Writing an article",
    vocab: [
      { word: "a headline", icon: "📰" }, { word: "a hook", icon: "🎣" }, { word: "an anecdote", icon: "📖" },
      { word: "a rhetorical question", icon: "❓" }, { word: "direct address", icon: "👉" }, { word: "the target reader", icon: "🎯" },
      { word: "a catchy title", icon: "✨" }, { word: "vivid language", icon: "🎨" }, { word: "a call to action", icon: "📣" },
      { word: "tone", icon: "🎵" }, { word: "a punchline", icon: "🥊" }, { word: "engaging", icon: "😍" },
      { word: "a subheading", icon: "🔖" }, { word: "a takeaway", icon: "🥡" }, { word: "food for thought", icon: "🍽️" }
    ],
    grammar: [
      {
        title: "Article vs essay",
        head: ["Feature", "Essay", "Article"],
        rows: [
          ["title", "the question itself", "*catchy, often witty or intriguing*"],
          ["opening", "*This essay will argue that…*", "*a hook: question, fact, anecdote or bold statement*"],
          ["reader", "impersonal", "*addressed directly: you, we, Have you ever…?*"],
          ["style", "formal, no contractions", "*semi-formal: contractions, humour, vivid words*"],
          ["ending", "*On balance, …*", "*a memorable final line, question or call to action*"]
        ]
      },
      {
        title: "Opening techniques",
        head: ["Technique", "Example"],
        rows: [
          ["a question", "*When did you last spend a whole day without checking your phone?*"],
          ["a surprising fact", "*The average person touches their phone more than 2,600 times a day.*"],
          ["an anecdote", "*Last month, I locked my phone in a drawer for seven days.*"],
          ["a bold statement", "*Your phone is not a tool. It's a slot machine in your pocket.*"],
          ["a scene", "*It's 2 a.m. You're still scrolling. You promised yourself you'd stop an hour ago.*"]
        ]
      },
      {
        title: "Engaging the reader",
        head: ["Technique", "Example"],
        rows: [
          ["rhetorical question", "*So, is it really worth it? Absolutely.*"],
          ["direct address", "*If you're anything like me, you'll…*"],
          ["inclusive *we*", "*We've all been there.*"],
          ["short sentence for impact", "*Then it happened. Silence.*"],
          ["call to action", "*Try it for one weekend. You might surprise yourself.*"]
        ],
        note: "Don't overuse rhetorical questions. Two or three in a whole article are enough."
      }
    ],
    watchOut: [
      ["In this article I am going to write about sleep.", "*Ever wondered why you wake up more tired than when you went to bed?*"],
      ["Title: Sleep", "Title: *Why Your Brain Hates Your Alarm Clock*"],
      ["In conclusion, sleep is important.", "*So tonight, put the phone down. Your brain will thank you.*"],
      ["The phone is very very bad.", "Your phone is quietly *stealing* your attention."]
    ],
    check: {
      type: "sort", title: "Quick check",
      prompt: "Is each sentence more typical of an essay or a magazine article?",
      bins: ["essay", "article"],
      items: [
        { text: "This essay will examine the advantages of…", bin: 0 }, { text: "On balance, it can be concluded that…", bin: 0 }, { text: "It is widely argued that…", bin: 0 },
        { text: "Sound familiar?", bin: 1 }, { text: "We've all been there.", bin: 1 }, { text: "So, what are you waiting for?", bin: 1 }
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a magazine editor giving advice to young writers.",
      title: "What editors want",
      script: [
        { who: "Host", line: "You receive hundreds of articles every month. What makes you stop and read one properly?" },
        { who: "Editor", line: "The first two lines. Honestly, if the opening doesn't grab me, I rarely get to the third paragraph. And our readers are even less patient than I am." },
        { who: "Host", line: "What's the most common mistake?" },
        { who: "Editor", line: "Writing an essay and calling it an article. Students tend to start with a general statement, like Technology plays an important role in our lives. It's true, but it's dead on arrival. Compare that with: My grandmother has never sent an email, and she's the happiest person I know. Now I'm curious." },
        { who: "Host", line: "So it's all about the opening?" },
        { who: "Editor", line: "Not all. Structure still matters. Each paragraph should do one job, and subheadings help in longer pieces. And the voice should be consistent: friendly, a bit informal, but never sloppy. Contractions are fine; text-message spelling isn't." },
        { who: "Host", line: "And endings?" },
        { who: "Editor", line: "Weak endings are my second biggest frustration. Don't just repeat what you said. Leave the reader with something: a final image, a challenge, a question that stays in their head. The best endings often link back to the opening. If you started with your grandmother, finish with her too." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The editor usually reads every article to the end.", a: false },
            { s: "A common mistake is writing an essay instead of an article.", a: true },
            { s: "She thinks structure doesn't matter in articles.", a: false },
            { s: "Contractions are acceptable, but text-message spelling is not.", a: true },
            { s: "Good endings often link back to the opening.", a: true }
          ]
        },
        {
          type: "match", title: "The editor's advice",
          prompt: "Match each part of an article with the editor's advice.",
          pairs: [
            ["the opening", "grab the reader in the first two lines"],
            ["the paragraphs", "each one should do one job"],
            ["the voice", "friendly and consistent, never sloppy"],
            ["the ending", "leave the reader with something to think about"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a model magazine article. Notice how the writer engages the reader.",
      title: "Seven Days Without My Phone (and Why I Nearly Cried)",
      text: [
        { body: "Last month, I locked my phone in a drawer for seven days. On day two, I nearly broke the drawer." },
        { body: "Sound familiar? If you're anything like me, your phone is the first thing you touch in the morning and the last thing you see at night. I'd always told myself I could stop whenever I wanted. This experiment proved me spectacularly wrong." },
        { author: "The first 48 hours", body: "The early days were genuinely uncomfortable. I kept reaching into an empty pocket, and every silence felt like something I'd missed. Was my best friend angry with me? Had the world ended? (It hadn't. I checked the newspaper. On paper.)" },
        { author: "Something changes", body: "By day four, though, something strange happened. I started noticing things: the colour of the sky on my walk to class, the conversation of the people beside me on the bus, the plot of the film I was actually watching. My concentration, which I'd assumed was simply poor, turned out to be perfectly fine when nothing was interrupting it." },
        { author: "Back to reality", body: "So, did I throw my phone into a lake at the end of the week? Of course not. I need it for work, for maps, for my mum. But I've turned off almost all notifications, and the phone now sleeps in the kitchen, not beside my bed." },
        { body: "Try it for one weekend. You might be miserable for a day. You might also discover that the drawer was never the problem." }
      ],
      activities: [
        {
          type: "match", title: "Techniques",
          prompt: "Match each extract with the technique the writer uses.",
          pairs: [
            ["Last month, I locked my phone in a drawer…", "an anecdote as a hook"],
            ["Sound familiar?", "a rhetorical question"],
            ["(It hadn't. I checked the newspaper. On paper.)", "humour and short sentences"],
            ["Try it for one weekend.", "a call to action"],
            ["…the drawer was never the problem.", "an ending that links back to the opening"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The writer found the first two days easy.", a: false },
            { s: "The writer's concentration improved without interruptions.", a: true },
            { s: "At the end of the experiment, the writer stopped using a phone.", a: false },
            { s: "The writer now keeps the phone away from the bed.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice openings and titles, then write your own article.",
      activities: [
        {
          type: "rewrite", title: "Hook the reader",
          prompt: "Rewrite each boring opening as a rhetorical question starting with the words given.",
          items: [
            { q: "Many people find it difficult to wake up early. (Have you ever…)", a: ["Have you ever found it difficult to wake up early?", "Have you ever found it hard to wake up early?"] },
            { q: "Fast food is not good for your health. (Did you know…)", a: ["Did you know that fast food is not good for your health?", "Did you know fast food is not good for your health?", "Did you know that fast food isn't good for your health?"] },
            { q: "Learning a language is difficult for adults. (Why is it…)", a: ["Why is it so difficult for adults to learn a language?", "Why is it difficult for adults to learn a language?", "Why is it so hard for adults to learn a language?"] }
          ]
        },
        {
          type: "sort", title: "Good title or weak title?",
          prompt: "Sort the titles for an article about sleep.",
          bins: ["catchy", "weak"],
          items: [
            { text: "Why Your Brain Hates Your Alarm Clock", bin: 0 }, { text: "The Night I Slept for Fourteen Hours", bin: 0 }, { text: "Sleep: Your Secret Superpower", bin: 0 },
            { text: "Sleep", bin: 1 }, { text: "The Importance of Sleep in Modern Society", bin: 1 }, { text: "An Article About Sleeping", bin: 1 }
          ]
        },
        {
          type: "write", title: "Your article",
          prompt: "A magazine for young adults has asked readers to send articles with the title *One small change that made a big difference to my life*. Write your article (240–280 words). Give it your own catchy title, start with a strong hook, address the reader, use at least two rhetorical questions, organize it into clear paragraphs and finish with a memorable ending.",
          minWords: 240, maxWords: 280,
          model: "How a Ten-Minute Walk Saved My Sanity<br>Two years ago, I was the most stressed person in my faculty. I lived on coffee, slept five hours a night and answered emails during lectures. Then a doctor gave me the strangest prescription I've ever received: walk for ten minutes every morning. No phone. No music. Just walk.<br>I laughed. Ten minutes? What difference could that possibly make? But I was desperate, so I tried it.<br>The first week was boring. Painfully boring. My mind kept jumping to deadlines and messages, and I checked my watch every thirty seconds. By the second week, though, something shifted. I began noticing the man who sells tamales on the corner, the dog that barks at every bicycle, the way the volcano looks pink just after sunrise. I arrived at university calmer, and, to my surprise, I worked faster.<br>Why does something so simple work? Scientists say that gentle movement, daylight and a break from screens all reduce stress hormones. But for me, the real benefit was simpler: those ten minutes were the only part of the day that belonged to nobody but me.<br>I still walk every morning. Some days it's twenty minutes; on bad days, it's five. But I haven't skipped it once in two years, and I haven't felt that kind of exhaustion since.<br>So, here's my challenge for you. Tomorrow, before you open a single app, step outside and walk for ten minutes. You don't need special shoes or a plan. You just need to start. Who knows? It might be the shortest journey that takes you the furthest.",
          bank: ["Two years ago,…", "What difference could that possibly make?", "Painfully boring.", "By the second week, though,…", "Why does something so simple work?", "So, here's my challenge for you.", "Who knows?"],
          checklist: [
            "My **title** is catchy and specific.",
            "My **first two lines** hook the reader.",
            "I addressed the reader and used at least **two rhetorical questions**.",
            "My **ending** is memorable and links back to the start."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat with lively, expressive intonation.",
          items: [
            "Does that sound familiar?",
            "We've all been there.",
            "Then it happened. Silence.",
            "So, is it really worth it?",
            "Try it for one weekend.",
            "Your brain will thank you."
          ]
        },
        {
          type: "speak", title: "Record a podcast intro",
          prompt: "Many magazines now publish audio versions of their articles. Record the **spoken version** of your article from Writing activity 3, or a new one on a topic you choose (about three minutes). Use a hook, speak directly to your listener, include rhetorical questions and finish with a memorable line. Don't just read: perform it.",
          language: ["Have you ever…?", "Picture this:…", "If you're anything like me,…", "We've all been there.", "So, what happened next?", "Here's the thing:…", "Try it.", "Who knows?"],
          seconds: 210,
          checklist: ["start with a strong hook?", "speak directly to the listener?", "use rhetorical questions?", "finish with a memorable ending?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can explain the differences between an essay and an article.", review: "Explanation: article vs essay" },
    { can: "I can write a catchy title and a strong hook.", review: "Explanation: opening techniques; Writing activities 1 and 2" },
    { can: "I can address the reader and use rhetorical questions.", review: "Explanation: engaging the reader" },
    { can: "I can identify techniques writers use to engage readers.", review: "Reading activities" },
    { can: "I can write a lively, well-organized magazine article.", review: "Writing activity 3" },
    { can: "I can perform an engaging spoken version of an article.", review: "Speaking activity 2" }
  ]
};
