window.UNIT = {
  slug: "the-power-of-protest",
  number: 23,
  title: "The Power of Protest",
  level: "C1",
  minutes: 80,
  speakers: { "Ximena": "f", "Rafa": "m", "Host": "m", "Historian": "f" },
  focus: ["the subjunctive after demand, insist, propose, recommend: that he be, that it not be", "the subjunctive after It is essential / vital / crucial that…", "formulaic subjunctives: Be that as it may, Come what may, If need be, So be it", "should as an alternative: It is vital that they should…", "vocabulary of activism: rally, petition, civil disobedience, grassroots"],

  presentation: {
    scene: "✊📢🪧🕊️",
    situation: "Ximena is helping to organize a student protest against a rise in tuition fees. Her friend Rafa is worried it could get out of control.",
    warmup: {
      prompt: "Which forms of protest do you think are acceptable? Choose all that apply.",
      options: ["signing a petition", "a peaceful march", "a strike", "a boycott", "posting online", "writing to politicians", "occupying a building", "blocking a road", "a hunger strike", "graffiti", "sit-ins", "wearing a symbol"],
      response: "Protest movements produce some very formal language: demands, proposals, declarations. In this unit you'll learn the subjunctive and other formal structures used in them."
    },
    dialogueTitle: "Planning the march",
    dialogue: [
      { who: "Ximena", line: "We're going to demand that the university *freeze* fees for three years." },
      { who: "Rafa", line: "Fine, but I'd insist that the march *be* completely peaceful. One broken window and the media will only talk about that." },
      { who: "Ximena", line: "Of course. *It's essential that* everyone *stay* on the agreed route. We've told the police." },
      { who: "Rafa", line: "And what if the rector refuses to meet you?" },
      { who: "Ximena", line: "Then we'll occupy the main hall, peacefully, *if need be*." },
      { who: "Rafa", line: "That's risky. Some students could be expelled." },
      { who: "Ximena", line: "*Be that as it may*, we can't do nothing. We propose that every faculty *send* two representatives to negotiate." },
      { who: "Rafa", line: "OK. *Come what may*, I'll be there. But I recommend that you *not* announce the occupation yet." }
    ]
  },

  objectives: [
    "I can use the subjunctive after verbs like demand, insist and recommend.",
    "I can use the subjunctive after It is essential / vital / crucial that…",
    "I can use formulaic expressions like Be that as it may and If need be.",
    "I can discuss protest movements and write a formal list of demands."
  ],

  explanation: {
    vocabTitle: "Protest and activism",
    vocab: [
      { word: "a rally", icon: "📢" }, { word: "a march", icon: "🚶" }, { word: "a petition", icon: "✍️" },
      { word: "a boycott", icon: "🚫" }, { word: "a strike", icon: "🛑" }, { word: "a sit-in", icon: "🪑" },
      { word: "civil disobedience", icon: "✊" }, { word: "a grassroots movement", icon: "🌱" }, { word: "a demonstrator", icon: "🪧" },
      { word: "a slogan", icon: "💬" }, { word: "mobilize", icon: "📣" }, { word: "a crackdown", icon: "🚔" },
      { word: "freedom of assembly", icon: "🕊️" }, { word: "make concessions", icon: "🤝" }, { word: "a turning point", icon: "↪️" }
    ],
    grammar: [
      {
        title: "The subjunctive after verbs and adjectives",
        intro: "After verbs of **demanding, suggesting and insisting**, and after adjectives of **importance**, formal English uses the **base form** of the verb for all persons. It's common in American English and formal British English.",
        head: ["Structure", "Example"],
        rows: [
          ["*demand / insist / propose / recommend / suggest / request + that* + base form", "*We demand that the university freeze fees.*"],
          ["third person: no *-s*", "*They insisted that he resign.* (not *resigns*)"],
          ["*be* for all persons", "*I insist that the march be peaceful.*"],
          ["negative: *not* + base form", "*We recommend that you not announce it yet.*"],
          ["*It is essential / vital / crucial / imperative that* + base form", "*It is vital that everyone stay calm.*"]
        ],
        note: "In British English, *should* is a common alternative: *It is vital that everyone should stay calm.* An ordinary present tense is also heard in informal BrE: *I suggest that he goes.*"
      },
      {
        title: "Formulaic subjunctives",
        head: ["Expression", "Meaning", "Example"],
        rows: [
          ["*Be that as it may*", "even if that is true", "*Be that as it may, we can't do nothing.*"],
          ["*Come what may*", "whatever happens", "*Come what may, I'll be there.*"],
          ["*If need be*", "if it is necessary", "*We'll occupy the hall if need be.*"],
          ["*So be it*", "I accept it (reluctantly)", "*If they expel us, so be it.*"],
          ["*Far be it from me to…*", "I don't want to (but I will)", "*Far be it from me to criticize, but…*"],
          ["*God save the King / Long live…*", "wishes", "*Long live freedom!*"]
        ]
      }
    ],
    watchOut: [
      ["They demanded that he resigns.", "They demanded that he *resign*."],
      ["It is essential that she is present.", "It is essential that she *be* present. (formal)"],
      ["We recommend that you don't sign it.", "We recommend that you *not* sign it."],
      ["Be it that as it may,…", "*Be that as it may*,…"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with the correct form of the verb in brackets.",
      items: [
        "The students demanded that the rector [[resign]] (resign).",
        "It is vital that every participant [[be]] (be) informed of the route.",
        "We recommend that the march [[not start|not begin]] (not start) before noon.",
        "The union insisted that the company [[pay]] (pay) all overtime.",
        "We'll stay all night if [[need]] be."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a historian discussing what makes protest movements succeed.",
      title: "Why some movements win",
      script: [
        { who: "Host", line: "Protests happen all over the world, but only some achieve their goals. What makes the difference?" },
        { who: "Historian", line: "Researchers who compared hundreds of campaigns over the last century found something surprising. Non-violent movements were roughly twice as likely to succeed as violent ones." },
        { who: "Host", line: "Why would that be?" },
        { who: "Historian", line: "Mainly because non-violent movements attract far more people. Older people, children, workers who can't risk injury, they can all take part in a march or a boycott. And when a movement is large and diverse, it becomes very difficult for the authorities to dismiss it or to justify a crackdown." },
        { who: "Host", line: "Is size the only factor?" },
        { who: "Historian", line: "No. Successful movements usually have clear, specific demands. It isn't enough to say we want change. Movements that insisted that a particular law be repealed, or that a particular official resign, gave people something concrete to rally around." },
        { who: "Host", line: "And what about the risk of violence from a minority?" },
        { who: "Historian", line: "That's one of the biggest dangers. Organizers usually insist that participants remain peaceful, because even a small amount of violence can shift media attention away from the cause. Discipline matters. The most effective leaders have said, in effect: come what may, we will not respond to violence with violence." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "Violent movements were found to be more successful.", a: false },
            { s: "Non-violent movements tend to attract more people.", a: true },
            { s: "Large, diverse movements are easier for authorities to dismiss.", a: false },
            { s: "Clear, specific demands help movements succeed.", a: true },
            { s: "A small amount of violence has no effect on media coverage.", a: false }
          ]
        },
        {
          type: "match", title: "Keys to success",
          prompt: "Match each factor with the historian's explanation.",
          pairs: [
            ["non-violence", "allows more people to take part"],
            ["size and diversity", "makes a crackdown hard to justify"],
            ["specific demands", "give people something concrete to rally around"],
            ["discipline", "keeps media attention on the cause"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a list of demands published by a group of residents.",
      title: "Open letter: Save Parque Juárez",
      text: [
        { body: "**To the Mayor and the City Council**" },
        { body: "We, the undersigned residents of the Juárez neighbourhood, write to express our firm opposition to the proposed construction of a car park beneath Parque Juárez. The park, created in 1912, contains more than three hundred trees, some over a century old, and is the only green space within walking distance for over twenty thousand people." },
        { body: "We demand that the Council suspend all work on the project immediately, pending a full and independent environmental assessment. We further insist that the results of this assessment be made public and that residents be given at least sixty days to respond." },
        { body: "It is essential that any future decision regarding the park be taken with the genuine participation of the community. We therefore propose that a residents' committee be formed, with representatives from each street, to work with the Council on alternative solutions to the parking problem." },
        { body: "We are aware that the city faces serious traffic problems. Be that as it may, the loss of a historic park is not an acceptable price to pay. We remain open to dialogue, but we will, if need be, use every legal means at our disposal to protect this space for future generations." },
        { body: "Signed: 4,812 residents of the Juárez neighbourhood" }
      ],
      activities: [
        {
          type: "sort", title: "Demand, proposal or concession?",
          prompt: "Classify each point from the letter.",
          bins: ["demand", "proposal", "concession"],
          items: [
            { text: "suspend all work immediately", bin: 0 }, { text: "make the assessment results public", bin: 0 }, { text: "give residents sixty days to respond", bin: 0 },
            { text: "form a residents' committee", bin: 1 }, { text: "work together on alternatives", bin: 1 },
            { text: "the city faces serious traffic problems", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The residents want the car park built quickly.", a: false },
            { s: "They want an independent environmental assessment.", a: true },
            { s: "They refuse any dialogue with the Council.", a: false },
            { s: "They are prepared to take legal action if necessary.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the subjunctive and formulaic expressions, then write a formal open letter.",
      activities: [
        {
          type: "rewrite", title: "Make it formal",
          prompt: "Rewrite each sentence using the subjunctive and the words in brackets.",
          items: [
            { q: "The director must resign. (We demand that…)", a: ["We demand that the director resign."] },
            { q: "Everyone has to be on time. (It is essential that…)", a: ["It is essential that everyone be on time."] },
            { q: "You shouldn't sign the contract yet. (We recommend that you…)", a: ["We recommend that you not sign the contract yet."] },
            { q: "The meeting should be open to the public. (They insisted that…)", a: ["They insisted that the meeting be open to the public."] }
          ]
        },
        {
          type: "match", title: "Formulaic expressions",
          prompt: "Match each expression with its meaning.",
          pairs: [
            ["Be that as it may,", "even if that is true,"],
            ["Come what may,", "whatever happens,"],
            ["if need be", "if necessary"],
            ["So be it.", "I accept that, even if I don't like it."],
            ["Far be it from me to…", "I don't want to…, but I will."]
          ]
        },
        {
          type: "write", title: "An open letter",
          prompt: "Write an open letter (220–260 words) to an authority (a university, a city council, a company or a government ministry) on behalf of a group that wants change. Explain the problem, list your demands and proposals, acknowledge the other side's position, and say what you will do if your demands are not met. Use the subjunctive at least **four** times and at least **two** formulaic expressions.",
          minWords: 220, maxWords: 260,
          model: "To the Rector of the University<br>We, the undersigned members of the Student Council, are writing to express our serious concern about the proposed 25% increase in tuition fees for the next academic year.<br>For many students, especially those from rural areas and low-income families, this increase would make it impossible to continue their studies. A recent survey conducted by the Council found that almost one in three students already works more than twenty hours a week to pay for their education.<br>We therefore demand that the university freeze tuition fees for a minimum of three years. We further request that the financial reasons for the proposed increase be made public, so that the whole university community can understand and discuss them.<br>We also propose that a joint committee of students, staff and administrators be created to explore alternative sources of funding. It is essential that students be fully represented on this committee, with the right to vote on its recommendations.<br>We recognize that the university faces genuine financial pressures, and we do not underestimate the difficulty of the decisions you must make. Be that as it may, education must not become a privilege for those who can afford it.<br>We remain committed to peaceful dialogue and would welcome the opportunity to meet with you. If need be, however, we will organize a peaceful protest and a student strike. Come what may, we will continue to defend the right of every qualified student to study at this university.<br>Yours faithfully,<br>The Student Council",
          bank: ["We demand that…", "We further request that… be…", "We propose that… be created", "It is essential that…", "We recognize that…", "Be that as it may,", "If need be,", "Come what may,"],
          checklist: [
            "I explained the **problem** clearly.",
            "I listed **demands** and **proposals**.",
            "I used the **subjunctive** at least four times.",
            "I used at least **two** formulaic expressions."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Speak firmly and clearly.",
          items: [
            "We demand that the university freeze fees.",
            "It's essential that everyone stay calm.",
            "I insist that the march be peaceful.",
            "Be that as it may, we must act.",
            "Come what may, I'll be there.",
            "We'll stay all night if need be."
          ]
        },
        {
          type: "speak", title: "A speech at a rally",
          prompt: "Record a short speech (about three minutes) for a peaceful rally about a cause you care about (education, the environment, housing, public transport, animal rights or another). Explain the problem, state your demands clearly, encourage people to stay peaceful, and end with a powerful closing line.",
          language: ["We are here today because…", "We demand that…", "It is vital that…", "We propose that…", "Be that as it may,…", "Come what may,…", "I urge everyone to…", "Together, we can…"],
          seconds: 210,
          checklist: ["explain the problem?", "state at least two clear demands?", "use the subjunctive at least three times?", "end with a powerful closing line?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use the subjunctive after demand, insist, propose and recommend.", review: "Explanation: the subjunctive; Writing activity 1" },
    { can: "I can use the subjunctive after It is essential / vital that…", review: "Explanation: the subjunctive" },
    { can: "I can form negative subjunctives (that he not…).", review: "Explanation: the subjunctive; Watch out!" },
    { can: "I can use Be that as it may, Come what may and If need be.", review: "Explanation: formulaic subjunctives; Writing activity 2" },
    { can: "I can understand formal demands and analyses of protest movements.", review: "Listening and Reading activities" },
    { can: "I can write an open letter and give a persuasive speech.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
