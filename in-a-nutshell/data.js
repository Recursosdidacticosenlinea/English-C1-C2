window.UNIT = {
  slug: "in-a-nutshell",
  number: 41,
  title: "In a Nutshell",
  level: "C2",
  minutes: 95,
  speakers: { "Valentina": "f", "Diego": "m", "Host": "m", "Editor": "f" },
  focus: ["summarizing: identifying main ideas and leaving out detail", "paraphrasing: changing words and structures without changing meaning", "reporting a writer's ideas: The author argues / contends / maintains that…", "condensing: nominalization, general nouns and reduced clauses", "summary language: In short, The gist of it is, The author's central claim is"],

  presentation: {
    scene: "🥜📄✂️🧠",
    situation: "Valentina works for a think tank. Her manager, Diego, has asked her to summarize a forty-page report on urban mobility in a single page for the city council.",
    warmup: {
      prompt: "When do you need to summarize information? Choose all that apply.",
      options: ["studying for exams", "reporting to a boss", "telling a friend about a film", "writing an abstract", "explaining news to family", "meeting minutes", "a book review", "a research paper", "a presentation", "a job application", "a doctor's appointment", "social media posts"],
      response: "Summarizing is one of the defining skills of C2: understanding complex texts and reformulating their ideas concisely and accurately in your own words."
    },
    dialogueTitle: "Forty pages into one",
    dialogue: [
      { who: "Diego", line: "How's the summary going?" },
      { who: "Valentina", line: "Slowly. Every paragraph seems important." },
      { who: "Diego", line: "Ask yourself: what's the *central claim*? If the councillors remember one thing, what should it be?" },
      { who: "Valentina", line: "*In a nutshell*, that cities should invest in buses before building new roads." },
      { who: "Diego", line: "Good. That's your first sentence. Then the *main supporting arguments*, not the examples." },
      { who: "Valentina", line: "But there are amazing case studies from Bogotá and Seoul." },
      { who: "Diego", line: "Mention them in one line. And don't copy their sentences. *Paraphrase*: change the words and the structure." },
      { who: "Valentina", line: "So instead of *the construction of additional road infrastructure induces demand*, I write *new roads attract more cars*?" },
      { who: "Diego", line: "Exactly. Same meaning, half the length. That's the gist of a good summary." }
    ]
  },

  objectives: [
    "I can identify the main ideas of a complex text and separate them from detail.",
    "I can paraphrase by changing vocabulary and grammatical structure.",
    "I can report a writer's ideas accurately with appropriate reporting verbs.",
    "I can write a concise, accurate summary of a long text."
  ],

  explanation: {
    vocabTitle: "Summarizing",
    vocab: [
      { word: "in a nutshell", icon: "🥜" }, { word: "the gist", icon: "💡" }, { word: "the central claim", icon: "🎯" },
      { word: "a main idea", icon: "🔑" }, { word: "supporting detail", icon: "🧱" }, { word: "paraphrase", icon: "🔄" },
      { word: "condense", icon: "🗜️" }, { word: "an abstract", icon: "📄" }, { word: "an executive summary", icon: "💼" },
      { word: "to boil down to", icon: "🍲" }, { word: "the bottom line", icon: "➖" }, { word: "verbatim", icon: "📋" },
      { word: "plagiarism", icon: "🚫" }, { word: "reformulate", icon: "✏️" }, { word: "succinct", icon: "✂️" }
    ],
    grammar: [
      {
        title: "Steps to a good summary",
        head: ["Step", "What to do"],
        rows: [
          ["1. Read for the gist", "Identify the writer's central claim or purpose."],
          ["2. Find the main ideas", "Note one main idea per section or paragraph."],
          ["3. Leave out detail", "Omit examples, statistics, quotations and repetition (unless essential)."],
          ["4. Paraphrase", "Use your own words and structures. Don't copy phrases."],
          ["5. Condense", "Combine ideas, use general nouns and nominalization."],
          ["6. Check", "Is it accurate? Is it neutral? Have you added your own opinion? (You shouldn't.)"]
        ]
      },
      {
        title: "Paraphrasing techniques",
        head: ["Technique", "Original", "Paraphrase"],
        rows: [
          ["synonyms", "*The policy had a significant impact.*", "*The measure had a considerable effect.*"],
          ["change word class", "*Cities that expand rapidly…*", "*Rapid urban expansion…*"],
          ["active ↔ passive", "*Researchers studied 40 cities.*", "*Forty cities were studied.*"],
          ["general nouns", "*buses, trams, trains and metros*", "*public transport*"],
          ["change clause order", "*Although roads were built, traffic grew.*", "*Traffic grew despite the new roads.*"]
        ],
        note: "Some technical terms (e.g. *aquifer*, *carbon emissions*) have no good synonym. It's fine to keep them."
      },
      {
        title: "Reporting the writer's ideas",
        head: ["Function", "Language"],
        rows: [
          ["central claim", "*The author's central claim is that… / The report argues that…*"],
          ["supporting point", "*The author contends / maintains that… / The report points out that…*"],
          ["evidence", "*This is supported by evidence from… / Drawing on case studies from…, the report shows…*"],
          ["concession", "*The author acknowledges / concedes that…*"],
          ["conclusion", "*In short,… / The report concludes that… / The gist of the argument is…*"]
        ]
      }
    ],
    watchOut: [
      ["(Copying whole sentences from the text)", "*Paraphrase*: change words and structure."],
      ["The author says that, in my opinion, buses are better.", "*The author argues that* buses are a better investment. (no personal opinion)"],
      ["(Including every example and statistic)", "Keep only the *main ideas*; mention examples briefly."],
      ["The report argues buses better than roads.", "The report argues *that* buses *are* better than roads."]
    ],
    check: {
      type: "sort", title: "Quick check",
      prompt: "Would you keep each element in a short summary, or leave it out?",
      bins: ["keep", "leave out"],
      items: [
        { text: "the writer's central claim", bin: 0 }, { text: "the main supporting arguments", bin: 0 }, { text: "the overall conclusion", bin: 0 },
        { text: "a long quotation", bin: 1 }, { text: "your personal opinion", bin: 1 }, { text: "a detailed anecdote", bin: 1 }, { text: "repeated points", bin: 1 }
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an editor giving advice on summarizing.",
      title: "Saying less, meaning more",
      script: [
        { who: "Host", line: "You edit academic journals. Why do researchers find it so hard to write a good abstract?" },
        { who: "Editor", line: "Because they're too close to their work. After three years on a project, every detail feels essential. But an abstract isn't a miniature version of the whole paper; it's an answer to a single question: what did you find, and why does it matter?" },
        { who: "Host", line: "So what's your method?" },
        { who: "Editor", line: "I ask authors to explain their research to me in two sentences, out loud, without looking at their notes. What they say is almost always clearer than what they've written. Then we build the abstract around those two sentences." },
        { who: "Host", line: "And paraphrasing? Students are often told to use their own words, but it's hard." },
        { who: "Editor", line: "It is, and changing a few words isn't enough. If you just replace significant with important and keep the rest of the sentence, that's still close to copying. Real paraphrase starts from understanding. Close the original, think about what it means, and then write it as you'd explain it to someone else." },
        { who: "Host", line: "What's the most common mistake in summaries?" },
        { who: "Editor", line: "Adding opinion. A summary should be faithful to the original, even if you disagree with it. The second most common mistake is the opposite of being too long: being so brief that the summary becomes vague. In short, the art lies in being both concise and precise." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The editor says an abstract is a miniature version of the whole paper.", a: false },
            { s: "She asks authors to explain their research in two sentences out loud.", a: true },
            { s: "Changing a few words is enough to paraphrase.", a: false },
            { s: "She recommends closing the original before paraphrasing.", a: true },
            { s: "Summaries should include the writer's own opinion.", a: false }
          ]
        },
        {
          type: "match", title: "The editor's advice",
          prompt: "Match each problem with the editor's advice.",
          pairs: [
            ["every detail feels essential", "answer: what did you find and why does it matter?"],
            ["unclear writing", "explain it out loud in two sentences"],
            ["paraphrase too close to the original", "close the text and start from understanding"],
            ["a summary that is too brief", "be concise and precise at the same time"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an extract from a report and two summaries of it. Which summary is better?",
      title: "Urban mobility: one text, two summaries",
      text: [
        { author: "Original extract", body: "For much of the twentieth century, the dominant response to urban congestion was the construction of additional road capacity. Planners assumed that widening existing roads and building new motorways would reduce travel times. A substantial body of evidence now demonstrates that this assumption was mistaken. The phenomenon of induced demand means that new road capacity tends to generate additional traffic, as drivers who previously avoided congested routes begin to use them, and new developments are built along the expanded roads. Within a decade, congestion frequently returns to, or even exceeds, its original levels. By contrast, cities that have invested in high-quality bus rapid transit systems, such as Bogotá and Curitiba, have achieved significant reductions in both travel times and carbon emissions, at a fraction of the cost of motorway construction. The report therefore recommends that the city prioritize investment in public transport over the expansion of road infrastructure." },
        { author: "Summary A", body: "For much of the twentieth century, the dominant response to urban congestion was the construction of additional road capacity. Planners thought widening roads would reduce travel times, but evidence now demonstrates this was mistaken because of induced demand. Bogotá and Curitiba have bus rapid transit. The report recommends that the city prioritize investment in public transport." },
        { author: "Summary B", body: "The report argues that building more roads does not solve congestion, because new roads attract more traffic, a process known as induced demand, so that traffic soon returns to previous levels. Cities that have instead invested in efficient bus systems have reduced both journey times and emissions at a much lower cost. The authors therefore advise the city to invest in public transport rather than in new roads." }
      ],
      activities: [
        {
          type: "sort", title: "Summary A or B?",
          prompt: "Sort the features of the two summaries.",
          bins: ["Summary A", "Summary B"],
          items: [
            { text: "copies the first sentence almost exactly", bin: 0 }, { text: "mentions city names without explaining their importance", bin: 0 }, { text: "doesn't explain induced demand", bin: 0 },
            { text: "explains the main idea in new words", bin: 1 }, { text: "uses a reporting verb (argues)", bin: 1 }, { text: "includes the main supporting evidence concisely", bin: 1 }
          ]
        },
        {
          type: "match", title: "Original and paraphrase",
          prompt: "Match the original phrases with the paraphrases in Summary B.",
          pairs: [
            ["the construction of additional road capacity", "building more roads"],
            ["new road capacity tends to generate additional traffic", "new roads attract more traffic"],
            ["high-quality bus rapid transit systems", "efficient bus systems"],
            ["at a fraction of the cost", "at a much lower cost"],
            ["prioritize investment in public transport over…", "invest in public transport rather than…"]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice paraphrasing and condensing, then write a summary.",
      activities: [
        {
          type: "rewrite", title: "Paraphrase it",
          prompt: "Paraphrase each sentence using the words in brackets.",
          items: [
            { q: "The policy had a significant impact on air quality. (considerably)", a: ["The policy considerably improved air quality.", "The policy considerably affected air quality.", "Air quality was considerably affected by the policy."] },
            { q: "Cities that grow rapidly face serious housing shortages. (Rapid)", a: ["Rapid urban growth leads to serious housing shortages.", "Rapid growth causes serious housing shortages in cities.", "Rapidly growing cities face serious housing shortages."] },
            { q: "Researchers interviewed 2,000 commuters. (were)", a: ["2,000 commuters were interviewed.", "Two thousand commuters were interviewed.", "2,000 commuters were interviewed by researchers."] }
          ]
        },
        {
          type: "rewrite", title: "Use a general noun",
          prompt: "Replace the list with a single general noun or phrase.",
          items: [
            { q: "buses, trams, trains and the metro", a: ["public transport", "public transportation"] },
            { q: "floods, droughts, hurricanes and heatwaves", a: ["extreme weather events", "extreme weather", "natural disasters"] },
            { q: "doctors, nurses, paramedics and pharmacists", a: ["health professionals", "healthcare workers", "medical staff", "health workers", "healthcare professionals"] }
          ]
        },
        {
          type: "write", title: "Your summary",
          prompt: "Choose **one** long text from an earlier unit (for example, the Reading in *Who Holds the Power?*, *Cause and Effect*, *The Comfort Zone* or *Moral Dilemmas*) or a real article you have read recently. Write a summary of it (200–250 words) for someone who hasn't read it. Begin with the central claim, include the main supporting ideas, paraphrase carefully, and don't add your own opinion. Then, in **one or two separate sentences** at the end, add your own brief evaluation (40–60 words). Total: 250–300 words.",
          minWords: 250, maxWords: 300,
          model: "Summary: \"Why are so many people short-sighted?\" (Unit 19)<br>The article argues that the rapid global increase in short-sightedness, or myopia, is mainly caused by modern lifestyles rather than by genetics.<br>The writer begins by pointing out that myopia has become dramatically more common in recent decades, affecting up to eighty per cent of young people in parts of East Asia. Since genes cannot change so quickly, environmental factors must be responsible.<br>For many years, the increase was blamed on reading and screen use, on the assumption that focusing on nearby objects causes the eye to grow abnormally. However, research has found only a weak link between close work and myopia.<br>According to the article, a more important factor is the amount of time children spend outdoors. Studies in which schools introduced additional outdoor activities recorded significantly fewer new cases. Scientists believe that natural daylight, which is far brighter than indoor lighting, stimulates the release of a chemical in the eye that slows its growth.<br>The writer concludes that academic pressure, which keeps children indoors, has created a vicious circle, and that glasses correct the symptoms without addressing the cause. Since severe myopia increases the risk of serious eye disease later in life, the article recommends a simple and inexpensive solution: allowing children to spend more time outside.<br>My evaluation: The article presents its argument clearly and supports it with convincing research. However, it could have discussed more fully why outdoor time is so difficult to increase in highly competitive education systems.",
          bank: ["The article argues that…", "The writer begins by pointing out that…", "However, research has found…", "According to the article,…", "The writer concludes that…", "the article recommends…", "My evaluation:"],
          checklist: [
            "My summary begins with the **central claim**.",
            "I included the **main ideas** and left out unnecessary detail.",
            "I **paraphrased** instead of copying.",
            "I kept my **opinion** separate, at the end."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat these summary phrases.",
          items: [
            "In a nutshell, buses beat new roads.",
            "The author's central claim is simple.",
            "The report argues that roads attract traffic.",
            "The gist of it is this.",
            "It all boils down to investment.",
            "In short, the evidence is clear."
          ]
        },
        {
          type: "speak", title: "Summarize it aloud",
          prompt: "Record yourself for about four minutes. **Part 1:** Summarize orally a book, a documentary, a long article or a lecture you know well, for someone who hasn't seen or read it (about two and a half minutes). Start with the central idea, give the main points and finish with the conclusion. **Part 2:** Then, separately, give your own evaluation of it (about one minute).",
          language: ["In a nutshell,…", "The central idea is that…", "The author argues / shows that…", "The main points are…", "Drawing on…,", "It concludes that…", "In short,…", "As for my own view,…"],
          seconds: 270,
          checklist: ["start with the central idea?", "include the main points without too much detail?", "paraphrase rather than repeat?", "keep your evaluation separate?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can identify the central claim and main ideas of a long text.", review: "Explanation: steps to a good summary; Quick check" },
    { can: "I can paraphrase using synonyms, word class and structure changes.", review: "Explanation: paraphrasing techniques; Writing activity 1" },
    { can: "I can condense information with general nouns.", review: "Writing activity 2" },
    { can: "I can report a writer's ideas with suitable reporting verbs.", review: "Explanation: reporting the writer's ideas" },
    { can: "I can evaluate the quality of a summary.", review: "Listening and Reading activities" },
    { can: "I can write and speak a concise, accurate summary.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
