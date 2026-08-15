# Arcade

A testing grounds for small language models attempting to create classic arcade games.

Each folder contains one classic game. Attempts are single self-contained HTML files
named `<game>_<model>_<backend>.html` (e.g. `space_invaders_qwen3.8-27b_lmstudio.html`),
so different models and inference backends can be compared side by side.

Just open any HTML file in a browser to play.

## Games

| Game | Attempts |
|------|----------|
| Space Invaders | [qwen3.8-27b (LM Studio)](space_invaders/space_invaders_qwen3.8-27b_lmstudio.html) |

## How it works

1. Pick a classic arcade game (e.g. Pong, Breakout, Snake, Space Invaders).
2. Prompt a small local language model to build it as a single HTML/CSS/JS file.
3. Save the result in the game's folder using the naming convention above.
4. Play, score, and compare — the whole point is to see how far small models can get.

No build step, no dependencies, no frameworks. Pure model output.
