window.UNIT = {
  slug: "whistleblowers",
  number: 15,
  title: "Whistleblowers",
  level: "C1",
  minutes: 80,
  speakers: { "Brisa": "f", "Ernesto": "m", "Host": "f", "Lawyer": "m" },
  focus: ["reporting verbs with nuance: allege, claim, contend, maintain, concede", "verbs of disagreement: dismiss, refute, deny, reject", "patterns: allege that / be alleged to, concede that, dismiss something as", "neutral vs loaded reporting verbs", "vocabulary of whistleblowing: leak, cover-up, wrongdoing"],

  presentation: {
    scene: "📣🕵️📁⚖️",
    situation: "Brisa is an investigative journalist. Her editor, Ernesto, is checking her article about an employee who revealed safety problems at a chemical plant.",
    warmup: {
      prompt: "Which of these would make you report your employer? Choose all that apply.",
      options: ["fraud", "safety risks", "pollution", "discrimination", "bribery", "tax evasion", "data misuse", "harassment", "false advertising", "unpaid overtime", "animal cruelty", "nothing, I'd stay quiet"],
      response: "Whistleblowers often take enormous personal risks. Reporting their stories fairly requires choosing exactly the right verbs. That's the focus of this unit."
    },
    dialogueTitle: "Choosing the right verb",
    dialogue: [
      { who: "Ernesto", line: "You've written *The company lied about the leaks*. Can we prove that?" },
      { who: "Brisa", line: "Not in court. But the engineer *alleges* that managers knew for months." },
      { who: "Ernesto", line: "Then say exactly that: *The engineer alleges that managers were aware of the leaks.* What does the company say?" },
      { who: "Brisa", line: "They *deny* knowing anything. Their spokesperson *dismissed* the claims *as* the work of a disgruntled employee." },
      { who: "Ernesto", line: "Good. Did they admit anything at all?" },
      { who: "Brisa", line: "They *conceded* that one sensor had been faulty, but they *maintain* that there was never any risk to the public." },
      { who: "Ernesto", line: "And the regulator?" },
      { who: "Brisa", line: "The regulator *contends* that the company failed to report the incident. And the engineer *is alleged to have* copied confidential files, which is why they've fired him." }
    ]
  },

  objectives: [
    "I can use a range of reporting verbs to show precisely what people said.",
    "I can use the correct patterns after verbs like allege, concede and dismiss.",
    "I can distinguish neutral reporting verbs from those that suggest an attitude.",
    "I can report a controversial story fairly and accurately."
  ],

  explanation: {
    vocabTitle: "Whistleblowing",
    vocab: [
      { word: "a whistleblower", icon: "📣" }, { word: "blow the whistle on", icon: "🔔" }, { word: "wrongdoing", icon: "⚠️" },
      { word: "a cover-up", icon: "🙊" }, { word: "a leak", icon: "💧" }, { word: "leaked documents", icon: "📁" },
      { word: "an allegation", icon: "☝️" }, { word: "a disgruntled employee", icon: "😠" }, { word: "retaliation", icon: "↩️" },
      { word: "confidential", icon: "🔒" }, { word: "come forward", icon: "🚶" }, { word: "an inquiry", icon: "🔍" },
      { word: "a regulator", icon: "🏛️" }, { word: "accountability", icon: "⚖️" }, { word: "protection laws", icon: "🛡️" }
    ],
    grammar: [
      {
        title: "Reporting verbs and their meanings",
        head: ["Verb", "Meaning", "Example"],
        rows: [
          ["*allege*", "say something bad is true, without proof", "*He alleges that managers knew.*"],
          ["*claim*", "say something is true (it may not be)", "*She claims to have seen the files.*"],
          ["*contend / maintain*", "argue firmly (maintain = keep saying)", "*They maintain that there was no risk.*"],
          ["*concede / acknowledge*", "admit something, often reluctantly", "*The company conceded that a sensor was faulty.*"],
          ["*deny*", "say something is not true", "*They deny knowing about the leak.*"],
          ["*dismiss… as*", "reject as unimportant or wrong", "*He dismissed the report as nonsense.*"],
          ["*refute*", "prove that something is wrong", "*The data refutes their claim.*"],
          ["*reveal / disclose*", "make secret information known", "*She disclosed the documents to a journalist.*"]
        ]
      },
      {
        title: "Patterns",
        head: ["Pattern", "Verbs", "Example"],
        rows: [
          ["verb + *that* clause", "*allege, claim, concede, contend, maintain, acknowledge*", "*She conceded that mistakes had been made.*"],
          ["verb + *to* infinitive", "*claim, threaten, refuse*", "*He claims to have evidence.*"],
          ["verb + *-ing* / noun", "*deny, admit, acknowledge*", "*They deny covering up the problem.*"],
          ["verb + object + *as*", "*dismiss, describe, portray*", "*They dismissed him as unreliable.*"],
          ["passive: *be alleged / said / claimed + to*", "*allege, claim, say, report*", "*He is alleged to have copied the files.*"],
          ["*It is alleged / claimed that…*", "impersonal", "*It is alleged that the reports were altered.*"]
        ],
        note: "Your choice of verb shows your attitude. *She admitted* suggests guilt; *she said* is neutral; *she claimed* suggests doubt. Journalists choose carefully."
      }
    ],
    watchOut: [
      ["They denied to know about it.", "They denied *knowing* about it."],
      ["He alleged me of lying.", "He *accused* me of lying. / He *alleged that* I had lied."],
      ["She conceded the mistakes had happened them.", "She conceded *that* mistakes had been made."],
      ["They dismissed the report like nonsense.", "They dismissed the report *as* nonsense."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with one word.",
      items: [
        "The company denied [[knowing|having]] about the problem.",
        "The minister dismissed the report [[as]] politically motivated.",
        "He is alleged [[to]] have accepted bribes.",
        "The director finally [[conceded|admitted|acknowledged]] that mistakes had been made.",
        "She [[claims]] to have proof, but she hasn't shown it to anyone."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a lawyer who represents whistleblowers.",
      title: "The cost of speaking up",
      script: [
        { who: "Host", line: "What usually happens to people who blow the whistle?" },
        { who: "Lawyer", line: "Sadly, the pattern is depressingly familiar. First, the organization denies that anything is wrong. Then it questions the person's motives, dismissing them as disgruntled or unstable. Very often they lose their job, and it can take years before anyone acknowledges that they were right." },
        { who: "Host", line: "Aren't there laws to protect them?" },
        { who: "Lawyer", line: "In many countries, yes, but they're unevenly applied. Employers frequently contend that the dismissal had nothing to do with the disclosure; they claim the person was fired for poor performance, for example. Proving otherwise is difficult." },
        { who: "Host", line: "What advice do you give people who are thinking of coming forward?" },
        { who: "Lawyer", line: "Document everything. Keep dates, emails, names. Raise the issue internally first if it's safe to do so, because some laws require it. And speak to a lawyer before going to the media. People who leak confidential documents can be accused of breaking the law themselves, even when their allegations turn out to be true." },
        { who: "Host", line: "Is it worth it?" },
        { who: "Lawyer", line: "Most of my clients maintain that it was, despite everything. But I'd never pretend it's easy. We rely on these people to expose wrongdoing, and as a society we don't protect them nearly well enough." }
      ],
      activities: [
        {
          type: "sort", title: "The typical pattern",
          prompt: "Put the stages the lawyer describes in two groups: what the organization does, and what the whistleblower should do.",
          bins: ["the organization", "the whistleblower"],
          items: [
            { text: "denies that anything is wrong", bin: 0 }, { text: "questions the person's motives", bin: 0 }, { text: "claims the person was fired for poor performance", bin: 0 },
            { text: "documents everything", bin: 1 }, { text: "raises the issue internally first", bin: 1 }, { text: "speaks to a lawyer", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again and decide.",
          items: [
            { s: "Organizations often acknowledge problems immediately.", a: false },
            { s: "Protection laws are applied consistently everywhere.", a: false },
            { s: "Leaking documents can create legal problems for the whistleblower.", a: true },
            { s: "Most of the lawyer's clients say it was worth it.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a news report about a whistleblower.",
      title: "Engineer fired after raising safety concerns",
      text: [
        { body: "An engineer at a chemical plant in northern Mexico has been dismissed after alleging that managers ignored repeated warnings about toxic leaks. The engineer, who has asked not to be named, claims to have reported faulty sensors on at least six occasions over an eight-month period." },
        { body: "In documents seen by this newspaper, he contends that senior staff instructed technicians not to record minor leaks in official logs. *They told us it was easier to fix things quietly*, he said. *Nobody wanted a paper trail.*" },
        { body: "The company has denied covering up any incidents. In a statement, a spokesperson dismissed the allegations as *entirely without foundation* and maintained that the plant *has always complied with environmental regulations*. The company did, however, concede that one sensor had malfunctioned in March, and said it had been replaced *as a precaution*." },
        { body: "The engineer is alleged to have removed confidential files from the plant, which the company says is the reason for his dismissal. His lawyer refutes this, arguing that the files were copied only after internal complaints had been ignored. The national environmental regulator has announced an inquiry and is expected to report its findings within three months." }
      ],
      activities: [
        {
          type: "match", title: "Who said what?",
          prompt: "Match each person or organization with what they said or did, according to the report.",
          pairs: [
            ["the engineer", "claims to have reported faulty sensors six times"],
            ["the company spokesperson", "dismissed the allegations as without foundation"],
            ["the company", "conceded that one sensor had malfunctioned"],
            ["the engineer's lawyer", "refutes the reason given for the dismissal"],
            ["the regulator", "has announced an inquiry"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The report states as a fact that managers ignored the warnings.", a: false },
            { s: "The company admits that one sensor did not work properly.", a: true },
            { s: "The company says the engineer was fired for removing files.", a: true },
            { s: "The regulator has already published its findings.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice reporting verbs and patterns, then write a balanced news report.",
      activities: [
        {
          type: "rewrite", title: "Report it",
          prompt: "Report each statement using the verb in brackets.",
          items: [
            { q: "Manager: \"I didn't know about the leak.\" (deny)", a: ["The manager denied knowing about the leak.", "The manager denied having known about the leak.", "The manager denied that he knew about the leak."] },
            { q: "Spokesperson: \"These claims are ridiculous.\" (dismiss… as)", a: ["The spokesperson dismissed the claims as ridiculous.", "The spokesperson dismissed these claims as ridiculous."] },
            { q: "Director: \"OK, we made some mistakes.\" (concede)", a: ["The director conceded that they had made some mistakes.", "The director conceded that mistakes had been made.", "The director conceded that they made some mistakes."] },
            { q: "People say he accepted money. (is alleged)", a: ["He is alleged to have accepted money."] }
          ]
        },
        {
          type: "sort", title: "Neutral or loaded?",
          prompt: "Does each verb report neutrally, or suggest the reporter's attitude?",
          bins: ["neutral", "suggests doubt", "suggests guilt or acceptance"],
          items: [
            { text: "said", bin: 0 }, { text: "stated", bin: 0 }, { text: "reported", bin: 0 },
            { text: "claimed", bin: 1 }, { text: "alleged", bin: 1 },
            { text: "admitted", bin: 2 }, { text: "conceded", bin: 2 }
          ]
        },
        {
          type: "write", title: "A balanced news report",
          prompt: "Write a balanced news report (220–260 words) about a whistleblower in a university, hospital, sports club or company. Report the allegations, the organization's response, and the reaction of a third party (a regulator, union or expert). Use at least **eight** different reporting verbs and avoid stating unproven claims as facts.",
          minWords: 220, maxWords: 260,
          model: "Nurse suspended after raising concerns over staffing<br>A senior nurse at a private hospital in Guadalajara has been suspended after alleging that the hospital routinely left wards dangerously understaffed at night.<br>The nurse, who has worked at the hospital for twelve years, claims to have warned managers on several occasions that a single nurse was often responsible for up to twenty patients. In emails seen by this newspaper, she contends that two serious incidents last year could have been prevented with adequate staff.<br>The hospital has denied putting patients at risk. In a statement, its director dismissed the allegations as an inaccurate picture of a hospital with an excellent safety record. He did, however, acknowledge that recruitment had been difficult since the pandemic and conceded that some shifts had been covered by fewer staff than planned.<br>The hospital maintains that the nurse was suspended for sharing confidential patient information with journalists. Her union rejects this, insisting that no patient was identified and that she acted only after internal complaints were ignored.<br>A spokesperson for the state health authority stated that it was aware of the case and would be reviewing staffing levels at the hospital. Independent experts have warned that understaffing is a widespread problem in the sector and urged the government to strengthen protection for health workers who report safety concerns.<br>The hospital is expected to respond to the union's formal complaint next week.",
          bank: ["alleging that…", "claims to have…", "contends that…", "denied + -ing", "dismissed… as…", "acknowledged / conceded that…", "maintains that…", "rejects / refutes…"],
          checklist: [
            "I reported the **allegations** without stating them as facts.",
            "I included the organization's **response**.",
            "I included a **third party's** reaction.",
            "I used at least **eight** different reporting verbs with correct patterns."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice the stress on the reporting verb.",
          items: [
            "He alleges that managers knew for months.",
            "The company denied covering up the leak.",
            "They dismissed the claims as nonsense.",
            "She conceded that one sensor was faulty.",
            "He is alleged to have copied files.",
            "They maintain there was never any risk."
          ]
        },
        {
          type: "speak", title: "Report the story",
          prompt: "Record a three-minute news report for a radio programme about a real or imagined whistleblowing case. Explain what the whistleblower alleges, how the organization has responded, and what happens next. Then give your opinion: should whistleblowers be protected even if they break confidentiality rules?",
          language: ["… alleges that…", "… claims to have…", "The company has denied…", "… dismissed the claims as…", "… conceded that…", "… is alleged to have…", "It remains to be seen whether…", "In my view,…"],
          seconds: 210,
          checklist: ["report the allegations fairly?", "include the organization's response?", "use at least six different reporting verbs?", "give your own opinion at the end?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use allege, claim, contend and maintain accurately.", review: "Explanation: reporting verbs and their meanings" },
    { can: "I can use concede, deny, dismiss and refute accurately.", review: "Explanation: reporting verbs; Writing activity 1" },
    { can: "I can use the correct pattern after each reporting verb.", review: "Explanation: patterns" },
    { can: "I can recognize when a reporting verb suggests an attitude.", review: "Explanation: patterns (note); Writing activity 2" },
    { can: "I can follow news and interviews about controversial cases.", review: "Listening and Reading activities" },
    { can: "I can report a controversial story fairly in writing and speech.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
