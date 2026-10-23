window.UNIT = {
  slug: "what-is-beauty",
  number: 39,
  title: "What Is Beauty?",
  level: "C2",
  minutes: 90,
  speakers: { "Iris": "f", "Tomás": "m", "Host": "m", "Philosopher": "f" },
  focus: ["generalizing: by and large, as a rule, on the whole, broadly speaking, for the most part", "qualifying: to some extent, up to a point, with some exceptions, in a sense", "essence and approximation: in essence, to all intents and purposes, more or less", "precision in abstract argument: strictly speaking, in the strict sense, loosely speaking", "vocabulary of aesthetics: subjective, universal, symmetry, sublime"],

  presentation: {
    scene: "🌸🗿🎨🌄",
    situation: "Iris and Tomás are visiting an art museum. They stop in front of a famous modern sculpture made of rusted metal and disagree about whether it is beautiful.",
    warmup: {
      prompt: "Which of these do you find beautiful? Choose all that apply.",
      options: ["a sunset", "a mathematical equation", "an old face", "a city at night", "a ruined building", "silence", "a storm", "a perfect goal", "handwriting", "a scar", "a minimalist room", "a crowded market"],
      response: "Philosophers have argued about beauty for over two thousand years. Discussing abstract ideas requires careful language for generalizing and qualifying, which is the focus of this unit."
    },
    dialogueTitle: "In front of the sculpture",
    dialogue: [
      { who: "Tomás", line: "I'm sorry, but that's just a pile of rusty metal. *By and large*, I think modern art has abandoned beauty." },
      { who: "Iris", line: "That's a big generalization. *To some extent* I agree, but this piece is beautiful *in a sense*. Look at how the light falls on it." },
      { who: "Tomás", line: "*Strictly speaking*, the light is beautiful, not the sculpture." },
      { who: "Iris", line: "But the sculptor designed it to catch the light. *In essence*, that's what the work is about." },
      { who: "Tomás", line: "OK, *up to a point*. But *as a rule*, people find symmetry and harmony beautiful. This has neither." },
      { who: "Iris", line: "*Broadly speaking*, yes. But there are exceptions. Some people find storms or ruins more moving than a perfect garden." },
      { who: "Tomás", line: "That's *the sublime*, not beauty. Kant made that distinction." },
      { who: "Iris", line: "Fine, but *to all intents and purposes*, people experience them both as aesthetic pleasure. Shall we agree to disagree and get a coffee?" }
    ]
  },

  objectives: [
    "I can make generalizations with expressions such as by and large and as a rule.",
    "I can qualify statements precisely with to some extent, up to a point and in a sense.",
    "I can use in essence, strictly speaking and to all intents and purposes accurately.",
    "I can discuss abstract and philosophical questions about beauty and art."
  ],

  explanation: {
    vocabTitle: "Aesthetics",
    vocab: [
      { word: "aesthetics", icon: "🎨" }, { word: "subjective", icon: "👤" }, { word: "objective", icon: "📏" },
      { word: "universal", icon: "🌍" }, { word: "symmetry", icon: "🦋" }, { word: "harmony", icon: "🎵" },
      { word: "proportion", icon: "📐" }, { word: "the sublime", icon: "🏔️" }, { word: "kitsch", icon: "🦩" },
      { word: "in the eye of the beholder", icon: "👁️" }, { word: "an acquired taste", icon: "🫒" }, { word: "evoke", icon: "💭" },
      { word: "transcend", icon: "🕊️" }, { word: "imperfection", icon: "🏺" }, { word: "a standard of taste", icon: "⚖️" }
    ],
    grammar: [
      {
        title: "Generalizing",
        head: ["Expression", "Example"],
        rows: [
          ["*by and large*", "*By and large, people prefer symmetrical faces.*"],
          ["*as a rule*", "*As a rule, older buildings are more admired than new ones.*"],
          ["*on the whole*", "*On the whole, critics praised the exhibition.*"],
          ["*broadly / generally speaking*", "*Broadly speaking, taste is shaped by culture.*"],
          ["*for the most part*", "*For the most part, the visitors were impressed.*"],
          ["*tend to* + verb", "*People tend to prefer landscapes with water.*"]
        ]
      },
      {
        title: "Qualifying and limiting",
        head: ["Expression", "Meaning", "Example"],
        rows: [
          ["*to some / a certain extent*", "partly", "*To some extent, beauty is subjective.*"],
          ["*up to a point*", "partly, but with limits", "*I agree, up to a point.*"],
          ["*in a sense / in some respects*", "from one point of view", "*In a sense, every object is art.*"],
          ["*with (some / few) exceptions*", "generally, but not always", "*With few exceptions, the paintings are portraits.*"],
          ["*strictly speaking*", "if we are being precise", "*Strictly speaking, it's a print, not a painting.*"],
          ["*loosely speaking*", "if we are not being precise", "*Loosely speaking, it's an abstract work.*"]
        ]
      },
      {
        title: "Essence and approximation",
        head: ["Expression", "Meaning", "Example"],
        rows: [
          ["*in essence / essentially*", "at its most basic", "*In essence, the work is about light.*"],
          ["*to all intents and purposes*", "in practice, virtually", "*To all intents and purposes, the debate is over.*"],
          ["*more or less / give or take*", "approximately", "*It took ten years, give or take.*"],
          ["*in effect*", "in reality, as a result", "*The rule, in effect, banned modern art.*"],
          ["*as such*", "in the exact sense of the word", "*It isn't a painting as such; it's a collage.*"]
        ],
        note: "It's *to all intents and purposes*, not *to all intensive purposes*, a common mistake even among native speakers."
      }
    ],
    watchOut: [
      ["By and large, all people without exception agree.", "*By and large* means *generally*: it allows exceptions."],
      ["To all intensive purposes, it's finished.", "To all *intents and* purposes, it's finished."],
      ["I agree up to a limit.", "I agree *up to a point*."],
      ["In a sense of, it's art.", "*In a sense*, it's art."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each expression with one word.",
      items: [
        "By and [[large]], people find symmetrical faces attractive.",
        "I agree with you up to a [[point]].",
        "To all intents and [[purposes]], the building is a museum.",
        "Strictly [[speaking]], this isn't a sculpture but an installation.",
        "In [[essence|effect]], the work is about the passing of time."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a philosopher discussing whether beauty is objective or subjective.",
      title: "In the eye of the beholder?",
      script: [
        { who: "Host", line: "Is beauty really in the eye of the beholder?" },
        { who: "Philosopher", line: "Up to a point. Broadly speaking, there are two traditions. One, going back to Plato, holds that beauty is an objective property of things, related to harmony and proportion. The other, more modern, holds that beauty exists only in our response to things." },
        { who: "Host", line: "And what does the evidence say?" },
        { who: "Philosopher", line: "It's interestingly mixed. On the whole, people across very different cultures show some shared preferences: for symmetrical faces, for landscapes with water and open views, for certain musical intervals. These may well have evolutionary origins." },
        { who: "Host", line: "So beauty is universal?" },
        { who: "Philosopher", line: "Not quite. Those shared preferences are, for the most part, quite general. Beyond them, taste varies enormously by culture, period and individual. Consider the Japanese idea of wabi-sabi, the beauty of imperfection and transience: a cracked bowl, a faded wall. In some other traditions, such objects would be considered, strictly speaking, damaged rather than beautiful." },
        { who: "Host", line: "Where does that leave us?" },
        { who: "Philosopher", line: "With a more nuanced position. In essence, beauty seems to arise from an interaction between the object and the observer. The eighteenth-century philosopher David Hume argued that, although taste is subjective, some judgments are better informed than others. To all intents and purposes, that's where many philosophers still stand: beauty isn't simply objective, but nor is every opinion equally valid." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The philosopher agrees completely that beauty is in the eye of the beholder.", a: false },
            { s: "The Platonic tradition sees beauty as objective.", a: true },
            { s: "There are no shared aesthetic preferences across cultures.", a: false },
            { s: "Wabi-sabi values imperfection and transience.", a: true },
            { s: "Hume believed all opinions about taste are equally valid.", a: false }
          ]
        },
        {
          type: "match", title: "Ideas from the talk",
          prompt: "Match each idea with its explanation.",
          pairs: [
            ["the objective tradition", "beauty is a property of things"],
            ["the subjective tradition", "beauty exists in our response"],
            ["shared preferences", "symmetry, water, open views"],
            ["wabi-sabi", "the beauty of imperfection"],
            ["Hume's view", "some judgments are better informed"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an essay about beauty and imperfection.",
      title: "The beauty of broken things",
      text: [
        { body: "In Japan, there is a centuries-old practice called *kintsugi*, in which broken pottery is repaired with lacquer mixed with gold. Rather than hiding the cracks, the repair highlights them, so that the bowl becomes, in a sense, more beautiful for having been broken. The philosophy behind it is, in essence, an acceptance of damage as part of an object's history." },
        { body: "By and large, Western aesthetics has followed a different path. From the statues of classical Greece to the paintings of the Renaissance, beauty was associated with perfection: ideal proportions, flawless surfaces, perfect symmetry. Imperfections were, as a rule, something to be corrected or concealed." },
        { body: "This picture is, of course, a simplification. There have always been exceptions: Romantic painters celebrated ruins, and many modern artists have deliberately embraced roughness and accident. Yet, for the most part, the commercial culture of the present day remains committed to an ideal of flawlessness, visible in filtered photographs, cosmetic surgery and the endless replacement of anything that shows signs of wear." },
        { body: "Kintsugi offers, to some extent, a corrective to this. It suggests that the value of an object may lie precisely in its imperfections, in the evidence that it has been used, loved and repaired. Strictly speaking, it is a technique for fixing ceramics. In a broader sense, it is a philosophy of life: one that invites us to see our own scars, and those of others, not as flaws to be hidden but as marks of a history worth honouring." }
      ],
      activities: [
        {
          type: "sort", title: "Kintsugi or Western tradition?",
          prompt: "Sort the ideas according to the essay.",
          bins: ["kintsugi", "Western tradition (mostly)"],
          items: [
            { text: "highlighting the cracks", bin: 0 }, { text: "damage as part of history", bin: 0 }, { text: "value in imperfection", bin: 0 },
            { text: "ideal proportions", bin: 1 }, { text: "flawless surfaces", bin: 1 }, { text: "concealing imperfections", bin: 1 }
          ]
        },
        {
          type: "match", title: "Function of the expression",
          prompt: "Match each expression from the essay with its function there.",
          pairs: [
            ["…becomes, in a sense, more beautiful…", "from one point of view"],
            ["By and large, Western aesthetics…", "a generalization"],
            ["There have always been exceptions:", "qualifying the generalization"],
            ["Strictly speaking, it is a technique…", "being precise about the literal meaning"]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice generalizing and qualifying, then write a philosophical essay.",
      activities: [
        {
          type: "rewrite", title: "Generalize or qualify",
          prompt: "Rewrite each sentence using the expression in brackets.",
          items: [
            { q: "Generally, people prefer natural landscapes. (By and large)", a: ["By and large, people prefer natural landscapes."] },
            { q: "I partly agree, but not completely. (up to a point)", a: ["I agree up to a point.", "I agree, up to a point."] },
            { q: "If we are precise, this is not a painting. (Strictly speaking)", a: ["Strictly speaking, this is not a painting.", "Strictly speaking, this isn't a painting."] },
            { q: "In practice, the museum is closed. (To all intents and purposes)", a: ["To all intents and purposes, the museum is closed."] }
          ]
        },
        {
          type: "sort", title: "Generalize, qualify or approximate?",
          prompt: "Sort the expressions by their main function.",
          bins: ["generalize", "qualify", "approximate"],
          items: [
            { text: "by and large", bin: 0 }, { text: "as a rule", bin: 0 }, { text: "on the whole", bin: 0 },
            { text: "up to a point", bin: 1 }, { text: "to some extent", bin: 1 }, { text: "with few exceptions", bin: 1 },
            { text: "more or less", bin: 2 }, { text: "give or take", bin: 2 }
          ]
        },
        {
          type: "write", title: "A philosophical essay",
          prompt: "Write an essay (250–300 words) on **one** of these questions: *Is beauty objective or subjective? / Can something ugly be art? / Does beauty matter in everyday life?* Make generalizations, qualify them carefully, consider exceptions and reach a nuanced conclusion. Use at least **eight** expressions for generalizing, qualifying or approximating.",
          minWords: 250, maxWords: 300,
          model: "Can something ugly be art?<br>By and large, we associate art with beauty. When people visit a museum, they tend to expect paintings and sculptures that are pleasing to look at, and much of the art produced before the twentieth century was, broadly speaking, designed to meet that expectation. It is tempting, therefore, to conclude that art and beauty are inseparable.<br>Yet this view holds only up to a point. Consider Goya's late \"Black Paintings\", which depict violence, madness and despair. Strictly speaking, they are not beautiful; many viewers find them disturbing, even repellent. And yet few would deny that they are among the most powerful works of art ever created. The same could be said of many war photographs, or of novels that force us to confront cruelty.<br>What such examples suggest is that, in essence, the purpose of art is not necessarily to please but to make us see, feel or understand something more deeply. Ugliness, in this sense, can serve art as effectively as beauty, sometimes more so.<br>That said, I would not go so far as to claim that anything ugly can be art. A work must, to some extent, transform its subject through skill, vision or intention. A badly made object is not art simply because it is unpleasant to look at.<br>On the whole, then, I would argue that ugliness and art are perfectly compatible, with one condition: that the ugliness has a purpose. To all intents and purposes, the question is not whether a work is beautiful, but whether it is meaningful. And meaning, as Goya showed, can be found in the darkest places.",
          bank: ["By and large,", "broadly speaking,", "tend to", "up to a point", "Strictly speaking,", "in essence,", "in this sense,", "to some extent,", "On the whole,", "To all intents and purposes,"],
          checklist: [
            "I made **generalizations** and **qualified** them.",
            "I discussed at least one **example** or exception.",
            "I reached a **nuanced** conclusion.",
            "I used at least **eight** expressions from this unit."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat with a thoughtful, measured tone.",
          items: [
            "By and large, people prefer symmetry.",
            "I agree with you up to a point.",
            "In a sense, every object is art.",
            "Strictly speaking, it's not a painting.",
            "In essence, the work is about light.",
            "To all intents and purposes, it's finished."
          ]
        },
        {
          type: "speak", title: "Philosophy café",
          prompt: "Record yourself for about four minutes as if you were speaking at a philosophy café. Discuss the question *Is beauty in the eye of the beholder?* Give your view, offer examples from art, nature, people or everyday objects, consider exceptions, and reach a nuanced conclusion. Generalize and qualify carefully.",
          language: ["By and large,…", "As a rule,…", "To some extent,…", "Up to a point,…", "In a sense,…", "Strictly speaking,…", "In essence,…", "On the whole, I'd say…"],
          seconds: 270,
          checklist: ["give a clear view with examples?", "generalize and then qualify?", "consider exceptions?", "use at least six expressions from this unit?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can make generalizations with by and large, as a rule and on the whole.", review: "Explanation: generalizing" },
    { can: "I can qualify statements with to some extent, up to a point and in a sense.", review: "Explanation: qualifying and limiting; Writing activity 1" },
    { can: "I can use strictly speaking, in essence and to all intents and purposes.", review: "Explanation: essence and approximation" },
    { can: "I can distinguish generalizing, qualifying and approximating.", review: "Writing activity 2" },
    { can: "I can follow philosophical discussions about aesthetics.", review: "Listening and Reading activities" },
    { can: "I can discuss abstract questions with precision and nuance.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
