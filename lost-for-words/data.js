window.UNIT = {
  slug: "lost-for-words",
  number: 7,
  title: "Lost for Words",
  level: "C1",
  minutes: 80,
  speakers: { "Camila": "f", "Hugo": "m", "Host": "m", "Lexicographer": "f" },
  focus: ["negative and reversing prefixes: un-, dis-, in-, ir-, mis-, de-", "prefixes of attitude and degree: counter-, pro-, anti-, over-, under-, out-", "verb suffixes: -ify, -ise / -ize, -en", "noun suffixes: -ism, -ity, -ness, -hood, -ship", "the suffix -wise: careerwise, timewise"],

  presentation: {
    scene: "📚🔤🧩✍️",
    situation: "Camila and Hugo are preparing for a C1 exam. They are practising the word-formation section, where you change a word to fit a sentence.",
    warmup: {
      prompt: "How do you usually learn new words? Choose all that apply.",
      options: ["flashcards", "reading novels", "watching series", "apps", "word lists", "songs", "a vocabulary notebook", "guessing from context", "a dictionary", "podcasts", "talking to people", "word families"],
      response: "Learning word families multiplies your vocabulary: one root can give you five or six words. In this unit you'll learn the prefixes and suffixes that C1 exams test most."
    },
    dialogueTitle: "Word-formation practice",
    dialogue: [
      { who: "Hugo", line: "Number three: *The new rules were deeply ___. POPULAR.* So, *unpopular*?" },
      { who: "Camila", line: "Yes. And four: *Experts warned that the plan could be ___. PRODUCT.*" },
      { who: "Hugo", line: "*Unproductive?* No, wait. *Counterproductive.* It means it has the opposite effect." },
      { who: "Camila", line: "Exactly. Five: *We need to ___ the process. SIMPLE.*" },
      { who: "Hugo", line: "*Simplify.* I love those *-ify* verbs. *Clarify, justify, intensify.*" },
      { who: "Camila", line: "And the last one: *Timewise, the project is ___. MANAGE.*" },
      { who: "Hugo", line: "*Unmanageable.* Two affixes in one word. That's cruel." },
      { who: "Camila", line: "That's C1. *Timewise*, though, we're doing fine. Shall we try another set?" }
    ]
  },

  objectives: [
    "I can use negative and reversing prefixes accurately.",
    "I can use prefixes of attitude and degree such as counter-, over- and out-.",
    "I can form verbs and abstract nouns with common suffixes.",
    "I can work out the meaning of unfamiliar words from their parts."
  ],

  explanation: {
    vocabTitle: "Word families",
    vocab: [
      { word: "counterproductive", icon: "🔙" }, { word: "unmanageable", icon: "🌪️" }, { word: "misinterpret", icon: "❓" },
      { word: "outnumber", icon: "👥" }, { word: "overestimate", icon: "📈" }, { word: "underrated", icon: "💎" },
      { word: "irreplaceable", icon: "🏺" }, { word: "decentralize", icon: "🕸️" }, { word: "simplify", icon: "✂️" },
      { word: "strengthen", icon: "💪" }, { word: "authenticity", icon: "✔️" }, { word: "consumerism", icon: "🛍️" },
      { word: "parenthood", icon: "👶" }, { word: "ownership", icon: "🔑" }, { word: "career-wise", icon: "💼" }
    ],
    grammar: [
      {
        title: "Prefixes",
        head: ["Prefix", "Meaning", "Examples"],
        rows: [
          ["*un- / in- / im- / il- / ir-*", "not", "*unaware, inaccurate, impractical, illegal, irrelevant*"],
          ["*dis-*", "not / reverse", "*disagree, dishonest, disconnect*"],
          ["*mis-*", "wrongly", "*misunderstand, mislead, misjudge*"],
          ["*de-*", "remove / reverse", "*decentralize, devalue, deactivate*"],
          ["*counter-*", "against / opposite", "*counterproductive, counterargument, counterattack*"],
          ["*over- / under-*", "too much / too little", "*overestimate, underpaid, overcrowded*"],
          ["*out-*", "more / better than", "*outnumber, outlive, outperform*"],
          ["*pro- / anti-*", "in favour of / against", "*pro-democracy, anti-social*"]
        ],
        note: "*im-* goes before *m* and *p* (impossible), *il-* before *l* (illogical), *ir-* before *r* (irregular)."
      },
      {
        title: "Suffixes",
        head: ["Suffix", "Makes", "Examples"],
        rows: [
          ["*-ify / -ise (-ize) / -en*", "verbs", "*simplify, justify, modernize, prioritize, strengthen, widen*"],
          ["*-ity / -ness*", "abstract nouns (qualities)", "*authenticity, diversity, awareness, willingness*"],
          ["*-ism*", "nouns (beliefs, systems)", "*consumerism, optimism, tourism*"],
          ["*-hood / -ship*", "nouns (states, relationships)", "*childhood, parenthood, friendship, leadership*"],
          ["*-able / -ible*", "adjectives (can be done)", "*manageable, sustainable, accessible*"],
          ["*-wise* (informal)", "adverbs (regarding)", "*timewise, moneywise, career-wise*"]
        ]
      }
    ],
    watchOut: [
      ["The rules are unlogical.", "The rules are *illogical*."],
      ["We need to simplicate the process.", "We need to *simplify* the process."],
      ["She has a lot of leadness.", "She has strong *leadership* skills."],
      ["He misunderestimated the cost.", "He *underestimated* the cost."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the correct form of the word in capitals.",
      items: [
        "Punishing children for mistakes can be [[counterproductive]]. (PRODUCT)",
        "Her contribution to the team is simply [[irreplaceable]]. (REPLACE)",
        "We need to [[strengthen]] our relationship with local suppliers. (STRONG)",
        "Cultural [[diversity]] is one of the city's greatest assets. (DIVERSE)",
        "Many people [[underestimate|misjudge]] how long a project will take. (ESTIMATE)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an interview with a lexicographer, a person who writes dictionaries.",
      title: "How new words are born",
      script: [
        { who: "Host", line: "Every year dictionaries add hundreds of new words. Where do they come from?" },
        { who: "Lexicographer", line: "Very few are completely new. Most are built from parts we already have. Take *unfriend*. Nobody invented a new root; we just added a familiar prefix to a familiar word." },
        { who: "Host", line: "So prefixes and suffixes are doing most of the work." },
        { who: "Lexicographer", line: "Absolutely. Suffixes like *-ify* and *-ize* are incredibly productive. People say *gamify* or *monetize* and everyone understands immediately. The same goes for *-wise*: *budget-wise*, *weather-wise*. Some people dislike it, but it's undeniably useful." },
        { who: "Host", line: "How do you decide when a word deserves to go in the dictionary?" },
        { who: "Lexicographer", line: "We look at evidence. We need to see it used widely, by different people, over a period of time, and with a stable meaning. A word that's popular for a few months and then disappears doesn't make it." },
        { who: "Host", line: "Any advice for learners?" },
        { who: "Lexicographer", line: "Learn to take words apart. If you know that *mis-* means wrongly and *-able* means can be done, then a word like *unmistakable* is far less intimidating. You're not memorizing one word; you're understanding a system." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "Most new words are completely invented.", a: false },
            { s: "Unfriend was formed with a familiar prefix.", a: true },
            { s: "The lexicographer thinks the suffix -wise is useless.", a: false },
            { s: "A word must be used widely over time to enter the dictionary.", a: true },
            { s: "She advises learners to memorize words one by one.", a: false }
          ]
        },
        {
          type: "match", title: "Word parts",
          prompt: "Match the words mentioned with their meanings.",
          pairs: [
            ["unfriend", "remove someone from your contacts online"],
            ["gamify", "turn an activity into a game"],
            ["monetize", "make money from something"],
            ["unmistakable", "impossible to confuse with anything else"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about the English language's love of building words.",
      title: "Lego with letters",
      text: [
        { body: "English has often been compared to a set of building blocks. With a few hundred prefixes, suffixes and roots, speakers can construct words they have never heard before and still be understood instantly. When someone describes a meeting as *unproductive* or a politician as *untrustworthy*, nobody needs to reach for a dictionary." },
        { body: "This flexibility has a long history. Many of the most common affixes arrived with Latin and French, alongside the words they were attached to. Over the centuries, English speakers began to detach them and use them freely. The Latin suffix *-ize*, for example, now attaches to almost anything: we *prioritize* tasks, *digitize* archives and *weaponize* information." },
        { body: "Not everyone welcomes the results. Critics complain that corporate English has become overloaded with words like *incentivize* and *operationalize*, which can make simple ideas sound unnecessarily complicated. There is some justice in the complaint. A manager who announces that the company will *leverage synergies to optimize deliverables* has arguably said very little." },
        { body: "Yet word-building is also one of the language's great strengths. It allows speakers to express subtle differences: *uninterested* is not the same as *disinterested*, nor is *underrated* the same as *unrated*. For learners, the key is not to avoid these words but to understand their parts, so that they can decode them when reading and use them precisely when writing." }
      ],
      activities: [
        {
          type: "sort", title: "Which part of speech?",
          prompt: "Sort the words from the article by the part of speech the suffix creates.",
          bins: ["verb", "adjective", "noun"],
          items: [
            { text: "prioritize", bin: 0 }, { text: "digitize", bin: 0 }, { text: "incentivize", bin: 0 },
            { text: "untrustworthy", bin: 1 }, { text: "unproductive", bin: 1 },
            { text: "flexibility", bin: 2 }, { text: "consumerism", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "Many English affixes came from Latin and French.", a: true },
            { s: "The suffix -ize can only be used with Latin words.", a: false },
            { s: "The writer partly agrees with critics of corporate English.", a: true },
            { s: "The writer advises learners to avoid long words.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice word formation, then write a short text using a range of derived words.",
      activities: [
        {
          type: "gap", title: "Exam practice",
          prompt: "Complete the text with the correct form of the words in capitals.",
          items: [
            "Many young people feel [[underpaid]] and overworked. (PAY)",
            "The new law aims to [[modernize|modernise]] the education system. (MODERN)",
            "Retired people now [[outnumber]] students in some towns. (NUMBER)",
            "Her [[willingness]] to listen made her a great manager. (WILLING)",
            "The instructions were completely [[incomprehensible]]. (COMPREHEND)",
            "[[Career-wise|Careerwise]], moving abroad was the best decision I ever made. (CAREER)"
          ]
        },
        {
          type: "match", title: "Prefix meanings",
          prompt: "Match each word with its meaning.",
          pairs: [
            ["misjudge", "form a wrong opinion"],
            ["outlive", "live longer than"],
            ["overcrowded", "with too many people"],
            ["deactivate", "switch off or make inactive"],
            ["disconnect", "separate or unplug"]
          ]
        },
        {
          type: "write", title: "A changing world",
          prompt: "Write a short article (220–260 words) for a university magazine about how **one** area of life has changed in the last twenty years (for example, work, shopping, dating or education). Use at least **eight** words formed with prefixes or suffixes from this unit and underline them mentally as you check.",
          minWords: 220, maxWords: 260,
          model: "Twenty years ago, shopping meant leaving the house. Today, for millions of people, it means picking up a phone. The digitization of retail has transformed not only how we buy, but how we think about buying.<br>The most obvious change is convenience. Online platforms have simplified the process to the point where a purchase takes seconds, and delivery is often faster than a trip to the shops. Small towns that were once underserved now have access to the same products as big cities.<br>However, this convenience has a cost. Critics argue that easy access has intensified consumerism, encouraging us to buy items we neither need nor value. Many people underestimate how much they spend when payment is just one click away, and the environmental impact of millions of individual deliveries is considerable.<br>The change has also affected employment. Large warehouses now outnumber traditional department stores in many regions, and workers frequently describe themselves as overworked and underpaid. At the same time, entrepreneurs have found new opportunities: anyone with a good idea can now set up an online shop with very little investment.<br>Perhaps the most interesting shift is psychological. Shopping used to be a social activity; for many, it is now a solitary one. Retailers are trying to counteract this by creating online communities and live events.<br>Moneywise, we may be saving. Socially and environmentally, however, the true cost of our new habits is still being calculated.",
          bank: ["digitization", "simplify", "intensify", "underestimate", "outnumber", "overworked", "underpaid", "consumerism", "counteract", "moneywise"],
          checklist: [
            "I described a **clear change** with causes and effects.",
            "I used at least **eight** words with prefixes or suffixes.",
            "I used both **positive** and **negative** prefixes correctly.",
            "My article has an engaging **beginning** and **ending**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice where the stress falls in long words.",
          items: [
            "That plan could be counterproductive.",
            "Her work is simply irreplaceable.",
            "We need to simplify the process.",
            "Many people underestimate the cost.",
            "Timewise, the project is unmanageable.",
            "Women now outnumber men at university."
          ]
        },
        {
          type: "speak", title: "Overrated or underrated?",
          prompt: "Record yourself for about three minutes. Talk about three things you think are **overrated** and two things you think are **underrated** (for example, places, habits, technologies, foods or jobs). Justify each opinion. Use as many words with prefixes and suffixes as you can.",
          language: ["… is hugely overrated because…", "… is seriously underrated", "It's counterproductive to…", "People tend to overestimate…", "It's irreplaceable", "Moneywise / timewise,…", "It helps to simplify…"],
          seconds: 210,
          checklist: ["talk about five things in total?", "justify each opinion?", "use at least six derived words?", "pronounce long words with the correct stress?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can choose the correct negative prefix (un-, in-, im-, il-, ir-, dis-).", review: "Explanation: prefixes (note)" },
    { can: "I can use prefixes like counter-, mis-, over-, under- and out-.", review: "Explanation: prefixes; Writing activity 2" },
    { can: "I can form verbs with -ify, -ize and -en.", review: "Explanation: suffixes" },
    { can: "I can form abstract nouns with -ity, -ness, -ism, -hood and -ship.", review: "Explanation: suffixes; Writing activity 1" },
    { can: "I can work out the meaning of new words from their parts.", review: "Listening and Reading activities" },
    { can: "I can use a wide range of derived words in writing and speech.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
