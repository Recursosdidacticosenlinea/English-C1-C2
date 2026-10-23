window.UNIT = {
  slug: "cause-and-effect",
  number: 19,
  title: "Cause and Effect",
  level: "C1",
  minutes: 80,
  speakers: { "Sara": "f", "Gabriel": "m", "Host": "f", "Epidemiologist": "m" },
  focus: ["verbs of cause: cause, lead to, give rise to, bring about, trigger, result in", "verbs of origin: stem from, arise from, result from, be attributable to", "nouns of cause and effect: the root cause, a knock-on effect, a side effect", "correlation vs causation: be linked to, be associated with", "linkers: owing to, on account of, hence, thereby"],

  presentation: {
    scene: "🔗📊🧪🌡️",
    situation: "Sara and Gabriel are preparing a group presentation on sleep and health. They found a study saying that people who sleep less are more likely to become overweight, and they disagree about what it means.",
    warmup: {
      prompt: "Which of these do you think can affect sleep? Choose all that apply.",
      options: ["screens before bed", "coffee", "stress", "exercise", "noise", "a heavy dinner", "alcohol", "temperature", "light", "shift work", "worrying about sleep", "pets in the bed"],
      response: "It's easy to say one thing causes another, but research rarely shows that so simply. In this unit you'll learn to express cause and effect precisely, and to recognize when a link isn't a cause."
    },
    dialogueTitle: "Does lack of sleep make you gain weight?",
    dialogue: [
      { who: "Gabriel", line: "So the study proves that lack of sleep *causes* weight gain." },
      { who: "Sara", line: "Not exactly. It says short sleep *is associated with* weight gain. That's a correlation." },
      { who: "Gabriel", line: "But they explain the mechanism. Tiredness *triggers* hormones that make you hungry." },
      { who: "Sara", line: "True, and that could *lead to* overeating. But the weight gain might also *stem from* something else, like stress." },
      { who: "Gabriel", line: "Or long working hours, which *give rise to* both problems at once." },
      { who: "Sara", line: "Exactly. So in our presentation we should say the link *is partly attributable to* hormones, but other factors may be involved." },
      { who: "Gabriel", line: "And there's a *knock-on effect*: tired people exercise less, *thereby* making things worse." },
      { who: "Sara", line: "Perfect. That's much more accurate than *sleep makes you fat*." }
    ]
  },

  objectives: [
    "I can use a range of verbs and nouns to describe causes and effects.",
    "I can describe origins with stem from, arise from and be attributable to.",
    "I can distinguish correlation from causation in my language.",
    "I can explain complex causes and consequences in academic contexts."
  ],

  explanation: {
    vocabTitle: "Cause and effect",
    vocab: [
      { word: "the root cause", icon: "🌱" }, { word: "a contributing factor", icon: "➕" }, { word: "a trigger", icon: "🔫" },
      { word: "a knock-on effect", icon: "🎳" }, { word: "a side effect", icon: "💊" }, { word: "a vicious circle", icon: "🔄" },
      { word: "a chain reaction", icon: "⛓️" }, { word: "an outcome", icon: "🏁" }, { word: "repercussions", icon: "🌊" },
      { word: "a correlation", icon: "📈" }, { word: "causation", icon: "➡️" }, { word: "a confounding factor", icon: "❓" },
      { word: "the underlying cause", icon: "🕳️" }, { word: "a long-term consequence", icon: "⏳" }, { word: "unintended", icon: "😮" }
    ],
    grammar: [
      {
        title: "Cause → effect",
        head: ["Structure", "Example"],
        rows: [
          ["*cause / lead to / result in*", "*Stress can lead to insomnia.*"],
          ["*give rise to* (formal)", "*The policy gave rise to widespread protests.*"],
          ["*bring about* (usually change)", "*The internet brought about huge social change.*"],
          ["*trigger / spark* (start suddenly)", "*The announcement triggered panic buying.*"],
          ["*contribute to* (one of several causes)", "*Poor diet contributes to heart disease.*"],
          ["*…, thereby + -ing* (formal result)", "*They cut prices, thereby attracting new customers.*"]
        ]
      },
      {
        title: "Effect ← cause",
        head: ["Structure", "Example"],
        rows: [
          ["*stem from / arise from / result from*", "*Many problems stem from a lack of sleep.*"],
          ["*be attributable to / be due to*", "*The rise is largely attributable to tourism.*"],
          ["*be caused by / be the result of*", "*The fire was the result of a faulty cable.*"],
          ["*owing to / on account of / because of* + noun", "*The flight was cancelled owing to fog.*"]
        ],
        note: "*Result in* and *result from* are opposites: *Stress results in insomnia* = *Insomnia results from stress*."
      },
      {
        title: "Correlation is not causation",
        head: ["Weaker (link)", "Stronger (cause)"],
        rows: [
          ["*is associated with / is linked to*", "*causes / leads to*"],
          ["*is correlated with*", "*results in*"],
          ["*may contribute to*", "*is the main cause of*"],
          ["*There appears to be a link between X and Y.*", "*X has been shown to cause Y.*"]
        ]
      }
    ],
    watchOut: [
      ["The problem stems on stress.", "The problem stems *from* stress."],
      ["Stress results from insomnia. (meaning stress causes it)", "Stress results *in* insomnia."],
      ["The delay was owing the weather.", "The delay was owing *to* the weather."],
      ["It gave rise a lot of problems.", "It gave rise *to* a lot of problems."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with one word.",
      items: [
        "Many health problems stem [[from]] poor sleep.",
        "The decision gave [[rise]] to strong protests.",
        "The increase is largely attributable [[to]] tourism.",
        "The match was postponed [[owing|due]] to heavy rain.",
        "Cutting staff resulted [[in]] longer waiting times."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an epidemiologist explaining why health headlines are often misleading.",
      title: "Chocolate and Nobel prizes",
      script: [
        { who: "Host", line: "We often read headlines like coffee prevents cancer or red wine causes heart disease. Can we trust them?" },
        { who: "Epidemiologist", line: "Usually not as they're written. Most of these stories come from observational studies, which show that two things are associated, not that one causes the other." },
        { who: "Host", line: "What's the difference, in practice?" },
        { who: "Epidemiologist", line: "My favourite example is a paper that found a strong correlation between how much chocolate a country consumes and how many Nobel prizes it has won. Obviously, eating chocolate doesn't make you a genius. Both are probably linked to a third factor: wealth. Rich countries buy more chocolate and invest more in research." },
        { who: "Host", line: "So wealth is what you'd call a confounding factor." },
        { who: "Epidemiologist", line: "Exactly. And confounding factors are everywhere. People who drink moderate amounts of wine may be healthier, but that may stem from the fact that they're wealthier, eat better or are less stressed, not from the wine itself." },
        { who: "Host", line: "How can scientists show causation?" },
        { who: "Epidemiologist", line: "The gold standard is a randomized controlled trial, where people are randomly assigned to different groups. Randomization means confounding factors are spread equally, so any difference in the outcome is attributable to the intervention. But for many questions, those trials are impossible or unethical, so we have to combine many types of evidence and be honest about the uncertainty." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "Most health headlines come from studies that prove causation.", a: false },
            { s: "Chocolate consumption is correlated with Nobel prizes.", a: true },
            { s: "The epidemiologist thinks chocolate makes people more intelligent.", a: false },
            { s: "Wealth is a possible confounding factor in the chocolate example.", a: true },
            { s: "Randomized controlled trials are always possible and ethical.", a: false }
          ]
        },
        {
          type: "match", title: "Key concepts",
          prompt: "Match each concept with its explanation.",
          pairs: [
            ["observational study", "shows that two things are associated"],
            ["confounding factor", "a third factor linked to both things"],
            ["randomized controlled trial", "people are randomly assigned to groups"],
            ["randomization", "spreads confounding factors equally"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about the causes of a modern health problem.",
      title: "Why are so many people short-sighted?",
      text: [
        { body: "Short-sightedness, or myopia, is becoming dramatically more common. In parts of East Asia, around eighty per cent of school leavers are now affected, compared with a fraction of that two generations ago. Similar, albeit smaller, increases have been recorded across Europe and the Americas. Such a rapid change cannot stem from genetics alone; genes do not change that quickly." },
        { body: "For many years, the rise was attributed to reading and, more recently, to screens. The theory seemed logical: focusing on nearby objects for long periods might cause the eye to grow too long, resulting in blurred distance vision. Yet studies comparing children who read a great deal with those who read less found only a modest link." },
        { body: "A more important factor appears to be time spent outdoors. Several large trials in which schools added extra outdoor sessions found significantly lower rates of new myopia. Researchers believe that bright natural light triggers the release of dopamine in the retina, which in turn slows the growth of the eye. Indoor light, even in a well-lit classroom, is many times dimmer than daylight." },
        { body: "The modern lifestyle has thus given rise to a vicious circle: intense academic pressure keeps children indoors, which contributes to myopia, which is then corrected with glasses that do nothing to address the underlying cause. The knock-on effects are considerable, as severe myopia increases the risk of serious eye diseases later in life. The solution, fortunately, is simple and free: let children play outside." }
      ],
      activities: [
        {
          type: "sort", title: "Cause or effect?",
          prompt: "Sort the elements from the article's main explanation.",
          bins: ["cause", "effect"],
          items: [
            { text: "academic pressure", bin: 0 }, { text: "little time outdoors", bin: 0 }, { text: "bright natural light", bin: 0 },
            { text: "release of dopamine in the retina", bin: 1 }, { text: "blurred distance vision", bin: 1 }, { text: "higher risk of eye diseases later", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "Genetics alone can explain the rapid increase in myopia.", a: false },
            { s: "Studies found a very strong link between reading and myopia.", a: false },
            { s: "Extra outdoor time at school reduced new cases of myopia.", a: true },
            { s: "Glasses address the underlying cause of myopia.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice cause-and-effect language, then write an explanatory paragraph.",
      activities: [
        {
          type: "rewrite", title: "Reverse the direction",
          prompt: "Rewrite each sentence so that the effect comes first. Use the words in brackets.",
          items: [
            { q: "Stress can lead to insomnia. (stem from)", a: ["Insomnia can stem from stress."] },
            { q: "Tourism is the main cause of the price rise. (attributable)", a: ["The price rise is mainly attributable to tourism.", "The rise in prices is mainly attributable to tourism.", "The price rise is largely attributable to tourism."] },
            { q: "Fog caused the cancellation of the flight. (owing to)", a: ["The flight was cancelled owing to fog."] },
            { q: "A faulty cable caused the fire. (result of)", a: ["The fire was the result of a faulty cable."] }
          ]
        },
        {
          type: "gap", title: "Choose the verb",
          prompt: "Complete with the correct form of the verbs.",
          bank: ["trigger", "bring about", "contribute to", "give rise to", "result in", "arise from"],
          items: [
            "The new technology [[brought about]] a revolution in communication.",
            "Air pollution is one of several factors that [[contribute to]] asthma.",
            "A small earthquake [[triggered]] a huge landslide.",
            "Many conflicts [[arise from]] simple misunderstandings.",
            "Cutting the budget [[resulted in]] the closure of three libraries.",
            "The scandal [[gave rise to]] demands for new laws."
          ]
        },
        {
          type: "write", title: "Explain a trend",
          prompt: "Write an explanatory text (220–260 words) for a science website about the causes and consequences of **one** trend (for example, rising anxiety among young people, increasing obesity, declining birth rates, or more people working from home). Distinguish between proven causes and possible links. Use at least **eight** cause-and-effect expressions.",
          minWords: 220, maxWords: 260,
          model: "Why are birth rates falling?<br>In many countries, including Mexico, the average number of children per woman has fallen sharply over the last fifty years. While the trend is clear, its causes are complex, and no single factor is responsible.<br>The most important change stems from greater access to education and employment for women. As women spend more years studying and building careers, they tend to have children later, which often results in having fewer of them. Widespread access to contraception has also brought about a fundamental shift, giving couples far more control over family size.<br>Economic factors appear to contribute as well. Rising housing costs and job insecurity are frequently linked to delays in starting a family, although it is difficult to prove that they are a direct cause. Some researchers argue that changing social values, such as a greater emphasis on personal freedom, also play a role.<br>The consequences are significant. A falling birth rate, combined with longer life expectancy, gives rise to an ageing population. This has knock-on effects on pension systems and healthcare, as fewer workers must support more retirees. In some regions, schools have closed owing to a lack of pupils, thereby accelerating the departure of young families.<br>Governments have tried to reverse the trend with financial incentives, but the results have generally been modest. This suggests that the root causes are not purely economic, and that any successful policy will need to address work, housing and gender equality at the same time.",
          bank: ["stems from", "results in", "brought about", "contribute to", "are linked to", "a direct cause", "gives rise to", "knock-on effects", "owing to", "thereby", "the root causes"],
          checklist: [
            "I explained both **causes** and **consequences**.",
            "I distinguished **proven causes** from **possible links**.",
            "I used at least **eight** cause-and-effect expressions.",
            "I used the correct **prepositions** (stem from, lead to, owing to…)."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat these academic phrases.",
          items: [
            "Many problems stem from a lack of sleep.",
            "The policy gave rise to protests.",
            "The rise is attributable to tourism.",
            "Correlation is not the same as causation.",
            "It's a vicious circle.",
            "The flight was cancelled owing to fog."
          ]
        },
        {
          type: "speak", title: "Explain the chain",
          prompt: "Record yourself for about three minutes. Choose a problem in your city or country (traffic, pollution, unemployment, water shortages, insecurity or another). Explain its root causes, the contributing factors, its knock-on effects, and one realistic solution. Be careful to distinguish causes from simple links.",
          language: ["The root cause is…", "This stems from…", "Another contributing factor is…", "This leads to / results in…", "There's a knock-on effect on…", "It's a vicious circle:…", "… is linked to…, but it's not clear whether…", "One solution would be…"],
          seconds: 210,
          checklist: ["identify the root cause?", "mention contributing factors and knock-on effects?", "use at least six cause-and-effect expressions?", "distinguish a link from a proven cause?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use lead to, give rise to, bring about and trigger.", review: "Explanation: cause → effect" },
    { can: "I can use stem from, arise from and be attributable to.", review: "Explanation: effect ← cause; Writing activity 1" },
    { can: "I can use result in and result from correctly.", review: "Explanation: note" },
    { can: "I can distinguish correlation from causation.", review: "Explanation: correlation is not causation; Listening" },
    { can: "I can follow explanations of complex causes in articles and talks.", review: "Listening and Reading activities" },
    { can: "I can explain causes and consequences clearly in writing and speech.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
