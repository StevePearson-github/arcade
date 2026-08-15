# AGENTS.md

Guidance for AI agents (and humans) working in this repository.

## What this repo is

A testing grounds for **small language models** attempting to create classic arcade
games. Each attempt is the model's raw output: self-contained HTML/CSS/JS, no build
step. The point is to compare how far different small models get with the same
style of prompt — the games are **test artifacts**, not products.

## Repository structure

```
<game>/                          # one folder per classic game (snake_case)
  prompt.txt                     # the exact prompt given to the model
  <org>_<model>/                 # one subfolder per model attempt (e.g. openai_gpt-oss-20b/)
    index.html                   # the game (or <game>.html)
    *.js                         # optional scripts/tests the model produced
```

- **`prompt.txt` is required** for every game — it records the exact prompt given
  to the models for that game.
- Older games (`space_invaders`, `mario`) use the legacy flat naming
  `<game>_<model>_<backend>.html` directly in the game folder. New attempts should
  use the per-model subfolder layout.
- **Never "improve", reformat, or rewrite a model's game files.** If a game is
  broken, that is a finding about the model — preserve the output as-is.

## Git workflow

- **Never commit or push directly to `main`.** All changes — even one-line README
  fixes — go on a feature branch, are pushed, and land via a pull request.
- Branch naming: `add-<game>` for new game attempts, kebab-case otherwise
  (e.g. `update-readme`, `add-missing-prompts`).
- Commit messages: imperative and specific (e.g. "Add Mario (qwen3.8-27b via LM Studio)").
- Don't commit OS/editor junk (`.DS_Store`, etc.) — `.gitignore` covers it, but
  check `git status` before committing.

## Conventions

- A game must be playable by opening its HTML file directly in a browser.
- No build tools, no npm, no frameworks. External asset links (Google Fonts,
  sound files) appear in some outputs and are acceptable.
- When adding a game or an attempt, update the **Games table** in `README.md` in
  the same change.
- Prefer small, reviewable PRs: one game (or one batch of attempts) per PR.
