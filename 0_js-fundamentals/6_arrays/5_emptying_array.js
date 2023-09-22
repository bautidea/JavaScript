// To remove all elements on an array there are a few differents
// solutions.

// * Solution 1
// We can assing the array to a new variable, for this solution to be
// used we need to declare the array using 'let' keyword.
let numbers = [1, 2, 3, 4, 5];
numbers = [];
// This solution works if you do not have multiple references to the
// original array, like
let numbers2 = [1, 2, 3, 4, 5];
let another2 = numbers2;
numbers2 = [];

console.log(numbers2); // --> []
console.log(another2); // -->  [1, 2, 3, 4, 5]
// Because the array stills in memory.

// * Solution 2
// If you have references to the original array, you can use this other solution.
// We can set the length propery to 0, and this will truncate the array.
let numbers3 = [1, 2, 3, 4, 5];
let another3 = numbers;

numbers3.length = 0;
// It doesnt matter how many references you have to that array.
console.log(numbers3); // --> []
console.log(another3); // -->  []

// * Solution 3
// We can use the '.splice()' method
let numbers4 = [1, 2, 3, 4, 5];
let another4 = numbers4;

numbers4.splice(0, numbers4.length);
console.log(numbers3); // --> []
console.log(another3); // -->  []

// * Solution 4
// Use '.pop()' method. We can put it in a loop, and keep calling this method.
// ! This solution is not recommended.
let numbers5 = [1, 2, 3, 4, 5];
let another5 = numbers5;

while (numbers5.length > 0) numbers5.pop();

console.log(numbers5); // --> []
console.log(another5); // -->  []
