// A scope of a variable or constant determines where that variable
// is accessible.
// When we declare variables or constants with 'let' or 'const'
// their scope is limited to the block where they are defined.

function start() {
  // This wont be accesible ourside the function.
  const msg = 'hi';

  // Same happends with if statements.
  if (true) {
    const another = 'bye';
  }
  // * console.log(another);

  // Same concept in loops.
  // i is accessible only in this loop block.
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
// Because the scope of this constant is limited for to the block
// in which is defined, we cannot access this const outside
// of this function.
// * console.log(msg); // --> msg is not defined

// Same with variables that are inside an if statement.
// This should log 'bye'
// * start(); // --> another is not defined

// Also with variables inside a loop, we cannot acces them outside
// them.
// * start(); // --> 0, 1, 2, 3, 4, i is not defined

// We can difine a function and define the same variable that is being
// used in other function.
function stop() {
  const msg = 'bye';
  console.log(msg);
}
stop(); // --> bye

// But if the variable is defined outside of a function, the variable
// has a global scope, its accessible everywhere
const color = 'red';
function again() {
  console.log(color);
}
again(); // --> red

// If we define a new const with the same name as a global variable in the
// function, its going to change the variable value.
// Because local variables or constants, take precedence over global variables
// or constants.
function newColor() {
  const color = 'blue';
  console.log(color);
}
newColor(); // --> blue
console.log(color); // --> red

// ! In general we should avoid defining global variables / constans
// ! that is considered bad practice. Because they are accessible globaly
// ! and each function can accidentally change their value in the local scope,
// ! this could lead to bugs or issues in our apps.
