/*
    Functions
    Are one of the fundamental block of JS, it is a set of statements
    that performs a task or calculate a value.
*/
// personName is a parameter of this function.
function greet(personName) {
  /*
    Inside curly braces is what we refer as the body of the function,
    and is were we add all the statements to define some kind of logic
    in our application.
  */
  console.log("Hello " + personName);
} // When declaring a function we dont need a ';' at the end.

// Calling function
greet("Bauti"); // Here "Bauti" is an argument to the greet function.

/*
  The difference between a Parameter and an Argument.
  A Parameter is what we have at the time of declaration of the 
    function.
  But the argument is the actual value we supply for that 
    function.
*/
