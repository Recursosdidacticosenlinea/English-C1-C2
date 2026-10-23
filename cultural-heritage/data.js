window.UNIT = {
  slug: "cultural-heritage",
  number: 21,
  title: "Cultural Heritage",
  level: "C1",
  minutes: 80,
  speakers: { "Majo": "f", "Toño": "m", "Host": "f", "Curator": "m" },
  focus: ["formal prepositional phrases: in light of, in the wake of, by virtue of", "in terms of, with regard to, in accordance with, on behalf of", "in the face of, at the expense of, in the event of", "for the sake of, by means of, in the absence of", "vocabulary of heritage: restitution, preservation, intangible heritage"],

  presentation: {
    scene: "🏛️🏺🎭🗿",
    situation: "Majo works at a museum in Mexico City. Her friend Toño, a law student, asks her about a famous pre-Columbian object that is displayed in a museum in Europe.",
    warmup: {
      prompt: "Which of these do you consider part of your cultural heritage? Choose all that apply.",
      options: ["ancient buildings", "traditional food", "music", "festivals", "languages", "crafts", "dances", "stories and legends", "religious rituals", "markets", "sports", "traditional medicine"],
      response: "Heritage is not only monuments; it is also the practices and knowledge we inherit. In this unit you'll learn formal prepositional phrases used in academic and official discussions."
    },
    dialogueTitle: "Who owns the past?",
    dialogue: [
      { who: "Toño", line: "Why is that headdress still in a European museum? Shouldn't it come back to Mexico?" },
      { who: "Majo", line: "Mexico has requested it several times. But *in terms of* the law, the museum says it was acquired legally." },
      { who: "Toño", line: "Legally *in accordance with* nineteenth-century rules, maybe. Not *in light of* what we know today." },
      { who: "Majo", line: "True. And *in the wake of* recent returns of objects to Africa, the pressure is growing." },
      { who: "Toño", line: "So what's stopping them?" },
      { who: "Majo", line: "Experts argue that moving it could damage it. It's extremely fragile, so they say it should stay *for the sake of* its preservation." },
      { who: "Toño", line: "That sounds like keeping it *at the expense of* the people it belongs to." },
      { who: "Majo", line: "Many people agree with you. *In the absence of* an agreement, there are proposals to create a shared exhibition, which could be a compromise." }
    ]
  },

  objectives: [
    "I can use formal prepositional phrases accurately in speech and writing.",
    "I can distinguish similar phrases such as in light of and in the wake of.",
    "I can use these phrases to make academic texts more concise and precise.",
    "I can discuss debates about cultural heritage and the return of objects."
  ],

  explanation: {
    vocabTitle: "Cultural heritage",
    vocab: [
      { word: "heritage", icon: "🏛️" }, { word: "a World Heritage Site", icon: "🌍" }, { word: "intangible heritage", icon: "🎶" },
      { word: "an artefact", icon: "🏺" }, { word: "restitution", icon: "↩️" }, { word: "repatriation", icon: "🛬" },
      { word: "preservation", icon: "🧴" }, { word: "restoration", icon: "🖌️" }, { word: "looting", icon: "💰" },
      { word: "colonial", icon: "⛵" }, { word: "indigenous communities", icon: "🪶" }, { word: "a custodian", icon: "🗝️" },
      { word: "provenance", icon: "📜" }, { word: "cultural appropriation", icon: "👘" }, { word: "safeguard", icon: "🛡️" }
    ],
    grammar: [
      {
        title: "Formal prepositional phrases (1)",
        head: ["Phrase", "Meaning", "Example"],
        rows: [
          ["*in light of*", "considering (new information)", "*In light of new evidence, the decision was reviewed.*"],
          ["*in the wake of*", "after and as a result of (an event)", "*In the wake of the earthquake, many buildings were rebuilt.*"],
          ["*by virtue of*", "because of (a quality or right)", "*By virtue of its age, the church is protected.*"],
          ["*in terms of*", "regarding a particular aspect", "*In terms of cost, the project is ambitious.*"],
          ["*with regard / respect to*", "about, concerning", "*With regard to your request, …*"],
          ["*in accordance with*", "following (a rule)", "*in accordance with international law*"]
        ]
      },
      {
        title: "Formal prepositional phrases (2)",
        head: ["Phrase", "Meaning", "Example"],
        rows: [
          ["*in the face of*", "despite (a difficulty)", "*The tradition survived in the face of persecution.*"],
          ["*at the expense of*", "causing loss to", "*Tourism grew at the expense of local residents.*"],
          ["*in the event of*", "if something happens", "*In the event of fire, leave the building.*"],
          ["*for the sake of*", "to benefit or protect", "*for the sake of future generations*"],
          ["*by means of*", "using a method", "*The site was mapped by means of drones.*"],
          ["*in the absence of*", "without", "*In the absence of written records, we rely on oral history.*"],
          ["*on behalf of*", "representing", "*She spoke on behalf of the community.*"]
        ],
        note: "These phrases are followed by a **noun phrase** or **-ing**: *in the event of rain*, *by means of scanning*."
      }
    ],
    watchOut: [
      ["In the light that new evidence appeared,…", "*In light of* new evidence,…"],
      ["In terms of the cost is high.", "*In terms of cost*, the project is expensive."],
      ["In the event it rains,…", "*In the event of rain*,… / *In the event that it rains*,…"],
      ["On behalf of me, thank you.", "*On my behalf* / *On behalf of the team*, thank you."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each phrase with one word.",
      items: [
        "In [[light]] of the new evidence, the museum reviewed its decision.",
        "In the [[wake]] of the fire, the cathedral was restored.",
        "In the [[event]] of an emergency, use the stairs.",
        "The language survived in the [[face]] of strong pressure to abandon it.",
        "The objects should be preserved for the [[sake]] of future generations."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a museum curator talking about the return of cultural objects.",
      title: "Should museums give it back?",
      script: [
        { who: "Host", line: "There's growing pressure on museums to return objects taken during the colonial era. How are museums responding?" },
        { who: "Curator", line: "It varies enormously. In the wake of several high-profile cases, some museums have returned hundreds of objects. Others argue that, by virtue of national laws, they simply aren't allowed to remove items from their collections." },
        { who: "Host", line: "Are those laws a genuine obstacle or an excuse?" },
        { who: "Curator", line: "Both, frankly. Some laws were written precisely to protect collections from being sold off. But laws can be changed, and several countries have done exactly that in light of public debate." },
        { who: "Host", line: "What about the argument that objects are safer in large museums?" },
        { who: "Curator", line: "That argument is much weaker than it used to be. Many countries of origin now have excellent museums. And in the absence of any real risk, keeping an object for its own safety can look rather paternalistic." },
        { who: "Host", line: "Are there alternatives to full return?" },
        { who: "Curator", line: "Yes. Long-term loans, shared ownership, digital reproductions made by means of 3D scanning. But these should be decided in accordance with the wishes of the communities concerned, not imposed on them. The key principle is respect: these objects were made by people, for people, and those communities deserve a voice." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "All museums are responding to the pressure in the same way.", a: false },
            { s: "Some museums say national laws prevent them from returning objects.", a: true },
            { s: "The curator thinks laws can never be changed.", a: false },
            { s: "He thinks the safety argument is weaker than in the past.", a: true },
            { s: "Alternatives should be decided without consulting communities.", a: false }
          ]
        },
        {
          type: "match", title: "Complete the ideas",
          prompt: "Match the phrases with the ideas from the interview.",
          pairs: [
            ["In the wake of high-profile cases,", "some museums have returned objects."],
            ["By virtue of national laws,", "some museums can't remove items."],
            ["In the absence of any real risk,", "keeping objects can seem paternalistic."],
            ["By means of 3D scanning,", "digital reproductions can be made."]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about intangible cultural heritage.",
      title: "Heritage you can't touch",
      text: [
        { body: "When we think of heritage, we usually picture pyramids, cathedrals or ancient cities. Yet some of humanity's most valuable inheritance cannot be photographed or placed in a museum. In 2003, UNESCO adopted a convention for the safeguarding of *intangible* cultural heritage: the traditions, knowledge and skills passed from one generation to the next." },
        { body: "Mexico has been particularly active in this area. Its traditional cuisine, the Day of the Dead celebrations and mariachi music are all recognized on UNESCO's lists. In terms of global visibility, such recognition can be transformative, attracting both tourists and funding for communities that keep these practices alive." },
        { body: "However, recognition brings its own risks. In the wake of international attention, some traditions have been commercialized to the point where they are performed mainly for visitors. Critics argue that this preservation of the outward form sometimes comes at the expense of the meaning the practice has for the community itself." },
        { body: "Many experts therefore insist that safeguarding must be carried out in accordance with the wishes of the people who practise the tradition. In the absence of their active participation, heritage risks becoming a performance rather than a living culture. After all, a tradition does not survive by being frozen; it survives by being used, adapted and, above all, valued by those to whom it belongs." }
      ],
      activities: [
        {
          type: "sort", title: "Benefit or risk?",
          prompt: "Sort the effects of UNESCO recognition mentioned in the article.",
          bins: ["benefit", "risk"],
          items: [
            { text: "global visibility", bin: 0 }, { text: "more tourists", bin: 0 }, { text: "funding for communities", bin: 0 },
            { text: "commercialization", bin: 1 }, { text: "performing mainly for visitors", bin: 1 }, { text: "losing the original meaning", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "Intangible heritage includes skills and traditions.", a: true },
            { s: "Mexico has several elements on UNESCO's lists.", a: true },
            { s: "The writer believes traditions survive best when frozen in time.", a: false },
            { s: "Experts say communities should participate in safeguarding.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice formal prepositional phrases, then write a short formal text.",
      activities: [
        {
          type: "rewrite", title: "Make it formal",
          prompt: "Rewrite each sentence using the phrase in brackets.",
          items: [
            { q: "Because of the new evidence, the court changed its decision. (In light of)", a: ["In light of the new evidence, the court changed its decision."] },
            { q: "If there is a strike, the museum will close. (In the event of)", a: ["In the event of a strike, the museum will close."] },
            { q: "There were no written records, so historians used oral stories. (In the absence of)", a: ["In the absence of written records, historians used oral stories."] },
            { q: "Tourism grew, but local residents lost out. (at the expense of)", a: ["Tourism grew at the expense of local residents."] }
          ]
        },
        {
          type: "gap", title: "Choose the phrase",
          prompt: "Complete with the correct phrase.",
          bank: ["by virtue of", "on behalf of", "in the face of", "by means of", "in terms of", "for the sake of"],
          items: [
            "The site was surveyed [[by means of]] satellite images.",
            "[[In terms of]] visitor numbers, it is the most popular site in the country.",
            "She accepted the award [[on behalf of]] the whole community.",
            "The village kept its language alive [[in the face of]] enormous pressure.",
            "[[By virtue of]] its unique architecture, the town was declared a World Heritage Site.",
            "Some traditions have been adapted [[for the sake of]] tourism."
          ]
        },
        {
          type: "write", title: "A formal proposal",
          prompt: "Write a formal letter (220–260 words) to your local council proposing a project to protect **one** element of local heritage (a building, a market, a festival, a craft, a language or a recipe). Explain why it is at risk, what you propose, and how the community will be involved. Use at least **six** formal prepositional phrases.",
          minWords: 220, maxWords: 260,
          model: "Dear Members of the Council,<br>I am writing on behalf of the Neighbourhood Association of San Francisco to propose a project to protect the tradition of Talavera pottery in our district.<br>For more than four centuries, our neighbourhood has been home to families of Talavera artisans. However, in the wake of rising rents and competition from cheap imitations, only six workshops remain, compared with over twenty a generation ago. In the absence of support, it is likely that the tradition will disappear from the area within a decade.<br>In light of this situation, we propose the creation of a community workshop and training centre in the former textile factory on Calle 8, which has been empty for several years. The centre would offer apprenticeships for young people, guided visits for tourists and a shop selling authentic pieces directly from the artisans.<br>In terms of funding, we estimate an initial cost of 2.5 million pesos. We believe part of this could be covered by state cultural grants, which are awarded by virtue of a project's contribution to recognized heritage. The remaining costs would be met by means of visitor fees and sales.<br>Crucially, the project would be managed in accordance with the wishes of the artisan families themselves, who would form the majority of its board. Growth in tourism must not come at the expense of the people who keep the tradition alive.<br>We would be grateful for the opportunity to present this proposal in person.<br>Yours faithfully,<br>Mariana Flores<br>Neighbourhood Association of San Francisco",
          bank: ["on behalf of", "in the wake of", "in the absence of", "in light of", "in terms of", "by virtue of", "by means of", "in accordance with", "at the expense of"],
          checklist: [
            "I explained **why** the heritage is at risk.",
            "I described a **specific proposal**.",
            "I explained how the **community** will be involved.",
            "I used at least **six** formal prepositional phrases correctly."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat these formal phrases.",
          items: [
            "In light of new evidence, it was reviewed.",
            "In the wake of the fire, it was restored.",
            "In terms of cost, it's very ambitious.",
            "It survived in the face of persecution.",
            "For the sake of future generations.",
            "She spoke on behalf of the community."
          ]
        },
        {
          type: "speak", title: "Who owns heritage?",
          prompt: "Record yourself for about three minutes discussing this question: *Should museums return objects taken from other countries in the past?* Give arguments on both sides, mention possible alternatives to full return, and give your own opinion. Use formal prepositional phrases.",
          language: ["In light of…", "In the wake of…", "In terms of…", "By virtue of…", "in accordance with…", "at the expense of…", "In the absence of…", "for the sake of…"],
          seconds: 210,
          checklist: ["present arguments on both sides?", "mention at least one alternative?", "give your own opinion clearly?", "use at least five formal prepositional phrases?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use in light of, in the wake of and by virtue of.", review: "Explanation: formal prepositional phrases (1)" },
    { can: "I can use in terms of, with regard to and in accordance with.", review: "Explanation: formal prepositional phrases (1)" },
    { can: "I can use in the face of, at the expense of and in the event of.", review: "Explanation: formal prepositional phrases (2)" },
    { can: "I can use these phrases with a noun or -ing correctly.", review: "Explanation: note; Writing activity 1" },
    { can: "I can follow discussions about cultural heritage.", review: "Listening and Reading activities" },
    { can: "I can write and speak formally about heritage issues.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
