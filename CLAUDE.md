# CAA English C1–C2 — notes for Claude Code

Static website (no build step) of 45 self-access English units for levels C1 and C2, CAA Virtual (BUAP self-access center).
Units 1–25 are C1 (modules 1–5) and units 26–45 are C2 (modules 6–9), 5 units per module, built on the CEFR descriptors.
Sibling sites: CAA English A1, A2, B1 and B2 (same engine), all in `~/Documents/CAA VIRTUAL REP/`.
The owner is Angelica, an English teacher. Talk to her in Spanish; all student-facing content is in English.

## Structure
- `index.html` — home page. `UNITS` lists every unit (`n`, `mod`, title, focus, url); `MODULES` has each module's `level`, name and CEFR can-do;
  `LEVELS` has the C1 / C2 banner text. Filters: All, C1, C2, Module 1–9.
- `assets/unit.js` + `assets/unit.css` — shared engine. Each unit folder has an identical `index.html` that loads
  `../assets/config.js`, its own `data.js` (`window.UNIT = {...}`), then `../assets/unit.js`.
  The level badge gets the class `lvl-c1` / `lvl-c2` (C2 is purple, C1 keeps the gold of the other sites).
- `assets/config.js` — `writingEndpoint` (Google Apps Script web app URL), `speakingPlatformName/Url`, `homeUrl`.
- `_template/` — copy to start a new unit. `tools/writing-collector.gs` — Apps Script that stores writing submissions.
- Each `data.js` has `number` (1–45) and `level` ("C1" for 1–25, "C2" for 26–45), shown in the unit header as "Unit N · C1".
- Grammar progression: A1–B2 grammar is assumed. C1 covers deduction, conditional inversion, stance adverbs, clefts and fronting,
  register, word formation, collocations, complex noun phrases, concession, participle clauses, distancing and the subjunctive.
  C2 covers connotation, implicature, fine modality (be to, needn't have), headlines, nominal clauses, legal register, hypotheses,
  literary inversion, generalizing and qualifying, summarizing, mediation, spontaneous speech and humour.
- Writing tasks: C1 220–300 words; C2 250–340 words. Speaking tasks: C1 about 3½ minutes (`seconds: 210`), C2 4–5½ minutes (270–330).

## Conventions (keep them)
- Five steps per unit, IDs `mainsec-0` … `mainsec-4`; skill tabs `actsec-list`, `actsec-read`, `actsec-writ`, `actsec-spea`.
  Never use generic IDs like `id="presentation"`.
- Vary activity types; avoid repetitive multiple choice. Types: match (right-hand answers must be unique), sort, gap (`[[answer|alt]]`),
  tiles, rewrite, tf, write, speak, repeat.
- Speaking activity 1 in every unit is `repeat` (6 short sentences from the unit, `items: [...]`): TTS plays each sentence and the
  browser's SpeechRecognition scores it (`scoreSpeech` in unit.js: normalizes contractions, numbers and homophones, then matches words
  in order; 70% passes). Browsers without SpeechRecognition (Firefox) get listen + record + "I practiced" instead.
  Speaking activity 2 is a `speak` solo recording (the evidence). Keep repeat sentences short (3–10 words), with no "…",
  no proper names and no accented loanwords (déjà vu, faux pas) that recognition may spell differently.
- Every unit: 4 objectives, 6 can-do statements rated 1–5, each with a `review` hint.
- Each `slug` in `data.js` must equal its folder name (saved progress: `localStorage["c1c2:" + slug]`).
- Speaker voices: give every speaker a gender in `speakers: { "Name": "f" | "m" }` in data.js.
- Colors are CSS tokens with light and dark themes; keep the home page and units on the same palette.

## Deploying
Angelica uploads through the GitHub website, which accepts at most 100 files per upload, so the site is shipped in two zips:
part 1 = everything except units 26–45 (i.e. the engine and all C1 units); part 2 = units 26–45 (the C2 units).
With `gh`: `git init && git add -A && git commit -m "CAA English C1–C2"`, `gh repo create caa-english-c1-c2 --public --source=. --push`
(ask for the repo name first), then enable Pages on `main` / root. `.nojekyll` is present so `_template/` is served as is.

## Checking changes
- No Node on Angelica's Mac: check a data.js with `osascript -l JavaScript` (evaluate it with `new Function("window", src)`).
- Open a unit with a local server (`python3 -m http.server`) and click through all five steps and four skills.
  The desktop preview cannot serve from `~/Documents` directly (macOS blocks it); copy the folder to a temporary directory first.
