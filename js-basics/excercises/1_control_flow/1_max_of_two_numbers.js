// Write a function that takes two numbers and return the maximum of the two.
function max_number(numberA, numberB) {
  if (numberA > numberB) return numberA;
  else if (numberA === numberB) return "equal numbers";
  else return numberB;

  // A simpler aproach. Using ternary operator.
  // return (numberA > numberN) ? numberA : numberB
}

let firstNumber = 50;
let secondNumber = 50;
let max_num = max_number(firstNumber, secondNumber);

console.log("The maximum number is -", max_num);
