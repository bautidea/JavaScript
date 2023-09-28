// In Js we have two ways of defining a function

// Function declaration syntax
function name(params) {
  // ...
}

// Function Expression
const functionName = function (params) {
  // ...
};

// There is a critical difference between a Function Declaration and a Function Expression in JS
// Function declarations are hoisted --> They are raised to the top of the code, it doesnt matter where
//   they are declared.
// Function Expressions are NOT hoisted --> So if we call a function declared this way, we need to call it
//   after it was defined. Because we are dealing with a variable that still is not initialized.

// When it comes to classes we can define them using a Declaration or a Expression syntax

// Class Declaration.
class name {
  // ...
}

// Class Expression.
const className = class {
  // ...
};

// * Unlike functions, class declaration and class expressions are NOT HOISTED, so we cannot create an object
// * before we initialize the class, we need to first initiate the class.
