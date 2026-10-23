window.UNIT = {
  slug: "urban-legends",
  number: 22,
  title: "Urban Legends",
  level: "C1",
  minutes: 80,
  speakers: { "Lin": "f", "Dani": "m", "Host": "m", "Folklorist": "f" },
  focus: ["passive reporting with perfect and continuous infinitives: is said to have been, is thought to be living", "there + passive reporting: There is thought to be…, There are said to have been…", "seem / appear + infinitive forms", "distancing adverbs: allegedly, reportedly, supposedly, apparently", "vocabulary of rumours: hoax, myth, debunk, go viral"],

  presentation: {
    scene: "👻🌃📱🕯️",
    situation: "Lin and Dani are walking through the historic centre of their city at night. Dani is telling Lin the legend of an old house on the corner.",
    warmup: {
      prompt: "Which of these have you heard stories about? Choose all that apply.",
      options: ["haunted houses", "ghosts on roads", "crocodiles in sewers", "secret tunnels", "cursed objects", "a crying woman", "hidden treasure", "government cover-ups", "creatures in lakes", "dangerous dolls", "lucky charms", "strange lights in the sky"],
      response: "Urban legends spread because they are told as if they were true, but always second-hand. In this unit you'll learn how to report stories while keeping your distance from them."
    },
    dialogueTitle: "The house on the corner",
    dialogue: [
      { who: "Dani", line: "See that house? A family *is said to have lived* there in the 1800s. One night, they all disappeared." },
      { who: "Lin", line: "Disappeared? Just like that?" },
      { who: "Dani", line: "*Allegedly.* The father *is believed to have been involved* in some kind of scandal. *There are thought to be* tunnels under the house that he used to escape." },
      { who: "Lin", line: "And let me guess, someone *is supposed to be living* there still. A ghost." },
      { who: "Dani", line: "Of course! A woman *is reported to have been seen* at the window on rainy nights." },
      { who: "Lin", line: "Who reported it? *Apparently*, it's always a friend of a friend." },
      { who: "Dani", line: "Fine, I admit nobody *seems to have* any proof. But *there is said to be* a historical archive with the family's name." },
      { who: "Lin", line: "Then let's check the archive tomorrow, in daylight. Much less scary." }
    ]
  },

  objectives: [
    "I can use passive reporting structures with perfect and continuous infinitives.",
    "I can use there + passive reporting structures.",
    "I can use distancing adverbs to show I'm not sure a story is true.",
    "I can tell and analyse rumours, legends and viral stories."
  ],

  explanation: {
    vocabTitle: "Rumours and legends",
    vocab: [
      { word: "an urban legend", icon: "🌃" }, { word: "a rumour", icon: "🗣️" }, { word: "a hoax", icon: "🃏" },
      { word: "a myth", icon: "🐉" }, { word: "folklore", icon: "📜" }, { word: "a friend of a friend", icon: "👥" },
      { word: "go viral", icon: "📲" }, { word: "debunk", icon: "🔍" }, { word: "far-fetched", icon: "🚀" },
      { word: "spine-chilling", icon: "🥶" }, { word: "eerie", icon: "🌫️" }, { word: "gullible", icon: "🐑" },
      { word: "take with a pinch of salt", icon: "🧂" }, { word: "hearsay", icon: "👂" }, { word: "unfounded", icon: "❌" }
    ],
    grammar: [
      {
        title: "Passive reporting: infinitive forms",
        intro: "Structure: subject + *is said / believed / thought / reported / alleged / supposed* + infinitive. The infinitive form shows the **time** of the action.",
        head: ["Infinitive", "Time", "Example"],
        rows: [
          ["*to be*", "present", "*The house is said to be haunted.*"],
          ["*to be + -ing*", "in progress now", "*Someone is believed to be living there.*"],
          ["*to have + past participle*", "past", "*A family is said to have lived there.*"],
          ["*to have been + -ing*", "in progress in the past", "*He is thought to have been hiding for years.*"],
          ["*to have been + past participle*", "past passive", "*A woman is reported to have been seen at the window.*"]
        ]
      },
      {
        title: "There + passive reporting and seem / appear",
        head: ["Structure", "Example"],
        rows: [
          ["*There is / are + said / thought + to be*", "*There are thought to be tunnels under the house.*"],
          ["*There is / are + said + to have been*", "*There are said to have been three fires here.*"],
          ["*seem / appear + to have + past participle*", "*Nobody seems to have any proof.* / *He appears to have left.*"],
          ["*It is said / believed / alleged that…*", "*It is believed that the family escaped.*"]
        ],
        note: "*Be supposed to* can mean *people say* (*It's supposed to be haunted*) or *should* (*You're supposed to pay first*)."
      },
      {
        title: "Distancing adverbs",
        head: ["Adverb", "Nuance", "Example"],
        rows: [
          ["*allegedly*", "accused, not proven", "*He allegedly stole the money.*"],
          ["*reportedly*", "according to reports", "*The singer has reportedly cancelled the tour.*"],
          ["*supposedly*", "people say, but I doubt it", "*The water supposedly cures illness.*"],
          ["*apparently*", "I've heard / it seems", "*Apparently, it's always a friend of a friend.*"],
          ["*purportedly / ostensibly*", "claimed (formal), often false", "*a letter purportedly written by the king*"]
        ]
      }
    ],
    watchOut: [
      ["He is said to live there in 1850.", "He is said *to have lived* there in 1850."],
      ["There is believed to be three tunnels.", "There *are* believed to be three tunnels."],
      ["A woman is reported to have seen at the window.", "A woman is reported to have *been* seen at the window."],
      ["It is said the house to be haunted.", "*The house is said to be* haunted. / *It is said that* the house is haunted."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one or two words.",
      items: [
        "The castle is said [[to be]] over eight hundred years old.",
        "The family is believed to [[have]] escaped through a tunnel.",
        "A strange light is reported to have [[been]] seen above the lake.",
        "There are thought [[to be]] hundreds of tunnels under the city.",
        "Nobody seems to [[have]] seen the ghost in person."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a folklorist explaining why urban legends spread.",
      title: "Why we love scary stories",
      script: [
        { who: "Host", line: "What exactly makes a story an urban legend?" },
        { who: "Folklorist", line: "Three things, usually. It's told as if it were true. It's set in a familiar, modern place, a motorway, a shopping centre, a hotel. And it's always second-hand: it's said to have happened to a friend of a friend, never to the person telling it." },
        { who: "Host", line: "Why do people keep telling them?" },
        { who: "Folklorist", line: "Because they express real anxieties. Stories about kidneys being stolen from tourists reflect fears about travelling. Stories about contaminated food reflect our distrust of big companies. The details change, but the fear underneath remains the same." },
        { who: "Host", line: "Has social media changed things?" },
        { who: "Folklorist", line: "Enormously. A legend that once took years to travel from one city to another can now go viral in hours. And the language of rumour has spread too: posts say things like this is reported to have happened in a hospital or doctors are believed to be hiding the truth. That vague passive voice is a red flag." },
        { who: "Host", line: "Why a red flag?" },
        { who: "Folklorist", line: "Because it hides the source. Reported by whom? Believed by whom? When journalists use those structures, they should be able to name their sources. When a viral post uses them, there usually isn't a source at all. So, my advice: enjoy the stories, but take them with a large pinch of salt." }
      ],
      activities: [
        {
          type: "sort", title: "Features of urban legends",
          prompt: "According to the folklorist, which statements describe urban legends?",
          bins: ["typical of urban legends", "not typical"],
          items: [
            { text: "told as if true", bin: 0 }, { text: "set in a familiar modern place", bin: 0 }, { text: "it happened to a friend of a friend", bin: 0 }, { text: "they express real anxieties", bin: 0 },
            { text: "the teller saw it personally", bin: 1 }, { text: "set in a fantasy world", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again and decide.",
          items: [
            { s: "Urban legends usually happened to the person telling them.", a: false },
            { s: "The details of legends change, but the underlying fear stays.", a: true },
            { s: "Social media has made legends spread more slowly.", a: false },
            { s: "Vague passive structures can hide the lack of a source.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short article about a famous legend from Mexico City.",
      title: "The Weeping Woman",
      text: [
        { body: "Few legends in Mexico are as widely known as that of La Llorona, the weeping woman. In the most common version, she is said to have drowned her children in a moment of despair, and to have been condemned to search for them for eternity. Her cry, *¡Ay, mis hijos!*, is supposed to be heard on dark nights near rivers and lakes." },
        { body: "The origins of the story are hard to trace. Some historians believe it to have pre-Hispanic roots: the goddess Cihuacóatl was reportedly heard weeping in the streets of Tenochtitlan before the Spanish conquest. Others argue that the version known today was shaped during the colonial period, when similar stories of grieving women circulated in Spain." },
        { body: "What is clear is that the legend has adapted remarkably well to changing times. In the nineteenth century, she was allegedly seen in the streets of the capital; in the twentieth, she appeared in films and songs; and there are now said to be hundreds of videos online that claim to show her, most of them easily debunked." },
        { body: "Folklorists suggest that the legend's longevity stems from its emotional power. It speaks of guilt, loss and the fear of losing a child, themes that are universal. Whether or not anyone has ever truly heard her cry, La Llorona appears to have found a permanent place in the imagination of millions." }
      ],
      activities: [
        {
          type: "match", title: "Who believes what?",
          prompt: "Match each group with the idea the article attributes to them.",
          pairs: [
            ["some historians", "the legend has pre-Hispanic roots"],
            ["other historians", "it was shaped in the colonial period"],
            ["videos online", "claim to show her, but are easily debunked"],
            ["folklorists", "its power comes from universal emotions"]
          ]
        },
        {
          type: "rewrite", title: "Report it differently",
          prompt: "Rewrite each sentence from the article using *It is…that…*",
          items: [
            { q: "She is said to have drowned her children.", a: ["It is said that she drowned her children.", "It is said that she had drowned her children."] },
            { q: "Her cry is supposed to be heard near rivers.", a: ["It is supposed that her cry is heard near rivers.", "It is said that her cry is heard near rivers."] },
            { q: "She was allegedly seen in the streets of the capital.", a: ["It is alleged that she was seen in the streets of the capital."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice distancing structures, then write a news-style story about a legend.",
      activities: [
        {
          type: "rewrite", title: "Distance yourself",
          prompt: "Rewrite each sentence using the structure in brackets.",
          items: [
            { q: "People say that the hotel is haunted. (The hotel…)", a: ["The hotel is said to be haunted."] },
            { q: "People believe the treasure was hidden in 1910. (The treasure…)", a: ["The treasure is believed to have been hidden in 1910."] },
            { q: "People think there are secret rooms in the palace. (There…)", a: ["There are thought to be secret rooms in the palace."] },
            { q: "Reports say the man was living in the forest for years. (The man…)", a: ["The man is reported to have been living in the forest for years."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "The house is said to be haunted." },
            { a: "There are thought to be hidden tunnels." },
            { a: "Nobody seems to have any real proof." },
            { a: "She is believed to have escaped." }
          ]
        },
        {
          type: "write", title: "The legend of…",
          prompt: "Write a short article (220–260 words) for a travel or culture website about a legend, rumour or mysterious story from your town, city or country. Explain what is said to have happened, how the story has changed over time, and what evidence (if any) exists. Use at least **six** distancing structures (passive reporting, *there* + passive, *seem / appear*, distancing adverbs).",
          minWords: 220, maxWords: 260,
          model: "The Tunnels Beneath Puebla<br>For centuries, the people of Puebla have whispered about a network of tunnels hidden beneath the historic centre. According to legend, they were built by monks and soldiers to move secretly between churches and forts, and some are said to stretch for several kilometres.<br>For a long time, the story was treated as little more than a myth. Grandparents told children that the tunnels were used to hide treasure during the wars of the nineteenth century, and a ghostly soldier was reportedly seen walking through the streets at midnight, supposedly searching for the entrance he had guarded.<br>Then, in 2015, construction workers made a remarkable discovery. While repairing a road, they broke through into an underground passage that appears to have been built in the colonial period. Historians now believe it to have been used, at least in part, for drainage and for transporting goods. There are thought to be other sections still waiting to be explored.<br>Part of the tunnel has since been restored and opened to visitors, who can walk through it and see objects found inside, including bottles, tools and, allegedly, a cannonball from the famous battle of 5 May.<br>Does this mean the legend was true? Only partly. The tunnels are real, but most of the more dramatic details, the hidden gold and the ghostly soldier, seem to have been added over generations of storytelling. Still, visiting them is an eerie experience, and it is easy to see why the legend refuses to disappear.",
          bank: ["are said to…", "was reportedly seen", "supposedly", "appears to have been built", "believe it to have been used", "There are thought to be…", "allegedly", "seem to have been added"],
          checklist: [
            "I explained **what is said** to have happened.",
            "I described how the story has **changed**.",
            "I mentioned the **evidence**, or lack of it.",
            "I used at least **six** distancing structures."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice the weak forms in *to have been*.",
          items: [
            "The house is said to be haunted.",
            "A family is said to have lived there.",
            "There are thought to be secret tunnels.",
            "A woman was reportedly seen at the window.",
            "Nobody seems to have any real proof.",
            "Take it with a pinch of salt."
          ]
        },
        {
          type: "speak", title: "Tell a legend",
          prompt: "Record yourself telling a legend, ghost story, rumour or viral story you know (about three minutes). Make it atmospheric, but keep your distance: use passive reporting and distancing adverbs to show it's not confirmed. At the end, say whether you believe it and why.",
          language: ["The story goes that…", "… is said to have…", "… is believed to be…", "There are thought to be…", "Allegedly / reportedly / supposedly,…", "Nobody seems to have…", "It's a bit far-fetched, but…", "I'd take it with a pinch of salt."],
          seconds: 210,
          checklist: ["tell the story clearly and atmospherically?", "use at least five distancing structures?", "use different infinitive forms (to be, to have done)?", "give your opinion at the end?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use passive reporting with to be, to have done and to have been done.", review: "Explanation: passive reporting: infinitive forms" },
    { can: "I can use continuous forms like is believed to be living.", review: "Explanation: passive reporting; Writing activity 1" },
    { can: "I can use there + passive reporting structures.", review: "Explanation: there + passive reporting" },
    { can: "I can use allegedly, reportedly, supposedly and apparently.", review: "Explanation: distancing adverbs" },
    { can: "I can notice when vague passives hide the lack of a source.", review: "Listening activities" },
    { can: "I can tell and analyse a legend or rumour with distance.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
