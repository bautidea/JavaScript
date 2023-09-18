// In this excercise im going to create a function that will count
// the ocurrences of an input element.
// This function will take an array and a search element, and will
// return the times the search element is on the given array.

const numbers = [1, 2, 3, 4, 1, 1, 6, 4];

// First im going to create a function, to do this
function countOcurrences(array, searchElement) {
  let count = 0;
  for (element of array) {
    if (element == searchElement) count++;
  }

  return count;
}

const count = countOcurrences(numbers, 1);
console.log(count);

// Now im implementing the reduce method on the function.
function countOcurrencesRed(array, searchElement) {
  // Applying reduction.
  const output = array.reduce((accumulator, currentValue) => {
    if (currentValue === searchElement) return accumulator++;
    return accumulator;
  }, 0);

  return output;
}

const countRedu = countOcurrencesRed(numbers, 1);
console.log(countRedu);
