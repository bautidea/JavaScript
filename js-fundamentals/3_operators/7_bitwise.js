// We use decimalsystem to represent numbers, but in computers
// this number are stored as binary format (combination of 0s and 1s).
// 1 = 00000001 (seven 0 and one 1). Each digit is what we call a bit,
//              here we have 8-bit.
// 2 = 00000010
// Bitwise operators are similar to logical operators, but they work
// on the individual bits of a number.

// The single '|' represents a bitwise 'OR'
console.log(1 | 2); // 3.
// The result of this will look at each of the bits in each number,
// If either of the bits is one, the result will be 1, otherwise 0.
// Result = 00000011 (binary) = 3 (decimal)

// The single '&' represents a bitwise 'AND'.
console.log(1 & 2); // 0.
// Here, if both number are 1, 1 will be returned otherwise 0 will
// be returned.
// Result = 00000000 (binary) = 0 (decimal).

// An example of a use of bitwise operators. We want to implement
// and access control system. So the user can have 'Read', 'Write'
// 'Execute' permissions.
// We can use a byte of information, or 8-bits, to determine the
// kind of permission a user can have.
// Since we have 3 options we can ignore the first 5 bits, and
// use the three last to determine the users permission, eg:
// 00000100 -> Read.
// 00000010 -> Write.
// 00000001 -> Execute.
const readPermission = 4; // Decimal representation on 00000100.
const writePermision = 2;
const executePermission = 1;
let myPermission = 0;

myPermission = myPermission | readPermission | writePermision;

// Declaring a variable using a ternary operator, if this evaluates
// to true it means i have readPermission.
let message = myPermission & readPermission ? "yes" : "no";
console.log(message, "read permission");

myPermission = 0;
myPermission = myPermission | writePermision;
message = myPermission & readPermission ? "yes" : "no";
console.log(message, "read permission");
// With the bitwise 'OR' operator, we can add permissions and with
// the bitwise 'AND' operator we can check to see if we have a given
// permission.
