// In this excercise im going to check if in a given array it includes
// a given number passed as input. Just like the '.include()' method.

const arrayNumbers = [1, 2, 3, 4, 5];

function isIncluded(array, number) {
  for (let n of array) {
    if (number === n) return true;
  }

  return false;
}

console.log(isIncluded(arrayNumbers, 2)); // --> true
console.log(isIncluded(arrayNumbers, 7)); // --> false
