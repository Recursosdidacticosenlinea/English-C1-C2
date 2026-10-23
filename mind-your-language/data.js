window.UNIT = {
  slug: "mind-your-language",
  number: 6,
  title: "Mind Your Language",
  level: "C1",
  minutes: 80,
  speakers: { "Ximena": "f", "Rodrigo": "m", "Host": "f", "Linguist": "m" },
  focus: ["formal and informal register", "phrasal verbs and their formal equivalents: find out → ascertain", "formal features: passive, nominalization, no contractions", "informal features: ellipsis, vague language, contractions", "vocabulary of register: tone, jargon, slang, colloquial"],

  presentation: {
    scene: "👔🧢✉️💬",
    situation: "Ximena works in human resources. Her new colleague Rodrigo has written his first email to a client, and she is helping him make it sound more professional.",
    warmup: {
      prompt: "In which situations do you change the way you speak? Choose all that apply.",
      options: ["talking to a boss", "texting friends", "a job interview", "talking to grandparents", "writing to a university", "chatting with classmates", "speaking to a doctor", "posting on social media", "a phone call to a bank", "talking to children", "a presentation", "complaining in a shop"],
      response: "We all switch register depending on who we're talking to. At C1 level you're expected to do it deliberately and accurately."
    },
    dialogueTitle: "Too casual?",
    dialogue: [
      { who: "Rodrigo", line: "Could you look over this email before I send it? It's to the new client." },
      { who: "Ximena", line: "Sure. Hmm. *Hi guys, just wanted to check if you got the stuff we sent.* That's a bit too casual." },
      { who: "Rodrigo", line: "Really? I thought it sounded friendly." },
      { who: "Ximena", line: "Friendly is fine, but this is a first contact. Try *Dear Ms. Torres, I am writing to confirm that you have received the documents we sent.*" },
      { who: "Rodrigo", line: "OK. And here, where I say *we need to find out what went wrong*?" },
      { who: "Ximena", line: "*We need to establish the cause of the problem*, or *ascertain what went wrong*. Formal writing prefers single verbs to phrasal verbs." },
      { who: "Rodrigo", line: "And I shouldn't say *let me know ASAP*, should I?" },
      { who: "Ximena", line: "Not to a client. *I would be grateful if you could reply at your earliest convenience.* But between us? ASAP is absolutely fine." }
    ]
  },

  objectives: [
    "I can recognize the features of formal and informal register.",
    "I can replace common phrasal verbs with formal equivalents.",
    "I can rewrite a text to change its register appropriately.",
    "I can choose the right tone for different readers and situations."
  ],

  explanation: {
    vocabTitle: "Talking about register",
    vocab: [
      { word: "register", icon: "🎚️" }, { word: "tone", icon: "🎵" }, { word: "formal", icon: "👔" },
      { word: "informal", icon: "🧢" }, { word: "colloquial", icon: "💬" }, { word: "slang", icon: "🛹" },
      { word: "jargon", icon: "⚙️" }, { word: "neutral", icon: "⚪" }, { word: "polite", icon: "🙇" },
      { word: "blunt", icon: "🔨" }, { word: "stilted", icon: "🤖" }, { word: "chatty", icon: "🗨️" },
      { word: "audience", icon: "👥" }, { word: "code-switching", icon: "🔀" }, { word: "appropriate", icon: "✅" }
    ],
    grammar: [
      {
        title: "Phrasal verbs and formal equivalents",
        intro: "Phrasal verbs are perfectly correct, but formal writing often prefers a single verb of Latin origin.",
        head: ["Informal / neutral", "Formal", "Example (formal)"],
        rows: [
          ["*find out*", "*ascertain, discover, establish*", "*We need to ascertain the cause.*"],
          ["*put off*", "*postpone, defer*", "*The meeting has been postponed.*"],
          ["*look into*", "*investigate, examine*", "*We will investigate the matter.*"],
          ["*get rid of*", "*eliminate, dispose of*", "*The aim is to eliminate waste.*"],
          ["*go up / go down*", "*increase / decrease, rise / decline*", "*Prices have increased sharply.*"],
          ["*set up*", "*establish*", "*The company was established in 1990.*"],
          ["*make up for*", "*compensate for*", "*Nothing can compensate for the delay.*"]
        ]
      },
      {
        title: "Features of each register",
        head: ["Feature", "Informal", "Formal"],
        rows: [
          ["contractions", "*We can't come.*", "*We are unable to attend.*"],
          ["vocabulary", "*get, a lot of, stuff, kids*", "*obtain, a considerable number of, items, children*"],
          ["ellipsis", "*Sounds good. See you then.*", "*That sounds ideal. I look forward to seeing you.*"],
          ["personal vs impersonal", "*We made a mistake.*", "*An error was made.*"],
          ["verbs vs nouns", "*If you pay late…*", "*Late payment will result in…*"],
          ["direct vs indirect requests", "*Send it today.*", "*I would be grateful if you could send it today.*"]
        ],
        note: "Too formal can be a problem too: writing *I would be most grateful* to a close friend sounds cold or sarcastic."
      }
    ],
    watchOut: [
      ["Dear Sir, I wanna complain about the service.", "Dear Sir, I *wish to* complain about the service."],
      ["Hey Professor, what's up with my grade?", "Dear Professor Ruiz, I am writing *with regard to* my grade."],
      ["We will look into the problem ASAP.", "We will *investigate* the problem *as soon as possible*."],
      ["(To a friend) I would be delighted to accept your kind invitation.", "(To a friend) *I'd love to come!*"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write a formal one-word verb for the phrasal verb in brackets.",
      items: [
        "The concert has been [[postponed|deferred]] (put off) until next month.",
        "The police are [[investigating|examining]] (looking into) the incident.",
        "We are trying to [[ascertain|establish|discover|determine]] (find out) who was responsible.",
        "The company was [[established|founded]] (set up) twenty years ago.",
        "Unemployment has [[decreased|declined|fallen|dropped]] (gone down) this year."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio interview with a linguist about register and code-switching.",
      title: "Switching codes",
      script: [
        { who: "Host", line: "We all speak differently to our boss and our best friend. Is that a kind of hypocrisy?" },
        { who: "Linguist", line: "Not at all. It's a skill. Linguists call it style-shifting or, when people move between languages or dialects, code-switching. Every competent speaker does it, usually without thinking." },
        { who: "Host", line: "What exactly changes when we shift?" },
        { who: "Linguist", line: "Almost everything. Vocabulary, of course: kids becomes children, get becomes receive. But also grammar. Formal English uses more passives and more nouns. Informal English drops words: Coming tonight? instead of Are you coming tonight?" },
        { who: "Host", line: "And pronunciation?" },
        { who: "Linguist", line: "Yes, people tend to pronounce words more fully in formal situations. And intonation changes too. We often sound more energetic and varied with friends." },
        { who: "Host", line: "Is it harder for language learners?" },
        { who: "Linguist", line: "It's one of the last things to develop. Learners often have one register, usually a slightly formal, textbook style. The goal at advanced level isn't to sound formal all the time. It's to have a range, and to know which part of the range a situation requires. Being too formal can be just as inappropriate as being too casual." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The linguist thinks changing register is a kind of hypocrisy.", a: false },
            { s: "Formal English tends to use more passives and nouns.", a: true },
            { s: "Informal English often omits words.", a: true },
            { s: "Learners usually develop several registers very early.", a: false },
            { s: "Being too formal can also be inappropriate.", a: true }
          ]
        },
        {
          type: "match", title: "Informal to formal",
          prompt: "Match the informal words from the interview with their formal equivalents.",
          pairs: [
            ["kids", "children"],
            ["get (a letter)", "receive"],
            ["Coming tonight?", "Are you coming tonight?"],
            ["a lot of", "a considerable amount of"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read two messages about the same situation, written in different registers.",
      title: "Two messages, one problem",
      text: [
        { author: "Message A · to a friend", body: "Hey Marta! Bad news, I'm afraid. The trip's off. The hotel messed up our booking and they can't fit us in till next month. Gutted! I'm trying to sort out a refund, but they're being a pain about it. Fancy doing something else that weekend instead? Let me know. x" },
        { author: "Message B · to the hotel", body: "Dear Sir or Madam,<br>I am writing to express my dissatisfaction with the cancellation of my reservation for the weekend of 14–16 March. I was informed yesterday that, owing to an administrative error on the part of the hotel, no rooms would be available on those dates.<br>I would therefore be grateful if you could arrange a full refund of the deposit of 2,400 pesos at your earliest convenience. I would also appreciate an explanation of how this error occurred, so that I can be confident it will not be repeated should I wish to book with you in future.<br>I look forward to your prompt reply.<br>Yours faithfully,<br>Paula Herrera" }
      ],
      activities: [
        {
          type: "match", title: "Same meaning, different register",
          prompt: "Match the informal phrases from Message A with their formal equivalents in Message B.",
          pairs: [
            ["The trip's off.", "the cancellation of my reservation"],
            ["The hotel messed up our booking.", "an administrative error on the part of the hotel"],
            ["I'm trying to sort out a refund.", "I would be grateful if you could arrange a full refund."],
            ["Let me know.", "I look forward to your prompt reply."]
          ]
        },
        {
          type: "sort", title: "Formal or informal?",
          prompt: "Sort the features you can find in the messages.",
          bins: ["Message A (informal)", "Message B (formal)"],
          items: [
            { text: "contractions (I'm, can't)", bin: 0 }, { text: "phrasal verbs (mess up, sort out)", bin: 0 }, { text: "emotional slang (Gutted!)", bin: 0 },
            { text: "indirect requests (I would be grateful if…)", bin: 1 }, { text: "nouns instead of verbs (cancellation)", bin: 1 }, { text: "passive voice (I was informed)", bin: 1 }, { text: "set closing (Yours faithfully)", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice changing register, then rewrite a message for a different reader.",
      activities: [
        {
          type: "rewrite", title: "Make it formal",
          prompt: "Rewrite each sentence in a formal register. Use the word in brackets.",
          items: [
            { q: "We've put off the meeting till Friday. (postponed)", a: ["The meeting has been postponed until Friday.", "We have postponed the meeting until Friday."] },
            { q: "Can you send me the stuff today? (grateful)", a: ["I would be grateful if you could send me the documents today.", "I would be grateful if you could send me the items today.", "I would be grateful if you could send me the materials today."] },
            { q: "We're going to look into what went wrong. (investigate)", a: ["We will investigate what went wrong.", "We are going to investigate what went wrong.", "We will investigate the cause of the problem."] },
            { q: "Sorry we can't come. (unable)", a: ["We regret that we are unable to attend.", "Unfortunately, we are unable to attend.", "We apologize that we are unable to attend.", "I regret that we are unable to attend."] }
          ]
        },
        {
          type: "gap", title: "Make it informal",
          prompt: "Complete the informal version with one word in each gap.",
          items: [
            "We regret to inform you that the event has been cancelled. → Sorry, the event's [[off|cancelled]].",
            "Please do not hesitate to contact me. → Just [[give|drop]] me a call.",
            "I look forward to seeing you. → [[See]] you soon!",
            "I would be delighted to attend. → I'd [[love]] to come!"
          ]
        },
        {
          type: "write", title: "Change the register",
          prompt: "Your friend sent you this message: *Hey! The uni messed up my enrolment and now I can't get into the course I need. They're not answering emails. Can you help me write to them?* Write a **formal email** (220–260 words) from your friend to the Head of Admissions explaining the problem, its consequences and what action is requested. Then add **one informal sentence** to your friend at the end, after a line saying *Note to my friend:*",
          minWords: 220, maxWords: 260,
          model: "Dear Dr. Salinas,<br>I am writing with regard to an error in my enrolment for the current semester, which has prevented me from registering for a compulsory course in my degree programme.<br>On 5 August, I completed the online enrolment process and received an automatic confirmation that I had been registered for Advanced Statistics, Group 2. However, when I attempted to access the course platform last week, I discovered that my registration had been cancelled without explanation. I have since contacted the Admissions Office by email on three occasions, but I have not yet received a reply.<br>This situation is causing me considerable concern. Advanced Statistics is a prerequisite for two courses I am required to take next year, and if I am unable to complete it this semester, my graduation is likely to be delayed by at least six months. Furthermore, the deadline for late registration is this Friday, which leaves very little time to resolve the matter.<br>I would therefore be grateful if you could investigate the cause of the error and reinstate my registration in Group 2 as soon as possible. I have attached a copy of the original confirmation for your reference.<br>Thank you for your attention to this matter. I look forward to your prompt reply.<br>Yours sincerely,<br>Daniela Ortega<br>Student ID: 202145678<br><br>Note to my friend: There you go! Fingers crossed they sort it out before Friday.",
          bank: ["I am writing with regard to…", "I discovered that…", "This situation is causing me considerable concern.", "I would therefore be grateful if you could…", "at your earliest convenience", "I have attached…", "I look forward to your prompt reply.", "Yours sincerely,"],
          checklist: [
            "The email has a formal **greeting** and **closing**.",
            "I used **no contractions** and few phrasal verbs.",
            "I explained the **problem**, the **consequences** and the **request**.",
            "My final note to my friend is clearly **informal**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice how formal speech sounds fuller and slower.",
          items: [
            "I am writing to confirm the booking.",
            "We will investigate the matter immediately.",
            "The meeting has been postponed until Friday.",
            "I would be grateful for a prompt reply.",
            "Sorry, the trip's off. Gutted!",
            "Being too formal can sound cold."
          ]
        },
        {
          type: "speak", title: "Two calls",
          prompt: "Record two short phone messages about the same situation: you have to cancel a dinner you organized for next Saturday. **Message 1** (about 90 seconds): to your best friend. **Message 2** (about 90 seconds): to the manager of the restaurant where you booked a private room for twenty people. Make the difference in register very clear.",
          language: ["Hey, it's me…", "Bad news, I'm afraid…", "Fancy… instead?", "Good afternoon, this is… calling about…", "I regret to inform you that…", "I would be grateful if you could…", "I apologize for any inconvenience."],
          seconds: 210,
          checklist: ["record both messages?", "use contractions and informal phrases in message 1?", "use formal, indirect language in message 2?", "give the necessary details in both?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can identify the features of formal and informal register.", review: "Explanation: features of each register; Reading activity 2" },
    { can: "I can replace phrasal verbs with formal equivalents.", review: "Explanation: phrasal verbs and formal equivalents" },
    { can: "I can rewrite informal sentences in a formal style.", review: "Writing activity 1" },
    { can: "I can make formal language sound natural and informal when needed.", review: "Writing activity 2" },
    { can: "I can understand a discussion about language and style.", review: "Listening activities" },
    { can: "I can adapt my writing and speaking to different audiences.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
