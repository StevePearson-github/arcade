# CENTIPEDE

A complete Centipede clone in a **single HTML file** — no dependencies, no
asset files. All graphics are drawn on canvas and every sound is synthesized
live with the Web Audio API, including the game's signature heartbeat that
speeds up as the centipede gets shorter.

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
| Arrow keys / WASD    | Move the Bug Blaster / menus    |
| Space / Z / X        | Fire                            |
| Enter                | Start                           |
| P                    | Pause                           |
| M                    | Mute / unmute                   |
| Drag + hold          | Steer + auto-fire on touch      |

## What's implemented

**Gameplay**
- 12-segment centipede descends the mushroom field, dropping a row and
  reversing at every wall or mushroom; body segments follow the leader's path
- Shooting a segment plants a mushroom in its place; middle hits **split the
  centipede into two independent centipedes**; head shots turn the next
  segment into a head (10 pts body, 100 pts head)
- When the head reaches the bottom the whole chain **shatters into lone
  heads** that swarm the player zone
- **Spiders** bounce erratically through the player area eating mushrooms —
  worth 300/600/900 depending on how close you shoot them
- **Fleas** drop from the top when the player area runs low on mushrooms,
  seeding a trail of new ones; two hits to kill, wounded fleas double speed
  and stop seeding (200 pts)
- **Scorpions** (round 2+) cross the upper field poisoning every mushroom
  they touch; a centipede that eats a poisoned mushroom **plunges straight
  down** into your area (1000 pts)
- Mushrooms take 4 shots; depth-band coloring like the arcade original;
  damaged mushrooms regrow one stage and poison is cured when you die
- Waves scale up: later waves enter with fewer chain segments + more lone
  heads, faster everything, hungrier spiders
- Extra life every 12,000 points, persistent high score (localStorage),
  wave-clear bonus, attract screen with enemy scoring legend

**Sound** (all synthesized, zero audio files)
- The classic accelerating low **heartbeat/thump** tempo-tracked to the
  number of remaining segments
- Distinct voices for shooting, mushroom damage/breaking, segment kills,
  chain splits, break-apart alarm, spider chirps (stereo-panned), flea buzz,
  flea drop whistle, scorpion scuttle, poison jingle, wave-clear and
  extra-life fanfares, death explosion, game-over dirge
- Mute toggle persisted between sessions

## Notes

Verified by fuzz-driving the full state machine headlessly in Chrome
(7,200 simulated seconds: deaths, respawns, splits, poison dives, flea/seeding,
scorpion runs, extra lives, game over) with zero runtime errors.
