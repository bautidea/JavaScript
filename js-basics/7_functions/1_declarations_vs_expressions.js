// Defining a function.
// In js there are two ways of declaring a function.

// The key difference between these two functions, is that we can call
// the function defined using 'Function declaration' syntax, before
// it is defined. Same as a variable.
// The reason for this is because when our JS engine moves all the
// functions declarations to the top.
// * This is called Hoisting, the process of moving functions declarations
// * to the top of the file. This is done automatically by the Js engine.

walk(); // --> walk

// * Function declarations
function walk() {
  console.log('walk');
}

// * Function expression
// Same as declaring a variable.

// * run(); // --> Cannot access 'run' before initialization

// We have an Anonymous Function Expression, when the name is
// not passed.
let run = function () {
  console.log('run');
};
// We call the anonymous function like we call a function
run(); // --> run

// Named Function Expression
let runing = function runing() {
  console.log('run');
};
