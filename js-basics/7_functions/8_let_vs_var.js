// There is another way of declaring variables besides let.
// Using the var keyword
// ! Avoid using var keyword.

// The first issue with var keyword, is that, when you declare a variable
// with var, its scope its not limited to the block in wich its defined,
// * its limited to the function in wich its defined.

// Before ES6, var was the only way to declare variables and constant.
// ES6 (2015): let, const => block-scoped
// var => function-scoped
function start() {
  // If we use var to declare a variable.
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  // By using var to declare the varible, now 'i' is accessible
  // outside the 'for' block.
  // In the last iteration 'i' becomes 5, and because 5 is not less
  // than 5 it termiantes the loop, and here we are displaying the
  // current value of 'i'
  console.log(i);
}
// We dont get the undefined error.
start(); // --> 0, 1, 2, 3, 4, 5

// The second issue is with global variables. When we use var to create a
// global variable, and attaches that global variable to the window object
// in browse
var color = 'red';
// In contrast if we use the let keyword to define global variables, that
// variable is not attached to the window object.
let age = 30;
// ! Its bad to attach a variable to the window object
// because window object is something central, theres only one instance of the
// window object, and if you are using a third-party library that has a variable
// with the same name, that variable can override your variable.
// ! avoid adding stuff to window object.

// * It happens the same thing when we declare a function.
// this function is technically a global function and is added to the window object,
// and that is bad practice.
// * We can prevent this by encapsulating functions in separate modules so they are not
// * added to the window object.
function sayHi() {
  console.log('hi');
}
