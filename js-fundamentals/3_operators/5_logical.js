// Logical operators are used to make decision, based in multiple
// conditions. In JS we have three types:
//  -   Logical AND (&&).
//  Returns true if both operands are true.
console.log(true && true); // true.
console.log(false && true); // false.
console.log(false && false); // false.

console.log("AND operator");
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

//  -   Logical OR (||).
// Return true if one of the operands is true.
console.log("OR operator");
highIncome = true;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan);

//  -   Logical NOT (!).
// Whatever we give to this operator it will give us the opposite,
// eg: if eligibleForLoan = true then !eligibleForLoan = false.
// Because if someone is eligible for a loan, we dont want to
// refuse their application.
console.log("NOT operator");
highIncome = false;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);
