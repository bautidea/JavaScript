// In the next excercise im going to fix this function and implement error handling.
// Ill implement error handling because the element that we can pass to this function
// might not be an array.
function countOcurrences(array, searchElement) {
  // Handling error
  if (!Array.isArray(array)) throw new Error('Not an array');

  // Applying reduction.
  const output = array.reduce((accumulator, currentValue) => {
    if (currentValue === searchElement) accumulator++;
    return accumulator;
  }, 0);

  return output;
}

const numbers = [1, 2, 3, 4, 1, 1, 6, 4];
const countRedu = countOcurrences(numbers, 1);
console.log(countRedu);

try {
  const test = countOcurrences(true, 1);
  console.log(test);
} catch (e) {
  console.log(e); // --> [Error: Not an array]
}
