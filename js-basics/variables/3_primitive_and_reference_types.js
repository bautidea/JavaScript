/*  
    In js we have two types of variables:
        - Primitives / Value Types - String, Numbers, Booleans, undefined and null.
        - Reference Types - Object, Array, and Functions.
    In ES6 we also have the primitive type Symbol, we are going to see this type later
    on.
*/
let name = "Bauti"; // String literal.
let age = 30; // Number literal.
let isApproved = true; // Boolean literal.
let firstName; // Undefined.
let lastName = null; // We use null when we want to explicitly clear the value of a variable.

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
