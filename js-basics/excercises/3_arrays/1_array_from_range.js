// In this excercise im writing a function that takes two numbers
// as parameters a minimum and a maximum, it will return an array
// with the range of numbers from the min to the max.
function arrayFromRange(min, max) {
  if (max > min) {
    const endarray = [];

    for (let i = min; i <= max; i++) {
      endarray.push(i);
    }

    return endarray;
  }

  return 'Incorrect range';
}

const numbers = arrayFromRange(-5, 10);
console.log(numbers);
