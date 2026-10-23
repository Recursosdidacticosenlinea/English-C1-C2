window.UNIT = {
  slug: "wit-and-humour",
  number: 44,
  title: "Wit and Humour",
  level: "C2",
  minutes: 90,
  speakers: { "Sara": "f", "Pablo": "m", "Host": "f", "Comedian": "m" },
  focus: ["irony: saying the opposite of what you mean", "sarcasm: irony used to mock or criticize", "understatement as humour: It was a bit of a disaster", "deadpan and self-deprecating humour", "recognizing humour through tone, context and exaggeration"],

  presentation: {
    scene: "😏🎭☔😂",
    situation: "Sara and Pablo have just arrived at their holiday destination. It's pouring with rain, the hotel has lost their booking and Pablo's suitcase is still in another country.",
    warmup: {
      prompt: "What kind of humour do you enjoy? Choose all that apply.",
      options: ["irony", "sarcasm", "slapstick", "puns", "dark humour", "self-deprecating jokes", "satire", "absurd humour", "observational comedy", "memes", "impressions", "deadpan delivery"],
      response: "Humour is one of the last things learners master, because it depends so much on tone, culture and shared knowledge. In this unit you'll learn to recognize and use irony, sarcasm and understatement."
    },
    dialogueTitle: "The perfect holiday",
    dialogue: [
      { who: "Pablo", line: "*Well, this is lovely.* Exactly the tropical paradise I imagined." },
      { who: "Sara", line: "*Oh, absolutely.* Nothing says relaxation like standing in a flooded car park." },
      { who: "Pablo", line: "And the hotel losing our booking was *a nice touch*. Very personal service." },
      { who: "Sara", line: "*At least* your suitcase is enjoying its holiday. In Panama, apparently." },
      { who: "Pablo", line: "*Lucky suitcase.* I'm sure it's having a better time than me." },
      { who: "Sara", line: "To be fair, *it's been a bit of a rough start*." },
      { who: "Pablo", line: "*A bit?* We've had warmer welcomes at the dentist." },
      { who: "Sara", line: "Look on the bright side. *Things can only get better.* Unless the volcano erupts, of course." }
    ]
  },

  objectives: [
    "I can recognize and use irony in conversation.",
    "I can recognize sarcasm and understand when it may be offensive.",
    "I can use understatement and self-deprecation for humorous effect.",
    "I can explain why something is funny and analyse different types of humour."
  ],

  explanation: {
    vocabTitle: "The language of humour",
    vocab: [
      { word: "irony", icon: "🙃" }, { word: "sarcasm", icon: "😏" }, { word: "understatement", icon: "🤏" },
      { word: "overstatement", icon: "📢" }, { word: "deadpan", icon: "😐" }, { word: "self-deprecating", icon: "🙈" },
      { word: "dry humour", icon: "🏜️" }, { word: "a punchline", icon: "🥊" }, { word: "a running joke", icon: "🔁" },
      { word: "tongue-in-cheek", icon: "😜" }, { word: "witty", icon: "✨" }, { word: "corny", icon: "🌽" },
      { word: "satire", icon: "🎭" }, { word: "it went over my head", icon: "🤷" }, { word: "keep a straight face", icon: "😑" }
    ],
    grammar: [
      {
        title: "Irony and sarcasm",
        intro: "**Irony** means saying the opposite of what you mean, often for humour. **Sarcasm** is irony used to mock or criticize someone. Both depend heavily on **tone** and **context**.",
        head: ["Situation", "What is said", "What is meant"],
        rows: [
          ["heavy rain on holiday", "*Well, this is lovely.*", "This is terrible."],
          ["a friend arrives two hours late", "*Oh, you're early!*", "You're very late. (sarcasm)"],
          ["the hotel loses a booking", "*That was a nice touch.*", "That was awful."],
          ["a long, boring meeting", "*Well, that was thrilling.*", "That was very boring."],
          ["typical ironic phrases", "*Oh, great. / Brilliant. / Just what I needed. / How lovely.*", "the opposite"]
        ],
        note: "Sarcasm can easily hurt. In a professional context or with people you don't know well, it's safer to avoid it."
      },
      {
        title: "Understatement, overstatement and self-deprecation",
        head: ["Technique", "Example", "Effect"],
        rows: [
          ["understatement", "*It's been a bit of a rough start.* (after a disaster)", "humour by saying much less"],
          ["overstatement (hyperbole)", "*We've had warmer welcomes at the dentist.*", "humour by exaggeration"],
          ["deadpan", "*(flat voice) I love queuing. It's my hobby.*", "humour without showing emotion"],
          ["self-deprecation", "*I'm not saying I'm a bad cook, but the smoke alarm cheers when I finish.*", "making fun of yourself"],
          ["absurd comparison", "*My suitcase is enjoying its holiday in Panama.*", "humour through unexpected images"]
        ]
      },
      {
        title: "Recognizing humour",
        head: ["Signal", "Example"],
        rows: [
          ["a clash with reality", "*Exactly the tropical paradise I imagined.* (in a storm)"],
          ["exaggerated enthusiasm", "*Oh, absolutely! Nothing says relaxation like…*"],
          ["structures like *Nothing says… like…*", "*Nothing says romance like a parking ticket.*"],
          ["*At least…* (finding a ridiculous positive)", "*At least the rain is free.*"],
          ["tone: flat, slow or over-the-top", "*(flatly) Fantastic.*"]
        ]
      }
    ],
    watchOut: [
      ["\"Oh, great\" (in a disaster) → The speaker is happy.", "It's *irony*: the speaker is annoyed."],
      ["Using sarcasm with your new boss", "Safer: *That was a bit unexpected.*"],
      ["\"It was a bit of a problem\" (after a fire) → It was a small problem.", "It's *understatement*: it was a big problem."],
      ["Explaining the joke immediately", "Let the listener *get* it; humour depends on timing."]
    ],
    check: {
      type: "sort", title: "Quick check",
      prompt: "Which technique does each sentence use?",
      bins: ["irony / sarcasm", "understatement", "overstatement"],
      items: [
        { text: "(in a storm) What a beautiful day!", bin: 0 }, { text: "(to a late friend) Nice of you to come.", bin: 0 },
        { text: "(after failing every exam) It hasn't been my best year.", bin: 1 }, { text: "(after a hurricane) It was a bit windy.", bin: 1 },
        { text: "I've told you a million times.", bin: 2 }, { text: "This bag weighs a ton.", bin: 2 }
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a stand-up comedian talking about humour across cultures.",
      title: "Is humour universal?",
      script: [
        { who: "Host", line: "You perform in several countries. Does the same joke work everywhere?" },
        { who: "Comedian", line: "Rarely. Slapstick travels well: someone falling over is funny almost anywhere. But verbal humour, especially irony, depends enormously on shared assumptions. If the audience doesn't know what's normal, they can't appreciate the joke when you twist it." },
        { who: "Host", line: "Is British humour really more ironic?" },
        { who: "Comedian", line: "It's certainly famous for it. British audiences love understatement and deadpan delivery. You describe a complete catastrophe as a bit of a nuisance, with a totally straight face, and they laugh. In the United States, comedians are often more energetic and direct. Neither is better; they're different rhythms." },
        { who: "Host", line: "What about learners of English? Why is humour so hard?" },
        { who: "Comedian", line: "Because so much of it isn't in the words. It's in the tone, the timing, the pause before the punchline. A sentence like Oh, that's just perfect can mean exactly what it says or the complete opposite. Learners often take irony literally, which, ironically, can be very funny in itself." },
        { who: "Host", line: "Any advice?" },
        { who: "Comedian", line: "Watch comedy with subtitles, but watch the audience too. When do they laugh? What's the pause before it? And be careful with sarcasm in a second language. If people aren't sure you're joking, it can sound genuinely rude. Self-deprecating humour is much safer. Nobody's offended if the joke's on you." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The comedian says the same jokes work everywhere.", a: false },
            { s: "Slapstick tends to travel well across cultures.", a: true },
            { s: "British audiences often enjoy understatement.", a: true },
            { s: "He thinks American humour is better than British humour.", a: false },
            { s: "He recommends using a lot of sarcasm in a second language.", a: false }
          ]
        },
        {
          type: "match", title: "Types of humour",
          prompt: "Match each type of humour with the comedian's comment.",
          pairs: [
            ["slapstick", "works almost anywhere"],
            ["irony", "depends on shared assumptions"],
            ["deadpan", "delivered with a totally straight face"],
            ["sarcasm", "can sound rude if people aren't sure you're joking"],
            ["self-deprecation", "safer, because the joke's on you"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a humorous opinion piece. Notice how the writer creates humour.",
      title: "In defence of the queue",
      text: [
        { body: "Visitors to Britain are often baffled by the national devotion to queuing. They watch in astonishment as people form an orderly line for the bus, the post office, or, on one memorable occasion I witnessed, a free sample of cheese. *Why*, they ask, *would anyone voluntarily stand in a line?* As a lifelong practitioner, allow me to explain." },
        { body: "The queue is not, as foreigners assume, a mere method of organizing people. It is a moral system. Within it, everyone is equal: the duke and the dustman wait their turn, both silently furious at the person who takes too long at the front. To jump a queue is not a minor offence; it is roughly equivalent, in the British imagination, to stealing a child's ice cream while kicking a puppy." },
        { body: "We do not, of course, express our outrage directly. That would be rude. Instead, we sigh. A skilled British sigh can communicate an entire paragraph of disapproval. If the offender continues, we may escalate to a pointed cough, or, in extreme cases, to saying *Excuse me, I think there's a queue*, a phrase delivered with such icy politeness that it has been known to lower the temperature of a room by several degrees." },
        { body: "I am aware that this all sounds slightly ridiculous. It is. But I would gently point out that a nation that can maintain a calm, orderly line for a free piece of cheese is a nation that has, in its own way, achieved a small miracle of civilization. Either that, or we simply have nothing better to do." }
      ],
      activities: [
        {
          type: "match", title: "How is it funny?",
          prompt: "Match each extract with the humorous technique it uses.",
          pairs: [
            ["…a free sample of cheese.", "an absurd, unexpected detail"],
            ["…stealing a child's ice cream while kicking a puppy.", "overstatement"],
            ["We do not, of course, express our outrage directly. That would be rude.", "irony about national character"],
            ["…lower the temperature of a room by several degrees.", "exaggerated image"],
            ["Either that, or we simply have nothing better to do.", "self-deprecation"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The writer is completely serious throughout.", a: false },
            { s: "The writer describes the queue as a kind of moral system.", a: true },
            { s: "According to the text, the British express anger directly.", a: false },
            { s: "The writer admits the custom sounds ridiculous.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice ironic and humorous language, then write a humorous piece.",
      activities: [
        {
          type: "rewrite", title: "Say it with irony",
          prompt: "Rewrite each sincere complaint as an ironic comment, starting with the words given.",
          items: [
            { q: "The meeting was very boring. (Well, that was…)", a: ["Well, that was thrilling.", "Well, that was exciting.", "Well, that was fascinating.", "Well, that was fun."] },
            { q: "The train is late again. That's terrible. (Oh, great…)", a: ["Oh, great, the train is late again.", "Oh, great. The train is late again.", "Oh, great, it's late again."] },
            { q: "Parking tickets are not romantic. (Nothing says romance like…)", a: ["Nothing says romance like a parking ticket."] }
          ]
        },
        {
          type: "rewrite", title: "Understate it",
          prompt: "Rewrite each dramatic sentence as a humorous understatement, using the words in brackets.",
          items: [
            { q: "The party was a complete disaster. (a bit of)", a: ["The party was a bit of a disaster.", "It was a bit of a disaster."] },
            { q: "I failed every single exam. (not my best)", a: ["It wasn't my best semester.", "It wasn't my best year.", "It was not my best semester.", "It wasn't my best term."] },
            { q: "The hurricane destroyed half the town. (a little)", a: ["It was a little windy.", "It got a little windy.", "The weather was a little windy."] }
          ]
        },
        {
          type: "write", title: "A humorous piece",
          prompt: "Write a humorous column (250–300 words) about a habit, custom or everyday situation in your country or city that visitors find strange (for example, *ahorita*, traffic, family gatherings, street food, punctuality, Sunday lunches). Use irony, understatement, overstatement and at least one self-deprecating comment. Make sure your affection for the subject is clear underneath the humour.",
          minWords: 250, maxWords: 300,
          model: "A Beginner's Guide to the Mexican Family Party<br>If you are ever invited to a Mexican family party, congratulations. You are about to experience one of the great endurance events of the modern world. Please read this guide carefully.<br>First, the invitation. You will be told that the party starts at three. This is a charming fiction. No one, including the hosts, believes it. If you arrive at three, you will help set up the tables, which is a perfectly lovely way to spend two hours if you enjoy carrying chairs.<br>Second, the food. There will be enough to feed a small army, or, more accurately, your aunt's estimate of what a medium-sized family might need, multiplied by four. You will be offered a plate. Then another. Refusing a third is technically possible, in the same way that it is technically possible to swim to Cuba.<br>Third, the music. At some point a relative will produce a speaker capable of being heard in neighbouring states. Conversation will continue at the same volume, because we are, if nothing else, adaptable.<br>Finally, leaving. Saying goodbye to forty people individually takes approximately the same time as the party itself. If you are lucky, you will be home by midnight, carrying enough leftovers for a week.<br>I am aware that I am not exactly selling this. I myself have been known to hide in the kitchen for an hour, pretending to look for ice. But here is the secret: there is nowhere in the world where you will be fed so generously, teased so mercilessly or welcomed so completely. It is chaos, and it is wonderful. Bring a large container.",
          bank: ["This is a charming fiction.", "a perfectly lovely way to spend…", "technically possible, in the same way that…", "capable of being heard in neighbouring states", "if nothing else,", "I am aware that I am not exactly selling this.", "I myself have been known to…", "It is chaos, and it is wonderful."],
          checklist: [
            "I used **irony** and **understatement**.",
            "I used **overstatement** or absurd images.",
            "I included at least one **self-deprecating** comment.",
            "My **affection** for the subject is clear at the end."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Imitate the ironic tone.",
          items: [
            "Well, this is lovely.",
            "Nothing says relaxation like a flooded car park.",
            "It's been a bit of a rough start.",
            "At least the suitcase is enjoying itself.",
            "We've had warmer welcomes at the dentist.",
            "Things can only get better."
          ]
        },
        {
          type: "speak", title: "A funny disaster",
          prompt: "Record yourself for about four minutes. **Part 1:** Tell the story of a trip, party, meal or day that went completely wrong, using irony, understatement, exaggeration and self-deprecation to make it funny. **Part 2:** Then reflect briefly: what kind of humour do people use in your culture, and what kind of English humour do you find hardest to understand?",
          language: ["Well, that was lovely.", "Nothing says… like…", "It was a bit of a disaster.", "At least…", "I'm not saying I'm…, but…", "To be fair,…", "Look on the bright side:…", "In my culture, people tend to…"],
          seconds: 270,
          checklist: ["tell a story with ironic comments?", "use understatement and exaggeration?", "include self-deprecating humour?", "reflect on humour across cultures?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can recognize irony and understand what the speaker really means.", review: "Explanation: irony and sarcasm" },
    { can: "I can recognize sarcasm and know when to avoid it.", review: "Explanation: note; Listening" },
    { can: "I can use understatement and overstatement for humour.", review: "Explanation: understatement, overstatement; Writing activity 2" },
    { can: "I can use self-deprecating humour appropriately.", review: "Explanation: understatement, overstatement and self-deprecation" },
    { can: "I can analyse how a writer creates humour.", review: "Reading activities" },
    { can: "I can tell a funny story and write a humorous column.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
