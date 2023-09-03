// When working with copmplex expressions, one thing that we have
// to know is the 'Precedence of Operators'.
// In the next expression, first 3 * 4 gets evaluated first and then
// the addition of 2.
let x = 2 + 3 * 4;
console.log(x); // 14.

// All operators seen in this section have their own precedence, it's
// really hard to memorize which operators have higher or lower precedence.
// So when working with complex expressions, we can use parenthesis to
// determine how operators will work.
x = (2 + 3) * 4; // 20.
console.log(x);
