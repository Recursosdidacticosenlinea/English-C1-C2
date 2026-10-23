window.UNIT = {
  slug: "who-holds-the-power",
  number: 31,
  title: "Who Holds the Power?",
  level: "C2",
  minutes: 90,
  speakers: { "Valeria": "f", "Diego": "m", "Host": "m", "Political scientist": "f" },
  focus: ["nominal that-clauses as subjects: That power corrupts is widely accepted", "the fact that…, the idea that…, the notion that…", "wh-clauses as subjects and objects: What matters is…, Whoever controls…", "whether-clauses: Whether this will work remains unclear", "the extent to which / the degree to which / the way in which"],

  presentation: {
    scene: "🏛️♟️🗳️🌐",
    situation: "Valeria and Diego are political science students preparing for a seminar on the question *Who really holds power in the 21st century: governments, corporations or citizens?*",
    warmup: {
      prompt: "Who do you think has the most power in your country today? Choose all that apply.",
      options: ["the president", "congress", "the courts", "big companies", "banks", "tech platforms", "the media", "the army", "voters", "social movements", "organized crime", "international organizations"],
      response: "Discussing power requires abstract, academic language. In this unit you'll learn nominal clauses, which allow you to turn whole ideas into the subject or object of a sentence."
    },
    dialogueTitle: "Preparing the seminar",
    dialogue: [
      { who: "Diego", line: "My argument is simple: *whoever controls the data* controls the world." },
      { who: "Valeria", line: "It's catchy. But *the extent to which* tech companies control politics is very hard to measure." },
      { who: "Diego", line: "*The fact that* a few platforms decide what billions of people see is surely evidence enough." },
      { who: "Valeria", line: "*That they influence opinion* is undeniable. *Whether they determine election results* is a different question." },
      { who: "Diego", line: "Fine. So *what you're saying is* that governments still have the final word?" },
      { who: "Valeria", line: "Not exactly. *What interests me* is *the way in which* power has become distributed, across states, companies and citizens." },
      { who: "Diego", line: "*The notion that* citizens have real power sounds a bit optimistic." },
      { who: "Valeria", line: "Maybe. But *how quickly protests can spread online* suggests that ordinary people aren't entirely powerless either." }
    ]
  },

  objectives: [
    "I can use that-clauses and the fact that… as subjects of sentences.",
    "I can use wh-clauses and whoever / whatever clauses as subjects and objects.",
    "I can use whether-clauses and expressions like the extent to which.",
    "I can discuss abstract questions about power in academic language."
  ],

  explanation: {
    vocabTitle: "Power and politics",
    vocab: [
      { word: "sovereignty", icon: "👑" }, { word: "legitimacy", icon: "✅" }, { word: "checks and balances", icon: "⚖️" },
      { word: "the separation of powers", icon: "🏛️" }, { word: "accountability", icon: "📋" }, { word: "lobbying", icon: "💼" },
      { word: "soft power", icon: "🎬" }, { word: "hard power", icon: "🪖" }, { word: "grassroots", icon: "🌱" },
      { word: "the establishment", icon: "🏢" }, { word: "a power vacuum", icon: "🕳️" }, { word: "concentration of power", icon: "🎯" },
      { word: "wield influence", icon: "🪄" }, { word: "hold to account", icon: "👆" }, { word: "erode trust", icon: "🧱" }
    ],
    grammar: [
      {
        title: "That-clauses and the fact that",
        intro: "A **nominal clause** works like a noun. In formal English, a whole clause can be the subject of a sentence.",
        head: ["Structure", "Example", "Note"],
        rows: [
          ["*That* + clause as subject", "*That power corrupts is widely accepted.*", "very formal; *It is widely accepted that…* is more common"],
          ["*The fact that* + clause", "*The fact that few people vote is worrying.*", "neutral, very common"],
          ["*The idea / notion / claim / belief that…*", "*The notion that citizens are powerless is exaggerated.*", "introduces an idea to evaluate"],
          ["after prepositions: *the fact that*", "*Despite the fact that turnout was low,…*", "never *despite that turnout was low*"]
        ]
      },
      {
        title: "Wh-clauses and whether-clauses",
        head: ["Structure", "Example"],
        rows: [
          ["*What* + clause as subject", "*What matters is who controls the data.*"],
          ["*Whoever / whatever* + clause", "*Whoever controls the data controls the world.*"],
          ["*How / why / where* + clause", "*How quickly protests spread suggests…*"],
          ["*Whether* + clause as subject", "*Whether this will work remains unclear.*"],
          ["*whether* after prepositions", "*It depends on whether people trust the system.* (not *if*)"]
        ],
        note: "Use *whether*, not *if*, at the start of a sentence and after prepositions."
      },
      {
        title: "The extent to which and similar",
        head: ["Expression", "Example"],
        rows: [
          ["*the extent to which*", "*the extent to which tech companies influence elections*"],
          ["*the degree to which*", "*the degree to which voters trust the media*"],
          ["*the way(s) in which*", "*the way in which power has been distributed*"],
          ["*the reason(s) why*", "*the reasons why trust has eroded*"],
          ["*To what extent…?* (question)", "*To what extent do citizens hold real power?*"]
        ]
      }
    ],
    watchOut: [
      ["If this will work remains unclear.", "*Whether* this will work remains unclear."],
      ["Despite that few people voted,…", "Despite *the fact that* few people voted,…"],
      ["What matters it is who controls the data.", "What matters *is* who controls the data."],
      ["The extent which they influence us…", "The extent *to which* they influence us…"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with one word.",
      items: [
        "The [[fact]] that so few young people vote is a serious concern.",
        "[[Whether]] the new law will be effective remains to be seen.",
        "[[Whoever]] controls information controls public opinion.",
        "It is difficult to measure the extent to [[which]] advertising affects voters.",
        "[[What]] worries many experts is the concentration of power."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a political scientist discussing how power has changed.",
      title: "The end of power?",
      script: [
        { who: "Host", line: "Some writers argue that power is becoming easier to get, but harder to use and easier to lose. Do you agree?" },
        { who: "Political scientist", line: "To a large extent, yes. That traditional institutions, governments, armies, large corporations, are losing some of their dominance is fairly clear. What's less clear is who, exactly, is gaining it." },
        { who: "Host", line: "Could you give some examples?" },
        { who: "Political scientist", line: "Think of how small online movements can force a multinational company to change policy within days, or how new parties can win elections almost overnight. The fact that it's now cheaper to organize and communicate has lowered the barriers to entry." },
        { who: "Host", line: "But aren't tech platforms a new concentration of power?" },
        { who: "Political scientist", line: "That's the paradox. The tools that empower citizens are owned by a handful of companies. Whether those companies are simply neutral platforms or powerful political actors is one of the central questions of our time. Personally, I find the notion that they're neutral increasingly difficult to defend." },
        { who: "Host", line: "So what should we be paying attention to?" },
        { who: "Political scientist", line: "The degree to which power is accountable. What matters isn't only who holds power, but whether they can be held to account: by voters, courts, journalists or regulators. Power without accountability, whoever holds it, tends to be abused." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "She agrees that traditional institutions are losing some dominance.", a: true },
            { s: "It is completely clear who is gaining power.", a: false },
            { s: "Cheaper communication has made it easier to organize.", a: true },
            { s: "She strongly believes tech platforms are neutral.", a: false },
            { s: "For her, accountability is a key question.", a: true }
          ]
        },
        {
          type: "match", title: "Complete her ideas",
          prompt: "Match the beginnings and endings of her sentences.",
          pairs: [
            ["What's less clear is", "who, exactly, is gaining power."],
            ["The fact that it's now cheaper to organize", "has lowered the barriers to entry."],
            ["Whether those companies are neutral", "is one of the central questions of our time."],
            ["What matters isn't only who holds power,", "but whether they can be held to account."]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an extract from an academic essay about power.",
      title: "Visible and invisible power",
      text: [
        { body: "Discussions of power have traditionally focused on its most visible forms: the ability of a government to pass laws, of an army to win wars, or of a company to dominate a market. That such forms of power remain important is beyond dispute. Yet a substantial body of scholarship suggests that what is most significant about power is often what cannot easily be seen." },
        { body: "The political theorist Steven Lukes famously distinguished between three dimensions of power. The first concerns who wins open conflicts, such as votes or negotiations. The second concerns who controls the agenda: which issues are discussed at all, and which are quietly excluded. The third, and most subtle, concerns the extent to which people's very desires and beliefs are shaped in ways that serve the interests of others." },
        { body: "The fact that the third dimension operates largely without conflict makes it particularly difficult to study. If citizens do not perceive an injustice, they will not protest against it. Whether the absence of protest reflects genuine contentment or a successful shaping of preferences is, therefore, a question that cannot be answered simply by observing behaviour." },
        { body: "This framework has proved remarkably relevant in the digital age. The way in which recommendation algorithms determine what information reaches us arguably constitutes a form of agenda-setting more powerful than any newspaper ever possessed. How such power should be regulated, and by whom, remains one of the most pressing questions facing democratic societies." }
      ],
      activities: [
        {
          type: "match", title: "Three dimensions of power",
          prompt: "Match each dimension with its description.",
          pairs: [
            ["first dimension", "who wins open conflicts like votes"],
            ["second dimension", "who controls which issues are discussed"],
            ["third dimension", "who shapes people's desires and beliefs"],
            ["recommendation algorithms", "a modern form of agenda-setting"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The writer thinks visible forms of power are unimportant.", a: false },
            { s: "The third dimension is the easiest to study.", a: false },
            { s: "A lack of protest does not necessarily mean people are content.", a: true },
            { s: "The writer believes Lukes's framework is outdated.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice nominal clauses, then write an academic paragraph.",
      activities: [
        {
          type: "rewrite", title: "Make the clause the subject",
          prompt: "Rewrite each sentence starting with the word or words given.",
          items: [
            { q: "It is clear that the media influences elections. (That…)", a: ["That the media influences elections is clear."] },
            { q: "It remains unclear whether the reform will work. (Whether…)", a: ["Whether the reform will work remains unclear."] },
            { q: "Few young people vote, and this is worrying. (The fact that…)", a: ["The fact that few young people vote is worrying."] },
            { q: "Anyone who controls the data controls the market. (Whoever…)", a: ["Whoever controls the data controls the market."] }
          ]
        },
        {
          type: "gap", title: "Academic phrases",
          prompt: "Complete with one word.",
          items: [
            "This essay examines the extent to [[which]] social media shapes public opinion.",
            "Researchers disagree about the degree [[to]] which voters are influenced by advertising.",
            "The [[way|ways]] in which power is distributed has changed dramatically.",
            "It depends on [[whether]] citizens trust their institutions.",
            "The [[notion|idea|claim|belief]] that citizens are powerless is an exaggeration."
          ]
        },
        {
          type: "write", title: "An academic response",
          prompt: "Write an academic essay (250–300 words) responding to the question: *To what extent do ordinary citizens hold real power in the 21st century?* Present different views, refer to examples, and reach a nuanced conclusion. Use at least **eight** nominal clauses (that-clauses, the fact that, wh-clauses, whether-clauses, the extent to which, etc.).",
          minWords: 250, maxWords: 300,
          model: "To what extent do ordinary citizens hold real power in the 21st century?<br>That citizens in democratic societies possess formal power, primarily through the vote, is undeniable. What is far more contested is the extent to which this formal power translates into genuine influence over the decisions that shape their lives.<br>Those who argue that citizens are more powerful than ever point to the fact that digital technology has dramatically lowered the cost of organizing. Movements that once required years of preparation can now mobilize millions within days, and whoever captures public attention online can force even the largest institutions to respond. How quickly companies have withdrawn controversial products after online campaigns illustrates this new form of pressure.<br>Critics, however, question whether such influence is lasting. The notion that a viral campaign represents real power, they argue, confuses visibility with control. What often happens is that attention fades quickly, while the structures that concentrate wealth and decision-making remain largely intact. Moreover, the platforms that enable citizen activism are themselves owned by a small number of corporations, whose decisions about what users see are subject to very limited public scrutiny.<br>In my view, the answer depends on whether citizens are able to convert momentary attention into sustained participation. Where movements have built durable organizations, alliances and legal strategies, they have achieved significant change. Where they have relied solely on online outrage, their impact has been brief.<br>Ultimately, the degree to which citizens hold real power is not fixed. It depends less on the tools available to them than on the way in which those tools are used, and on whether democratic institutions remain open enough to respond.",
          bank: ["That… is undeniable.", "What is far more contested is…", "the extent to which…", "the fact that…", "whoever…", "How quickly… illustrates…", "question whether…", "The notion that…", "What often happens is that…", "depends on whether…", "the degree to which…", "the way in which…"],
          checklist: [
            "I presented **different views** with examples.",
            "I reached a **nuanced** conclusion.",
            "I used at least **eight** nominal clauses.",
            "I used *whether* (not *if*) at the start and after prepositions."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Keep the long subject together before the verb.",
          items: [
            "Whoever controls the data controls the world.",
            "What matters is who controls the agenda.",
            "Whether it will work remains unclear.",
            "The fact that few people vote is worrying.",
            "It depends on whether people trust it.",
            "That power corrupts is widely accepted."
          ]
        },
        {
          type: "speak", title: "Seminar contribution",
          prompt: "Record a seminar contribution (about four minutes) on the question: *Who really holds power in your country: the government, corporations, the media or citizens?* Present your argument, give examples, consider at least one objection, and conclude. Use nominal clauses to express abstract ideas.",
          language: ["What I'd like to argue is that…", "The fact that… suggests…", "Whoever controls…", "Whether… is debatable.", "The extent to which…", "The notion that… seems to me…", "What this shows is…", "It ultimately depends on whether…"],
          seconds: 270,
          checklist: ["present a clear argument with examples?", "consider at least one objection?", "use at least six nominal clauses?", "conclude clearly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use that-clauses and the fact that as subjects.", review: "Explanation: that-clauses and the fact that; Writing activity 1" },
    { can: "I can use what-, whoever- and how-clauses as subjects.", review: "Explanation: wh-clauses and whether-clauses" },
    { can: "I can use whether correctly instead of if.", review: "Explanation: note; Writing activity 2" },
    { can: "I can use the extent to which and similar expressions.", review: "Explanation: the extent to which and similar" },
    { can: "I can follow academic discussions about power.", review: "Listening and Reading activities" },
    { can: "I can express abstract arguments in academic language.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
