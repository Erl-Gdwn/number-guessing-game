"use strict";

const generateRandomNumber = () => Math.trunc((Math.random() * 20) + 1);

let basicScore = 0;
let numberOfLives = 0;
let gameOver = numberOfLives === 0;
let userQuit = false;
let rightGuess = false;
let rightInput = false;
let randomNumber = generateRandomNumber();
let userInput;
let highScore = 0;

const resetInput = () => userInput = undefined;
const checkIfUserQuitting = userInput => userInput === 'q'
const checkIfValidInput = userInput => {
    console.log(`Reached!`)
    try {
        Number(userInput)
        return true;
    } catch (error) {
        if (checkIfUserQuitting(userInput)) {
            return true;
        } else {
            console.log("Incorrect input! Try Again")
            return false;
        }
    }
};
const checkIfHighScore = userScore => userScore > highScore;
const setLivesBasedOnDifficulty = difficulty => {
    switch (difficulty) {
        case 'easy':
            numberOfLives = 10;
            break;
        case 'medium':
            numberOfLives = 5;
            break;
        case 'hard':
            numberOfLives = 3;
            break;
        default:
            console.log("Invalid difficulty level! Setting to easy by default.");
            numberOfLives = 10;
    }
}

let difficulty = prompt("Select difficulty level: easy, medium, hard");

setLivesBasedOnDifficulty(difficulty);

while (!gameOver && !userQuit) {
    while (!rightInput || !userInput) {
        userInput = prompt("Guess the number or type 'q' to quit.");
        rightInput = checkIfValidInput(userInput);
        if (!rightInput) resetInput()
    }

    userQuit = checkIfUserQuitting(userInput)

    if (userQuit) {
        console.log(`Thank you for playing the game your final score is ${basicScore}`)

        if (checkIfHighScore) {
            console.log(`Congratulations! You beat the high score! ${highScore}`)
            highScore = basicScore
        }
        continue;
    }

    userInput = Number(userInput)

    console.log(`Number to guess! ${randomNumber}`)

    rightGuess = randomNumber === userInput;
    const highGuess = userInput > randomNumber;
    const lowGuess = userInput < randomNumber;

    if (rightGuess) {
        basicScore++;
        console.log("Congratulations you got the right number!");
        randomNumber = generateRandomNumber();
    } else if (highGuess) {
        numberOfLives--;
        console.log("Try lower!");
    } else if (lowGuess) {
        numberOfLives--;
        console.log("Try higher!");
    }

    console.log(`Current score: ${basicScore}`)
    resetInput();
}