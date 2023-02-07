'use strict';

console.log('hey world hey!');

// TODO: Get users name - prompt and alert greet back to user
let userName = prompt('What is your name?');

alert('Welcome to my site ${username}! We will play a guessing game, please answer y or n.')

// TODO: prompt 5 y/n questions for the user to guess and alert when they are correct/incorrect

let questionOneGuess = prompt('Do I have a duaghter?').toLowerCase;

if (questionOneGuess === 'yes' || questionOneGuess === 'n'){
    alert('You are correct!');
    else if(questionOneGuess === 'no')
    alert('Sorry you are incorrect');
}

// TODO: give them a final message with their name in the alert
// alert('Thanks for playing ${userName}!');
