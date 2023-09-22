const numbers = [2, 3, 1];

//  To sort arrays we have the method '.sort()', it converts each element
// into a string and then sorts the elements in the array.
numbers.sort();
console.log(numbers); // --> [ 1, 2, 3 ]
// We can reverse the order of elements too.
numbers.reverse();
console.log(numbers); // --> [ 3, 2, 1 ]
// * These two methods are useful when we have numbers and string.
// ! But when you have objects it doesnt work as default
const courses = [
  { id: 2, name: 'Node.js' },
  { id: 1, name: 'JavaScript.js' },
];

// If we sort the array as it is, nothing is going to happend.
courses.sort();
console.log(courses); // --> [ { id:2, name: 'Node.js' }, { id: 1, name: 'JavaScript.js' } ]
// To fix this problem, we should pass a function to '.sort()',
// this function is used for comparison.
// * When we call the '.sort()', this method gets two objects
// in this array, and compares them. If they are in the right order
// it will skip to the next element, otherwise its going to rearrange
// them.
courses.sort(function (a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0
  if (a.id < b.id) return -1;
  if (a.id > b.id) return 1;
  return 0;
});
console.log(courses); // --> [ { id: 1, name: 'JavaScript.js' }, { id:2, name: 'Node.js' } ]

// Suppose we want to arrange based on strings instead of numbers,
// for that we use the same function, but we have to have in mind
// that letters are represented by ascii code, so uppercase letters
// have different values than lowercase, so the best way to deal with that
// is to take everything to lowercase or uppercase.
courses.sort(function (a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0

  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
