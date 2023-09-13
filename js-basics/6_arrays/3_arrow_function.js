// In last lection we saw how to use the find method to search
// an element if the elements stored in an array are reference type.
const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
];

const course = courses.find(function (course) {
  return course.name === 'a';
});
console.log(course); // --> { id: 1, name: 'a'}

// ! In ES6 there is a shorter and a cleaner way to write the same code using 'arrow functions'.
// Whenever we want to pass a callback function or as an argument we can use this syntax.s
// Remove the 'function' keyword.
// And to separate the parameters from it's body we use a fat arrow '=>'.
// If function has a single line of code we can drop the '{}'.
const course1 = courses.find((course) => course.name === 'a'); // --> arrow function.
console.log(course1); // --> { id: 1, name: 'a'}
