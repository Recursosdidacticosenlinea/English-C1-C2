window.UNIT = {
  slug: "shades-of-meaning",
  number: 26,
  title: "Shades of Meaning",
  level: "C2",
  minutes: 90,
  speakers: { "Paulina": "f", "Gabriel": "m", "Host": "f", "Translator": "m" },
  focus: ["denotation and connotation: the same meaning, a different feeling", "positive, neutral and negative near-synonyms: thrifty / economical / stingy", "near-synonyms of degree: annoyed / irritated / livid", "formal and literary choices: begin / commence, ask / enquire", "euphemism and dysphemism: let go / fired / sacked"],

  presentation: {
    scene: "🎨🔍📖🪶",
    situation: "Paulina is a translator. Her colleague Gabriel is helping her choose the right words for a profile of a famous businessman in an English-language magazine.",
    warmup: {
      prompt: "Which words would you be happy for people to use about you? Choose all that apply.",
      options: ["determined", "stubborn", "confident", "arrogant", "careful with money", "mean", "slim", "skinny", "curious", "nosy", "frank", "blunt"],
      response: "Several of those pairs mean almost the same thing, but feel very different. At C2 you're expected to choose not just the correct word, but the one with exactly the right shade of meaning."
    },
    dialogueTitle: "Finding the right word",
    dialogue: [
      { who: "Paulina", line: "The original says he's *muy ahorrativo*. Should I put *stingy*?" },
      { who: "Gabriel", line: "That's quite insulting. Does the writer admire him or criticize him?" },
      { who: "Paulina", line: "Admire, I think. He built the company from nothing." },
      { who: "Gabriel", line: "Then *thrifty*, or even *prudent with money*. *Stingy* or *tight-fisted* would make him sound mean." },
      { who: "Paulina", line: "And here: *es muy terco*. *Stubborn*?" },
      { who: "Gabriel", line: "Again, it depends. *Stubborn* is mostly negative. *Determined* or *tenacious* sound like qualities. *Single-minded* is somewhere in between." },
      { who: "Paulina", line: "What about the end, when he *fired* half the staff?" },
      { who: "Gabriel", line: "A company press release would say he *restructured the workforce*. A union leaflet would say he *axed* five hundred jobs. A neutral magazine would probably say he *cut* or *laid off* staff." }
    ]
  },

  objectives: [
    "I can distinguish denotation from connotation in near-synonyms.",
    "I can choose words with positive, neutral or negative connotations deliberately.",
    "I can choose near-synonyms that express exactly the right degree of intensity.",
    "I can recognize euphemism and loaded language in texts."
  ],

  explanation: {
    vocabTitle: "Connotation in action",
    vocab: [
      { word: "thrifty / stingy", icon: "🪙" }, { word: "determined / stubborn", icon: "🐂" }, { word: "confident / arrogant", icon: "🦚" },
      { word: "slim / skinny", icon: "🧍" }, { word: "curious / nosy", icon: "👃" }, { word: "frank / blunt", icon: "🔨" },
      { word: "youthful / childish", icon: "🧒" }, { word: "relaxed / lazy", icon: "🛋️" }, { word: "assertive / pushy", icon: "👉" },
      { word: "unconventional / weird", icon: "🦄" }, { word: "inexpensive / cheap", icon: "🏷️" }, { word: "a smell / an aroma / a stench", icon: "👃" },
      { word: "a crowd / a mob", icon: "👥" }, { word: "a regime / a government", icon: "🏛️" }, { word: "let go / fired / sacked", icon: "📦" }
    ],
    grammar: [
      {
        title: "Positive, neutral and negative",
        intro: "**Denotation** is the dictionary meaning of a word. **Connotation** is the feeling or judgment it carries. Near-synonyms often share a denotation but differ in connotation.",
        head: ["Positive", "Neutral", "Negative"],
        rows: [
          ["*thrifty, prudent*", "*economical, careful with money*", "*stingy, mean, tight-fisted*"],
          ["*determined, tenacious*", "*persistent, single-minded*", "*stubborn, obstinate, pig-headed*"],
          ["*slender, slim*", "*thin*", "*skinny, scrawny, bony*"],
          ["*inquisitive*", "*curious*", "*nosy, prying*"],
          ["*an aroma, a fragrance*", "*a smell*", "*a stench, a stink, a reek*"],
          ["*a gathering*", "*a crowd*", "*a mob, a horde*"]
        ]
      },
      {
        title: "Degrees of intensity",
        head: ["Mild", "Moderate", "Strong"],
        rows: [
          ["*annoyed*", "*irritated, exasperated*", "*furious, livid, incensed*"],
          ["*pleased*", "*delighted*", "*ecstatic, overjoyed, elated*"],
          ["*worried*", "*anxious*", "*terrified, panic-stricken*"],
          ["*dislike*", "*can't stand*", "*loathe, detest, abhor*"]
        ],
        note: "Strong words are not always better. *Livid* in a business email may sound unprofessional; *I was disappointed* is often more effective."
      },
      {
        title: "Euphemism and dysphemism",
        head: ["Euphemism (softer)", "Neutral", "Dysphemism (harsher)"],
        rows: [
          ["*let go, restructure the workforce*", "*dismiss, lay off*", "*fire, sack, axe*"],
          ["*pass away*", "*die*", "*kick the bucket, croak*"],
          ["*economically disadvantaged*", "*poor*", "*destitute, broke*"],
          ["*collateral damage*", "*civilian casualties*", "*the slaughter of civilians*"]
        ]
      }
    ],
    watchOut: [
      ["(Compliment) Your daughter is very skinny!", "Your daughter is very *slim*!"],
      ["(Admiring) He is a stubborn researcher.", "He is a *tenacious / determined* researcher."],
      ["(Neutral news) A mob gathered peacefully.", "A *crowd* gathered peacefully."],
      ["(Restaurant menu) The cheap menu", "The *good-value / inexpensive* menu"]
    ],
    check: {
      type: "sort", title: "Quick check",
      prompt: "Is each word positive or negative?",
      bins: ["positive", "negative"],
      items: [
        { text: "thrifty", bin: 0 }, { text: "tenacious", bin: 0 }, { text: "slender", bin: 0 }, { text: "fragrance", bin: 0 },
        { text: "stingy", bin: 1 }, { text: "obstinate", bin: 1 }, { text: "scrawny", bin: 1 }, { text: "stench", bin: 1 }
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a literary translator talking about the challenge of connotation.",
      title: "The weight of a word",
      script: [
        { who: "Host", line: "What's the hardest thing about translating literature?" },
        { who: "Translator", line: "It's rarely the difficult words. It's the simple ones. Any dictionary will tell you what a word means. What it won't tell you is how it feels: whether it's warm or cold, old-fashioned or modern, respectful or slightly mocking." },
        { who: "Host", line: "Can you give an example?" },
        { who: "Translator", line: "In one novel I translated, a grandmother calls her grandson *flaco*. Literally, that's thin. But in context it's affectionate, almost a nickname. If I write thin, it sounds clinical. If I write skinny, it sounds critical. In the end I chose skinny, but I added an affectionate tone to the whole sentence so readers would feel the warmth." },
        { who: "Host", line: "So you change the text?" },
        { who: "Translator", line: "I'd say I rebalance it. Translation is a series of compromises. Sometimes you lose a connotation in one place and compensate for it somewhere else. The goal isn't to be faithful to each word, but faithful to the effect." },
        { who: "Host", line: "Is it the same in non-literary texts?" },
        { who: "Translator", line: "Absolutely, and the stakes can be higher. In political or legal texts, choosing between regime and government, or between protesters and rioters, can completely change how readers judge an event. A translator who isn't sensitive to connotation can, without meaning to, take sides." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The translator says difficult words are the main challenge.", a: false },
            { s: "Dictionaries don't always show how a word feels.", a: true },
            { s: "In the novel, the grandmother's word was critical.", a: false },
            { s: "He believes translation should be faithful to the effect.", a: true },
            { s: "He thinks connotation matters less in political texts.", a: false }
          ]
        },
        {
          type: "match", title: "Key ideas",
          prompt: "Match each idea with its explanation from the talk.",
          pairs: [
            ["thin", "sounds clinical"],
            ["skinny", "sounds critical without context"],
            ["compensation", "making up for a lost nuance elsewhere"],
            ["regime vs government", "choices that make readers judge events"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read two newspaper reports of the same event.",
      title: "One event, two stories",
      text: [
        { author: "Report A", body: "Thousands of residents gathered in the city centre on Saturday to protest against the proposed motorway. The demonstrators, many of them families with young children, marched peacefully to the town hall, where organizers delivered a petition. A small number of protesters later clashed with police near the station, and three people were detained. The mayor said she would consider the residents' concerns." },
        { author: "Report B", body: "A mob of activists brought the city centre to a standstill on Saturday in a bid to block the vital new motorway. The crowd, whipped up by militant organizers, swarmed towards the town hall, causing chaos for shoppers. Violence erupted near the station, where a gang of troublemakers attacked officers before being arrested. The mayor stood firm, insisting that the city needs the road." }
      ],
      activities: [
        {
          type: "match", title: "Same fact, different words",
          prompt: "Match the neutral words in Report A with the loaded words in Report B.",
          pairs: [
            ["residents gathered", "a mob of activists"],
            ["marched peacefully", "swarmed"],
            ["a small number of protesters clashed with police", "a gang of troublemakers attacked officers"],
            ["were detained", "being arrested"],
            ["the proposed motorway", "the vital new motorway"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "Report A presents the protesters more sympathetically.", a: true },
            { s: "Report B suggests the motorway is necessary.", a: true },
            { s: "The two reports describe completely different events.", a: false },
            { s: "Report B mentions families with young children.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice choosing words with the right connotation, then write two versions of a text.",
      activities: [
        {
          type: "rewrite", title: "Make it positive",
          prompt: "Rewrite each sentence with a word that has a **positive** connotation. Use the first letter given.",
          items: [
            { q: "Our new manager is very stubborn. (d…)", a: ["Our new manager is very determined."] },
            { q: "The flat is small. (c…)", a: ["The flat is cosy.", "The flat is compact.", "The flat is cozy."] },
            { q: "My uncle is stingy. (t…)", a: ["My uncle is thrifty."] },
            { q: "She is very nosy about other cultures. (i…)", a: ["She is very inquisitive about other cultures."] }
          ]
        },
        {
          type: "gap", title: "Choose the degree",
          prompt: "Complete each sentence with the most suitable word from the box.",
          bank: ["livid", "annoyed", "loathe", "elated", "anxious", "terrified"],
          items: [
            "I was slightly [[annoyed]] that the train was five minutes late.",
            "When he found out about the fraud, he was absolutely [[livid]].",
            "She was [[elated]] when she heard she'd won the scholarship.",
            "I'm a bit [[anxious]] about tomorrow's interview.",
            "He was [[terrified]] when the plane started shaking violently.",
            "I really [[loathe]] people who are cruel to animals."
          ]
        },
        {
          type: "write", title: "Two portraits",
          prompt: "Write **two versions** of a short profile (125–150 words each, 250–300 in total) of the same person (real or imagined): a politician, a celebrity, a coach or a boss. In **Version A**, the writer admires the person; in **Version B**, the writer is critical. Keep the **facts** the same and change only the connotation of the words.",
          minWords: 250, maxWords: 300,
          model: "Version A (admiring)<br>Coach Martínez is one of the most determined figures in Mexican football. Known for his frank, straightforward manner, he expects total commitment from his players and is famously thrifty with the club's budget, preferring to develop young local talent rather than buy expensive stars. His training sessions are demanding, and he is often described as single-minded in his pursuit of success. Last season, he made the bold decision to let go of three senior players, a move that was controversial at the time but has since been vindicated by the team's remarkable rise up the league. Off the pitch, he is reserved and rarely gives interviews, preferring to let his results speak for him.<br><br>Version B (critical)<br>Coach Martínez is one of the most stubborn figures in Mexican football. Known for his blunt, abrasive manner, he demands total obedience from his players and is notoriously stingy with the club's budget, refusing to invest in established stars and relying instead on cheap, inexperienced youngsters. His training sessions are gruelling, and he is often described as obsessive in his pursuit of success. Last season, he ruthlessly axed three senior players, a move that caused uproar at the time and which many fans still resent, despite the team's improved results. Off the pitch, he is cold and evasive, and his refusal to give interviews is widely seen as arrogant.",
          bank: ["determined / stubborn", "frank / blunt", "thrifty / stingy", "demanding / gruelling", "single-minded / obsessive", "let go / axed", "reserved / cold", "young local talent / cheap youngsters"],
          checklist: [
            "Both versions contain the **same facts**.",
            "Version A uses **positive** connotations; Version B **negative** ones.",
            "I changed at least **eight** words or phrases.",
            "Both versions sound **natural**, not exaggerated."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice how the tone of voice matches the connotation.",
          items: [
            "He's thrifty, not stingy.",
            "She's determined rather than stubborn.",
            "There was a wonderful aroma of coffee.",
            "There was a terrible stench of rubbish.",
            "I was absolutely livid about it.",
            "The company let fifty people go."
          ]
        },
        {
          type: "speak", title: "Spin doctor",
          prompt: "Record yourself for about four minutes. You are a **spin doctor**. Describe the same event twice: *A city has decided to close a popular old market to build a modern shopping centre.* First, speak as the **mayor's press officer** (positive). Then speak as a **resident who is against the project** (negative). Keep the facts the same and change the connotation of your words.",
          language: ["redevelop / demolish", "modernize / destroy", "relocate traders / evict traders", "a vibrant new space / a soulless mall", "community consultation / a done deal", "regeneration / gentrification", "traditional / run-down", "investment / profit"],
          seconds: 270,
          checklist: ["describe the same facts both times?", "use clearly positive words in the first version?", "use clearly negative words in the second?", "change your tone of voice to match?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can explain the difference between denotation and connotation.", review: "Explanation: positive, neutral and negative" },
    { can: "I can choose positive, neutral or negative near-synonyms deliberately.", review: "Explanation: positive, neutral and negative; Writing activity 1" },
    { can: "I can choose words of the right intensity.", review: "Explanation: degrees of intensity; Writing activity 2" },
    { can: "I can recognize euphemism and loaded language.", review: "Explanation: euphemism and dysphemism; Reading" },
    { can: "I can explain how word choice affects the reader.", review: "Listening and Reading activities" },
    { can: "I can present the same facts with different connotations.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
