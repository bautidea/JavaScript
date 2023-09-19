// Defining a function.
// In js there are two ways of declaring a function.

// * Function declarations
function walk() {
  console.log('walk');
}

// * Function expression
// Same as declaring a variable.
// We have an Anonymous Function Expression, when the name is
// not passed.
let run = function () {
  console.log('run');
};
// We call the anonymous function like we call a function
run();

// Named Function Expression
let runing = function runing() {
  console.log('run');
};
