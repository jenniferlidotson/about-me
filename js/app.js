'use strict';
console.log('hey world hey!');

let userName = prompt('Aloha! What is your name?');
console.log(userName);
alert(`Aloha ${userName}! Let's play a fun guessing game, please answer y or n.`);

let questionOne = prompt('I am from Hawaii. Is Hawaii also known as the Aloha State?').toLowerCase();
console.log(questionOne);

if (questionOne === 'yes' || questionOne === 'y'){
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
  alert('You are correct! Try the next question!');}
else if(questionFive === 'no' || questionFive === 'n'){
  alert('Good try, but you are incorrect. Try the next question!');
}
else{
  alert('Please answer y or n');
}

alert('That was fun ' + userName + '! I hope you enjoyed my guessing game!')