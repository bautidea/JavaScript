// Lets see how can we remove element from an array.
const numbers = [1, 2, 3, 4];
// When it comes to removing an element, we can remove it from
// - End.
// - Beggining.
// - Middle.

// * End
// This method will remove the last element on an array and will
// return it.
const last = numbers.pop();
console.log(last); // --> 4
console.log(numbers); // --> [ 1, 2, 3 ]

// * Beggining
// We use the 'unshift()' method.
// same as before it will return the removed elementt.
const first = numbers.shift();
console.log(first); // --> 1
console.log(numbers); // --> [ 2, 3 ]

// * Middle
// Creating a new list to work with.
const numbers2 = [1, 2, 3, 4];
// Here we pass as first arg the index of the element to remove,
// and as second we pass the amount of element we want to delete.
console.log(numbers2.splice(2, 2)); // --> [ 3, 4 ]
console.log(numbers2); // --> [ 1, 2 ]
