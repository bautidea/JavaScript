// We have two more loops than the ones we already seen, we use
// these loops to iterate over the properties of an object or
// elements in an array.
//  - For-In --> Used to iterate over the properties of an object.
//  - For-Of --> Used to iterate over the elements or items in an array.

// For-In
// These loops dont have three parts like for loops (initialExpression;
// condition; inclement), it is different, here we declare a variable,
// that will hold a different value in each loop, in a given object.
const person = {
  name: "Bauti",
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]);
}
// It not ideal to iterate over an array, instead of using For-In loops
// an ideal way to iterate over arrays is using a For-Of loop.
const colors = ["red", "green", "blue"];
// The loop variabe i, in each iteration, will be set to the index (not the value)
// of each element on the array, it will be i = 0...i = 1...i = 2.
// If we want to get value of the value in given index, we use the square brakcets
// notation.
for (let i in colors) {
  console.log(i, colors[i]);
}

// For-Of
// This loop is a newer way of iterating over arrays, its similar to the For-In loop,
// but instead of the 'In' keyword we use 'Of'.
// With this loop we dont have to acces an element using square breackets notation.
for (let color of colors) {
  console.log(color);
}
