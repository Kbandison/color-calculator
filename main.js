'use strict';

const prompt = require('prompt-sync')();

let choice = String(prompt('Would you like to combine or deconstruct a color? '));

if (choice == 'combine'){

  let input1 = String(prompt('What is the first color you like to combine? Choices: Red, Yellow, or Blue: '));
  let input2 = String(prompt('What is the second color you like to combine? Choices: Blue or Yellow: '));
  let input1A = input1.toLowerCase();
  let input2A = input2.toLowerCase();

  if (input1A == 'red' && input2A == 'blue'){
    console.log('The combined color of Red and Blue is Purple.')
  } else if (input1A == 'red' && input2A == 'yellow'){
    console.log('The combined color of Red and Yellow is Orange.')
  } else if (input1A == 'blue' && input2A == 'yellow'){
    console.log('The combined color of Blue and Yellow is Green.')
  } else {
    console.log('Error!')
  }
}

else if (choice == 'deconstruct'){

  let input1 = String(prompt('What color would you like to deconstruct? Choices: Purple, Orange, or Green: '));
  let input2 = input1.toLowerCase();

  if (input2 == 'purple'){
    console.log('The deconstructed colors of Purple is Red and Blue.')
  } else if (input2 == 'orange'){
    console.log('The deconstructed colors of Orange is Red and Yellow.')
  } else if (input2 == 'green'){
    console.log('The deconstructed colors of Green is Blue and Yellow.')
  } else {
    console.log('Error!')
  }
} else {
  console.log('Error! Choose either combine or deconstruct.')
}