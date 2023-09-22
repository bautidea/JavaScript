// In modern JS, if you want to have a function with a varying
// number of parameters you can use the 'Rest Operator'
// * '...args' is called the Rest Operator.
// Its similar to the spread (...) operator, with it we can spread
// an array, which means take its individual elements.
// But when we use this in the parameter of a function you refer
// to this as the Rest Operator
function funRest(...args) {
  console.log(args);
}

console.log(funRest(1, 2, 3, 4)); // --> [ 1, 2, 3, 4 ]
// We can see that args is an array.

// So when we apply the rest operator to a parameter of a function,
// we can pass a varying number of arguments, and the rest operator
// will take all of them and put them on a array.
// If for example we would like to get the sum of all these elements.
function sum(discount, ...prices) {
  // Since args is an array.
  const total = prices.reduce((acc, curr) => acc + curr);
  return total * (1 - discount);
}
console.log(sum(0.1, 20, 30, 50)); // --> 90
// ! We cannot have a parameter after the Rest Operator.
// This is the reason becouse it is called rest, we can have 0 or more
// parameters before, it indicates 'Rest of the parameters', in the example
// we have the argument 'discount' and then the 'rest' of the parameters (prices).
