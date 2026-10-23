window.UNIT = {
  slug: "corporate-responsibility",
  number: 12,
  title: "Corporate Responsibility",
  level: "C1",
  minutes: 80,
  speakers: { "Brenda": "f", "Alan": "m", "Host": "m", "Analyst": "f" },
  focus: ["complex noun phrases: pre-modification (a two-year government-funded project)", "post-modification with prepositional phrases and relative clauses", "post-modification with participles and infinitives: the people affected, a decision to be made", "compound nouns and noun + noun combinations", "vocabulary of CSR: stakeholders, greenwashing, accountability"],

  presentation: {
    scene: "🏢🌍🤝📋",
    situation: "Brenda and Alan work in the communications department of a large food company. They're writing the company's annual sustainability report and arguing about how to describe a recent project.",
    warmup: {
      prompt: "What should companies be responsible for? Choose all that apply.",
      options: ["fair wages", "reducing pollution", "paying taxes", "product safety", "supporting local communities", "employee well-being", "honest advertising", "recycling", "gender equality", "protecting customer data", "animal welfare", "fighting climate change"],
      response: "Corporate reports are full of long, dense noun phrases. In this unit you'll learn how to understand them and how to build your own, without losing clarity."
    },
    dialogueTitle: "Writing the report",
    dialogue: [
      { who: "Alan", line: "How about this: *Our innovative three-year community-led water conservation programme.*" },
      { who: "Brenda", line: "That's a lot of words before the noun. Readers will be lost by *conservation*." },
      { who: "Alan", line: "But it's accurate. It *is* a three-year programme, it *is* led by the community." },
      { who: "Brenda", line: "Then move some information after the noun: *a water conservation programme led by local communities over three years*." },
      { who: "Alan", line: "Better. And then: *the farmers affected by the drought*, not *the drought-affected farmers*?" },
      { who: "Brenda", line: "Either works, but the first is clearer. What worries me more is *the reduction of the company's water consumption levels*." },
      { who: "Alan", line: "What's wrong with that?" },
      { who: "Brenda", line: "Nothing, as long as we actually reduced them. If we didn't, it's just *greenwashing* with long words." }
    ]
  },

  objectives: [
    "I can understand long noun phrases in reports and articles.",
    "I can build noun phrases with pre-modifiers such as compound adjectives and nouns.",
    "I can add information after a noun with prepositional phrases, participles and infinitives.",
    "I can discuss corporate social responsibility critically."
  ],

  explanation: {
    vocabTitle: "Corporate responsibility",
    vocab: [
      { word: "corporate social responsibility (CSR)", icon: "🏢" }, { word: "stakeholders", icon: "👥" }, { word: "shareholders", icon: "📈" },
      { word: "greenwashing", icon: "🟢" }, { word: "accountability", icon: "⚖️" }, { word: "transparency", icon: "🔍" },
      { word: "supply chain", icon: "🔗" }, { word: "carbon footprint", icon: "👣" }, { word: "ethical sourcing", icon: "🌾" },
      { word: "a code of conduct", icon: "📜" }, { word: "a watchdog", icon: "🐕" }, { word: "a boycott", icon: "🚫" },
      { word: "philanthropy", icon: "🎁" }, { word: "fair trade", icon: "🤝" }, { word: "a track record", icon: "🏁" }
    ],
    grammar: [
      {
        title: "Pre-modification: before the noun",
        intro: "English can pack a lot of information **before** a noun, using adjectives, nouns and compound adjectives.",
        head: ["Pattern", "Example"],
        rows: [
          ["adjective + noun + noun", "*a new water conservation programme*"],
          ["number + noun (singular!) compound", "*a three-year project, a five-star hotel, a ten-minute walk*"],
          ["participle compounds", "*a government-funded study, a fast-growing company, a well-known brand*"],
          ["noun + noun (the first noun acts like an adjective)", "*customer data protection, employee well-being policy*"]
        ],
        note: "In number compounds the noun is singular: *a three-year project*, not *a three-years project*."
      },
      {
        title: "Post-modification: after the noun",
        head: ["Pattern", "Example"],
        rows: [
          ["prepositional phrase", "*a reduction in water use, the impact of plastic on oceans*"],
          ["relative clause", "*the farmers who supply our coffee*"],
          ["reduced relative (-ed participle)", "*the people affected by the decision*"],
          ["reduced relative (-ing participle)", "*companies operating in the region*"],
          ["to-infinitive", "*the first company to sign the agreement, a decision to be made*"],
          ["appositive noun phrase", "*Patricia Ruiz, the company's new director, said…*"]
        ]
      },
      {
        title: "Balancing a noun phrase",
        head: ["Too heavy", "Clearer"],
        rows: [
          ["*the drought-affected small-scale coffee-producing farmers*", "*small coffee farmers affected by the drought*"],
          ["*the company's 2025 carbon emissions reduction target*", "*the company's target for reducing carbon emissions by 2025*"]
        ]
      }
    ],
    watchOut: [
      ["a two-years contract", "a two-*year* contract"],
      ["the people who affected by the decision", "the people affected by the decision"],
      ["a decision for making", "a decision *to be made*"],
      ["the company of my father", "my father's company"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each noun phrase with one word.",
      items: [
        "The company signed a ten-[[year]] agreement with local farmers.",
        "Families [[affected|hit]] by the floods will receive compensation.",
        "She was the first woman [[to]] lead the company.",
        "There has been a sharp reduction [[in]] plastic use.",
        "It's a fast-[[growing]] company with offices in six countries."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an analyst discussing whether corporate responsibility is genuine.",
      title: "Doing good or looking good?",
      script: [
        { who: "Host", line: "Almost every large company now publishes a sustainability report. Is that a sign of real change?" },
        { who: "Analyst", line: "Partly. Investors and customers increasingly expect it, so the pressure is real. But a glossy report full of photos of smiling farmers is not the same as a measurable reduction in environmental impact." },
        { who: "Host", line: "How can readers tell the difference?" },
        { who: "Analyst", line: "Look for specific numbers and independent verification. A phrase like our ongoing commitment to a greener future tells you nothing. A sentence like a thirty per cent reduction in water use at our three largest factories, verified by an external auditor, tells you a great deal." },
        { who: "Host", line: "And greenwashing?" },
        { who: "Analyst", line: "That's when companies exaggerate or invent environmental benefits. A classic example is a product labelled natural or eco-friendly with no evidence behind the claim. Several countries have now introduced laws requiring companies to prove those claims." },
        { who: "Host", line: "Is there any company you'd hold up as a good example?" },
        { who: "Analyst", line: "I'd rather point to practices than companies. The ones taking responsibility seriously publish data on their entire supply chain, including the problems they've found, and they set targets linked to executive pay. When the people making decisions lose money for missing targets, things tend to move much faster." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The analyst believes all sustainability reports show real change.", a: false },
            { s: "Specific numbers and independent checks are good signs.", a: true },
            { s: "Greenwashing means exaggerating environmental benefits.", a: true },
            { s: "No countries have laws about environmental claims.", a: false },
            { s: "Linking targets to executive pay can speed up change.", a: true }
          ]
        },
        {
          type: "sort", title: "Vague or specific?",
          prompt: "Sort the phrases the analyst mentions.",
          bins: ["vague (tells you little)", "specific (tells you a lot)"],
          items: [
            { text: "our ongoing commitment to a greener future", bin: 0 }, { text: "a product labelled natural", bin: 0 }, { text: "photos of smiling farmers", bin: 0 },
            { text: "a thirty per cent reduction in water use", bin: 1 }, { text: "verified by an external auditor", bin: 1 }, { text: "data on their entire supply chain", bin: 1 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an extract from a company's annual report and a journalist's response.",
      title: "Two versions of the truth",
      text: [
        { author: "From the annual report", body: "As a responsible, forward-thinking global food producer, we are proud of our long-standing commitment to the communities in which we operate. This year, our award-winning community-based nutrition programme reached more than 50,000 children in rural areas, and our newly launched sustainable packaging initiative is expected to significantly reduce the plastic used in our products." },
        { author: "Journalist's response", body: "The report is impressive, at least at first glance. Look more closely, however, and the dense noun phrases begin to hide more than they reveal. The *award-winning nutrition programme* received its award from an organization partly funded by the company itself. The *sustainable packaging initiative* is *expected* to reduce plastic use, but the report gives no target, no date and no baseline against which progress could be measured." },
        { author: "", body: "Meanwhile, the section on the company's supply chain, the part of its business with the greatest social and environmental impact, consists of just two sentences. There is no mention of the investigation published last year into working conditions on plantations supplying the company with palm oil, nor of the families displaced by the expansion of those plantations." },
        { author: "", body: "None of this means the company's programmes are worthless. Some children are undoubtedly better fed as a result. But responsible readers should learn to unpack these long phrases and ask a simple question of each one: what, exactly, has changed, and how do we know?" }
      ],
      activities: [
        {
          type: "match", title: "Unpack the noun phrase",
          prompt: "Match each noun phrase from the report with its meaning.",
          pairs: [
            ["a forward-thinking global food producer", "a company that produces food worldwide and plans ahead"],
            ["our award-winning community-based nutrition programme", "a nutrition project in communities that has won a prize"],
            ["our newly launched sustainable packaging initiative", "a recent plan to use more environmentally friendly packaging"],
            ["the families displaced by the expansion", "people forced to leave their homes because plantations grew"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The journalist says the nutrition award was completely independent.", a: false },
            { s: "The packaging initiative has a clear target and date.", a: false },
            { s: "The report says little about the supply chain.", a: true },
            { s: "The journalist thinks the company's programmes are completely worthless.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice building and unpacking noun phrases, then write a short report section.",
      activities: [
        {
          type: "rewrite", title: "Compress it",
          prompt: "Rewrite each phrase as a shorter noun phrase with a compound before the noun.",
          items: [
            { q: "a project that lasts three years", a: ["a three-year project"] },
            { q: "a study funded by the government", a: ["a government-funded study"] },
            { q: "a company that is growing fast", a: ["a fast-growing company"] },
            { q: "a walk that takes ten minutes", a: ["a ten-minute walk"] }
          ]
        },
        {
          type: "rewrite", title: "Expand it",
          prompt: "Make each heavy phrase clearer by moving information after the noun. Use the words given.",
          items: [
            { q: "the drought-affected farmers (affected by)", a: ["the farmers affected by the drought"] },
            { q: "the plastic use reduction (reduction in)", a: ["the reduction in plastic use", "a reduction in plastic use"] },
            { q: "the region-operating companies (operating in)", a: ["the companies operating in the region", "companies operating in the region"] }
          ]
        },
        {
          type: "write", title: "A report section",
          prompt: "Write the *Social and environmental impact* section (220–260 words) of a report for a real or imagined company. Describe two initiatives, give specific figures, and honestly mention one problem the company still needs to solve. Use a variety of complex noun phrases, but make sure the text remains clear.",
          minWords: 220, maxWords: 260,
          model: "Social and environmental impact<br>Over the past year, we have focused on two initiatives with measurable results.<br>The first is a three-year water conservation programme run in partnership with farming cooperatives in Guanajuato. By installing drip irrigation systems on 120 small farms supplying our vegetables, we have achieved a 28% reduction in water consumption compared with 2022. These figures have been verified by an independent environmental consultancy, and the full data is available on our website.<br>The second initiative is a training scheme for women working in our packaging plants. Since its launch, more than 300 employees have completed courses in management and quality control, and the proportion of supervisory positions held by women has risen from 18% to 31%.<br>However, we recognize that significant challenges remain. The plastic used in our packaging has fallen by only 4%, well below the 15% target set in our last report. The main obstacle has been the higher cost of alternative materials, and the suppliers able to provide them at the scale we need are still limited.<br>Over the coming year, we will publish quarterly progress updates and work with two universities to develop a lower-cost biodegradable material. We are also linking part of senior managers' annual bonuses to the achievement of our environmental targets, a step we believe is essential to ensuring genuine accountability.",
          bank: ["a three-year … programme", "farms supplying our…", "a 28% reduction in…", "verified by…", "employees working in…", "the target set in…", "suppliers able to…", "a lower-cost biodegradable material"],
          checklist: [
            "I described **two** initiatives with **specific figures**.",
            "I honestly mentioned **one problem**.",
            "I used noun phrases with **pre-** and **post-modification**.",
            "My text is **dense but clear**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Keep long noun phrases together in one breath.",
          items: [
            "It's a three-year community programme.",
            "The farmers affected by the drought.",
            "A sharp reduction in plastic use.",
            "She was the first woman to lead it.",
            "It's a fast-growing technology company.",
            "That's greenwashing with long words."
          ]
        },
        {
          type: "speak", title: "Responsible or not?",
          prompt: "Record yourself for about three minutes. Choose a well-known company (or type of company, such as fast fashion, fast food or tech). Describe what it does well and badly in terms of social and environmental responsibility, and say what it should do to improve. Use precise noun phrases.",
          language: ["a well-known…", "its supply chain", "workers employed by…", "a reduction in…", "the people affected by…", "It was the first company to…", "That sounds like greenwashing", "What they should do is…"],
          seconds: 210,
          checklist: ["describe positive and negative practices?", "give at least one specific example?", "suggest improvements?", "use complex noun phrases clearly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can understand long noun phrases in formal texts.", review: "Reading activity 1" },
    { can: "I can use number and participle compounds before a noun.", review: "Explanation: pre-modification; Writing activity 1" },
    { can: "I can add information after a noun with participles and infinitives.", review: "Explanation: post-modification; Writing activity 2" },
    { can: "I can balance a noun phrase so it stays clear.", review: "Explanation: balancing a noun phrase" },
    { can: "I can evaluate company claims critically.", review: "Listening and Reading activities" },
    { can: "I can write and talk about corporate responsibility precisely.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
