window.UNIT = {
  slug: "artificial-minds",
  number: 16,
  title: "Artificial Minds",
  level: "C1",
  minutes: 80,
  speakers: { "Iris": "f", "Leo": "m", "Host": "m", "Researcher": "f" },
  focus: ["be set to / be due to / be poised to + infinitive", "be on the verge of / on the brink of / on the point of + -ing", "be (un)likely to, in all likelihood, the chances are", "future in formal reports: is expected to, is projected to, is forecast to", "vocabulary of AI: algorithm, automation, bias, autonomous"],

  presentation: {
    scene: "🤖🧠💻🔮",
    situation: "Iris and Leo are journalists preparing a podcast episode on artificial intelligence. They're arguing about how confident they can be about the future.",
    warmup: {
      prompt: "Which tasks do you think AI will do better than humans within ten years? Choose all that apply.",
      options: ["driving", "translating", "diagnosing illness", "teaching", "composing music", "writing news", "customer service", "legal advice", "caring for the elderly", "farming", "designing buildings", "therapy"],
      response: "Predictions about technology are notoriously unreliable. In this unit you'll learn how to talk about the future with exactly the right degree of certainty."
    },
    dialogueTitle: "Predicting the unpredictable",
    dialogue: [
      { who: "Leo", line: "Let's open with this: AI *is set to* replace a third of all jobs by 2035." },
      { who: "Iris", line: "Who says? That's a huge claim. Most reports say a third of jobs *are likely to be* affected, which isn't the same as replaced." },
      { who: "Leo", line: "Fair enough. But some companies *are on the verge of* automating entire departments." },
      { who: "Iris", line: "True. And the government *is due to* publish new regulations next month, so the timing's perfect." },
      { who: "Leo", line: "Exactly. And the big tech firms *are poised to* launch even more powerful models this year." },
      { who: "Iris", line: "*In all likelihood*, yes. But *the chances are* that the real changes will be slower and messier than the headlines suggest." },
      { who: "Leo", line: "Spoken like a true sceptic. So what's our headline?" },
      { who: "Iris", line: "*AI is expected to transform work, but nobody knows quite how.* Less dramatic, but much more honest." }
    ]
  },

  objectives: [
    "I can talk about future events that are planned, imminent or expected.",
    "I can use be on the verge of and be poised to for things about to happen.",
    "I can use formal future expressions from reports and the news.",
    "I can discuss the impact of artificial intelligence with appropriate caution."
  ],

  explanation: {
    vocabTitle: "Artificial intelligence",
    vocab: [
      { word: "an algorithm", icon: "🔢" }, { word: "machine learning", icon: "🧠" }, { word: "automation", icon: "🏭" },
      { word: "a chatbot", icon: "💬" }, { word: "training data", icon: "📚" }, { word: "algorithmic bias", icon: "⚖️" },
      { word: "autonomous vehicles", icon: "🚗" }, { word: "facial recognition", icon: "👤" }, { word: "a deepfake", icon: "🎭" },
      { word: "job displacement", icon: "📦" }, { word: "upskilling", icon: "📈" }, { word: "regulation", icon: "📜" },
      { word: "transparency", icon: "🔍" }, { word: "human oversight", icon: "👀" }, { word: "cutting-edge", icon: "⚡" }
    ],
    grammar: [
      {
        title: "Planned, scheduled and imminent future",
        head: ["Structure", "Meaning", "Example"],
        rows: [
          ["*be set to* + infinitive", "very likely / planned (news style)", "*The law is set to come into force next year.*"],
          ["*be due to* + infinitive", "scheduled for a specific time", "*The report is due to be published on Monday.*"],
          ["*be poised to* + infinitive", "ready to do something soon", "*The company is poised to launch a new model.*"],
          ["*be on the verge / brink / point of* + -ing / noun", "very close to happening", "*Scientists are on the verge of a breakthrough.*"],
          ["*be about to* + infinitive", "happening very soon (neutral)", "*The meeting is about to start.*"],
          ["*be to* + infinitive", "official arrangement (formal)", "*The president is to visit Japan in May.*"]
        ],
        note: "*On the brink of* usually suggests something negative or dramatic: *on the brink of collapse / war*."
      },
      {
        title: "Probability and formal forecasts",
        head: ["Structure", "Example"],
        rows: [
          ["*be (highly) likely / unlikely to*", "*AI is likely to affect most office jobs.*"],
          ["*in all likelihood / the chances are (that)*", "*In all likelihood, regulation will be slow.*"],
          ["*be expected / projected / forecast to*", "*The market is projected to triple by 2030.*"],
          ["*There is every reason to believe that…*", "*There is every reason to believe that costs will fall.*"],
          ["*It remains to be seen whether…*", "*It remains to be seen whether the law will work.*"]
        ]
      }
    ],
    watchOut: [
      ["The company is on the verge to launch it.", "The company is on the verge *of launching* it."],
      ["The report is due publishing on Monday.", "The report is due *to be published* on Monday."],
      ["AI is set replacing many jobs.", "AI is set *to replace* many jobs."],
      ["It remains to see whether it works.", "It remains to *be seen* whether it works."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with one word.",
      items: [
        "The new regulations are due [[to]] be published next month.",
        "Researchers are on the verge [[of]] a major breakthrough.",
        "The company is [[poised|set|about]] to launch its new model this autumn.",
        "In all [[likelihood]], the changes will be gradual.",
        "It remains to be [[seen]] whether the technology is safe."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an AI researcher discussing predictions about the technology.",
      title: "Hype and reality",
      script: [
        { who: "Host", line: "Every week there's a headline saying AI is about to change everything. How seriously should we take them?" },
        { who: "Researcher", line: "With a healthy dose of scepticism. The history of AI is full of confident predictions that didn't come true. In the 1960s, researchers believed they were on the verge of creating machines as intelligent as humans within a generation." },
        { who: "Host", line: "But things are different now, aren't they?" },
        { who: "Researcher", line: "In some ways, yes. The progress in the last decade has been genuinely remarkable. Systems can now write, translate and analyse images at a level that would have seemed impossible ten years ago. And investment is set to keep growing." },
        { who: "Host", line: "So what's the problem with the headlines?" },
        { who: "Researcher", line: "They tend to confuse what's technically possible with what's actually going to happen. A system might be capable of doing a task, but whether it's adopted depends on cost, regulation, public trust and how well it fits into existing work. Those things change slowly." },
        { who: "Host", line: "What do you think is most likely in the next ten years?" },
        { who: "Researcher", line: "In all likelihood, AI will become a standard tool in most office jobs, rather like spreadsheets did. Some roles will disappear, but many more are likely to change. The bigger question, which remains to be seen, is whether the benefits will be shared fairly or concentrated in a few companies." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The researcher recommends believing most AI headlines.", a: false },
            { s: "In the 1960s, researchers were too optimistic about AI.", a: true },
            { s: "She thinks recent progress has been unimpressive.", a: false },
            { s: "Adoption depends on factors like cost and public trust.", a: true },
            { s: "She predicts that most roles will disappear completely.", a: false }
          ]
        },
        {
          type: "match", title: "Complete the predictions",
          prompt: "Match the beginnings and endings from the interview.",
          pairs: [
            ["Researchers believed they were on the verge of", "creating machines as intelligent as humans."],
            ["Investment is set to", "keep growing."],
            ["AI will, in all likelihood,", "become a standard tool in office jobs."],
            ["Whether the benefits will be shared fairly", "remains to be seen."]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a news article about AI in healthcare.",
      title: "Algorithms in the clinic",
      text: [
        { body: "Hospitals across the country are poised to introduce AI systems that can detect early signs of breast cancer in mammograms, after a two-year trial found that the technology identified more cancers than human radiologists working alone. The health ministry is due to announce its decision on a national rollout later this month." },
        { body: "In the trial, which involved more than 80,000 women, the AI system acted as a second reader alongside a single radiologist. The combination detected around 20% more cancers than the traditional method, in which two radiologists review each scan. Crucially, it did so without increasing the number of false alarms." },
        { body: "Supporters say the technology is set to ease a severe shortage of specialists. *We are on the brink of a crisis in diagnostic services*, said one hospital director. *This could free radiologists to focus on the most complex cases.*" },
        { body: "Not everyone is convinced. Critics point out that the system was trained mainly on images from one population and is unlikely to perform as well for women from other ethnic backgrounds unless it is retrained. Others worry that doctors may come to rely too heavily on the software. *The technology is promising*, said a patients' association spokesperson, *but it remains to be seen how it will perform in ordinary hospitals, outside the conditions of a trial.*" }
      ],
      activities: [
        {
          type: "sort", title: "Supporters or critics?",
          prompt: "Sort the points made in the article.",
          bins: ["supporters", "critics"],
          items: [
            { text: "it detects about 20% more cancers", bin: 0 }, { text: "it eases the shortage of specialists", bin: 0 }, { text: "it frees doctors for complex cases", bin: 0 },
            { text: "it was trained mainly on one population", bin: 1 }, { text: "doctors may rely on it too much", bin: 1 }, { text: "real hospitals differ from trials", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The national rollout has already been approved.", a: false },
            { s: "In the trial, AI worked together with one radiologist.", a: true },
            { s: "The AI system increased false alarms.", a: false },
            { s: "Critics say the system may need retraining for other populations.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice future forms, then write a short forecast article.",
      activities: [
        {
          type: "rewrite", title: "Say it in news style",
          prompt: "Rewrite each sentence using the words in brackets.",
          items: [
            { q: "The company will very probably launch a new robot. (set)", a: ["The company is set to launch a new robot."] },
            { q: "The minister will speak at 10 a.m. (due)", a: ["The minister is due to speak at 10 a.m.", "The minister is due to speak at 10 am."] },
            { q: "The factory is very close to closing. (verge)", a: ["The factory is on the verge of closing."] },
            { q: "Experts expect the market to double. (expected)", a: ["The market is expected to double."] }
          ]
        },
        {
          type: "gap", title: "Choose the right expression",
          prompt: "Complete with the correct form of the expressions.",
          bank: ["on the brink of", "poised to", "due to", "likely to", "remains to be seen", "projected to"],
          items: [
            "After months of losses, the airline is [[on the brink of]] bankruptcy.",
            "The new phone is [[due to]] go on sale on 1 September.",
            "Online sales are [[projected to]] reach 40% of the market by 2030.",
            "With new funding, the startup is [[poised to]] expand into Brazil.",
            "Most experts think prices are [[likely to]] fall next year.",
            "Whether the plan will succeed [[remains to be seen]]."
          ]
        },
        {
          type: "write", title: "The next ten years",
          prompt: "Write an article (220–260 words) for a technology magazine about how AI is likely to change **one** area (education, healthcare, transport, journalism, art or another). Describe what is already happening, what is expected or planned, and what remains uncertain. Use at least **six** different future expressions from this unit.",
          minWords: 220, maxWords: 260,
          model: "Classrooms of the future: what AI will and won't change<br>Artificial intelligence has already entered our classrooms, often without much discussion. Students use chatbots to check their essays, teachers use software to generate exercises, and several universities are on the verge of introducing AI tutors available twenty-four hours a day.<br>Over the next decade, these changes are set to accelerate. The Ministry of Education is due to publish guidelines on the use of AI in schools next year, and several technology companies are poised to launch platforms that adapt lessons to each student's level in real time. The global market for educational AI is projected to triple by 2030.<br>The potential benefits are considerable. Personalized feedback could help students who struggle in large classes, and teachers may well spend less time marking and more time actually teaching. In all likelihood, AI will become as ordinary in education as calculators or the internet.<br>However, many questions remain. If students can generate essays in seconds, schools are likely to rethink how they assess learning, perhaps placing more weight on oral exams and project work. There are also concerns about privacy, as these systems collect enormous amounts of data about children.<br>Above all, it remains to be seen whether AI will reduce inequality or increase it. Students with fast internet and expensive devices are bound to benefit first. Unless governments invest in access for all, the technology that promises to help every learner could end up leaving many of them even further behind.",
          bank: ["on the verge of", "set to", "due to", "poised to", "projected to", "in all likelihood", "likely to", "it remains to be seen whether"],
          checklist: [
            "I described what is **already** happening.",
            "I explained what is **expected** or **planned**.",
            "I mentioned what is still **uncertain**.",
            "I used at least **six** different future expressions."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Keep a confident, news-like tone.",
          items: [
            "The law is set to change next year.",
            "The report is due to be published soon.",
            "Scientists are on the verge of a breakthrough.",
            "The company is poised to launch it.",
            "In all likelihood, the changes will be gradual.",
            "It remains to be seen whether it works."
          ]
        },
        {
          type: "speak", title: "Your forecast",
          prompt: "Record yourself for about three minutes giving your forecast for how AI will affect **your own field** (your studies, job or a job you would like to do). What is already happening? What is likely or planned in the next five to ten years? What worries you, and what excites you?",
          language: ["… is already…", "… is set to…", "… is on the verge of…", "… is likely / unlikely to…", "In all likelihood,…", "The chances are that…", "It remains to be seen whether…", "What worries me most is…"],
          seconds: 210,
          checklist: ["describe the present situation?", "make predictions with different degrees of certainty?", "use at least five future expressions?", "mention both a worry and a hope?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use be set to, be due to and be poised to.", review: "Explanation: planned, scheduled and imminent future" },
    { can: "I can use be on the verge of / on the brink of + -ing or noun.", review: "Explanation: planned future (note); Writing activity 1" },
    { can: "I can use formal forecasts like is expected to and is projected to.", review: "Explanation: probability and formal forecasts" },
    { can: "I can express uncertainty with it remains to be seen.", review: "Explanation: probability; Writing activity 2" },
    { can: "I can distinguish hype from evidence in talks and articles about AI.", review: "Listening and Reading activities" },
    { can: "I can make careful predictions about technology in writing and speech.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
