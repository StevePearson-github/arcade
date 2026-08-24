# PAC-MAN

A complete Pac-Man clone in a **single HTML file** — no dependencies, no asset
files. All graphics are drawn on canvas and every sound is synthesized live
with the Web Audio API.

## Run it

Open `index.html` in any modern browser:

```
open index.html          # macOS
xdg-open index.html      # Linux
```

(or serve the folder: `python3 -m http.server` → http://localhost:8000)

Append `?auto` to the URL to skip straight into gameplay.

## Controls

| Input                | Action                          |
|----------------------|---------------------------------|
| Arrow keys / WASD    | Move (or navigate menu)         |
| Enter / Space / Tap  | Start                           |
| 1 / 2 / 3            | Quick-start EASY/MEDIUM/HARD    |
| P                    | Pause                           |
| M                    | Mute / unmute                   |
| Swipe                | Steer on touch screens          |

## Difficulty

Picked on the title screen (arrow keys or tap a row; `1`/`2`/`3` start
instantly). Choice is remembered, and each difficulty keeps its **own high
score**.

| Level   | Ghost speed        | Power-pill duration |
|---------|--------------------|---------------------|
| EASY    | 72% of arcade      | +8s (e.g. 14s at level 1) |
| MEDIUM  | 86% of arcade      | +4s (e.g. 10s at level 1) |
| HARD    | 100% — arcade-exact | arcade table (6s → 0s) |

Pac-Man's speed is identical in all three; only the ghosts (and how long you
get to bite back) change.

## What's implemented

**Gameplay**
- Authentic arcade maze layout (28×31 tiles, 240 dots + 4 energizers,
  wrap-around tunnel)
- Four ghosts with their classic personalities and scatter/chase waves:
  - **Blinky** (red) chases you directly, gets faster as dots run out ("Cruise Elroy")
  - **Pinky** (pink) aims 4 tiles ahead of you
  - **Inky** (cyan) uses the vector-doubling trick off Blinky's position
  - **Clyde** (orange) chases until he's within 8 tiles, then shies away
- Ghost house with dot-counter releases + failsafe timers
- Frightened mode with combo scoring (200 → 400 → 800 → 1600), flashing
  warning near the end, eyes returning home to regenerate
- Fruit bonuses at 70 and 170 dots (cherry → key by level), fruit ladder HUD
- Levels with authentic speed/fright-time scaling, maze flash on clear
- Lives, extra life at 10,000, persistent high score (localStorage)
- Death animation, READY!/GAME OVER sequences, attract screen with roster
- Pause, tab-blur auto-pause, swipe controls

**Sound (100% synthesized — no files)**
- Waka-waka pellet chomp (alternating chirps)
- Continuously modulated siren that rises in pitch as the maze empties,
  switches to a fast warble during fright mode and a rapid ping while eyes
  return home
- Power-pellet gulp, ghost-eaten rising sweep, fruit blips
- Death spiral + thumps, extra-life fanfare, level-clear arpeggio
- The iconic intro jingle, transcribed note-for-note (with bass line)

## Notes

- The maze is byte-for-byte identical to the arcade original (verified
  against Shaun Williams' accurate remake data).
- Sound starts after your first interaction (browser autoplay policy).
- `window.__pm` exposes internals for tinkering/debugging.
