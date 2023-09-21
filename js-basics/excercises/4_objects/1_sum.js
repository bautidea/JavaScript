// In this excercise im going to create a function that will sum
// all the elements passed as input.
// The number of inputs can vary.

function sum(...args) {
  // checking if 1st element is an array.
  const isArray = Array.isArray(args[0]);

  if (isArray) args = [...args[0]];

  return args.reduce((acum, current) => acum + current);
}

console.log(sum([1, 2, 3, 4]));
