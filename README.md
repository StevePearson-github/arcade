# Arcade

A testing grounds for small language models attempting to create classic arcade games.

Each top-level folder contains one classic game, and inside it each model attempt
lives in its own subfolder named after the model (e.g. `openai_gpt-oss-20b/`),
so different models and inference backends can be compared side by side.
Older games may use the original flat naming `<game>_<model>_<backend>.html`.
A `prompt.txt` in the game folder records the prompt given to the models.

Just open any HTML file in a browser to play.

## Games

| Game | Attempts |
|------|----------|
| Space Invaders | [qwen3.8-27b (LM Studio)](space_invaders/space_invaders_qwen3.8-27b_lmstudio.html) |
| Mario | [qwen3.8-27b (LM Studio)](mario/mario_qwen3.8-27b_lmstudio.html) |
| Missile Command | [gemma-4-26B (LM Studio)](missile_command/lmstudio-community_gemma-4-26B-A4B-it-QAT-MLX-4bit/index.html) · [gpt-oss-20b](missile_command/openai_gpt-oss-20b/index.html) · [ThinkingCap-Qwen3.6-27B](missile_command/t-prazak_ThinkingCap-Qwen3.6-27B-MLX-4bit/missile_command.html) · [qwen3.6-27b](missile_command/qwen3.6_27b/missile_command.html) |
| Frogger | [ox-alpha](frogger/ox-alpha/index.html) |

## How it works

1. Pick a classic arcade game (e.g. Pong, Breakout, Snake, Space Invaders).
2. Prompt a small local language model to build it as an HTML/CSS/JS file.
3. Save the model's output in a subfolder named after the model, and note the prompt in `prompt.txt`.
4. Play, score, and compare — the whole point is to see how far small models can get.

No build step, no dependencies, no frameworks. Pure model output.
