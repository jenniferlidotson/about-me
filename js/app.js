'use strict';
console.log('hey world hey!');

let userName = prompt('Aloha! What is your name?');
//console.log('userName')
alert('Aloha ${userName}! We will play a fun guessing game, please answer y or n.');

let questionOne = prompt('I am from Hawaii. Is Hawaii also known as the Aloha State?').toLowerCase;

if (questionOne === 'yes' || questionOne === 'y'){
  alert('You are correct! Try the next question!');}
//console.log('questionOne')
else if(questionOne === 'no' || questionOne === 'n'){
  alert('Good try, but you are incorrect. Try the next question!');
}

let questionTwo = prompt('Hawaii became part of USA in 1959. Do you think I was born in 1959?').toLowerCase;

if (questionTwo === 'no' || questionTwo === 'n'){
//console.log('questionTwo')
  alert('You are correct! Try the next question!');}
else if(questionTwo === 'yes' || questionTwo === 'y'){
  alert('Good try, but you are incorrect. Try the next question!');
}

let questionThree = prompt('Honolulu is the capital of Hawaii. Do you think I got married in Honolulu?').toLowerCase;

if (questionThree === 'yes' || questionThree === 'y'){
//console.log('questionThree')
  alert('You are correct! Try the next question!');}
else if(questionThree === 'no' || questionThree === 'n'){
  alert('Good try, but you are incorrect. Try the next question!');
}

let questionFour = prompt('President Obama graduated from Punahou School. Do you think I also graduate from the same school?').toLowerCase;

if (questionFour === 'yes' || questionFour === 'y'){
//console.log('questionFour')
  alert('You are correct! Try the next question!');}
else if(questionFour === 'no' || questionFour === 'n'){
  alert('Good try, but you are incorrect. Try the next question!');
}

let questionFive = prompt('Hula is a traditional dance in Hawaii. Do you think I also dance hula?').toLowerCase;

if (questionFive === 'yes' || questionFive === 'y'){
//console.log('questionFive')
  alert('You are correct! Try the next question!');}
else if(questionFive === 'no' || questionFive === 'n'){
  alert('Good try, but you are incorrect. Try the next question!');
}

alert('That was fun, ${userName}. I hope you enjoyed my guessing game!');
