/*  
    We use aritmetic operators for performing calculations.
*/
let x = 10;
let y = 5;

// 'x + y' is an expression. An expression is something that
//  produces a value.
console.log(x + y); // Adition operator.
console.log(x - y); // Subtraction.
console.log(x * y);
console.log(x / y);
console.log(x % y); // Remainder of devision.
console.log(x ** y); // Exponentiation.

// Increment (++) operator, depending on where we put the '+' sign,
// this operator will behave differently.

// If i put the increment operator before 'x', the value of this variable
// will be incremented by 1 first and then we will see that on the console.
console.log("Incremented first " + ++x);

// If the increment operator is after 'x', we will se x on the console first,
// and then the value of x will be incremented.
console.log("Incremented after " + x++);
console.log("Here already incremented " + x);

// Decrement (--) is similar.
console.log("Decremented first " + --x);
console.log("Decremented after " + x--);
console.log("Here already Decremented " + x);
