const add = function(num1, num2) {
  let sum = 0;
  sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
	let sum = 0;
  sum = num1 - num2;
  return sum;
};

const sum = function(num) {
  let sum = 0;

  for(let i = 0; i < num.length; i++){
    sum += num[i];
  }
  return sum;
};

const multiply = function(num) {

  // num.reduce is a function in javascript that allows you to add/multiply the items in an array
  let sum = num.reduce(function(accumulator, current) {
    return accumulator * current;
  });

  return sum;
};

const power = function() {

  //takes the arguments given and turns them into an array which can be shifted/popped for their contents
  let newArr = Array.from(arguments);
  let first = newArr.shift();
  let last = newArr.pop();
  let sum;
  
  // for loop loops through the amount of the second argument and cubes the answer
	for(let i = 0; i < last; i++){
    sum = Math.pow(first, last);
  }

  return sum;
};

const factorial = function() {
	let newArr = Array.from(arguments);
  let arg = newArr.shift();
  let sum = 1;

  for(let i = arg; i > 0; i--){
    sum *= i;
  }

  return sum;

};


factorial(5);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
