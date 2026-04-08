# Number Guessing Game

A console-based number guessing game built with JavaScript.

## How to Play

1. Run the script in a JavaScript environment that supports `prompt()` (e.g., a browser console).
2. Select a **difficulty level**: `easy`, `medium`, or `hard`.
3. Guess a number between **0 and 20**.
   - **Correct guess** → score increases by 1 and a new number is generated.
   - **Wrong guess** → you lose a life and receive a hint (`Try higher!` or `Try lower!`).
4. Type **`q`** at any time to quit.
5. The game ends when you run out of lives or you quit.
6. Your **high score** is tracked across rounds.

## Difficulty Levels

| Level  | Lives |
|--------|-------|
| Easy   | 10    |
| Medium | 5     |
| Hard   | 3     |

## Features

- Difficulty selection (easy, medium, hard)
- Random number generation between 0–20
- Separate score and lives tracking
- High score tracking
- Graceful quit option
