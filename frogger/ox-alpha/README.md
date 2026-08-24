# FROGGER

A complete Frogger clone in a **single HTML file** — no dependencies, no asset
files. All graphics are drawn on canvas and every sound is synthesized live
with the Web Audio API.

## Run it

Open `index.html` in any modern browser:

```
open index.html          # macOS
xdg-open index.html      # Linux
```

(or serve the folder: `python3 -m http.server` → http://localhost:8000)

## Controls

| Input               | Action                                   |
|---------------------|------------------------------------------|
| Arrow keys / WASD   | Hop (or navigate menu)                    |
| Enter / Space / Tap | Start                                     |
| 1 / 2 / 3           | Quick-start EASY/NORMAL/HARD              |
| P                   | Pause                                     |
| M                   | Mute / unmute                             |
| Swipe               | Hop on touch screens (tap = pause)        |

## Difficulty

Picked on the title screen (`↑`/`↓`, tap a row, or `1`/`2`/`3`). Choice is
remembered, and each difficulty keeps its **own high score**.

| Level  | Traffic & river speed | Clock | Diving turtles | Crocodiles in bays | Missed bay |
|--------|----------------------|-------|----------------|--------------------|------------|
| EASY   | 78%                  | 50s   | fewer          | never              | bounce back |
| NORMAL | 100%                 | 40s   | normal         | from level 3       | death       |
| HARD   | 115%                 | 34s   | extra          | from level 2       | death       |

## What's implemented

**Gameplay**
- Classic layout: 5 lanes of traffic, median, 5 river lanes, 5 home bays
- Traffic mix: sedans, taxis with checker stripe, bulldozers, long trucks,
  and a very fast racecar lane
- River: three log lengths at different speeds plus two turtle lanes;
  riding platforms moves you with the current — drift off-screen and you're
  gone
- **Diving turtles** that blink before submerging (bubbles mark where they
  went down)
- Home bays with hedge walls, bonus **fly** worth +200, and **crocodiles**
  that occupy bays at higher levels (landing on one is fatal)
- Occupied bay = death (arcade rules); EASY lets you bounce off the hedge
- Per-frog clock with warning ticks and a color-shifting time bar
- Scoring: 10 per forward hop, 50 + time bonus per home (+200 fly),
  +1000 for filling all five bays, extra life at 20,000
- Endless levels: speeds scale up, clock shrinks, more divers, earlier crocs
- Death animations: splash-and-sink in the river, squash + skull on the road,
  skull bob for time-outs
- Lives, persistent high scores (localStorage), attract screen with demo
  frog, pause, tab-blur auto-pause

**Sound (100% synthesized — no files)**
- Boingy hop blip, splash + bubbles, crash buzz, croc chomp, hedge thud
- Little fanfare when a frog makes it home; bigger one for level clear
- Bonus fly double-blip, extra-life arpeggio, time-up phrase, low-time ticks
- Original chiptune background loop (square lead, triangle bass, hats +
  kick) driven by a look-ahead scheduler that survives tab switches

## Notes

- The background tune is an original composition, not the arcade melody.
- Sound starts after your first interaction (browser autoplay policy).
- `window.__fg` exposes `{G, AudioSys, tryHop, startGame}` for tinkering.
