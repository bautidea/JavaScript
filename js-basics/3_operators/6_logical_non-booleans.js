// In JS we can use logical operators with non boolean values.
// The result of a logical expression is not necessarily a true
// or false, it depends on the value of the operands we have.

// In this case the second operand is true, thats why we get true.
console.log(false || true); // true.

// Here the second is a string, thats why we get a string back.
console.log(false || "Bauti"); // Bauti.

console.log(false || 1); // 1.

// When JS engine evalue this expression, it looks at each operand,
// if that operand is either true or false it will try to interpret it
// as 'Truthy' or 'Falsey'.
// Falsy (false), these values are, undefined, null, 0 (number 0),
//  false (boolean false), '' (empty string), Nan (Not a Number).
//  if we use any of these values in a logical expression, they will
//  be treated as a flasy value, which is kinda like a boolean false
//  (but not exactly the same).

// ANYTHING that is not falsy is 'Truthy'.
// In this example we are getting 'Bauti' becuase its not an empty
//  string, this operand has 4 characters. With 'OR' operator,
//  as long as one of the operands is true it will return true.
console.log(false || "Bauti"); // Bauti.
// This will return 1, because for the 'OR' operator, as soon as
// one operand is true it will stop its execution.
// This is called 'Short-Circuiting'.
console.log(false || 1 || 2); // 1.

// Example of this. Here we are evaluating if a user has selected a color.
// In this case the user selected red.
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor);

// Imagine that the user didnt selected a color.
userColor = "";
currentColor = userColor || defaultColor;
console.log(currentColor);
