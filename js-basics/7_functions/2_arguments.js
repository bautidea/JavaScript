// We said that JS is a dynamic language, the type of
// a variable can change at run time.
// We have the same concept in the arguments of a function.
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2)); // --> 3
// In JS it deosnt matter that this function has 2 parameters,
// we can pass only one argument.
console.log(sum(2)); // --> NaN === (1 + Undefined)
console.log(sum()); // --> NaN
// We can pass aditional arguments.
console.log(sum(1, 2, 3, 4)); // --> 3

// * But what if yoy want to have a varying number of parameters
// on a function.
// Every function in JS has a special object called argument
function substract(a, b) {
  console.log(arguments); // --> { [Iterator]  0: 4, 1: 3 }
  // The returned console.log is an object, the keys we have in this
  // object are the indexes of the arguments passed to the function
  return a - b;
}

substract(4, 3);

// If you want to have a function with a varying number of parameters
// to work with all the arguments that are passed to this function.
function varyingSum() {
  let total = 0;
  // We can use this loop to iterate over the arguments object.
  // We can loop it because it is a '.iterator' object.
  for (let value of arguments) total += value;

  return total;
}
console.log(varyingSum(1, 2, 3, 4)); // --> 10
