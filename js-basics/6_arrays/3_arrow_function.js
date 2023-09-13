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

// ! In ES6 there is a shorter and a cleaner way to write the same code using arrow function
