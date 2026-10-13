# BrainQuest 🧠

A **knowledge-survival** quiz game. Answer correctly to survive — a wrong answer
**or** running out of time ends your run.

This project ships in **two versions**:

| Version | Tech | How to start |
| --- | --- | --- |
| 🌐 **Web game** *(recommended)* | HTML + CSS + JavaScript (no build step) | Open `web/index.html` (or Live Server) |
| 💻 **Terminal game** | Node.js | `npm start` |

Both are independent — use whichever you like.

**Live:** <https://brainquest.antideploy.app> (deployed on Antideploy)

---

## 1. 🌐 Web version (recommended)

A premium, animated browser game with modes, lifelines, sound and saved stats.

### How to run

**Option A — VS Code Live Server (recommended)**
1. Open the `BrainQuest` folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey) if you don't have it.
3. Right-click `web/index.html` → **Open with Live Server**.

**Option B — Terminal**
Open the VS Code terminal (`` Ctrl+` ``) in the `BrainQuest` folder and run:

```powershell
python -m http.server 5500 --directory web   # Python (usually installed)
# ...or...
npx serve web                                # Node.js
```

Then open <http://localhost:5500/> in your browser.

**Option C — Just double-click**
You can open `web/index.html` directly in a browser. Everything works, including
saved stats, but a local server is cleaner for development.

### Features

- **Two modes:** Mixed Mode (all subjects) and Subject Mode (pick one).
- **Nine subjects:** Technology, Science, Mathematics, General Knowledge, History,
  plus engineering subjects **CSE, ECE, EEE, MECH**.
- **170 questions total** — 18 per general subject and 20 per engineering subject,
  including extra-tough expert-level facts and B.Tech engineering questions
  (digital counters, algorithms, circuits, thermodynamics and more).
- **15-second countdown** with a colour-changing ring that turns red under 5s.
- **Countdown sound:** a soft tick every second, urgent beeps in the final 5 seconds,
  plus correct / wrong / time-up effects and a start chime. Toggle with the 🔊 button
  (top-right); your choice is remembered. No audio files — sounds are generated with
  the Web Audio API.
- **Four lifelines, two uses each per run:**
  - 50:50 — removes two wrong options.
  - Phone a Friend — a suggestion that is correct ~70% of the time.
  - Ask the Audience — poll percentages that always total 100%.
  - Change Question — swaps the question without ending the run or resetting your streak.
- **Streak + best streak**, saved in `localStorage`.
- **Keyboard shortcuts:** press `1`–`4` to answer quickly.
- **3D home scene:** the title tilts and glowing orbs parallax as you move the mouse,
  with a slowly rotating 3D cube. Pure CSS 3D + vanilla JS — automatically disabled on
  touch devices and when "reduce motion" is set.
- Fully responsive (desktop, tablet, mobile).

### Web files

```
web/index.html          # All screens (home, mode, subject, game, game over)
web/css/style.css       # Dark purple/violet theme, animations, responsive layout
web/js/questions.js     # Question bank (170 questions, 9 subjects) + validation
web/js/lifelines.js     # Pure lifeline logic (50:50, Phone a Friend, Audience)
web/js/audio.js         # Web Audio sound engine (countdown + effects)
web/js/game.js          # Game state, timer, scoring, stats, UI wiring
web/js/effects.js       # Home page 3D parallax / tilt (mouse driven)
```

### Add your own questions (web)

Open `web/js/questions.js` and add an object to the `RAW` array:

```js
{
    subject: "ECE",                        // must match one of SUBJECTS
    question: "A MOD-12 counter needs how many flip-flops?",
    options: ["3", "4", "5", "6"],         // 4 unique options
    answer: 1                              // index of the correct option (0-3)
}
```

The bank is validated on load — open the browser console to see warnings if a
question has the wrong number of options, duplicates, or a bad answer index.

---

## 2. 💻 Terminal version

A lightweight version that runs right inside the terminal.

### How to run

```bash
npm start        # play once
npm run dev      # auto-reload while editing (Node 18+)
```

### Rules

- You get a multiple-choice question with options numbered `1`–`4`.
- Type the number of your answer and press Enter.
- Correct → move on. Wrong → **game over**.
- Survive every question to win.

### Add your own questions (terminal)

Open `src/main.js` and edit the `questions` array near the top:

```js
const questions = [
  { q: "Your question?", options: ["A", "B", "C", "D"], answer: 2 },
  // `answer` is the 0-based index of the correct option (0-3)
];
```

> Note: the terminal version currently uses a small **starter set of 5 easy
> questions**. The web version has the full 170-question hard bank.

---

## Project structure

```
BrainQuest/
├── web/                    # 🌐 Static web game (deployed to Antideploy)
│   ├── index.html          # Web version - entry point
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── questions.js
│       ├── lifelines.js
│       ├── audio.js
│       ├── game.js
│       └── effects.js
├── src/
│   └── main.js             # 💻 Terminal version - entry point
├── package.json            # Terminal version - npm scripts
├── .antideploy.json        # Antideploy application id (not a secret)
├── assets/                 # (empty - reserved for future use)
├── data/                   # (empty - reserved for future use)
├── scenes/                 # (empty - reserved for future use)
└── README.md
```

## Deployment (Antideploy)

The web game is deployed to Antideploy as a **static site**. Because the repo also
holds the Node terminal game, the deployable static app lives in `web/` and the
Antideploy application sets `rootDirectory: "web"` — so the analyzer serves the
static files instead of trying to run the terminal CLI.

- **Live URL:** <https://brainquest.antideploy.app>
- **Application id:** see `.antideploy.json`

Redeploy from the project root:

```powershell
$TOKEN = (Get-Content "$env:USERPROFILE\.antideploy\config.json" -Raw | ConvertFrom-Json).token
$APP = (Get-Content .antideploy.json -Raw).Trim()
tar czf "$env:TEMP\bq.tar.gz" --exclude=.git --exclude=node_modules .
curl.exe -sS -X POST "https://antideploy.com/api/v1/deploy?applicationId=$APP" `
  -H "Authorization: Bearer $TOKEN" -F "archive=@$env:TEMP\bq.tar.gz"
```

## Tech notes

- The web version has **no dependencies and no build step**.
- The terminal version has **no dependencies** — it uses Node's built-in `readline`.
