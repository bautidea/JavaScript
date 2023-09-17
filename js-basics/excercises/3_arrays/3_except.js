// In this next excercise im going to create a function that will take two arrays
// as inputs.
// From the first array it will remove the elements that were passed in the second
// array.

function except(array, excluded) {
  const finalArray = [];

  for (let number of array) {
    const isIncluded = excluded.includes(number);

    if (isIncluded === false) finalArray.push(number);
  }

  return finalArray;
}

const numberArray = [1, 2, 3, 4, 1, 1, 5, 6, 6];
const excludeArray = [1, 6];

let exceptedArray = except(numberArray, excludeArray);
console.log(exceptedArray); // --> [ 2, 3, 4, 5 ]
