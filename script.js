"use strict";

 // Console-based guessing game
 
 // TODO: Make it 0 based score with number of tries depending on level - easy, medium and hard.
 
 // You have a basic score, then you guess a number between 0-20. Everytime you have correct guess score adds, otherwise deducts. When the score hits zero game is over. High score must be showed.
 
  const generateRandomNumber = () => Math.trunc(Math.random()*20);
  
 // Create a basic score
 let basicScore = 20;
 let gameOver = basicScore === 0;
 let userQuit = false;
 let rightGuess = false;
 let rightInput = false;
 // Create a number to guess
 let randomNumber = generateRandomNumber();
 let userInput;
 let highScore = 0;
 
 const resetInput = () => userInput = undefined;
 const checkIfUserQuitting = userInput => userInput === 'q'
 const checkIfValidInput = userInput => {
     console.log(`Reached!`)
    try {
        const numberUserInput = Number(userInput)
        return true;
    } catch (error) {
        if (userQuitting(userInput)) {
            return true;
        } else {
            console.log("Incorrect input! Try Again")
            return false;
        }
    }
 };
 const checkIfHighScore = userScore => userScore > highScore;
 
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
    
    // Check if user input is the same with the ramdom number generated
    rightGuess = randomNumber === userInput;
    const highGuess = userInput > randomNumber;
    const lowGuess =  userInput < randomNumber;
 
    if (rightGuess) {
        basicScore++;
        console.log("Congratulations you got the right number!");
        // Reset random number
        randomNumber = generateRandomNumber();
    } else if (highGuess) {
        basicScore--;
        console.log("Try lower!");
    } else if (lowGuess) {
        basicScore--;
        console.log("Try higher!");
    } 
    
    console.log(`Current score: ${basicScore}`)
    resetInput();
 }
 
 
 