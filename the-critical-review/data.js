window.UNIT = {
  slug: "the-critical-review",
  number: 30,
  title: "The Critical Review",
  level: "C2",
  minutes: 95,
  speakers: { "Fernanda": "f", "Óscar": "m", "Host": "f", "Critic": "m" },
  focus: ["structure of a critical review: context, summary, evaluation, verdict", "evaluative language: compelling, derivative, uneven, thought-provoking", "balancing praise and criticism: for all its flaws, while… falls short of", "hedged and nuanced judgments: arguably, at times, to some extent", "summarizing a work concisely and objectively"],

  presentation: {
    scene: "📚🎬⭐🖋️",
    situation: "Fernanda writes reviews for a cultural magazine. Her colleague Óscar has read her draft review of a much-praised new novel and thinks she's being unfair.",
    warmup: {
      prompt: "What do you look for in a good review? Choose all that apply.",
      options: ["a clear opinion", "a short summary", "no spoilers", "comparisons with other works", "examples", "humour", "an expert's knowledge", "balance", "a star rating", "context about the author", "a recommendation", "beautiful writing"],
      response: "A critical review at C2 does more than say whether you liked something. It places the work in context, evaluates it with precise language and reaches a balanced, well-supported verdict."
    },
    dialogueTitle: "Too harsh?",
    dialogue: [
      { who: "Óscar", line: "You call the novel *self-indulgent and derivative*. That's quite a strong judgment." },
      { who: "Fernanda", line: "I stand by it. The structure is borrowed from three other books, and the middle section drags terribly." },
      { who: "Óscar", line: "But the prose is beautiful. Even you admit that in paragraph four." },
      { who: "Fernanda", line: "True. *For all its flaws*, the writing is often dazzling." },
      { who: "Óscar", line: "Then say that earlier. Readers need to see that your criticism is *balanced*, not just negative." },
      { who: "Fernanda", line: "So maybe: *While the novel's ambition is admirable, it ultimately falls short of its own promise.*" },
      { who: "Óscar", line: "Much better. And instead of *derivative*, maybe *it owes a considerable debt to*. It's still critical, but more precise." },
      { who: "Fernanda", line: "OK. *Uneven but frequently brilliant.* Three and a half stars. Happy?" }
    ]
  },

  objectives: [
    "I can structure a critical review with context, summary, evaluation and verdict.",
    "I can use a wide range of precise evaluative language.",
    "I can balance praise and criticism and express nuanced judgments.",
    "I can write a sophisticated critical review of a book, film, exhibition or series."
  ],

  explanation: {
    vocabTitle: "Evaluative language",
    vocab: [
      { word: "compelling", icon: "🧲" }, { word: "thought-provoking", icon: "💭" }, { word: "a tour de force", icon: "🏆" },
      { word: "nuanced", icon: "🎨" }, { word: "understated", icon: "🤫" }, { word: "evocative", icon: "🌅" },
      { word: "uneven", icon: "📉" }, { word: "derivative", icon: "📋" }, { word: "self-indulgent", icon: "🪞" },
      { word: "contrived", icon: "🧵" }, { word: "heavy-handed", icon: "🔨" }, { word: "it drags", icon: "🐌" },
      { word: "it falls flat", icon: "🎈" }, { word: "it falls short of", icon: "📏" }, { word: "it lives up to the hype", icon: "🔥" }
    ],
    grammar: [
      {
        title: "Structure of a critical review",
        head: ["Section", "Purpose", "Useful language"],
        rows: [
          ["Context", "introduce the work, creator and background", "*The long-awaited second novel by…, … marks a departure from…*"],
          ["Summary", "brief, objective, no spoilers", "*Set in…, the novel follows… / The film centres on…*"],
          ["Evaluation: strengths", "specific, with examples", "*Where the film truly excels is in… / The most striking aspect is…*"],
          ["Evaluation: weaknesses", "specific, fair", "*The novel is less successful in… / The final act feels contrived.*"],
          ["Verdict", "overall judgment and recommendation", "*For all its flaws,… / Uneven but frequently brilliant, … is well worth…*"]
        ]
      },
      {
        title: "Balancing and nuancing judgments",
        head: ["Structure", "Example"],
        rows: [
          ["*For all its + noun, …*", "*For all its flaws, the novel is a remarkable achievement.*"],
          ["*While X is…, Y…*", "*While the acting is superb, the script lets it down.*"],
          ["*falls short of / doesn't quite live up to*", "*It falls short of the director's earlier work.*"],
          ["*owes a (considerable) debt to*", "*The structure owes a considerable debt to Borges.*"],
          ["*at times / in places / occasionally*", "*The pacing is, at times, frustratingly slow.*"],
          ["*arguably / perhaps / to some extent*", "*It is arguably her most personal work.*"],
          ["*what it lacks in X, it makes up for in Y*", "*What it lacks in subtlety, it makes up for in energy.*"]
        ],
        note: "A strong review supports every judgment with **evidence**: a scene, a quotation, a technique. *The dialogue is wooden* is weaker than *The dialogue, particularly in the courtroom scenes, feels wooden and over-explained.*"
      }
    ],
    watchOut: [
      ["The film is good. I liked it very much.", "The film is *a quietly compelling* study of grief."],
      ["The book is bad.", "The book *falls short of* its ambitious premise."],
      ["(Summary) And at the end the detective dies.", "(No spoilers) *The ending is likely to divide readers.*"],
      ["For all its flaw, it's brilliant.", "For all its *flaws*, it's brilliant."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each phrase with one word.",
      items: [
        "For [[all]] its flaws, the film is a remarkable achievement.",
        "The sequel falls [[short]] of the original.",
        "The novel owes a considerable [[debt]] to classic detective fiction.",
        "What it lacks in subtlety, it makes [[up]] for in energy.",
        "Does the series live up to the [[hype]]?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a film critic explaining what makes a review worth reading.",
      title: "Criticism as conversation",
      script: [
        { who: "Host", line: "In the age of star ratings and online comments, do we still need professional critics?" },
        { who: "Critic", line: "I'd say more than ever, but only if critics do the job properly. A star rating tells you whether someone liked a film. A good review tells you why, and helps you decide whether you would like it, which isn't always the same thing." },
        { who: "Host", line: "What distinguishes a good review?" },
        { who: "Critic", line: "Three things. First, context. Where does this film sit in the director's career, in its genre, in the culture of the moment? Second, specificity. Don't tell me the cinematography is beautiful; tell me how the camera stays on the actor's face a moment longer than is comfortable, and what that achieves. And third, honesty about your own position." },
        { who: "Host", line: "Your own position?" },
        { who: "Critic", line: "Yes. Every critic has tastes and blind spots. If I find musicals irritating, it's fairer to admit that than to pretend my judgment is purely objective. Readers can then adjust for my bias." },
        { who: "Host", line: "And negative reviews? Are they harder to write?" },
        { who: "Critic", line: "They're easier to write badly. It's very tempting to be witty at the expense of a film, and some of the most quoted reviews are brutal. But the best negative reviews take the work seriously. They identify what it was trying to do and explain precisely why it doesn't succeed. Criticism, at its best, is a conversation with the work, not a verdict shouted from a distance." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The critic thinks professional critics are no longer needed.", a: false },
            { s: "He says a good review helps readers decide if they would enjoy the work.", a: true },
            { s: "He thinks critics should hide their personal tastes.", a: false },
            { s: "He believes negative reviews are easier to write badly.", a: true },
            { s: "He thinks the best negative reviews take the work seriously.", a: true }
          ]
        },
        {
          type: "match", title: "Three qualities",
          prompt: "Match each quality of a good review with the critic's explanation.",
          pairs: [
            ["context", "where the work sits in a career, genre or culture"],
            ["specificity", "describing exactly what a technique achieves"],
            ["honesty", "admitting your own tastes and blind spots"],
            ["seriousness", "explaining why a work does or doesn't succeed"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a model critical review of a novel.",
      title: "Review: The Salt Archive",
      text: [
        { body: "*The Salt Archive*, the long-awaited second novel by the author of the prize-winning *Northern Wind*, marks a bold departure from the intimate family drama of her debut. Ambitious in scope and structure, it is a book that will delight some readers and exasperate others." },
        { body: "Set across three timelines, in a coastal village in the 1890s, during the 1960s and in the near future, the novel follows the descendants of a family of salt workers as they struggle to preserve both their land and their memories. Linking the three stories is a mysterious archive of letters, which passes from generation to generation and gradually reveals a long-buried crime." },
        { body: "Where the novel truly excels is in its prose. The descriptions of the salt flats, *white as a page waiting to be written on*, are often breathtaking, and the nineteenth-century sections, in particular, are rendered with remarkable precision and restraint. The central character of the 1960s narrative, a stubborn, witty schoolteacher, is arguably the author's finest creation to date." },
        { body: "The book is less successful, however, in its future timeline. These chapters, which explore climate migration, feel underdeveloped, and their dialogue tends towards the heavy-handed, as though the author were more interested in delivering a message than in creating characters. The structure, too, owes a considerable debt to several well-known multi-generational novels, and the frequent switches between periods mean that the middle section drags." },
        { body: "For all its flaws, *The Salt Archive* remains a serious, often moving achievement. It does not quite live up to the extraordinary promise of its first hundred pages, but readers willing to forgive its unevenness will find much to admire. ★★★½" }
      ],
      activities: [
        {
          type: "match", title: "Structure of the review",
          prompt: "Match each paragraph with its function.",
          pairs: [
            ["Paragraph 1", "context: the author and her previous work"],
            ["Paragraph 2", "an objective summary without spoilers"],
            ["Paragraph 3", "strengths, with specific examples"],
            ["Paragraph 4", "weaknesses, with specific examples"],
            ["Paragraph 5", "a balanced verdict"]
          ]
        },
        {
          type: "sort", title: "Praise or criticism?",
          prompt: "Sort the phrases from the review.",
          bins: ["praise", "criticism"],
          items: [
            { text: "often breathtaking", bin: 0 }, { text: "rendered with remarkable precision", bin: 0 }, { text: "the author's finest creation to date", bin: 0 },
            { text: "feel underdeveloped", bin: 1 }, { text: "tends towards the heavy-handed", bin: 1 }, { text: "the middle section drags", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice evaluative language, then write your own critical review.",
      activities: [
        {
          type: "rewrite", title: "Make it more precise",
          prompt: "Rewrite each sentence using the words in brackets.",
          items: [
            { q: "The film has many problems, but it's very good. (For all)", a: ["For all its problems, the film is very good.", "For all its flaws, the film is very good.", "For all its problems, it's very good."] },
            { q: "The new album is not as good as the first one. (falls short of)", a: ["The new album falls short of the first one.", "The new album falls short of the first."] },
            { q: "The show isn't subtle, but it's very energetic. (What it lacks)", a: ["What it lacks in subtlety, it makes up for in energy.", "What the show lacks in subtlety, it makes up for in energy."] },
            { q: "The plot copies a lot from earlier thrillers. (owes)", a: ["The plot owes a considerable debt to earlier thrillers.", "The plot owes a debt to earlier thrillers.", "The plot owes a great deal to earlier thrillers."] }
          ]
        },
        {
          type: "sort", title: "Positive or negative?",
          prompt: "Sort the evaluative adjectives.",
          bins: ["positive", "negative"],
          items: [
            { text: "compelling", bin: 0 }, { text: "evocative", bin: 0 }, { text: "nuanced", bin: 0 }, { text: "thought-provoking", bin: 0 },
            { text: "contrived", bin: 1 }, { text: "derivative", bin: 1 }, { text: "self-indulgent", bin: 1 }, { text: "heavy-handed", bin: 1 }
          ]
        },
        {
          type: "write", title: "Your critical review",
          prompt: "Write a critical review (260–320 words) of a book, film, series, album or exhibition for a cultural magazine. Include context, a brief summary without spoilers, specific strengths and weaknesses supported by examples, and a balanced verdict. Use a wide range of precise evaluative language.",
          minWords: 260, maxWords: 320,
          model: "Review: Roma (dir. Alfonso Cuarón)<br>Few films have been as eagerly anticipated, or as fiercely debated, as Alfonso Cuarón's return to the Mexico City of his childhood. After the technical spectacle of Gravity, Roma represents a deliberate turn towards the personal: a black-and-white portrait of a middle-class family in the early 1970s, seen through the eyes of Cleo, the young indigenous woman who works for them.<br>The plot is deceptively simple. Over the course of a year, Cleo cares for the family's children, falls in love and faces a series of personal crises, while the household itself slowly falls apart and political violence erupts in the streets outside.<br>Where the film truly excels is in its visual language. Cuarón, who served as his own cinematographer, favours long, slow tracking shots that place Cleo within vast, meticulously recreated spaces, forcing the audience to notice the everyday labour that the family barely registers. The sequence on a crowded beach, filmed in a single unbroken take, is among the most quietly devastating moments in recent cinema. Yalitza Aparicio, in her first role, gives a performance of extraordinary restraint.<br>The film is not without its weaknesses. Its deliberate pace will test the patience of some viewers, and the first hour, in particular, drags in places. More seriously, some critics have argued that, for all its tenderness, the film keeps Cleo at a distance, observing her rather than allowing us fully into her inner life. It is a fair criticism, although arguably one that reflects the very social distance the film sets out to expose.<br>Uneven in rhythm but extraordinary in vision, Roma is a demanding, deeply personal work that rewards patience. It does not offer easy answers, but it is unquestionably one of the most important Mexican films of its generation. ★★★★½",
          bank: ["represents a deliberate turn towards…", "deceptively simple", "Where the film truly excels is…", "meticulously", "quietly devastating", "is not without its weaknesses", "drags in places", "for all its…", "arguably", "Uneven in… but extraordinary in…"],
          checklist: [
            "I gave **context** about the work and its creator.",
            "My summary is **brief**, **objective** and has **no spoilers**.",
            "I supported strengths and weaknesses with **specific examples**.",
            "My verdict is **balanced** and uses precise evaluative language."
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
            "For all its flaws, it's remarkable.",
            "It falls short of its own promise.",
            "The middle section drags terribly.",
            "Where it truly excels is the acting.",
            "It owes a considerable debt to others.",
            "Uneven, but frequently brilliant."
          ]
        },
        {
          type: "speak", title: "The critics' corner",
          prompt: "Record a spoken review (about four minutes) for a cultural podcast of a book, film, series, album or exhibition you know well. Give context, a brief summary, at least two specific strengths and one specific weakness, and a balanced verdict with a rating. Speak as a critic, not just a fan.",
          language: ["… marks a departure from…", "Set in…, it follows…", "Where it truly excels is…", "The most striking aspect is…", "It's less successful in…", "At times, it feels…", "For all its flaws,…", "It's well worth… / It doesn't quite live up to…"],
          seconds: 270,
          checklist: ["give context and a summary without spoilers?", "support judgments with specific examples?", "balance praise and criticism?", "give a clear verdict?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can structure a critical review in clear sections.", review: "Explanation: structure; Reading activity 1" },
    { can: "I can use precise evaluative adjectives and expressions.", review: "Explanation: vocabulary; Writing activity 2" },
    { can: "I can balance praise and criticism with structures like For all its…", review: "Explanation: balancing and nuancing judgments; Writing activity 1" },
    { can: "I can support my judgments with specific evidence.", review: "Explanation: note; Reading" },
    { can: "I can understand what professional critics value.", review: "Listening activities" },
    { can: "I can write and speak about a work as a critic.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
