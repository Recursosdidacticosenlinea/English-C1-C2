window.UNIT = {
  slug: "moral-dilemmas",
  number: 34,
  title: "Moral Dilemmas",
  level: "C2",
  minutes: 90,
  speakers: { "Lucía": "f", "Mateo": "m", "Host": "m", "Ethicist": "f" },
  focus: ["Suppose / Supposing / Imagine (that) + past or past perfect", "What if… + past / past perfect", "Were we to… / Were it to be the case that…", "would rather / would sooner / It's high time + past for present preferences", "Would that… and If only… for literary wishes"],

  presentation: {
    scene: "🚋🤔⚖️💭",
    situation: "Lucía and Mateo are in a philosophy class. The lecturer has given them a famous thought experiment to discuss in pairs.",
    warmup: {
      prompt: "Would you do these things in an extreme situation? Choose all that you might do.",
      options: ["lie to protect a friend", "break a law to save a life", "steal medicine for a child", "report a family member", "break a promise", "sacrifice yourself", "keep a found wallet", "lie on a CV", "ignore an order", "read someone's diary", "betray a secret", "take credit for others' work"],
      response: "Moral dilemmas force us to imagine situations that haven't happened, and probably never will. That makes them perfect for practising the most sophisticated hypothetical structures in English."
    },
    dialogueTitle: "The trolley problem",
    dialogue: [
      { who: "Mateo", line: "OK. *Suppose* a train *were* heading towards five people, and you *could* pull a lever to send it towards one person instead. Would you do it?" },
      { who: "Lucía", line: "Probably, yes. Five lives against one. *What if* I *didn't*? I'd feel responsible for five deaths." },
      { who: "Mateo", line: "Now, *imagine* you *had to* push a man off a bridge to stop the train. Same result: one dies, five live." },
      { who: "Lucía", line: "That's different. I'd *sooner* not touch anyone. *Were I to* push him, I'd be a murderer." },
      { who: "Mateo", line: "But the outcome's identical. *Supposing* you *had pushed* him and saved the five. Would you regret it?" },
      { who: "Lucía", line: "Every day. *Would that* these choices only existed in philosophy books." },
      { who: "Mateo", line: "Well, they don't. Self-driving cars face versions of this problem. *It's high time* we *decided* how they should be programmed." },
      { who: "Lucía", line: "*I'd rather* engineers *didn't* decide it alone. Society should." }
    ]
  },

  objectives: [
    "I can use Suppose, Imagine and What if with past and past perfect forms.",
    "I can use Were we to… and Were it to be the case that… for formal hypotheses.",
    "I can use would rather, would sooner and It's high time with the past.",
    "I can discuss moral dilemmas with sophisticated hypothetical language."
  ],

  explanation: {
    vocabTitle: "Ethics and dilemmas",
    vocab: [
      { word: "a dilemma", icon: "🤔" }, { word: "a thought experiment", icon: "💭" }, { word: "the greater good", icon: "🌍" },
      { word: "the lesser of two evils", icon: "⚖️" }, { word: "a moral compass", icon: "🧭" }, { word: "a grey area", icon: "🌫️" },
      { word: "a matter of principle", icon: "📏" }, { word: "consequences", icon: "➡️" }, { word: "intentions", icon: "💡" },
      { word: "complicit", icon: "🤝" }, { word: "justify", icon: "✔️" }, { word: "a slippery slope", icon: "⛷️" },
      { word: "a clear conscience", icon: "😇" }, { word: "morally defensible", icon: "🛡️" }, { word: "the end justifies the means", icon: "🏁" }
    ],
    grammar: [
      {
        title: "Imagining situations",
        head: ["Structure", "Time", "Example"],
        rows: [
          ["*Suppose / Supposing / Imagine (that)* + past", "unreal present / future", "*Suppose a train were heading towards you.*"],
          ["*Suppose / Imagine (that)* + past perfect", "unreal past", "*Supposing you had pushed him, would you regret it?*"],
          ["*What if* + past", "imagined present / future", "*What if I didn't pull the lever?*"],
          ["*What if* + past perfect", "imagined past", "*What if they had refused?*"],
          ["*Suppose / What if* + present", "real possibility", "*What if the car fails? Suppose it rains.*"]
        ],
        note: "*Suppose* + present = a real possibility; *Suppose* + past = more hypothetical. Compare *Suppose he says no* (possible) and *Suppose he said no* (less likely)."
      },
      {
        title: "Formal and literary hypotheses",
        head: ["Structure", "Example"],
        rows: [
          ["*Were* + subject + *to* + infinitive", "*Were we to accept this, we would set a dangerous precedent.*"],
          ["*Were it to be the case that…*", "*Were it to be the case that the car had to choose, whom should it protect?*"],
          ["*Were it not for* + noun", "*Were it not for her courage, they would have died.*"],
          ["*Would that* + past (literary wish)", "*Would that such choices existed only in books.*"],
          ["*If only* + past / past perfect", "*If only we didn't have to choose. If only I had known.*"]
        ]
      },
      {
        title: "Preferences and criticism: would rather, would sooner, it's high time",
        head: ["Structure", "Example"],
        rows: [
          ["*would rather / sooner* + infinitive (same subject)", "*I'd sooner not touch anyone.*"],
          ["*would rather / sooner* + subject + past (different subject)", "*I'd rather engineers didn't decide alone.*"],
          ["*would rather* + subject + past perfect (past)", "*I'd rather you hadn't told me.*"],
          ["*It's (high / about) time* + subject + past", "*It's high time we decided how they should be programmed.*"]
        ]
      }
    ],
    watchOut: [
      ["Suppose you push him yesterday,…", "Suppose you *had pushed* him yesterday,…"],
      ["I'd rather that engineers don't decide.", "I'd rather engineers *didn't* decide."],
      ["It's high time we decide.", "It's high time we *decided*."],
      ["Were we accept this,…", "Were we *to* accept this,…"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with one word.",
      items: [
        "Suppose you [[had]] known the truth. Would you have told her?",
        "What [[if]] nobody had stopped the train?",
        "[[Were]] we to allow this, others would demand the same.",
        "I'd rather you [[didn't]] tell anyone about this.",
        "It's high time the government [[took|made]] action."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an ethicist discussing a modern version of the trolley problem.",
      title: "Machines that choose",
      script: [
        { who: "Host", line: "The trolley problem was invented as a thought experiment. Why is it suddenly so relevant?" },
        { who: "Ethicist", line: "Because, for the first time, we're building machines that might genuinely face such choices. Suppose a self-driving car's brakes failed. Should it continue straight and hit three pedestrians, or swerve and kill its own passenger?" },
        { who: "Host", line: "And what do people say?" },
        { who: "Ethicist", line: "A large online study collected millions of answers from people in over two hundred countries. Most agreed that the car should save more lives rather than fewer, and humans rather than animals. But there's a fascinating contradiction: most people also said they would rather not buy a car programmed to sacrifice its passengers." },
        { who: "Host", line: "So we want other people's cars to be ethical, but not our own." },
        { who: "Ethicist", line: "Exactly. And there were cultural differences too. In some regions, participants were more inclined to spare the young; in others, preferences were less pronounced. Were engineers to programme cars according to a single set of values, they would inevitably be imposing one culture's ethics on others." },
        { who: "Host", line: "So what's the solution?" },
        { who: "Ethicist", line: "I'm not sure there's a perfect one. But it's high time these decisions were made transparently, by public debate and regulation, rather than quietly inside technology companies. And, to be fair, the most important goal is to make such situations extraordinarily rare. If only we spent as much energy on preventing accidents as on debating them." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The trolley problem is becoming relevant because of self-driving cars.", a: true },
            { s: "Most participants wanted cars to save fewer lives.", a: false },
            { s: "Most people wanted to buy cars that would sacrifice passengers.", a: false },
            { s: "The study found some cultural differences.", a: true },
            { s: "The ethicist thinks companies should decide alone.", a: false }
          ]
        },
        {
          type: "match", title: "Complete the ideas",
          prompt: "Match the beginnings and endings from the interview.",
          pairs: [
            ["Suppose a self-driving car's brakes failed.", "Should it swerve or continue?"],
            ["Most people said they would rather", "not buy a car that sacrifices passengers."],
            ["Were engineers to programme a single set of values,", "they would impose one culture's ethics."],
            ["It's high time these decisions", "were made transparently."]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an extract from an introductory philosophy text.",
      title: "Consequences or principles?",
      text: [
        { body: "Imagine that you are a doctor with five patients, each of whom will die without an organ transplant. A healthy young man walks into your clinic for a routine check-up. Suppose you could, without anyone ever finding out, sacrifice him and use his organs to save the five. Should you?" },
        { body: "Almost everyone answers no, and the strength of this reaction is philosophically interesting. A strict consequentialist, who judges actions solely by their outcomes, might struggle to explain it: five lives saved at the cost of one seems a clear gain. Were we to follow this reasoning consistently, however, we would arrive at conclusions that most people find monstrous." },
        { body: "Deontologists offer a different account. For them, certain actions are wrong in themselves, whatever their consequences. Killing an innocent person violates a duty we owe to every individual, and no calculation of benefits can override it. What if the doctor's action were never discovered? It would make no difference: the act would be wrong even if nobody ever knew." },
        { body: "Yet deontology faces its own difficulties. Suppose a murderer asked you where your friend was hiding. A strict duty never to lie would require you to tell the truth, an answer most people would find equally unacceptable. Perhaps the most honest conclusion is that neither theory captures all our intuitions. Would that ethics were as simple as following a single rule; in practice, moral wisdom seems to lie in weighing principles and consequences together." }
      ],
      activities: [
        {
          type: "sort", title: "Consequentialist or deontologist?",
          prompt: "Sort the ideas according to the theory they belong to.",
          bins: ["consequentialism", "deontology"],
          items: [
            { text: "actions are judged by their outcomes", bin: 0 }, { text: "five lives saved is a clear gain", bin: 0 }, { text: "calculate benefits and costs", bin: 0 },
            { text: "some actions are wrong in themselves", bin: 1 }, { text: "we have duties to every individual", bin: 1 }, { text: "never lie, even to a murderer", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "Most people think the doctor should sacrifice the patient.", a: false },
            { s: "For deontologists, secrecy would make the doctor's action acceptable.", a: false },
            { s: "The writer thinks deontology has no weaknesses.", a: false },
            { s: "The writer suggests weighing principles and consequences together.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice hypothetical structures, then write a philosophical discussion.",
      activities: [
        {
          type: "rewrite", title: "Rewrite the hypothesis",
          prompt: "Rewrite each sentence using the words in brackets.",
          items: [
            { q: "If we accepted this argument, we would justify torture. (Were we)", a: ["Were we to accept this argument, we would justify torture."] },
            { q: "Imagine that you found a wallet full of money. What would you do? (Suppose)", a: ["Suppose you found a wallet full of money. What would you do?", "Suppose you found a wallet full of money, what would you do?"] },
            { q: "I want you not to tell anyone. (I'd rather)", a: ["I'd rather you didn't tell anyone.", "I would rather you didn't tell anyone."] },
            { q: "We should have discussed this years ago. (It's high time)", a: ["It's high time we discussed this.", "It is high time we discussed this."] }
          ]
        },
        {
          type: "sort", title: "Real or unreal?",
          prompt: "Does each sentence describe a real possibility or an unreal hypothesis?",
          bins: ["real possibility", "unreal / hypothetical"],
          items: [
            { text: "Suppose it rains tomorrow.", bin: 0 }, { text: "What if the bus is late?", bin: 0 }, { text: "Suppose he says no.", bin: 0 },
            { text: "Suppose you were invisible.", bin: 1 }, { text: "What if you had been born in 1800?", bin: 1 }, { text: "Were it to happen, we'd be ruined.", bin: 1 }
          ]
        },
        {
          type: "write", title: "A moral dilemma",
          prompt: "Write a discussion essay (250–300 words) on **one** moral dilemma: *the trolley problem, the self-driving car, lying to protect someone, or stealing medicine for a dying child.* Present the dilemma, explain how a consequentialist and a deontologist might respond, test both positions with a variation (*What if…?*), and give your own conclusion. Use at least **eight** hypothetical structures.",
          minWords: 250, maxWords: 300,
          model: "Imagine that your child is seriously ill and a medicine that could save her costs far more than you could ever pay. The pharmacist refuses to lower the price. Suppose you had the chance to steal it without being caught. Would you be justified in doing so?<br>A consequentialist would probably say yes. Weighing the outcomes, the loss suffered by the pharmacist is small compared with the value of a child's life. Were we to refuse to steal, we would be choosing to let someone die in order to protect a sum of money, a choice that is difficult to defend.<br>A deontologist, by contrast, might argue that stealing is wrong regardless of its consequences. If everyone stole whenever they believed their cause was just, the very idea of property, and the trust on which society depends, would collapse. On this view, I would rather accept a terrible outcome than violate a fundamental moral rule.<br>Yet variations test both positions. What if the medicine were the last dose available, and stealing it meant another child would die? Suddenly, the consequentialist calculation becomes far less clear. And supposing the parent had already tried every legal option and been refused by everyone, would the deontologist's rule still seem convincing?<br>In my view, most people would steal the medicine, and very few would condemn them for it. However, this does not mean that stealing is right in general. It suggests rather that the real failure lies elsewhere: in a system that allows life-saving treatment to be unaffordable. It is high time we asked not only what desperate individuals should do, but why they are placed in such situations in the first place. If only the dilemma existed solely in philosophy books.",
          bank: ["Imagine that…", "Suppose you had…", "Were we to…", "If everyone stole…, … would…", "I would rather…", "What if the medicine were…?", "supposing the parent had…", "It is high time we asked…", "If only…"],
          checklist: [
            "I presented the **dilemma** clearly.",
            "I explained both a **consequentialist** and a **deontological** view.",
            "I tested the positions with a **variation**.",
            "I used at least **eight** hypothetical structures."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Rise in pitch on the hypothesis.",
          items: [
            "Suppose you could pull a lever.",
            "What if you had pushed him?",
            "Were we to accept this, it would change everything.",
            "I'd rather engineers didn't decide alone.",
            "It's high time we decided.",
            "If only we didn't have to choose."
          ]
        },
        {
          type: "speak", title: "What would you do?",
          prompt: "Record yourself for about four minutes. Choose **two** of the dilemmas below. For each, explain what you would do and why, consider what would happen if you chose differently, and test your answer with a variation. *1) You see your best friend cheating in an important exam. 2) You find out your company is secretly polluting a river, and reporting it would cost you your job. 3) A self-driving car must choose between hitting an elderly person and a child. 4) You could save five strangers or one member of your family.*",
          language: ["Suppose I…, I would…", "What if…?", "Were I to…,", "Supposing I had…,", "I'd rather… than…", "It's a matter of principle", "the lesser of two evils", "If only it were that simple."],
          seconds: 270,
          checklist: ["discuss two dilemmas?", "explain your choice and the alternative?", "test your answer with a variation?", "use at least six hypothetical structures?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use Suppose, Imagine and What if with past and past perfect.", review: "Explanation: imagining situations" },
    { can: "I can distinguish real and unreal hypotheses with Suppose.", review: "Explanation: note; Writing activity 2" },
    { can: "I can use Were we to… and Were it to be the case that…", review: "Explanation: formal and literary hypotheses" },
    { can: "I can use would rather, would sooner and It's high time + past.", review: "Explanation: preferences and criticism; Writing activity 1" },
    { can: "I can follow philosophical arguments about ethics.", review: "Listening and Reading activities" },
    { can: "I can discuss moral dilemmas in sophisticated language.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
