// Write a function that takes two numbers and return the maximum of the two.
function max_number(numberA, numberB) {
  if (numberA > numberB) return numberA;
  else return numberB;
}

let firstNumber = 25;
let secondNumber = 50;
let max_num = max_number(firstNumber, secondNumber);

console.log("The maximum number is", max_num);
