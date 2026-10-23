window.UNIT = {
  slug: "post-truth",
  number: 32,
  title: "Post-Truth",
  level: "C2",
  minutes: 90,
  speakers: { "Ximena": "f", "Hugo": "m", "Host": "f", "Fact-checker": "m" },
  focus: ["epistemic adverbs: ostensibly, purportedly, seemingly, by all accounts, demonstrably", "evaluating claims: unfounded, unsubstantiated, spurious, well-founded, corroborated", "verbs of evaluation: substantiate, corroborate, debunk, discredit, cast doubt on", "expressions of certainty and doubt: beyond doubt, open to question, by no means certain", "vocabulary of disinformation: cherry-pick, misleading, out of context"],

  presentation: {
    scene: "🧐📲❓✅",
    situation: "Ximena works for a fact-checking organization. Her colleague Hugo has found a viral post claiming that a common food additive causes memory loss.",
    warmup: {
      prompt: "How do you check whether something you read online is true? Choose all that apply.",
      options: ["check the source", "look for other sources", "check the date", "read beyond the headline", "check the author", "use a fact-checking site", "look at the evidence", "ask an expert", "check the photo", "consider who benefits", "check the comments", "I don't usually check"],
      response: "In an age of information overload, the ability to evaluate claims precisely is essential. In this unit you'll learn the language that journalists, scientists and fact-checkers use to do exactly that."
    },
    dialogueTitle: "Checking the claim",
    dialogue: [
      { who: "Hugo", line: "It's been shared two million times. The post says a *leading scientist* has proved that the additive damages memory." },
      { who: "Ximena", line: "*Ostensibly*, yes. Who's the scientist?" },
      { who: "Hugo", line: "That's the thing. The study is *purportedly* from a university in Switzerland, but I can't find it anywhere." },
      { who: "Ximena", line: "So the claim is completely *unsubstantiated*. Have you found any research at all?" },
      { who: "Hugo", line: "One real study, on mice, with enormous doses. The post has *cherry-picked* one line from it and taken it *out of context*." },
      { who: "Ximena", line: "And has anyone *corroborated* the findings?" },
      { who: "Hugo", line: "No. If anything, two larger studies *cast doubt on* the link." },
      { who: "Ximena", line: "Then our verdict is clear: *misleading*. The link is *by no means* established, and the post *demonstrably* misrepresents the evidence." }
    ]
  },

  objectives: [
    "I can use precise adverbs to show how much I trust a claim.",
    "I can evaluate claims with adjectives such as unfounded, spurious and well-founded.",
    "I can use verbs such as substantiate, corroborate and debunk accurately.",
    "I can analyse misleading information and explain why it is misleading."
  ],

  explanation: {
    vocabTitle: "Truth and disinformation",
    vocab: [
      { word: "post-truth", icon: "🌀" }, { word: "disinformation", icon: "🦠" }, { word: "misinformation", icon: "❗" },
      { word: "a conspiracy theory", icon: "👁️" }, { word: "an echo chamber", icon: "🔊" }, { word: "confirmation bias", icon: "🔁" },
      { word: "cherry-pick", icon: "🍒" }, { word: "taken out of context", icon: "✂️" }, { word: "clickbait", icon: "🎣" },
      { word: "a reliable source", icon: "📚" }, { word: "peer-reviewed", icon: "🔬" }, { word: "a fact-checker", icon: "✅" },
      { word: "debunk", icon: "🔍" }, { word: "spurious", icon: "🪤" }, { word: "corroborate", icon: "🤝" }
    ],
    grammar: [
      {
        title: "Adverbs that evaluate a claim",
        head: ["Adverb", "Nuance", "Example"],
        rows: [
          ["*ostensibly*", "it appears so, but the real situation is different", "*The site is ostensibly independent, but it's funded by…*"],
          ["*purportedly*", "it is claimed (I doubt it)", "*a study purportedly from a Swiss university*"],
          ["*seemingly*", "it seems so", "*a seemingly reliable source*"],
          ["*by all accounts*", "according to everyone who knows", "*By all accounts, she is a careful researcher.*"],
          ["*demonstrably*", "it can be proved", "*The claim is demonstrably false.*"],
          ["*indisputably*", "nobody can reasonably deny it", "*The climate is indisputably warming.*"]
        ]
      },
      {
        title: "Adjectives and verbs of evaluation",
        head: ["Strength of claim", "Adjectives", "Verbs"],
        rows: [
          ["no evidence", "*unfounded, baseless, unsubstantiated, groundless*", "*fail to substantiate*"],
          ["false or fake", "*spurious, bogus, fabricated, misleading*", "*debunk, discredit, refute*"],
          ["uncertain", "*open to question, contested, inconclusive*", "*cast doubt on, call into question*"],
          ["supported", "*well-founded, plausible, credible*", "*corroborate, substantiate, confirm*"],
          ["proved", "*beyond doubt, conclusive, irrefutable*", "*establish, demonstrate*"]
        ],
        note: "*Misinformation* is false information shared without the intention to deceive. *Disinformation* is deliberately false."
      },
      {
        title: "Expressions of certainty and doubt",
        head: ["Expression", "Example"],
        rows: [
          ["*beyond (any reasonable) doubt*", "*The link has been established beyond doubt.*"],
          ["*by no means certain / clear*", "*The cause is by no means clear.*"],
          ["*There is little / no evidence to suggest that…*", "*There is no evidence to suggest that it is harmful.*"],
          ["*The evidence points to / is consistent with…*", "*The evidence is consistent with a small effect.*"],
          ["*It would be premature to conclude that…*", "*It would be premature to conclude that it works.*"]
        ]
      }
    ],
    watchOut: [
      ["The claim is ostensibly false. (meaning: clearly false)", "The claim is *demonstrably* false."],
      ["The study corroborated by experts.", "The study *was* corroborated by experts."],
      ["There is no evidence to suggest it harmful.", "There is no evidence to suggest *that it is* harmful."],
      ["Misinformation is always deliberate.", "*Disinformation* is deliberate; *misinformation* may not be."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with one word.",
      items: [
        "The claim is completely [[unfounded|baseless|groundless|unsubstantiated]]; there is no evidence at all.",
        "Independent researchers have [[corroborated|confirmed|substantiated]] the original findings.",
        "The story was [[debunked|discredited|refuted]] by fact-checkers within hours.",
        "The cause of the decline is by no [[means]] certain.",
        "The organization is [[ostensibly]] independent, but it is funded by the industry."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a fact-checker explaining how misleading claims work.",
      title: "Half-truths travel fastest",
      script: [
        { who: "Host", line: "When people think of fake news, they imagine completely invented stories. Is that what you mostly deal with?" },
        { who: "Fact-checker", line: "Surprisingly, no. Entirely fabricated stories are relatively easy to debunk. What's much more common, and much more effective, is information that's partly true but presented in a misleading way." },
        { who: "Host", line: "Can you give examples?" },
        { who: "Fact-checker", line: "Cherry-picking is the classic. Someone takes one year of data that supports their argument and ignores the other twenty that don't. Or a genuine quote is taken out of context, so that a politician seemingly says the opposite of what they meant. Another favourite is the real photograph with a false caption, often from a different country or a different decade." },
        { who: "Host", line: "Why are half-truths so effective?" },
        { who: "Fact-checker", line: "Because there's a kernel of truth that people can verify. If you check one detail and it's correct, you're more inclined to trust the rest. And, of course, confirmation bias plays a huge role: we scrutinize claims we dislike and accept the ones we like with very little evidence." },
        { who: "Host", line: "Does fact-checking actually change minds?" },
        { who: "Fact-checker", line: "The research is mixed, but it's by no means hopeless. Corrections work best when they come quickly, explain why the claim is misleading rather than just saying it's false, and come from a source the audience already trusts. The worst thing we can do is to mock people. Nobody has ever been ridiculed out of a belief." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "Most of the fact-checker's work involves completely invented stories.", a: false },
            { s: "Fabricated stories are relatively easy to debunk.", a: true },
            { s: "Half-truths are effective because part of them can be verified.", a: true },
            { s: "He says fact-checking never changes anyone's mind.", a: false },
            { s: "He recommends mocking people who believe false claims.", a: false }
          ]
        },
        {
          type: "match", title: "Misleading techniques",
          prompt: "Match each technique with its description.",
          pairs: [
            ["cherry-picking", "using only the data that supports your argument"],
            ["quote out of context", "making someone seem to say the opposite"],
            ["false caption", "a real photo from a different place or time"],
            ["confirmation bias", "accepting claims we like with little evidence"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a fact-check report.",
      title: "Fact check: Does 5G damage your health?",
      text: [
        { author: "The claim", body: "A widely shared video claims that 5G mobile networks *have been proven* to cause headaches, insomnia and weakened immune systems, and that governments are *hiding the evidence*." },
        { author: "Our verdict: FALSE", body: "There is no credible scientific evidence to suggest that 5G networks, at the levels used for public communication, are harmful to human health. The claims in the video are unsubstantiated, and several are demonstrably false." },
        { author: "The evidence", body: "5G uses radio waves, a form of non-ionizing radiation, which does not have enough energy to damage DNA. International safety limits are set well below the levels at which any heating effect occurs. Major reviews by health organizations have found no consistent link between mobile network radiation and the symptoms described." },
        { author: "", body: "The video's principal source, a *leading biologist*, is ostensibly an expert in the field. In fact, his published research concerns plant genetics, and the study he cites, purportedly from a European university, does not appear in any academic database. The video also includes footage of a protest which, it suggests, took place in response to the *cover-up*. The footage was in fact filmed in a different country, two years earlier, at a demonstration about pension reform." },
        { author: "Why it matters", body: "False claims about 5G have been linked to attacks on telecommunications engineers and the destruction of masts in several countries. While concerns about new technologies are understandable, it would be premature to conclude that 5G poses a health risk, and the evidence currently available is consistent with its being safe." }
      ],
      activities: [
        {
          type: "sort", title: "What's wrong with the video?",
          prompt: "Sort the problems with the video into the right category.",
          bins: ["false or unsupported claims", "misleading sources", "misleading images"],
          items: [
            { text: "5G has been proven to cause insomnia", bin: 0 }, { text: "governments are hiding the evidence", bin: 0 },
            { text: "the leading biologist studies plants", bin: 1 }, { text: "the study is not in any database", bin: 1 },
            { text: "protest footage from another country", bin: 2 }, { text: "a demonstration about pension reform", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The fact-checkers found credible evidence that 5G is harmful.", a: false },
            { s: "5G uses a type of radiation that does not damage DNA.", a: true },
            { s: "The video's main expert is a specialist in radio waves.", a: false },
            { s: "False claims about 5G have had real-world consequences.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the language of evaluation, then write your own fact-check.",
      activities: [
        {
          type: "rewrite", title: "Say it precisely",
          prompt: "Rewrite each sentence using the word in brackets.",
          items: [
            { q: "There is no evidence for the claim. (unfounded)", a: ["The claim is unfounded.", "The claim is completely unfounded."] },
            { q: "Other researchers have confirmed the results. (corroborated)", a: ["The results have been corroborated by other researchers.", "Other researchers have corroborated the results."] },
            { q: "It can be proved that the statement is false. (demonstrably)", a: ["The statement is demonstrably false."] },
            { q: "The new study makes the theory seem doubtful. (cast doubt)", a: ["The new study casts doubt on the theory.", "The new study has cast doubt on the theory."] }
          ]
        },
        {
          type: "sort", title: "Strong or weak evidence?",
          prompt: "Sort the expressions by the strength of the evidence they describe.",
          bins: ["no or weak evidence", "strong evidence"],
          items: [
            { text: "baseless", bin: 0 }, { text: "spurious", bin: 0 }, { text: "inconclusive", bin: 0 }, { text: "open to question", bin: 0 },
            { text: "corroborated", bin: 1 }, { text: "beyond doubt", bin: 1 }, { text: "irrefutable", bin: 1 }, { text: "well-founded", bin: 1 }
          ]
        },
        {
          type: "write", title: "Your fact-check",
          prompt: "Write a fact-check report (250–300 words) about a real or imagined viral claim (about health, technology, history, politics or the environment). Include: the claim, your verdict, the evidence, an analysis of any misleading techniques used, and why it matters. Use precise language of evaluation.",
          minWords: 250, maxWords: 300,
          model: "Fact check: Can drinking lemon water cure diabetes?<br>The claim<br>A video shared more than three million times claims that drinking hot lemon water every morning \"cures type 2 diabetes in thirty days\" and that doctors are \"hiding this simple solution\" to protect the pharmaceutical industry.<br>Our verdict: FALSE<br>There is no credible scientific evidence to suggest that lemon water can cure diabetes. The central claim is unfounded, and the suggestion of a medical cover-up is entirely baseless.<br>The evidence<br>Type 2 diabetes is a chronic condition in which the body does not use insulin effectively. While a healthy diet, weight loss and regular exercise can significantly improve blood sugar control and, in some cases, lead to remission, no single food or drink has been shown to cure the disease. A small number of studies suggest that citrus fruits may have modest benefits as part of a balanced diet, but these findings are by no means conclusive, and none of them involve lemon water alone.<br>Misleading techniques<br>The video relies on a classic combination of techniques. Its presenter, ostensibly a nutrition expert, has no medical qualifications. It cherry-picks a single study on animals and presents it as proof for humans. It also includes testimonials from people who purportedly stopped taking their medication, without any way to verify their stories.<br>Why it matters<br>Claims like this are not harmless. Patients who abandon prescribed treatment in favour of unproven remedies risk serious complications, including damage to their eyes, kidneys and heart. Drinking lemon water is perfectly safe for most people, but it would be dangerous to conclude that it can replace medical care.",
          bank: ["There is no credible scientific evidence to suggest that…", "unfounded / baseless", "by no means conclusive", "ostensibly", "cherry-picks", "purportedly", "without any way to verify", "it would be dangerous to conclude that…"],
          checklist: [
            "I stated the **claim** and a clear **verdict**.",
            "I summarized the **evidence** accurately.",
            "I identified at least **two misleading techniques**.",
            "I used precise **evaluative** adverbs, adjectives and verbs."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Stress the evaluative word.",
          items: [
            "The claim is completely unsubstantiated.",
            "It's demonstrably false.",
            "The site is ostensibly independent.",
            "Two larger studies cast doubt on it.",
            "The link is by no means established.",
            "They cherry-picked one line from it."
          ]
        },
        {
          type: "speak", title: "Fact-check on air",
          prompt: "Record a radio fact-check segment (about four minutes). Present a viral claim you have seen (or invent one), explain why people might believe it, evaluate the evidence, identify any misleading techniques, and give your verdict. Then give your listeners two tips for checking information themselves.",
          language: ["The claim, which has been shared…, is that…", "Ostensibly,…", "Purportedly,…", "The evidence suggests…", "There is no credible evidence to suggest that…", "It's been taken out of context", "Our verdict is…", "My advice would be to…"],
          seconds: 270,
          checklist: ["present the claim clearly?", "evaluate the evidence precisely?", "identify misleading techniques?", "give practical tips to listeners?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use ostensibly, purportedly and demonstrably precisely.", review: "Explanation: adverbs that evaluate a claim" },
    { can: "I can evaluate claims with unfounded, spurious, well-founded, etc.", review: "Explanation: adjectives and verbs of evaluation; Writing activity 2" },
    { can: "I can use corroborate, substantiate, debunk and cast doubt on.", review: "Explanation: adjectives and verbs of evaluation; Writing activity 1" },
    { can: "I can express degrees of certainty about evidence.", review: "Explanation: expressions of certainty and doubt" },
    { can: "I can identify misleading techniques in information.", review: "Listening and Reading activities" },
    { can: "I can write and present a fact-check.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
