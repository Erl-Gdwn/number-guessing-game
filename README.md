# Number Guessing Game

A console-based number guessing game built with JavaScript.

## How to Play

1. Run the script in a JavaScript environment that supports `prompt()` (e.g., a browser console).
2. You start with a score of **20**.
3. Guess a number between **0 and 20**.
   - **Correct guess** → score increases by 1, a new number is generated.
   - **Wrong guess** → score decreases by 1 and you receive a hint (`Try higher!` or `Try lower!`).
4. Type **`q`** at any time to quit.
5. The game ends when your score reaches **0** or you quit.
6. Your **high score** is tracked across rounds.

## Features

- Random number generation between 0–20
- Score-based gameplay with win/loss feedback
- High score tracking
- Graceful quit option
