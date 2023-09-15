// We are going to see how to filter an array based on a search
// criteria.

// Lets say we want to filter only positive numbers,
// we can use the '.filter()' method.
const numbers = [1, -1, 2, 3];

// We need to pass a callback function, it has three parameters
// value, index, and array. I only care for the value, because im
// checking if value is positive.
// The method will loop through this array and execute the callback
// function for each element, if the element match the criteria
// it will add the element to a new array.
// The function returns an array.
const isPositive = numbers.filter(function (value) {
  return value >= 0;
});
console.log(isPositive); // --> [ 1, 2, 3 ]

// We can apply arrow function here, because we have a single line of code.
const isPositiveArr = numbers.filter((v) => v >= 0);
console.log(isPositiveArr); // --> [ 1, 2, 3 ]
