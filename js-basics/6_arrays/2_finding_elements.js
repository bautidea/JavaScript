// Lets see how we can find elements on an array.
// * Finding elements depends if we are storing primitive
// * or reference types in an array.

// * Primitives types
const numbers = [1, 2, 3, 1, 4];

// With this method we passed a element we are looking for
// and if this element exist on the array it will return its
// index, if it doesnt exist, returns '-1'.
console.log(numbers.indexOf(3)); // --> 2
console.log(numbers.indexOf('a')); // --> -1
// Element type matters
console.log(numbers.indexOf('3')); // --> -1

// Similar we have this next method, it returns the last index
// of the given element or -1 if it doesnt exist.
console.log(numbers.lastIndexOf(1)); // --> 3

// So to see if a given element exist in an array we can do this.
console.log(numbers.indexOf(1) !== -1); // -->true
// This method is old, we have a better way
// it simply returns true if element in array.
console.log(numbers.includes(1)); // --> true

// ! All three methods have a second parameter wich is optional
// 'starting index', here im starting from position 2.
console.log(numbers.indexOf(1)); // --> 0
console.log(numbers.indexOf(1, 2)); // --> 3

// * Reference types
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#find_an_object_in_an_array_by_one_of_its_properties
const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
];

// Lets see if we have a course with the a name in this aray.
// What we just saw it doesnt work.
console.log(courses.includes({ id: 1, name: 'a' })); // --> false
// We get false because these two objects (the one that we are passing and the
// one we have in the array) are two different objects, they have two different
// references and locations in memory.
// So if we have an array with reference types we need to use the '.find()' method
// This function stops its execution once it returns a true. If there is no element
// that matches our criteria it will return undefined.

// We pass a function, that is called 'predicate' or a 'callback' function, because
// this function is called back as part of finding an element on this array.
// 'course' is the object in an a array that we are going to itereate over.
const course = courses.find(function (course) {
  return course.name == 'a';
});
console.log(course); // --> { id: 1, name: 'a'}
// With a course that is not in the array.
const course2 = courses.find(function (course) {
  return course.name == 'x';
});
console.log(course2); // --> undefined

// * There is an exact same method to return the index.
const course3 = courses.findIndex(function (course) {
  return course.name == 'b';
});
console.log(course3); // --> 1
