// The last lecture i learned how to combine and slice arrays using the
// concat and the slice method. There is another way of achieving the same
// thing using the '...' operator in ES6.
// Its cleaner and more flexible.
const first = [1, 2, 3];
const second = [4, 5, 6];

// * When we spread an array all its elements are spread individually,
// so basically we are declaring a new array and adding the individual
// elements of the first and second arrays.
const combined = [...first, ...second];
console.log(combined); // --> [ 1, 2, 3, 4, 5, 6 ]

// We can also add elements in between, after of before.
const combined2 = ['a', ...first, 'b', ...second, 'c'];
console.log(combined2); // --> [ 'a', 1, 2, 3, 'b', 4, 5, 6, 'c' ]

// We can also copy the elements of an array into a new one using the spread operator
const copy = [...combined];
console.log(combined); // --> [ 1, 2, 3, 4, 5, 6 ]
