/*
  Object
  In JS and other programming languages is like an object in real life.
  An object has properties. When we are dealing with multiple related variables,
  we can put these variables inside an object.
*/
// These variables are part of a representation of a person.
let myName = "Bauti";
let myAge = 30;
/*
  Instead of declaring two variables, we can declare the person object. And instead of
  referencing these two variables we can just reference the person object, and make our
  code cleaner.
*/
let person = {
  // Between braces we add one or more key-value pairs.
  // keys are the properties of these objects.
  name: "Bauti",
  age: 30,
}; // '{}' is called object literal.
console.log(person);

// There are two ways to work with these properties.
// Suppose we want to change this persons name, we can do this in two ways.

// 1 - Dot Notation
person.name = "Jhon";
// We can use Dot Notation to read the value of a property.
console.log(person.name);

// 2 - Bracket Notation
person["name"] = "Marcio";
console.log(person["name"]);
