window.UNIT = {
  slug: "living-longer",
  number: 17,
  title: "Living Longer",
  level: "C1",
  minutes: 80,
  speakers: { "Grandma": "f", "Mariana": "f", "Host": "m", "Gerontologist": "f" },
  focus: ["perfect participle clauses: Having retired at sixty,…", "passive participle clauses: Asked about her secret, she smiled", "participle clauses of reason and time: Being a doctor, she…", "absolute phrases: All things considered, Weather permitting, The work done,…", "with + object + participle: With prices rising,…"],

  presentation: {
    scene: "👵🎂🏃‍♀️🧬",
    situation: "Mariana is interviewing her grandmother, who has just turned ninety-five, for a university project on ageing.",
    warmup: {
      prompt: "What do you think helps people live a long, healthy life? Choose all that apply.",
      options: ["good genes", "exercise", "a healthy diet", "friends", "family", "sleep", "a sense of humour", "not smoking", "work you enjoy", "religion", "learning new things", "living near nature"],
      response: "Researchers now study the places where people live longest. In this unit you'll learn participle clauses, which let you pack information into elegant, compact sentences."
    },
    dialogueTitle: "Ninety-five and counting",
    dialogue: [
      { who: "Mariana", line: "Grandma, *having lived* through so many changes, what do you think has changed most?" },
      { who: "Grandma", line: "Oh, everything. *Born* in a village without electricity, I never imagined talking to my grandchildren on a screen." },
      { who: "Mariana", line: "And what's your secret for living so long?" },
      { who: "Grandma", line: "*Asked* that question, people expect me to say vegetables. But honestly? Walking. *Having walked* to the market every day for seventy years, I'm still strong." },
      { who: "Mariana", line: "Did you ever think about retiring and resting?" },
      { who: "Grandma", line: "*Being* a teacher, I couldn't stop learning. *With* my friends *getting* older, I started a reading club at eighty." },
      { who: "Mariana", line: "Do you still go?" },
      { who: "Grandma", line: "Every Tuesday, *weather permitting*. *All things considered*, it's been a good life. Now, *the interview finished*, can we have some cake?" }
    ]
  },

  objectives: [
    "I can use perfect participle clauses to show that one action happened before another.",
    "I can use passive participle clauses and participle clauses of reason.",
    "I can use absolute phrases such as All things considered and Weather permitting.",
    "I can discuss research on ageing and longevity."
  ],

  explanation: {
    vocabTitle: "Ageing and longevity",
    vocab: [
      { word: "life expectancy", icon: "📊" }, { word: "longevity", icon: "⏳" }, { word: "centenarian", icon: "💯" },
      { word: "an ageing population", icon: "👵" }, { word: "the elderly", icon: "🧓" }, { word: "retirement", icon: "🏖️" },
      { word: "a pension", icon: "💰" }, { word: "dementia", icon: "🧠" }, { word: "cognitive decline", icon: "📉" },
      { word: "a sedentary lifestyle", icon: "🛋️" }, { word: "frail", icon: "🍂" }, { word: "sprightly", icon: "🌿" },
      { word: "a blue zone", icon: "🔵" }, { word: "intergenerational", icon: "👨‍👩‍👧" }, { word: "well into your nineties", icon: "🎂" }
    ],
    grammar: [
      {
        title: "Participle clauses: types",
        intro: "Participle clauses make writing more concise. The subject of the participle must be the **same** as the subject of the main clause.",
        head: ["Type", "Full clause", "Participle clause"],
        rows: [
          ["present participle (same time / reason)", "*Because she was a teacher, she loved books.*", "*Being a teacher, she loved books.*"],
          ["perfect participle (earlier action)", "*After she had retired, she started a club.*", "*Having retired, she started a club.*"],
          ["past participle (passive)", "*When she was asked about her secret, she laughed.*", "*Asked about her secret, she laughed.*"],
          ["perfect passive", "*Because he had been warned, he was careful.*", "*Having been warned, he was careful.*"],
          ["negative", "*Because I didn't know the way, I got lost.*", "*Not knowing the way, I got lost.*"]
        ],
        note: "Avoid dangling participles: *Walking to the market, the rain started* means the rain was walking! Say *Walking to the market, I got caught in the rain.*"
      },
      {
        title: "Absolute phrases and with + participle",
        head: ["Structure", "Example"],
        rows: [
          ["fixed absolute phrases", "*All things considered, Weather permitting, Generally speaking, Judging by…*"],
          ["noun + participle (own subject)", "*The interview finished, we had cake.*"],
          ["*with* + noun + -ing", "*With life expectancy rising, pensions are under pressure.*"],
          ["*with* + noun + past participle", "*With the work done, she went home.*"]
        ]
      }
    ],
    watchOut: [
      ["Having retire, she moved to the coast.", "Having *retired*, she moved to the coast."],
      ["Asking about his age, he laughed. (he was asked)", "*Asked* about his age, he laughed."],
      ["Being tired, the walk seemed long.", "Being tired, *I found* the walk long."],
      ["Not having knew the answer, I guessed.", "Not *knowing* the answer, I guessed."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with one word.",
      items: [
        "[[Having]] worked for forty years, he decided to retire.",
        "[[Asked]] about her secret, she just smiled.",
        "[[Not]] knowing anyone in the city, she felt lonely at first.",
        "[[With]] life expectancy rising, governments must rethink pensions.",
        "All things [[considered]], it was a good decision."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a gerontologist, a specialist in ageing, talking about longevity research.",
      title: "The secrets of the blue zones",
      script: [
        { who: "Host", line: "You've studied communities where people live unusually long lives. What do they have in common?" },
        { who: "Gerontologist", line: "Researchers have identified several so-called blue zones: places like Okinawa in Japan, Sardinia in Italy and the Nicoya Peninsula in Costa Rica. Having studied them for years, we've found some clear patterns." },
        { who: "Host", line: "Diet, presumably?" },
        { who: "Gerontologist", line: "Partly. Most eat mainly plants, especially beans, and relatively little meat. But what struck me most was movement. Living in hilly villages, people walk constantly. They don't go to the gym; exercise is simply built into daily life." },
        { who: "Host", line: "And the social side?" },
        { who: "Gerontologist", line: "That's crucial. Surrounded by family and friends, older people in these places rarely feel isolated. Many have a strong sense of purpose, too. Asked why they get up in the morning, they almost always have an answer: their grandchildren, their garden, their community." },
        { who: "Host", line: "Should we be sceptical of any of this?" },
        { who: "Gerontologist", line: "Some caution is wise. Birth records in some regions aren't entirely reliable, and genes certainly play a role. But, all things considered, the lifestyle factors are consistent with what we know from large studies elsewhere. With populations ageing fast around the world, the lessons are more relevant than ever." }
      ],
      activities: [
        {
          type: "match", title: "Blue zone factors",
          prompt: "Match each factor with the detail the gerontologist gives.",
          pairs: [
            ["diet", "mainly plants, especially beans"],
            ["movement", "walking is built into daily life"],
            ["social life", "people rarely feel isolated"],
            ["purpose", "a reason to get up in the morning"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again and decide.",
          items: [
            { s: "People in blue zones usually exercise in gyms.", a: false },
            { s: "Many older people there have a strong sense of purpose.", a: true },
            { s: "The gerontologist says birth records are always reliable.", a: false },
            { s: "She thinks genes play no role at all.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about the social challenges of an ageing population.",
      title: "A society of grandparents",
      text: [
        { body: "For most of human history, reaching old age was the exception. Today, with life expectancy having risen by more than thirty years in a century, it is the norm. In several countries, people over sixty-five now outnumber children under fifteen, a situation that would have been unimaginable to previous generations." },
        { body: "The consequences are profound. Pension systems, designed when most workers died within a few years of retiring, are under enormous strain. Having been built on the assumption that many young workers would support a few retirees, they now face the opposite situation. Governments have responded by raising the retirement age, a measure that, understandably, is deeply unpopular." },
        { body: "Healthcare faces similar pressure. Living longer, people are more likely to develop chronic conditions such as diabetes and dementia, which require years of care rather than a single treatment. With fewer young people available to work as carers, some countries are experimenting with robots and with programmes that bring different generations together." },
        { body: "Yet seen from another angle, an ageing society is also an extraordinary achievement. Older people contribute enormously as volunteers, caregivers for grandchildren and, increasingly, as workers. Judging by recent surveys, many of them want to keep working, at least part-time. The challenge, all things considered, is not to stop people living longer, but to organize society so that those extra years are healthy, active and valued." }
      ],
      activities: [
        {
          type: "sort", title: "Challenge or opportunity?",
          prompt: "Sort the points from the article.",
          bins: ["challenge", "opportunity"],
          items: [
            { text: "pension systems under strain", bin: 0 }, { text: "more chronic conditions", bin: 0 }, { text: "fewer young carers", bin: 0 },
            { text: "older volunteers", bin: 1 }, { text: "grandparents caring for children", bin: 1 }, { text: "older people who want to work", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Unpack the participle",
          prompt: "Rewrite each participle clause from the article as a full clause, starting with the word given.",
          items: [
            { q: "Living longer, people are more likely to develop chronic conditions. (Because)", a: ["Because people live longer, they are more likely to develop chronic conditions.", "Because they live longer, people are more likely to develop chronic conditions.", "Because people are living longer, they are more likely to develop chronic conditions."] },
            { q: "Having been built on that assumption, they face the opposite situation. (Because)", a: ["Because they were built on that assumption, they face the opposite situation.", "Because they had been built on that assumption, they face the opposite situation."] },
            { q: "Judging by recent surveys, many want to keep working. (If)", a: ["If we judge by recent surveys, many want to keep working.", "If you judge by recent surveys, many want to keep working."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice participle clauses, then write a short biography.",
      activities: [
        {
          type: "rewrite", title: "Make it concise",
          prompt: "Combine or shorten the sentences using a participle clause. Start with the word given.",
          items: [
            { q: "She had finished her degree. She moved to Canada. (Having)", a: ["Having finished her degree, she moved to Canada."] },
            { q: "He was born in a small village. He never saw a car until he was ten. (Born)", a: ["Born in a small village, he never saw a car until he was ten."] },
            { q: "I didn't want to be rude, so I said nothing. (Not)", a: ["Not wanting to be rude, I said nothing."] },
            { q: "Prices are rising, so many families are struggling. (With)", a: ["With prices rising, many families are struggling."] }
          ]
        },
        {
          type: "sort", title: "Correct or dangling?",
          prompt: "Decide if the participle clause is used correctly or if it is a dangling participle.",
          bins: ["correct", "dangling (wrong)"],
          items: [
            { text: "Having retired, she took up painting.", bin: 0 }, { text: "Asked about the plan, the mayor refused to comment.", bin: 0 }, { text: "Walking home, I saw an old friend.", bin: 0 },
            { text: "Walking home, the rain started.", bin: 1 }, { text: "Having eaten, the dishes were washed.", bin: 1 }, { text: "Being old, the stairs were difficult for him.", bin: 1 }
          ]
        },
        {
          type: "write", title: "A life story",
          prompt: "Write a short biography (220–260 words) of an older person you admire, real or imagined (a grandparent, neighbour, teacher or public figure). Describe their early life, key events and what they are like now. Use at least **six** participle clauses or absolute phrases, including at least one perfect participle and one passive participle.",
          minWords: 220, maxWords: 260,
          model: "My great-uncle Ramón was born in 1934 in a small town in Oaxaca. Growing up in a family of eight children, he started working in the fields at the age of nine, and he left school without learning to read properly.<br>Having moved to Mexico City at eighteen, he found a job in a printing workshop. Surrounded by books he could barely understand, he decided to teach himself to read. Every night, after twelve hours at work, he sat at the kitchen table with a dictionary and a newspaper. Asked years later how he had found the energy, he simply said that curiosity was stronger than tiredness.<br>By his forties, Ramón owned the workshop. Not wanting other young people to struggle as he had, he began offering free evening classes to his employees. With word spreading, people from all over the neighbourhood started to attend, and the classes continued for more than thirty years.<br>Having retired at seventy, he finally had time for his own projects. He wrote a short history of his hometown, which was published by the local council, and he still gives talks at schools, health permitting.<br>Now ninety, Ramón walks to the park every morning and reads three newspapers a day. Judging by the number of visitors he receives, he has changed many lives. All things considered, his story reminds me that it is never too late to learn, and that one person's determination can open doors for an entire community.",
          bank: ["Growing up in…,", "Having moved to…,", "Surrounded by…,", "Asked about…,", "Not wanting to…,", "With… -ing,", "Having retired,…", "All things considered,…"],
          checklist: [
            "I described the person's **early life**, **key events** and **present**.",
            "I used at least **six** participle clauses or absolute phrases.",
            "I used a **perfect** participle and a **passive** participle.",
            "I checked that there are **no dangling** participles."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Pause slightly after the participle clause.",
          items: [
            "Having retired, she started a reading club.",
            "Asked about her secret, she just smiled.",
            "Not knowing anyone, I felt lonely.",
            "With prices rising, families are struggling.",
            "All things considered, it's been a good life.",
            "We'll walk to the market, weather permitting."
          ]
        },
        {
          type: "speak", title: "Growing old well",
          prompt: "Record yourself for about three minutes. Describe an older person you know well and what has helped them age well (or what has made it difficult). Then discuss: *Should people be encouraged to work until seventy or beyond?* Use participle clauses and absolute phrases.",
          language: ["Having worked as…,", "Born in…,", "Surrounded by…,", "With… getting older,", "Asked about…,", "Judging by…,", "All things considered,", "Generally speaking,"],
          seconds: 210,
          checklist: ["describe the person and their life?", "discuss the question about working longer?", "use at least four participle clauses?", "avoid dangling participles?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use perfect participle clauses (Having + past participle).", review: "Explanation: participle clauses; Writing activity 1" },
    { can: "I can use passive participle clauses (Asked about…, Born in…).", review: "Explanation: participle clauses" },
    { can: "I can use negative participle clauses (Not knowing…).", review: "Explanation: participle clauses" },
    { can: "I can use absolute phrases and with + participle.", review: "Explanation: absolute phrases" },
    { can: "I can recognize and avoid dangling participles.", review: "Explanation: note; Writing activity 2" },
    { can: "I can write and talk about a life story concisely and elegantly.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
