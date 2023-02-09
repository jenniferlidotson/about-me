'use strict';
console.log('hey world hey!');

let score = 0;

let userName = prompt('Aloha! What is your name?');
console.log(userName);
alert(`Aloha ${userName}! Let's play a fun guessing game, please answer y or n.`);

let questionOne = prompt('I am from Hawaii. Is Hawaii also known as the Aloha State?').toLowerCase();
console.log(questionOne);

if (questionOne === 'yes' || questionOne === 'y'){
  score++;
  alert('You are correct! Try the next question!');}
else if(questionOne === 'no' || questionOne === 'n'){
  alert('Good try, but you are incorrect. Try the next question!');
}
else{
  alert('Please answer y or n');
}

let questionTwo = prompt('Hawaii became part of USA in 1959. Do you think I was born in 1959?').toLowerCase();
console.log(questionTwo);

if (questionTwo === 'no' || questionTwo === 'n'){
  score++;
  alert('You are correct! Try the next question!');}
else if(questionTwo === 'yes' || questionTwo === 'y'){
  alert('Good try, but you are incorrect. Try the next question!');
}
else{
  alert('Please answer y or n');
}

let questionThree = prompt('Honolulu is the capital of Hawaii. Do you think I got married in Honolulu?').toLowerCase();
console.log(questionThree);

if (questionThree === 'yes' || questionThree === 'y'){
  score++;
  alert('You are correct! Try the next question!');}
else if(questionThree === 'no' || questionThree === 'n'){
  alert('Good try, but you are incorrect. Try the next question!');
}
else{
  alert('Please answer y or n');
}

let questionFour = prompt('President Obama graduated from Punahou School. Do you think I also graduated from the same school?').toLowerCase;
console.log(questionFour);

if (questionFour === 'yes' || questionFour === 'y'){
  score++;
  alert('You are correct! Try the next question!');}
else if(questionFour === 'no' || questionFour === 'n'){
  alert('Good try, but you are incorrect. Try the next question!');
}
else{
  alert('Please answer y or n');
}

let questionFive = prompt('Hula is a traditional dance in Hawaii. Do you think I also dance hula?').toLowerCase;
console.log(questionFive);

if (questionFive === 'yes' || questionFive === 'y'){
  score++;
  alert('You are correct! Try the next question!');}
else if(questionFive === 'no' || questionFive === 'n'){
  alert('Good try, but you are incorrect. Try the next question!');
}
else{
  alert('Please answer y or n');
}

let totalAttempts = 4;

let questionSix = prompt('What is my favorite number? You have 4 chances to guess!');
console.log(questionSix);

let convertNumber = parseInt(questionSix);

if (convertNumber === 3) {
  alert(`Great guess, ${userName}! My favorite number is 3!`);
}
else if (convertNumber > 3) {
  alert('That number is too high.');
  totalAttempts--;
  alert(`You have ${totalAttempts} more chances to guess the correct number!`);
}
else if (convertNumber < 3) {
  alert('That number is too low.');
  totalAttempts--;
  alert(`You have ${totalAttempts} more chances to guess the correct number!`);
}
else (totalAttempts === 4); {
  alert('Shucks, no more chances left to guess.  The correct number is 3.');
  score++;
}

let favoriteColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple'];

let colorGuess = 6;

let correctGuess = false;

while (colorGuess < 6 && correctGuess === false){
  let questionSeven = prompt ('What are my favorite colors in the rainbow? You have 6 chances to guess!').toLowerCase();
  console.log(questionSeven);

  for(let i = 0; i < favoriteColors.length; i++){
    if(questionSeven === favoriteColors[i]){
      alert(`You guessed correctly, ${userName}! My favorite colors are ${favoriteColors}!`);
      score++;
      break;
    }
    if(i === favoriteColors.length - 1){
      colorGuess++;
      alert('Try again!');
    }
    if(colorGuess === 6){
      alert(`Darn ${userName}, you didn't guess my favorite colors are ${favoriteColors}.`);
    }
  }
}
alert(`Thank you, ${userName}! I hope you enjoyed my guessing game. You correctly guessed ${score} out of 7 questions!`);
