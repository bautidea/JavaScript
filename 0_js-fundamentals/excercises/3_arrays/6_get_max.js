// Im going to create a function that will take an array,
// and will return the largest number in the array.

const numbers = [1, 2, 3, 4];

function getMax(array) {
  // If array is empty.
  if (array.lenght === 0) return undefined;

  // If not.
  let maxNum = array[0];

  for (element of array) {
    if (maxNum < element) maxNum = element;
  }

  return maxNum;
}

const max = getMax(numbers);
console.log(max);

// Now im going to used the reduce method
function getMaxRed(array) {
  // If array is empty.
  if (array.lenght === 0) return undefined;

  return (maxNum = array.reduce((accumulator, current) => {
    return accumulator < current ? current : accumulator;
  }));
}

const maxRed = getMaxRed(numbers);
console.log(maxRed);
