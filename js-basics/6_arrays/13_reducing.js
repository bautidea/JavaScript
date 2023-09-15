// Lets say we want to calculate the sum of all the numbes in an array
// this can be the same as calculating the total cost of all the items
// in a shopping cart.
const numbers = [1, -1, 2, 3];

// All arays have the '.reduce()' method, and with it we can reduce all
// the element in an array into a single value (a value, a string, a object).
// This method callback function takes two argument, an accumulator and current value,
// - Accumulator is like a variable that we initialize to store the sum of elements.
// - currentValue in each execution this parameter will be set to one element in
//   the array.
// As a second argument to the '.reduce()' method we pass the initial value for the
// accumulator. If we dont pass this argument, accumulator will take the 1st element
// of the array as value.
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); // --> 5
