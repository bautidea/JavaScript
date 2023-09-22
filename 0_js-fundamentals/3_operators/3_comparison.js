/*
    We use comparison operators to compare variables values
    with something else.
*/
let x = 1;
// A result of an expression, that includes a comparison operator is a boolean.
// Relational.
console.log(x > 0);
console.log(x >= 0);

// Comparison
console.log(x != 0);
// In Js we have two ways of indicating the equality of a variable, '==' and '==='
// The difference is that:
// This is referred as a Strict Equality operator.
console.log(x === "1");
//  - It ensures that both the values we have on the side of this operator, have
//      the same type and the same value.
//  - This operator is more precise and accurate.

// This is called Lose Equality operator.
console.log(x == "1");
//  - This operator behaves differently, it does not care about the types, if types dont
//      match, it will convert the type of the right value to match the left one.
console.log("1" == "1");
// This operator transforms the value on the right based on the type of the left value.
//  eg, here True = 1 , false = 0.It transforms 0 or 1 into boolean.
console.log(true == "1"); // Returns True
console.log(false == "1"); // Returns False
