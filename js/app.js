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

let questionFour = prompt('President Obama graduated from Punahou School. Do you think I also graduated from the same school?').toLowerCase();
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

let questionFive = prompt('Hula is a traditional dance in Hawaii. Do you think I also dance hula?').toLowerCase();
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

let myNumber = 3

for(let i = 0; i < 4; i++){

  let questionSix = +prompt('What is my favorite number? You have 4 chances to guess!');
  console.log(questionSix);
  if(questionSix > myNumber){
    alert('Sorry, that guess is too high.');
  } else if(questionSix < myNumber){
    alert('Sorry, that guess is too low');
  } else if(questionSix === myNumber){
    alert('Awesome, you are correct! My favorite number is 3!');
    score++;
    break;
  }
  if(i === 3){
alert('Sorry, you used your 4 chances to guess!');
  }
}


let favoriteColors = ['red','orange','yellow','green','blue','purple'];

for(let i = 0; i < 6; i++) {

  let questionSeven = prompt('What is one of my favorite colors in the rainbow? You have 6 chances to guess!').toLowerCase();
  console.log(questionSeven);
  
  let guessedCorrect = false;

  for(let j = 0; j < favoriteColors.length; j++) {
    if(questionSeven === favoriteColors[j]) {
      alert('YES! YOU ARE AWESOME! I LOVE THAT COLOR!');
      guessedCorrect = true;
      score++;
      break;
    }
  }

  if(guessedCorrect === false) {
    alert('Sorry, that is not the right color. Guess again!')
  } else{
    break;
  }
  
  if(i === 5){
    alert('Sorry, you are out of attempts.');    
  }
}

alert(`Here are all my favorite colors: ${favoriteColors}`);



alert(`Thank you, ${userName}! I hope you enjoyed my guessing game. You correctly guessed ${score} out of 7 questions!`);
