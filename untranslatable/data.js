window.UNIT = {
  slug: "untranslatable",
  number: 37,
  title: "Untranslatable",
  level: "C2",
  minutes: 90,
  speakers: { "Lucía": "f", "Kenji": "m", "Host": "f", "Linguist": "m" },
  focus: ["loanwords in English: schadenfreude, déjà vu, zeitgeist, wanderlust", "compounding: noun + noun, adjective + noun, neoclassical compounds", "abstract nouns for complex experiences: nostalgia, ambivalence, serendipity", "explaining a concept precisely: It refers to…, It captures the feeling of…", "language and identity: code-switching, heritage languages, linguistic relativity"],

  presentation: {
    scene: "🌍🗣️📚💭",
    situation: "Lucía is from Mexico and Kenji is from Japan. Both are studying in Edinburgh. Over dinner, they discover that each of their languages has words the other one lacks.",
    warmup: {
      prompt: "Which of these English words come from other languages? Choose all you think are loanwords.",
      options: ["chocolate", "tomato", "avocado", "tsunami", "kindergarten", "ballet", "karaoke", "shampoo", "safari", "cafe", "algebra", "robot"],
      response: "All of them! English has borrowed words from hundreds of languages. In this unit you'll explore how languages express complex experiences, and what this tells us about identity."
    },
    dialogueTitle: "Words we don't have",
    dialogue: [
      { who: "Kenji", line: "In Japanese we have *komorebi*. It refers to sunlight filtering through the leaves of trees." },
      { who: "Lucía", line: "That's beautiful. English would need a whole sentence for that." },
      { who: "Kenji", line: "Exactly. What about Spanish? Is there anything English can't say?" },
      { who: "Lucía", line: "*Sobremesa.* It captures the time you spend talking at the table after a meal. Not eating, just enjoying the company." },
      { who: "Kenji", line: "English borrows so much. *Schadenfreude*, *déjà vu*, *zeitgeist*. Why not *sobremesa*?" },
      { who: "Lucía", line: "Maybe one day. Although I'm not sure the British would practise it. They leave the table so quickly!" },
      { who: "Kenji", line: "Do you think having a word changes how you feel things?" },
      { who: "Lucía", line: "Perhaps it doesn't change the feeling, but it makes you notice it. When I speak English, I sometimes feel like a slightly different person." }
    ]
  },

  objectives: [
    "I can recognize and use common loanwords in English.",
    "I can understand and form different types of compound words.",
    "I can explain complex concepts and untranslatable words precisely.",
    "I can discuss the relationship between language, culture and identity."
  ],

  explanation: {
    vocabTitle: "Borrowed and complex words",
    vocab: [
      { word: "schadenfreude", icon: "😈" }, { word: "déjà vu", icon: "🔁" }, { word: "zeitgeist", icon: "🕰️" },
      { word: "wanderlust", icon: "🧳" }, { word: "angst", icon: "😰" }, { word: "faux pas", icon: "🙊" },
      { word: "a raison d'être", icon: "🎯" }, { word: "carte blanche", icon: "📄" }, { word: "nostalgia", icon: "📻" },
      { word: "serendipity", icon: "🍀" }, { word: "ambivalence", icon: "⚖️" }, { word: "a loanword", icon: "🔄" },
      { word: "a mother tongue", icon: "🗣️" }, { word: "code-switching", icon: "🔀" }, { word: "lost in translation", icon: "❓" }
    ],
    grammar: [
      {
        title: "Loanwords in English",
        head: ["Word", "Origin", "Meaning"],
        rows: [
          ["*schadenfreude*", "German", "pleasure at someone else's misfortune"],
          ["*zeitgeist*", "German", "the spirit or mood of a particular period"],
          ["*déjà vu*", "French", "the feeling you've experienced this before"],
          ["*faux pas*", "French", "an embarrassing social mistake"],
          ["*carte blanche*", "French", "complete freedom to act"],
          ["*fiesta / siesta / macho*", "Spanish", "party / afternoon nap / aggressively masculine"],
          ["*tsunami / karaoke / emoji*", "Japanese", "giant wave / singing to recorded music / small digital image"]
        ],
        note: "Loanwords sometimes change meaning in English: *macho* is more negative in English than in Spanish."
      },
      {
        title: "Compounding",
        head: ["Type", "Examples"],
        rows: [
          ["noun + noun", "*heartbreak, bookworm, screen time, comfort food*"],
          ["adjective + noun", "*blackboard, small talk, hot spot, soft power*"],
          ["verb + particle (nouns)", "*a breakdown, a takeaway, a check-in, a setback*"],
          ["neoclassical (Greek / Latin roots)", "*telephone, biography, xenophobia, autonomous*"],
          ["blends", "*brunch (breakfast + lunch), smog, motel, podcast*"]
        ]
      },
      {
        title: "Explaining a concept",
        head: ["Function", "Language"],
        rows: [
          ["defining", "*It refers to… / It describes… / It's used to talk about…*"],
          ["capturing a feeling", "*It captures the feeling of… / It conveys a sense of…*"],
          ["comparing languages", "*There's no direct equivalent in English. / The closest English word would be…, but…*"],
          ["giving context", "*You'd use it when… / It's the kind of word you'd say when…*"],
          ["evaluating translation", "*Something gets lost in translation. / It loses its nuance.*"]
        ]
      }
    ],
    watchOut: [
      ["He felt schadenfreude for his friend's success.", "*Schadenfreude* is pleasure at someone's *misfortune*, not success."],
      ["She made a faux pas: she arrived on time.", "A *faux pas* is a social *mistake*: she called the host by the wrong name."],
      ["There is no direct equivalence in English.", "There is no direct *equivalent* in English."],
      ["The word captures the feeling to be home.", "The word captures the feeling *of being* home."]
    ],
    check: {
      type: "match", title: "Quick check",
      prompt: "Match each loanword with its meaning.",
      pairs: [
        ["schadenfreude", "pleasure at someone else's misfortune"],
        ["zeitgeist", "the spirit of a particular era"],
        ["wanderlust", "a strong desire to travel"],
        ["carte blanche", "complete freedom to do what you want"],
        ["faux pas", "an embarrassing social mistake"]
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a linguist discussing whether language shapes the way we think.",
      title: "Does your language shape your mind?",
      script: [
        { who: "Host", line: "The idea that language shapes thought is very popular. Is there any truth in it?" },
        { who: "Linguist", line: "It depends on how strong a version you mean. The strong version, that you can't think something unless your language has a word for it, has been largely discredited. People can obviously feel schadenfreude without knowing the German word." },
        { who: "Host", line: "And the weaker version?" },
        { who: "Linguist", line: "That's much more interesting, and there's good evidence for it. Language seems to influence what we notice and remember. Speakers of some Aboriginal Australian languages, for example, use compass directions instead of left and right. They'd say there's an ant on your north-east leg. And, as a result, they're remarkably good at knowing which direction they're facing, even indoors." },
        { who: "Host", line: "What about bilingual people? Do they think differently in each language?" },
        { who: "Linguist", line: "Many bilinguals report feeling like slightly different people in each language: more formal in one, more emotional in another. Research partly supports this. People often make less emotional, more rational decisions in a second language, perhaps because it's less connected to childhood memories." },
        { who: "Host", line: "So what do untranslatable words tell us?" },
        { who: "Linguist", line: "That cultures pay attention to different things. A language that has a word for the time spent talking after a meal is telling you something about what that culture values. The word doesn't create the experience, but it names it, and naming something makes it easier to notice, to share and to cherish." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The strong version of the theory is widely accepted today.", a: false },
            { s: "Language may influence what we notice and remember.", a: true },
            { s: "Some Aboriginal Australian languages use compass directions instead of left and right.", a: true },
            { s: "People often make more emotional decisions in a second language.", a: false },
            { s: "The linguist thinks words create experiences.", a: false }
          ]
        },
        {
          type: "match", title: "Key ideas",
          prompt: "Match each idea with the linguist's explanation.",
          pairs: [
            ["the strong version", "you can't think something without a word for it"],
            ["the weak version", "language influences attention and memory"],
            ["bilingual decisions", "often more rational in a second language"],
            ["untranslatable words", "show what a culture pays attention to"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an essay by a bilingual writer about living between two languages.",
      title: "Between two tongues",
      text: [
        { body: "I was eleven when my family moved from Oaxaca to Los Angeles, and for years I lived in a kind of linguistic double exposure. At home, my mother scolded me in Spanish and comforted me in Zapotec. At school, I learned to argue, joke and eventually fall in love in English. Each language came with its own version of me, and for a long time I felt that none of them was quite complete." },
        { body: "What I lacked, I later realized, was not vocabulary but permission. There are feelings I can only express in Spanish. *Me da pena*, for instance, sits somewhere between embarrassment, pity and shyness, and no English phrase captures all three at once. Conversely, there are things I can only say in English: the cool, ironic detachment of *whatever* has no real equivalent in the language of my childhood." },
        { body: "For years I treated this as a deficiency. Teachers told me to keep my languages separate, and I was ashamed when I code-switched mid-sentence. Now I see it differently. Code-switching is not a sign of confusion but of a richer toolkit: when one language falls short, I reach for another, as a painter reaches for a different colour." },
        { body: "What troubles me now is not having two languages, but the possibility of losing the third. Zapotec, the language of my grandmother's stories, is spoken by fewer people every year. When a language disappears, we lose more than words; we lose an entire way of noticing the world. Perhaps that is the ultimate untranslatable: not a single word, but a whole perspective." }
      ],
      activities: [
        {
          type: "sort", title: "Spanish, English or Zapotec?",
          prompt: "According to the writer, which language does each idea relate to?",
          bins: ["Spanish", "English", "Zapotec"],
          items: [
            { text: "me da pena", bin: 0 }, { text: "her mother scolded her in it", bin: 0 },
            { text: "the ironic detachment of whatever", bin: 1 }, { text: "she learned to argue and joke in it", bin: 1 },
            { text: "her mother comforted her in it", bin: 2 }, { text: "spoken by fewer people every year", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The writer moved to Los Angeles as an adult.", a: false },
            { s: "She now sees code-switching as a sign of confusion.", a: false },
            { s: "She compares code-switching to a painter using different colours.", a: true },
            { s: "She is worried about the future of Zapotec.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice explaining concepts, then write about a word from your own language.",
      activities: [
        {
          type: "gap", title: "Compounds and blends",
          prompt: "Complete each word.",
          items: [
            "Breakfast + lunch = [[brunch]]",
            "Smoke + fog = [[smog]]",
            "A person who reads all the time is a book[[worm]].",
            "Food that makes you feel better emotionally is comfort [[food]].",
            "Polite conversation about unimportant things is small [[talk]].",
            "A fear or hatred of foreigners is [[xenophobia]]."
          ]
        },
        {
          type: "rewrite", title: "Explain it",
          prompt: "Complete each explanation using the words given.",
          items: [
            { q: "wanderlust (It refers to…)", a: ["It refers to a strong desire to travel.", "It refers to a strong wish to travel.", "It refers to a strong desire to travel the world."] },
            { q: "déjà vu (It's the feeling…)", a: ["It's the feeling that you have experienced something before.", "It's the feeling that you've experienced this before.", "It's the feeling that you have already experienced something.", "It's the feeling that you've been here before."] },
            { q: "nostalgia (It captures…)", a: ["It captures a longing for the past.", "It captures the feeling of missing the past.", "It captures a sentimental longing for the past."] }
          ]
        },
        {
          type: "write", title: "My untranslatable word",
          prompt: "Write a short essay (250–300 words) for an international magazine about a word or expression from your language (Spanish, an indigenous language, a regional expression, or another language you know) that has no direct equivalent in English. Explain what it means, when people use it, why it is hard to translate, and what it reveals about the culture. Reflect on how speaking more than one language affects your identity.",
          minWords: 250, maxWords: 300,
          model: "Ahorita: The Word That Means Everything and Nothing<br>If you spend more than a day in Mexico, you will almost certainly hear the word ahorita. Grammatically, it is simply a diminutive of ahora, now. In practice, however, its meaning is gloriously elastic. Depending on the context, the tone of voice and the relationship between the speakers, ahorita can mean right this second, in a few minutes, later today or, quite possibly, never.<br>Consider a mother calling her teenage son to dinner. If he replies \"¡Ahorita voy!\", she knows perfectly well that he will appear in ten minutes, if she is lucky. If a shopkeeper says \"Ahorita se lo traigo\", you may receive your item immediately. If a plumber promises to come ahorita, you would be wise to make other plans for the afternoon.<br>There is no direct equivalent in English. The closest might be \"in a minute\" or \"just now\", but neither captures the word's softness, its warmth or its deliberate vagueness. Ahorita is not really about time at all; it is about politeness. It allows speakers to avoid a direct refusal and to keep relationships smooth, a value deeply rooted in Mexican culture.<br>Learning English made me notice this. In English, I am more precise about time: I say \"at four\" or \"tomorrow morning\", and I expect others to do the same. At first, this felt cold. Now I find it oddly liberating. Yet when I return to Mexico, I slip back into ahorita without thinking, and I realize I am two slightly different people, each shaped by the words available to me.<br>Perhaps that is the real gift of being bilingual: not just two vocabularies, but two ways of being in the world.",
          bank: ["Grammatically, it is…", "In practice, however,…", "Depending on the context,…", "There is no direct equivalent in English.", "The closest might be…, but…", "It captures…", "It is deeply rooted in…", "I realize I am…"],
          checklist: [
            "I explained the **meaning** and gave **examples** of use.",
            "I explained **why** it is hard to translate.",
            "I reflected on what it reveals about **culture**.",
            "I reflected on language and **identity**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Pay attention to word stress in long words.",
          items: [
            "There's no direct equivalent in English.",
            "It captures the feeling of being home.",
            "Nostalgia is a longing for the past.",
            "It was an embarrassing social mistake.",
            "Something gets lost in translation.",
            "I feel like a different person in English."
          ]
        },
        {
          type: "speak", title: "Words and worlds",
          prompt: "Record yourself for about four minutes. **Part 1:** Explain two words or expressions from your language that are hard to translate into English. Give their meaning, examples of use and the closest English equivalents. **Part 2:** Discuss: *Do you feel like a different person when you speak English? Does the language you speak change how you think or feel?*",
          language: ["It refers to…", "You'd use it when…", "The closest English word would be…, but…", "It captures…", "There's no direct equivalent", "Something gets lost in translation", "When I speak English, I feel…", "I tend to code-switch when…"],
          seconds: 270,
          checklist: ["explain two words with examples?", "compare them with English?", "discuss language and identity?", "use vocabulary from this unit?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can understand and use common loanwords in English.", review: "Explanation: loanwords in English; Quick check" },
    { can: "I can recognize different types of compounds and blends.", review: "Explanation: compounding; Writing activity 1" },
    { can: "I can explain complex concepts and untranslatable words.", review: "Explanation: explaining a concept; Writing activity 2" },
    { can: "I can follow a discussion about language and thought.", review: "Listening activities" },
    { can: "I can understand a reflective essay about bilingual identity.", review: "Reading activities" },
    { can: "I can explain a word from my language and reflect on identity.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
