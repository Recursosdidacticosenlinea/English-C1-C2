window.UNIT = {
  slug: "the-science-of-happiness",
  number: 5,
  title: "The Science of Happiness",
  level: "C1",
  minutes: 85,
  speakers: { "Renata": "f", "Pablo": "m", "Lecturer": "f", "Student": "m" },
  focus: ["structure of a discursive essay: introduction, body, conclusion", "writing a thesis statement", "conceding and refuting: While it is true that…, this overlooks…", "formal linking: furthermore, by contrast, in light of this", "vocabulary of well-being: life satisfaction, hedonic adaptation, flourishing"],

  presentation: {
    scene: "😊📊🧘📝",
    situation: "Renata has to write an essay for her psychology course: *Can money buy happiness?* She asks her friend Pablo, who studies economics, for ideas.",
    warmup: {
      prompt: "What do you think contributes most to happiness? Choose all that apply.",
      options: ["money", "friends", "family", "health", "a meaningful job", "free time", "travel", "nature", "religion or spirituality", "achievements", "helping others", "good sleep"],
      response: "Researchers have studied happiness for decades, and the findings are often surprising. In this unit you'll learn how to plan and write a C1 discursive essay."
    },
    dialogueTitle: "Can money buy happiness?",
    dialogue: [
      { who: "Renata", line: "I have to argue whether money can buy happiness, and I don't even know where to start." },
      { who: "Pablo", line: "Start with your *position*. What do you actually think?" },
      { who: "Renata", line: "That it helps up to a point, but not beyond it." },
      { who: "Pablo", line: "Perfect. That's your *thesis statement*. Then each body paragraph supports one part of it." },
      { who: "Renata", line: "But I should mention the other side, right? Some studies say rich people are happier." },
      { who: "Pablo", line: "Absolutely. That's the *concession*. You say *While it is true that* income matters, *this overlooks* the fact that we adapt to it quickly." },
      { who: "Renata", line: "And the conclusion just repeats everything?" },
      { who: "Pablo", line: "No, it *synthesizes*. Restate your thesis in new words and leave the reader with something to think about." }
    ]
  },

  objectives: [
    "I can plan a discursive essay with a clear thesis and logical paragraphs.",
    "I can concede opposing views and refute them politely.",
    "I can use formal linking expressions to guide the reader.",
    "I can discuss research on happiness and well-being."
  ],

  explanation: {
    vocabTitle: "The language of well-being",
    vocab: [
      { word: "well-being", icon: "🌿" }, { word: "life satisfaction", icon: "📈" }, { word: "flourishing", icon: "🌻" },
      { word: "hedonic adaptation", icon: "🔄" }, { word: "the hedonic treadmill", icon: "🏃" }, { word: "a sense of purpose", icon: "🧭" },
      { word: "social ties", icon: "🤝" }, { word: "material wealth", icon: "💰" }, { word: "fulfilment", icon: "🏆" },
      { word: "contentment", icon: "😌" }, { word: "subjective", icon: "🔍" }, { word: "correlate with", icon: "📊" },
      { word: "a diminishing return", icon: "📉" }, { word: "gratitude", icon: "🙏" }, { word: "mindfulness", icon: "🧘" }
    ],
    grammar: [
      {
        title: "The structure of a discursive essay",
        head: ["Part", "Purpose", "Useful language"],
        rows: [
          ["Introduction", "hook, context, thesis statement", "*It is often claimed that… / This essay will argue that…*"],
          ["Body paragraph 1", "first argument for your thesis + evidence", "*The most compelling argument is that… / Research suggests…*"],
          ["Body paragraph 2", "second argument + example", "*Furthermore,… / A further consideration is…*"],
          ["Body paragraph 3", "concession and refutation", "*While it is true that…, this overlooks… / Critics argue…; however,…*"],
          ["Conclusion", "restate thesis, synthesize, final thought", "*In light of the above,… / On balance, it seems clear that…*"]
        ],
        note: "Each body paragraph should start with a **topic sentence** that tells the reader what the paragraph is about."
      },
      {
        title: "Conceding and refuting",
        head: ["Concede (accept partly)", "Refute (answer back)"],
        rows: [
          ["*While it is true that money reduces stress,*", "*this overlooks the effect of comparison.*"],
          ["*It could be argued that wealthier countries are happier.*", "*However, this correlation weakens above a certain income.*"],
          ["*Admittedly, a pay rise brings short-term pleasure.*", "*Nevertheless, people soon adapt to it.*"],
          ["*There is some truth in the claim that…*", "*That said, the evidence is far from conclusive.*"]
        ]
      },
      {
        title: "Formal linkers",
        head: ["Function", "Linkers"],
        rows: [
          ["adding", "*furthermore, moreover, in addition, what is more*"],
          ["contrasting", "*by contrast, conversely, on the other hand, whereas*"],
          ["cause and result", "*consequently, as a result, hence, thereby*"],
          ["concluding", "*in light of this, on balance, all things considered, to conclude*"]
        ]
      }
    ],
    watchOut: [
      ["In this essay I'm gonna talk about money.", "This essay will *examine / argue* whether money can buy happiness."],
      ["Money is bad. Rich people are sad.", "Beyond a certain point, additional income appears to have *little effect* on well-being."],
      ["In conclusion, as I said, money is not happiness.", "*On balance*, it seems that money *contributes to* happiness only up to a point."],
      ["Moreover, but some people disagree.", "*However*, some people disagree."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the essay phrases with one word.",
      items: [
        "This essay will [[argue|examine|consider]] whether money can buy happiness.",
        "[[While|Although|Whilst]] it is true that money reduces stress, this overlooks other factors.",
        "[[Furthermore|Moreover]], research suggests that social ties matter more.",
        "On [[balance]], money appears to matter only up to a point.",
        "In [[light]] of this evidence, governments should measure well-being."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to part of a university lecture on happiness research.",
      title: "What makes us happy?",
      script: [
        { who: "Lecturer", line: "Good morning. Today I want to look at three findings from happiness research that consistently surprise students." },
        { who: "Lecturer", line: "First, income. Across many countries, higher income is associated with higher life satisfaction. However, the relationship isn't a straight line. Each extra dollar brings less additional happiness than the one before: a classic case of diminishing returns." },
        { who: "Student", line: "So is there a point where money stops mattering?" },
        { who: "Lecturer", line: "That's debated. Some studies suggested a plateau, while more recent research finds that satisfaction keeps rising, just more slowly. What's clear is that money matters most when it lifts people out of insecurity." },
        { who: "Lecturer", line: "Second, adaptation. Lottery winners and people who suffer serious accidents both tend to return closer to their previous level of happiness than we'd expect. We adapt, to good and bad events alike." },
        { who: "Lecturer", line: "And third, relationships. In one of the longest studies ever conducted, which followed people for over eighty years, the strongest predictor of a healthy and happy old age wasn't wealth or fame. It was the quality of people's close relationships." },
        { who: "Student", line: "So in an essay, would that be our strongest evidence?" },
        { who: "Lecturer", line: "It would certainly be compelling. But remember to acknowledge its limitations: most of the original participants were men from one country. Good essays don't hide the weaknesses of their evidence; they address them." }
      ],
      activities: [
        {
          type: "match", title: "Three findings",
          prompt: "Match each topic with the lecturer's main point.",
          pairs: [
            ["income", "brings less extra happiness the more you have"],
            ["adaptation", "people return closer to their usual happiness level"],
            ["relationships", "the strongest predictor of a happy old age"],
            ["the long study", "had limitations in who took part"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again and decide.",
          items: [
            { s: "The link between income and satisfaction is a straight line.", a: false },
            { s: "All researchers agree that happiness stops rising at a certain income.", a: false },
            { s: "We adapt to both positive and negative events.", a: true },
            { s: "The lecturer says good essays should address the weaknesses of evidence.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a model C1 essay. Pay attention to its structure.",
      title: "Can money buy happiness?",
      text: [
        { author: "Introduction", body: "It is often said that money cannot buy happiness, yet most people spend a large part of their lives trying to earn more of it. This essay will argue that money contributes significantly to well-being up to the point where basic needs and security are met, but that beyond this point its effect is limited and frequently outweighed by other factors." },
        { author: "Body 1", body: "The most compelling argument for the importance of money is the link between poverty and unhappiness. People who struggle to pay for food, housing or medical care experience chronic stress, which has a measurable impact on both mental and physical health. For these individuals, an increase in income can be genuinely life-changing." },
        { author: "Body 2", body: "Beyond a certain level, however, the picture changes. Psychologists have documented a process known as hedonic adaptation, whereby people quickly become accustomed to improvements in their circumstances. A larger house or a newer car brings pleasure at first, but this soon fades and is replaced by new desires. Furthermore, wealth often encourages comparison with others, which tends to reduce satisfaction rather than increase it." },
        { author: "Body 3", body: "While it is true that recent studies show life satisfaction continuing to rise with income, this overlooks the size of the effect. The gains at higher incomes are modest compared with those associated with strong relationships, good health and a sense of purpose, none of which can simply be purchased." },
        { author: "Conclusion", body: "On balance, then, money is best seen as a foundation for happiness rather than its source. In light of this, both individuals and governments might be wiser to measure success not only in terms of income, but in terms of the relationships and opportunities that make life worth living." }
      ],
      activities: [
        {
          type: "match", title: "Essay structure",
          prompt: "Match each part of the essay with its function.",
          pairs: [
            ["Introduction", "presents the thesis"],
            ["Body 1", "argues that money matters for people in poverty"],
            ["Body 2", "explains why extra money has limited effects"],
            ["Body 3", "concedes a counter-argument and refutes it"],
            ["Conclusion", "restates the thesis and suggests an implication"]
          ]
        },
        {
          type: "tiles", title: "Rebuild the thesis",
          prompt: "Put the words in order to recreate key sentences from the essay.",
          items: [
            { a: "This essay will argue that money contributes significantly." },
            { a: "Money is best seen as a foundation." },
            { a: "Wealth often encourages comparison with others." }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice concessions and essay language, then write your own discursive essay.",
      activities: [
        {
          type: "rewrite", title: "Concede and refute",
          prompt: "Join the two ideas into one sentence starting with *While it is true that*.",
          items: [
            { q: "Social media connects people. It can also increase loneliness.", a: ["While it is true that social media connects people, it can also increase loneliness."] },
            { q: "Exercise improves mood. It is not a cure for depression.", a: ["While it is true that exercise improves mood, it is not a cure for depression."] },
            { q: "Wealthy countries score higher. The difference is small at the top.", a: ["While it is true that wealthy countries score higher, the difference is small at the top."] }
          ]
        },
        {
          type: "sort", title: "Where does it go?",
          prompt: "Decide where each sentence would most naturally appear in an essay.",
          bins: ["Introduction", "Body paragraph", "Conclusion"],
          items: [
            { text: "This essay will argue that…", bin: 0 }, { text: "It is often claimed that…", bin: 0 },
            { text: "The most compelling argument is that…", bin: 1 }, { text: "Research by psychologists suggests…", bin: 1 }, { text: "Critics argue that…; however,…", bin: 1 },
            { text: "On balance, it seems clear that…", bin: 2 }, { text: "In light of the above,…", bin: 2 }
          ]
        },
        {
          type: "write", title: "Your discursive essay",
          prompt: "Write a discursive essay (240–280 words) with the title *Is happiness a choice?* Include a clear thesis statement, two supporting paragraphs, a paragraph that concedes and refutes an opposing view, and a conclusion. Use formal linkers and no contractions.",
          minWords: 240, maxWords: 280,
          model: "Self-help books frequently claim that happiness is simply a matter of choosing the right attitude. This essay will argue that, although our thoughts and habits have a genuine influence on how happy we feel, happiness is only partly a choice, since it is also shaped by genetics and by circumstances beyond our control.<br>The strongest argument in favour of choice is the evidence for deliberate habits. Studies suggest that practices such as expressing gratitude, exercising regularly and spending time with friends produce measurable improvements in mood. Furthermore, people who interpret setbacks as temporary tend to recover from them more quickly. In this sense, we can certainly choose behaviours that make happiness more likely.<br>Nevertheless, research on twins indicates that a considerable proportion of the differences in happiness between individuals is linked to genetic factors. Moreover, it would be unreasonable to tell someone living in poverty, or facing serious illness or discrimination, that their unhappiness is a personal choice. Such a view risks blaming individuals for problems that require social solutions.<br>While it is true that some people remain cheerful in extremely difficult situations, this overlooks the fact that such cases are exceptional. They demonstrate what is possible, rather than what can reasonably be expected of everyone.<br>On balance, then, happiness is best understood as a combination of temperament, circumstances and choices. In light of this, we should encourage the habits that support well-being, while also recognizing that a happier society depends on reducing the obstacles that no positive attitude can overcome.",
          bank: ["This essay will argue that…", "The strongest argument is…", "Furthermore,…", "Nevertheless,…", "While it is true that…, this overlooks…", "On balance,…", "In light of this,…"],
          checklist: [
            "My introduction has a clear **thesis statement**.",
            "Each body paragraph begins with a **topic sentence**.",
            "I **conceded and refuted** an opposing view.",
            "I used **formal linkers** and **no contractions**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat these essay phrases until they sound natural.",
          items: [
            "This essay will argue that money matters.",
            "Admittedly, a pay rise brings short-term pleasure.",
            "Nevertheless, people soon adapt to it.",
            "Furthermore, wealth encourages comparison with others.",
            "On balance, money is only a foundation.",
            "Relationships predict a happy old age."
          ]
        },
        {
          type: "speak", title: "Present your argument",
          prompt: "Record a short spoken argument (about three minutes) on the question *Can money buy happiness?* Organize it like an essay: state your position, give two arguments with evidence or examples, concede and refute an opposing view, and conclude.",
          language: ["My position is that…", "The most compelling argument is…", "For instance,…", "Furthermore,…", "While it is true that…, this overlooks…", "On balance,…", "In light of this,…"],
          seconds: 210,
          checklist: ["state a clear position at the start?", "give two arguments with examples?", "concede and refute an opposing view?", "end with a clear conclusion?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can write a clear thesis statement for an essay.", review: "Explanation: structure of a discursive essay; Reading" },
    { can: "I can organize an essay into logical paragraphs with topic sentences.", review: "Explanation: structure; Writing activity 2" },
    { can: "I can concede an opposing view and refute it politely.", review: "Explanation: conceding and refuting; Writing activity 1" },
    { can: "I can use formal linkers to guide the reader.", review: "Explanation: formal linkers" },
    { can: "I can follow a lecture about research and note its limitations.", review: "Listening activities" },
    { can: "I can write and present a well-structured argument.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
