// We have two new methods in modern JS called '.every()'. and
// '.some()'.
const numbers = [1, -1, 2, 3];

// * .every()
// The '.every()' method will run a callback function on every
// element in the array, as soon as it finds an element that
// doesnt match this criteria, its going to stop searching.
// Lets check if all elements in this array are positive
const allPositive = numbers.every(function (value) {
  return value > 0;
});

console.log(allPositive); // --> false.
// ! As soon as this function evaluates the -1 it stops.

// * .some()
// The 'some()' method is similar to the previous method, it will
// run a callback function on every element in the array, but it
// checks if we have at least one element in this array that matches
// the criteria.

const atLeastOnePositive = numbers.some(function (value) {
  return value > 0;
});

console.log(atLeastOnePositive); // --> true.
// ! This method also stops as soon as it find an element that
// ! matches the criteria described at the function.
