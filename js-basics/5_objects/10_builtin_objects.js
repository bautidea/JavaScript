// ! Math built-in object.
// To check math methods - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//  Example:
let randomNumber = Math.random(); // Random number between 0 to 1.
console.log(randomNumber);

let roundNumber = Math.round(1.568); // Round given number.
console.log(roundNumber); // --> 2

let maxNumber = Math.max(1, 5, 8, 2, 1, 5, 4); // Max of given numbers.
console.log(maxNumber); // --> 8

// ! String built-in object.
// To check string methods - https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
const message = "hi";
console.log(message.length);
// If we type 'message.' we can see all methods and propeties of a string object.
// * But string is a primitive type. These types of objects dont have propeties and methods.
// We can see properties and methods for a string type because in JS we have two kinds
// of strings.
// * String primitive
//      Is like the one we decalred above -->  const message = 'hi';
// * String object
//      So we have the constructor function 'String()' that we can use it to create
//      a new string object.
const another = new String("hi"); // Since String() is a constructor function, we have to use 'new'.

// if we look at the type of each constant.
console.log(typeof message); // --> string
console.log(typeof another); // --> object
// The first constant is a string primitive and the second is anobject.
// * When we use the dot notation with a string primitive
// Js engine internally wraps that variable with an 'String()' object.
// *        message.length === String('hi').length

// Examples:
const exampleMsg = "This is my first message";
console.log(exampleMsg.length); // --> 24
// This returns the number of characters in a string.
// Its usefull when we want to limit the amount of characters inside an input field.

console.log(exampleMsg[0]); // --> T
console.log(exampleMsg.includes("This")); // --> true
console.log(exampleMsg.startsWith("This")); // --> true
console.log(exampleMsg.startsWith("this")); // --> false

console.log(exampleMsg.indexOf("my")); // --> 8
// If we want to find of a given character or a string inside the given string.

console.log(exampleMsg.replace("my", "your")); // --> This is your first message

// Antoher useful method is '.trim()'. It trims all extra white spaces.
console.log("  Trimed   message  ".trim()); // --> Timed message

// * Another useful thing to have in mind is that we can scape special characters.
//  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String#notaci%C3%B3n_de_escape
console.log("Scaping special ' character"); // --> Scaping special ' character
console.log("Scaping special ' character".split(" ")); // --> [ 'Scaping', 'special',  '\'', 'character' ]
