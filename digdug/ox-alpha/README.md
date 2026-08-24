# DIG DUG

A complete Dig Dug clone in a **single HTML file** — no dependencies, no asset
files. All graphics are drawn on canvas and every sound is synthesized live
with the Web Audio API, including Dig Dug's signature gimmick: the music only
plays while you're moving.

## Run it

Open `index.html` in any modern browser:

```
open index.html          # macOS
xdg-open index.html      # Linux
```

(or serve the folder: `python3 -m http.server` → http://localhost:8000)

## Controls

| Input                | Action                          |
|----------------------|---------------------------------|
| Arrow keys / WASD    | Dig (or navigate menus)         |
| Space / Z / X        | Fire harpoon / pump             |
| Enter                | Start                           |
| P                    | Pause                           |
| M                    | Mute / unmute                   |
| Swipe + tap          | Steer + pump on touch screens   |

## What's implemented

**Gameplay**
- Destructible strata field (yellow → orange → red → blue depth layers) carved
  in real time as you tunnel; smooth rounded tunnels, not blocky tiles
- **Pookas** (red, goggled) roam tunnels; **Fygars** (green dragons) breathe
  fire horizontally — telegraphed charge, then flame blocked by undug dirt
- Pump mechanic: harpoon hooks an enemy, then 4 pumps inflate it until it
  pops. Partially inflated enemies deflate over time and give chase again
- Enemies periodically turn to **ghost eyes**, phasing through dirt to hunt
  you, then re-materializing in open tunnels
- **Rocks**: undermine them and they wobble, drop, and crush anything below —
  including you. Chain values 1000 → 2500 → 4000 … per extra victim
- Bonus vegetable appears at the center after you drop 2 rocks (carrot →
  melon by round), despawns if ignored
- Last remaining enemy flees for the surface if you take too long
- Depth-based scoring (200/300/400/500); horizontal Fygar kills score double;
  extra lives at 10k/30k/60k/100k; persistent high score (localStorage)
- Rounds scale up: more enemies, more Fygars, faster ghosts, shorter fuse on
  everything. Tunnels persist through deaths within a round, rocks don't
- Lives, round flowers on the surface, READY!/GAME OVER flow, attract screen,
  pause, tab-blur auto-pause

**Sound (100% synthesized — no files)**
- The iconic walk-only music loop: bouncy square lead + triangle bass that
  plays *only while Taizo is moving* and resumes mid-phrase when you move again
- Harpoon zap and dirt thunk; per-pump "chuk" rising in pitch with inflation
- Pop burst on kill, hiss on deflate
- Fygar charge rumble and filtered-noise flame roar
- Rock wobble ticks, falling whistle, impact thud (with screen shake)
- Vegetable appear sparkle + collect blips, extend-life fanfare
- Death jingle, round-clear fanfare, start jingle, game over dirge
- Eerie LFO warble while any enemy is in ghost mode

## Notes

- Sound starts after your first interaction (browser autoplay policy).
- `window.__dd` exposes internals (state, player, enemies, rocks) for tinkering.
