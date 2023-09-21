function countOcurrencesRed(array, searchElement) {
  // Applying reduction.
  const output = array.reduce((accumulator, currentValue) => {
    if (currentValue === searchElement) accumulator++;
    return accumulator;
  }, 0);

  return output;
}

const numbers = [1, 2, 3, 4, 1, 1, 6, 4];
const countRedu = countOcurrencesRed(numbers, 1);
console.log(countRedu);
