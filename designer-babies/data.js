window.UNIT = {
  slug: "designer-babies",
  number: 18,
  title: "Designer Babies?",
  level: "C1",
  minutes: 80,
  speakers: { "Andrea": "f", "Iker": "m", "Host": "f", "Bioethicist": "m" },
  focus: ["concession with conjunctions: although, even though, while, whereas, much as", "concession with prepositions: despite, in spite of, notwithstanding", "albeit + adjective / adverb / phrase", "granted / admittedly…, but…", "adjective / adverb + as / though: Promising as it is,…"],

  presentation: {
    scene: "🧬👶⚖️🔬",
    situation: "Andrea studies biology and Iker studies philosophy. After a lecture on gene editing, they continue the debate in the university café.",
    warmup: {
      prompt: "Should gene editing be allowed for these purposes? Choose all you agree with.",
      options: ["curing genetic diseases", "preventing cancer", "choosing eye colour", "increasing intelligence", "making people taller", "improving crops", "saving endangered animals", "preventing allergies", "making athletes stronger", "slowing ageing", "eliminating mosquitoes", "creating new pets"],
      response: "Gene editing raises some of the most difficult ethical questions of our time. In this unit you'll learn sophisticated ways to concede a point and still defend your argument."
    },
    dialogueTitle: "Where do we draw the line?",
    dialogue: [
      { who: "Andrea", line: "*Although* I see the risks, I think editing genes to cure diseases is clearly justified." },
      { who: "Iker", line: "*Granted*, nobody wants children to suffer. *But* once we accept that, where do we stop?" },
      { who: "Andrea", line: "We stop at medical uses. *Much as* I'd love to be taller, that's not a disease." },
      { who: "Iker", line: "*Promising as* the technology *is*, it's still experimental. One scientist already edited twins' genes, *despite* the risks." },
      { who: "Andrea", line: "And he went to prison for it. *Notwithstanding* that case, the rules are getting stricter." },
      { who: "Iker", line: "Stricter, *albeit* slowly. *Even though* most countries ban it, others might not." },
      { who: "Andrea", line: "*While* that's true, we can't refuse to cure diseases just because the technology could be misused." },
      { who: "Iker", line: "Fair enough. *In spite of* everything I've said, I'd probably want it if my own child were ill." }
    ]
  },

  objectives: [
    "I can use a wide range of concessive conjunctions and prepositions.",
    "I can use albeit, notwithstanding and much as in formal contexts.",
    "I can use fronted concessive structures such as Promising as it is.",
    "I can debate the ethics of genetic technology with nuance."
  ],

  explanation: {
    vocabTitle: "Genetics and ethics",
    vocab: [
      { word: "gene editing", icon: "✂️" }, { word: "DNA", icon: "🧬" }, { word: "a genetic disorder", icon: "🩺" },
      { word: "inherited", icon: "👪" }, { word: "an embryo", icon: "🥚" }, { word: "a clinical trial", icon: "🧪" },
      { word: "unintended consequences", icon: "⚠️" }, { word: "a slippery slope", icon: "⛷️" }, { word: "playing God", icon: "☁️" },
      { word: "designer babies", icon: "👶" }, { word: "eugenics", icon: "🚫" }, { word: "consent", icon: "✍️" },
      { word: "a moratorium", icon: "⏸️" }, { word: "a breakthrough", icon: "💡" }, { word: "ethically questionable", icon: "❓" }
    ],
    grammar: [
      {
        title: "Concession: conjunctions and prepositions",
        intro: "Concession means accepting one idea while presenting a contrasting one. Pay attention to what follows each word: a **clause** (subject + verb) or a **noun / -ing**.",
        head: ["Word", "Followed by", "Example"],
        rows: [
          ["*although / even though / though*", "clause", "*Although the risks are high, research continues.*"],
          ["*while / whilst / whereas*", "clause (contrast)", "*While it can cure diseases, it can also be misused.*"],
          ["*much as*", "clause (= although very much)", "*Much as I admire his work, I disagree with him.*"],
          ["*despite / in spite of*", "noun or -ing", "*Despite the risks, he went ahead. / Despite knowing the risks,…*"],
          ["*despite the fact that*", "clause", "*Despite the fact that it was illegal,…*"],
          ["*notwithstanding*", "noun (formal; before or after)", "*Notwithstanding these concerns, the trial was approved.*"]
        ]
      },
      {
        title: "Albeit, granted and fronted concession",
        head: ["Structure", "Example"],
        rows: [
          ["*albeit* + adjective / adverb / phrase (formal)", "*The rules are improving, albeit slowly.* / *a small, albeit important, step*"],
          ["*Granted, … but…*", "*Granted, the technology is new, but it has huge potential.*"],
          ["*Admittedly, …; nevertheless,…*", "*Admittedly, mistakes were made; nevertheless, progress is clear.*"],
          ["adjective / adverb + *as / though* + subject + verb", "*Promising as it is, the technology is experimental.*"],
          ["*However* + adjective / adverb", "*However careful we are, accidents will happen.*"]
        ],
        note: "*Albeit* is never followed by a full clause: *albeit slowly* ✓, *albeit it is slow* ✗."
      }
    ],
    watchOut: [
      ["Despite it was dangerous, he continued.", "Despite *the danger* / *the fact that it was dangerous*, he continued."],
      ["Although the risks, they approved it.", "Although *there were risks*, they approved it."],
      ["Progress has been made, albeit it is slow.", "Progress has been made, albeit *slowly*."],
      ["Much as I like him, but I don't trust him.", "Much as I like him, I don't trust him."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with one word.",
      items: [
        "[[Despite]] the risks, the scientists went ahead with the trial.",
        "The law is changing, [[albeit]] slowly.",
        "[[Much]] as I admire her research, I can't support this project.",
        "Promising [[as|though]] it is, the treatment is still experimental.",
        "[[Although|Though|While|Whilst]] most countries ban it, some allow limited research."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a bioethicist discussing gene editing on a radio programme.",
      title: "Editing the future",
      script: [
        { who: "Host", line: "Gene editing technology can now change DNA with remarkable precision. Why is it so controversial?" },
        { who: "Bioethicist", line: "Because, powerful as it is, it raises questions we've never had to answer before. There's a crucial distinction between editing the genes of a patient, which affects only that person, and editing an embryo, where the changes would be passed on to future generations." },
        { who: "Host", line: "And the first is generally accepted?" },
        { who: "Bioethicist", line: "Largely, yes. Treatments for conditions like sickle cell disease have already been approved in some countries, albeit at an extremely high cost. Although there are still safety questions, most ethicists see this as an extension of existing medicine." },
        { who: "Host", line: "And editing embryos?" },
        { who: "Bioethicist", line: "That's where opinion divides. Supporters argue that, if we can prevent a devastating inherited disease, it would be unethical not to. Critics worry about unintended consequences that might only appear decades later, and about the slippery slope towards enhancement: choosing traits like height or intelligence." },
        { who: "Host", line: "Where do you stand?" },
        { who: "Bioethicist", line: "Much as I understand the hopes of families affected by genetic diseases, I believe we're not ready yet. Notwithstanding the progress of the last decade, we still don't fully understand how many genes interact. Granted, that may change. But decisions that affect every future generation deserve far more public debate than they've had so far." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "Editing a patient's genes affects future generations.", a: false },
            { s: "Some gene treatments have already been approved.", a: true },
            { s: "These approved treatments are cheap.", a: false },
            { s: "Critics worry about consequences that may appear much later.", a: true },
            { s: "The bioethicist believes we are ready to edit embryos.", a: false }
          ]
        },
        {
          type: "sort", title: "Patients or embryos?",
          prompt: "Sort the ideas according to the bioethicist.",
          bins: ["editing a patient", "editing an embryo"],
          items: [
            { text: "affects only that person", bin: 0 }, { text: "seen as an extension of medicine", bin: 0 }, { text: "already approved in some countries", bin: 0 },
            { text: "changes passed on to future generations", bin: 1 }, { text: "opinion is divided", bin: 1 }, { text: "risk of a slippery slope to enhancement", bin: 1 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read two short opinion pieces on the same question.",
      title: "Should we edit human embryos?",
      text: [
        { author: "Yes: a geneticist", body: "Every year, thousands of children are born with genetic conditions that cause terrible suffering and early death. Although we can sometimes screen embryos to avoid these conditions, this is not always possible. Gene editing offers, for the first time, the possibility of correcting the problem itself. Granted, the technology is not yet perfect, and strict regulation is essential. But refusing to develop it means accepting preventable suffering. Much as I respect those who fear a slippery slope, we do not ban surgery because it could, in theory, be used for cosmetic purposes. We regulate it." },
        { author: "No: a disability rights campaigner", body: "Well-intentioned as the geneticists may be, their language worries me. When we speak of *correcting* certain genes, we imply that some lives are less worth living. Many people with genetic conditions lead full and happy lives, albeit with challenges that society often makes harder than they need to be. Despite the promises of precision, scientists themselves admit that editing can cause unexpected changes elsewhere in the genome. Notwithstanding the hopes of some families, we should invest in support and inclusion before we try to redesign the human species." }
      ],
      activities: [
        {
          type: "match", title: "Find the concession",
          prompt: "Match each concession from the texts with the argument that follows it.",
          pairs: [
            ["Granted, the technology is not yet perfect,", "but refusing to develop it means accepting suffering."],
            ["Much as I respect those who fear a slippery slope,", "we regulate surgery rather than ban it."],
            ["Well-intentioned as the geneticists may be,", "their language worries me."],
            ["Despite the promises of precision,", "editing can cause unexpected changes."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The geneticist thinks no regulation is needed.", a: false },
            { s: "The geneticist compares gene editing to surgery.", a: true },
            { s: "The campaigner thinks people with genetic conditions cannot be happy.", a: false },
            { s: "The campaigner prefers investing in support and inclusion.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice concession structures, then write a balanced argument.",
      activities: [
        {
          type: "rewrite", title: "Concede it",
          prompt: "Rewrite each sentence using the word in brackets.",
          items: [
            { q: "The treatment is expensive, but it works. (Although)", a: ["Although the treatment is expensive, it works.", "Although the treatment is expensive, it does work."] },
            { q: "They knew the risks, but they continued. (Despite)", a: ["Despite knowing the risks, they continued.", "Despite the risks, they continued.", "Despite the fact that they knew the risks, they continued."] },
            { q: "The progress has been real but slow. (albeit)", a: ["The progress has been real, albeit slow.", "Progress has been real, albeit slow."] },
            { q: "The idea is very attractive, but it is unrealistic. (as)", a: ["Attractive as the idea is, it is unrealistic.", "Attractive as it is, the idea is unrealistic.", "Attractive as the idea is, it's unrealistic."] }
          ]
        },
        {
          type: "sort", title: "Clause or noun?",
          prompt: "Which words are followed by a clause, and which by a noun or -ing form?",
          bins: ["+ clause", "+ noun / -ing"],
          items: [
            { text: "although", bin: 0 }, { text: "even though", bin: 0 }, { text: "much as", bin: 0 }, { text: "whereas", bin: 0 },
            { text: "despite", bin: 1 }, { text: "in spite of", bin: 1 }, { text: "notwithstanding", bin: 1 }
          ]
        },
        {
          type: "write", title: "A balanced argument",
          prompt: "Write a balanced argument (220–260 words) on **one** of these questions: *Should parents be allowed to choose their baby's sex? / Should athletes be allowed to use genetic enhancement? / Should we bring extinct animals back to life?* Present both sides fairly and give your own conclusion. Use at least **six** different concession structures.",
          minWords: 220, maxWords: 260,
          model: "Should we bring extinct animals back to life?<br>Scientists are now attempting to recreate species such as the woolly mammoth by editing the DNA of their closest living relatives. Exciting as this sounds, the project raises serious practical and ethical questions.<br>Supporters argue that de-extinction could help repair damaged ecosystems. Mammoths, for example, might help preserve the Arctic permafrost by trampling snow and encouraging grasslands. Granted, this theory has not been proven, but it suggests that the benefits could extend beyond simple curiosity. Furthermore, the techniques developed could be used to protect endangered species that still exist today.<br>Critics, however, point out that a recreated animal would not truly be the original species, but a modified elephant, albeit a hairy one. Despite the enormous sums of money involved, there is no guarantee that these animals could survive in today's climate, or that they would not disrupt existing ecosystems. Much as people may be fascinated by the idea, many conservationists believe the money would be better spent protecting the habitats of animals that are disappearing right now.<br>Notwithstanding these concerns, I believe research should continue, although under strict regulation. While the dream of seeing mammoths walk again may never be fully realized, the genetic tools that emerge from this research could prove invaluable for conservation. What matters is that de-extinction is not used as an excuse to ignore extinction: however impressive a recreated mammoth might be, it would be a poor substitute for the thousands of species we are still losing every year.",
          bank: ["Exciting as this sounds,", "Granted,… but…", "albeit", "Despite…", "Much as…", "Notwithstanding…", "although", "While…", "however + adjective"],
          checklist: [
            "I presented **both sides** fairly.",
            "I gave a clear **personal conclusion**.",
            "I used at least **six** different concession structures.",
            "I used each structure with the correct **clause or noun**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice the falling-rising intonation on the concession.",
          items: [
            "Although I see the risks, I support it.",
            "Granted, nobody wants children to suffer.",
            "Much as I admire her, I disagree.",
            "Promising as it is, it's still experimental.",
            "The rules are changing, albeit slowly.",
            "Despite the risks, they went ahead."
          ]
        },
        {
          type: "speak", title: "Where do you draw the line?",
          prompt: "Record yourself for about three minutes. Look at the uses of gene editing in the warm-up. Choose two you would allow and two you would ban. Explain your reasoning, and for each one acknowledge an argument on the other side before defending your view.",
          language: ["Although…,", "Granted,… but…", "Much as I…,", "… as it may be,", "Despite…,", "albeit…", "While I accept that…,", "That's where I'd draw the line."],
          seconds: 210,
          checklist: ["discuss four different uses?", "acknowledge the other side each time?", "use at least five concession structures?", "make your overall position clear?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use although, even though, while and whereas correctly.", review: "Explanation: conjunctions and prepositions" },
    { can: "I can use despite and in spite of with nouns and -ing.", review: "Explanation: conjunctions and prepositions; Writing activity 2" },
    { can: "I can use albeit and notwithstanding in formal writing.", review: "Explanation: albeit, granted and fronted concession" },
    { can: "I can use fronted concession such as Promising as it is.", review: "Explanation: fronted concession; Writing activity 1" },
    { can: "I can follow ethical debates and identify concessions.", review: "Listening and Reading activities" },
    { can: "I can build a balanced, nuanced argument in writing and speech.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
