// * filter()
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

// * map()
// Another powerful method that we have in Js is the '.map()' method
// with it we can match each item in the array to something else.
// Using the positive the positive elements we want to construct some
// HTML markup, using the elements in this array.
// This method can take a callback function like the '.filter()' method
// as input, we can pass a value, index and array.
// In this case im only working with the value.
const items = isPositive.map((n) => '<li>' + n + '</li>');
console.log(items); // --> [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

// This returns an array of strings, we can use the '.join()' method
// to join the elements of this array and create a string as markup
// that will display all numbers using bullet points.
const html = '<ul>' + items.join('') + '</ul>';
console.log(html); // --> <li>1</li><li>2</li><li>3</li>

// ! We can also map element in an array to objects.
const objItems = isPositive.map((n) => {
  return { value: n };
});
console.log(objItems); // --> [ { value: 1 }, { value: 2 }, { value: 3 } ]

// We saw earlier that in a arrow function if you have a single line of
// code and you're returning a value, you can exclude the return keyword
// as well as the curly braces, like this
const objItems2 = isPositive.map((n) => {
  value: n;
});
// But if we do this when we want to return an object we get the next output
console.log(objItems2); // --> [ undefined, undefined, undefined ]

// The reason for this is that by default the curly braces that are defining
// the object, represent a code block, so when JS engine tries to pharse
// arrow function it thinks that we are defining a code block not an object.
// ! if we are returning an object we should put it in parentheses.
const objItems3 = isPositive.map((n) => ({ value: n }));

console.log(objItems3); // --> [ { value: 1 }, { value: 2 }, { value: 3 } ]

// ! Both '.filter()' and '.map()' methods return a new array, they dont
// modify the original array.
// These methods are chainable, we can call them one after another.
// We chain methods like this in JS
/**
 * * numbers
 * *   .filter((v) => v >= 0)]
 * *   .map((n) => ({ value: n }));
 */
