window.UNIT = {
  slug: "bitterly-disappointed",
  number: 9,
  title: "Bitterly Disappointed",
  level: "C1",
  minutes: 80,
  speakers: { "Daniela": "f", "Emilio": "m", "Host": "f", "Editor": "m" },
  focus: ["adverb + adjective collocations: bitterly disappointed, highly unlikely", "intensifiers with feelings: deeply offended, painfully shy, acutely aware", "collocations with certainty: highly likely, fully aware, entirely possible", "adverb + verb collocations: strongly recommend, sincerely apologize", "why collocations matter for sounding natural"],

  presentation: {
    scene: "🎭🏆😞📰",
    situation: "Daniela and Emilio have just come out of the final of a national theatre competition. Their friend's group came second, and everyone has strong feelings about the result.",
    warmup: {
      prompt: "Which of these would leave you bitterly disappointed? Choose all that apply.",
      options: ["failing an exam", "a cancelled concert", "a bad haircut", "losing a final", "a broken promise", "a disappointing film", "missing a flight", "not getting a job", "a lost phone", "bad weather on holiday", "a friend forgetting your birthday", "an expensive meal that tastes awful"],
      response: "Notice the phrase *bitterly disappointed*. We don't say *strongly disappointed* or *highly disappointed*. Choosing the right adverb is what makes your English sound natural at C1."
    },
    dialogueTitle: "After the final",
    dialogue: [
      { who: "Daniela", line: "I can't believe they came second. Sofía must be *bitterly disappointed*." },
      { who: "Emilio", line: "She was *visibly upset*, wasn't she? Honestly, I thought their performance was *utterly brilliant*." },
      { who: "Daniela", line: "So did I. The winners were good, but it's *highly unlikely* anyone will remember their play next year." },
      { who: "Emilio", line: "The judges seemed *deeply divided*. I heard one of them was *strongly opposed* to the decision." },
      { who: "Daniela", line: "It's *entirely possible* they'll appeal. Sofía's *painfully aware* that this was their last chance." },
      { who: "Emilio", line: "Well, I'm *fully convinced* they'll be back. They're *ridiculously talented*." },
      { who: "Daniela", line: "Let's take her out for dinner. I *strongly suspect* she won't want to talk about theatre." },
      { who: "Emilio", line: "I'd *sincerely hope* not. Tonight we talk about anything else." }
    ]
  },

  objectives: [
    "I can use common adverb + adjective collocations to express feelings precisely.",
    "I can use collocations of certainty such as highly unlikely and entirely possible.",
    "I can use adverb + verb collocations such as strongly recommend.",
    "I can recognize and avoid unnatural combinations."
  ],

  explanation: {
    vocabTitle: "Strong collocations",
    vocab: [
      { word: "bitterly disappointed", icon: "😞" }, { word: "deeply offended", icon: "😤" }, { word: "painfully shy", icon: "🙈" },
      { word: "acutely aware", icon: "🔎" }, { word: "highly unlikely", icon: "🎲" }, { word: "entirely possible", icon: "✅" },
      { word: "fully aware", icon: "👁️" }, { word: "utterly ridiculous", icon: "🤪" }, { word: "blissfully unaware", icon: "😇" },
      { word: "wildly inaccurate", icon: "🎯" }, { word: "strongly recommend", icon: "👍" }, { word: "sincerely apologize", icon: "🙏" },
      { word: "firmly believe", icon: "🪨" }, { word: "vaguely remember", icon: "🌫️" }, { word: "seriously consider", icon: "🤔" }
    ],
    grammar: [
      {
        title: "Adverb + adjective: feelings and reactions",
        intro: "Some adverbs combine naturally with some adjectives and not with others. These pairs are called **collocations**, and you learn them as chunks.",
        head: ["Adverb", "Typical adjectives", "Example"],
        rows: [
          ["*bitterly*", "disappointed, cold, opposed, regret", "*I was bitterly disappointed with the result.*"],
          ["*deeply*", "offended, moved, concerned, divided, rooted", "*She was deeply moved by the letter.*"],
          ["*painfully*", "shy, slow, aware, obvious", "*It was painfully obvious he was lying.*"],
          ["*acutely*", "aware, embarrassed, conscious", "*I was acutely aware of everyone watching.*"],
          ["*blissfully*", "unaware, happy, ignorant", "*He was blissfully unaware of the problem.*"],
          ["*utterly / totally*", "ridiculous, exhausted, convinced, useless", "*The plan is utterly ridiculous.*"]
        ]
      },
      {
        title: "Certainty and probability",
        head: ["Collocation", "Example"],
        rows: [
          ["*highly likely / unlikely / probable*", "*It's highly unlikely that they'll win.*"],
          ["*entirely / perfectly possible*", "*It's entirely possible we made a mistake.*"],
          ["*fully aware / fully convinced*", "*We're fully aware of the risks.*"],
          ["*virtually impossible / certain*", "*It's virtually impossible to get tickets.*"],
          ["*widely believed / reported / known*", "*It is widely believed that…*"]
        ],
        note: "We say *highly likely*, not *strongly likely*; *fully aware*, not *highly aware*; *bitterly disappointed*, not *strongly disappointed*."
      },
      {
        title: "Adverb + verb",
        head: ["Collocation", "Example"],
        rows: [
          ["*strongly recommend / suspect / oppose / disagree*", "*I strongly recommend the museum.*"],
          ["*firmly believe / reject*", "*I firmly believe education should be free.*"],
          ["*sincerely apologize / hope*", "*We sincerely apologize for the delay.*"],
          ["*vaguely / distinctly remember*", "*I distinctly remember locking the door.*"],
          ["*seriously consider / doubt*", "*I'm seriously considering moving abroad.*"]
        ]
      }
    ],
    watchOut: [
      ["I was strongly disappointed.", "I was *bitterly / deeply* disappointed."],
      ["It's strongly unlikely.", "It's *highly* unlikely."],
      ["We are highly aware of the problem.", "We are *fully / acutely* aware of the problem."],
      ["I deeply recommend this book.", "I *strongly / highly* recommend this book."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each collocation with one adverb.",
      items: [
        "The fans were [[bitterly|deeply]] disappointed when the concert was cancelled.",
        "It's [[highly]] unlikely that the price will go down.",
        "She was [[blissfully]] unaware that everyone was watching her.",
        "I [[strongly|highly]] recommend booking in advance.",
        "I [[vaguely]] remember meeting him, but I can't recall his name."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a dictionary editor talking about collocations and why they matter.",
      title: "Words that keep company",
      script: [
        { who: "Host", line: "You work on a collocations dictionary. What exactly is a collocation?" },
        { who: "Editor", line: "It's simply a combination of words that occurs more often than you'd expect by chance. Native speakers say heavy rain, not strong rain, and bitterly cold, not severely cold. There's no logical reason; it's just how the language has developed." },
        { who: "Host", line: "Why should learners care?" },
        { who: "Editor", line: "Because collocations are what make speech sound natural. A learner can produce a perfectly grammatical sentence that still sounds odd, like I was strongly disappointed. Nobody will misunderstand, but they'll notice." },
        { who: "Host", line: "How do you decide what goes in the dictionary?" },
        { who: "Editor", line: "We use a corpus, a database of billions of words of real English. We can see, for example, that deeply is very frequently followed by concerned, moved and divided, and that highly is followed by likely, unlikely and recommended." },
        { who: "Host", line: "Any tips for learning them?" },
        { who: "Editor", line: "Notice them when you read, and record them as chunks, not single words. Don't write down disappointed. Write down bitterly disappointed with the result. And when you're unsure, a quick search in a corpus or a good learner's dictionary will tell you in seconds which combinations people actually use." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "Collocations follow clear logical rules.", a: false },
            { s: "A sentence can be grammatical but still sound unnatural.", a: true },
            { s: "A corpus is a database of real language.", a: true },
            { s: "The editor advises recording single words, not chunks.", a: false }
          ]
        },
        {
          type: "sort", title: "Which adverb?",
          prompt: "According to the editor, which adverb collocates with each word?",
          bins: ["deeply", "highly"],
          items: [
            { text: "concerned", bin: 0 }, { text: "moved", bin: 0 }, { text: "divided", bin: 0 },
            { text: "likely", bin: 1 }, { text: "unlikely", bin: 1 }, { text: "recommended", bin: 1 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read two short reviews of the same restaurant.",
      title: "La Terraza: two views",
      text: [
        { author: "Review 1 ★★★★★", body: "I strongly recommend La Terraza to anyone who appreciates good food. The setting is utterly charming, the staff are genuinely friendly and the mole is quite simply the best I have ever tasted. I was deeply moved when the chef came out to explain the recipe his grandmother had taught him. It is highly likely that I will be back before the end of the month." },
        { author: "Review 2 ★★", body: "I had read so many glowing reviews that I was bitterly disappointed by my visit. We waited forty minutes for a table, despite having a reservation, and the waiter seemed blissfully unaware of our existence. The food was perfectly acceptable, but it was painfully obvious that the kitchen was struggling. In fairness, the manager sincerely apologized and did not charge us for dessert. It is entirely possible that we came on a bad night, but at these prices I would think seriously before returning." }
      ],
      activities: [
        {
          type: "match", title: "Find the collocations",
          prompt: "Match the adverbs with the adjectives or verbs they combine with in the reviews.",
          pairs: [
            ["utterly", "charming"],
            ["genuinely", "friendly"],
            ["painfully", "obvious"],
            ["sincerely", "apologized"],
            ["perfectly", "acceptable"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The first reviewer is very likely to return.", a: true },
            { s: "The second reviewer had low expectations before going.", a: false },
            { s: "The second reviewer thought the food was terrible.", a: false },
            { s: "The second reviewer accepts the visit may have been unusual.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice choosing natural collocations, then write a review.",
      activities: [
        {
          type: "rewrite", title: "Make it natural",
          prompt: "Each sentence has an unnatural collocation. Rewrite it using the adverb in brackets.",
          items: [
            { q: "I was strongly disappointed with my grade. (bitterly)", a: ["I was bitterly disappointed with my grade."] },
            { q: "It's strongly unlikely to rain. (highly)", a: ["It's highly unlikely to rain.", "It is highly unlikely to rain."] },
            { q: "She is very conscious of her accent. (acutely)", a: ["She is acutely conscious of her accent.", "She's acutely conscious of her accent."] },
            { q: "I really remember that day. (distinctly)", a: ["I distinctly remember that day."] }
          ]
        },
        {
          type: "gap", title: "Choose the adverb",
          prompt: "Complete with one adverb from the box.",
          bank: ["deeply", "virtually", "widely", "firmly", "utterly", "seriously"],
          items: [
            "It is [[widely]] believed that the painting is a fake.",
            "I [[firmly]] believe that everyone deserves a second chance.",
            "After the marathon I was [[utterly]] exhausted.",
            "It's [[virtually]] impossible to find a flat in the centre.",
            "Many residents are [[deeply]] concerned about the new airport.",
            "I'm [[seriously]] considering changing careers."
          ]
        },
        {
          type: "write", title: "A review",
          prompt: "Write a review (220–260 words) of a restaurant, film, concert, hotel or product that either **impressed you enormously** or **bitterly disappointed you**. Describe your experience, give specific details, and make a recommendation. Use at least **eight** adverb collocations from this unit.",
          minWords: 220, maxWords: 260,
          model: "When a friend gave me tickets to see a famous comedian in Mexico City, I was absolutely thrilled. I had watched all his shows online and was fully convinced it would be the best night of the year. Sadly, I left the theatre bitterly disappointed.<br>The problems began before he even appeared. The show started almost an hour late, and the organizers seemed blissfully unaware that the audience was getting restless. When the comedian finally walked on stage, it was painfully obvious that he had not prepared. He read several jokes from his phone, and many of them were the same ones he had used in videos I had seen years ago.<br>In fairness, there were moments of genuine brilliance. A section about his grandmother's attempts to use social media was utterly hilarious, and the whole audience was in tears of laughter. It is entirely possible that he was simply having a bad night; even the best performers do.<br>However, at nearly two thousand pesos a ticket, the audience was entitled to expect more. Several people around me were deeply offended by a series of jokes about immigrants that felt lazy and unkind rather than clever.<br>Would I recommend the show? I am afraid I would not. If you are a fan, I strongly suggest watching his older material online instead. It is highly unlikely that the live show will match your expectations, and you will save yourself both money and a very long evening.",
          bank: ["bitterly disappointed", "fully convinced", "blissfully unaware", "painfully obvious", "utterly hilarious", "entirely possible", "deeply offended", "strongly recommend", "highly unlikely"],
          checklist: [
            "I described the experience with **specific details**.",
            "I used at least **eight** adverb collocations.",
            "I included both **positive** and **negative** points.",
            "I ended with a clear **recommendation**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Stress both the adverb and the adjective.",
          items: [
            "I was bitterly disappointed with the result.",
            "It's highly unlikely that they'll win.",
            "She was blissfully unaware of the problem.",
            "It was painfully obvious he was lying.",
            "I strongly recommend booking in advance.",
            "I distinctly remember locking the door."
          ]
        },
        {
          type: "speak", title: "Highs and lows",
          prompt: "Record yourself for about three minutes. Talk about **one moment** when you were bitterly disappointed and **one moment** when you were deeply moved or utterly delighted. Describe what happened and how you felt. Use as many collocations from the unit as you can.",
          language: ["I was bitterly disappointed when…", "I was deeply moved by…", "It was painfully obvious that…", "I was blissfully unaware that…", "I was acutely aware of…", "It was utterly…", "I distinctly remember…", "It's highly unlikely I'll ever forget…"],
          seconds: 210,
          checklist: ["describe both moments?", "use at least six collocations?", "explain your feelings in detail?", "avoid unnatural combinations like strongly disappointed?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use adverb + adjective collocations for feelings.", review: "Explanation: feelings and reactions" },
    { can: "I can use collocations of certainty like highly unlikely.", review: "Explanation: certainty and probability" },
    { can: "I can use adverb + verb collocations like strongly recommend.", review: "Explanation: adverb + verb; Writing activity 2" },
    { can: "I can correct unnatural collocations.", review: "Explanation: Watch out!; Writing activity 1" },
    { can: "I can notice collocations when I read and listen.", review: "Listening and Reading activities" },
    { can: "I can use collocations naturally in a review and in speech.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
