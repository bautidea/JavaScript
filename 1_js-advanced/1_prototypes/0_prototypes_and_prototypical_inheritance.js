// inheritance is one of the core concepts of OOP, that enables an object
// to take on the properties and methods of another object.
// it makes easy to reuse code in differents parts of an application.
// Terms that we should be familiar with:
//  - Base / Super / Parent class - Object from which we inherit the properties and methods.
//  - Derived / Sub / Child class - Object that will inherit the properties and method from Parent object.
//  - IS-A - This refers to the inheritance relatinship.

// ! In Js we dont have classes, we only have objects
// So thats when prototypical inheritance comes into picture.
// Essentially, we have to types of inheritance
//  1. Classical
//  2. Prototypical

// * Prototype is essentially a parent of another object
// Every object in Js (except ONLY the root object) has a prototype or parents, and inherits all the members
// we find in its prorotype.
let x = {};
// This object has an propery called '__proto__', its faded because its deprecated, so we cant directly access it.
// Here x is linked to another object, which is it's prototype ('__proto__'). Every object that we create in JS
// directly or indirectly inherits from this object.
// * '__proto__' is the root of all objects in JS, and it doesnt have a prototype or parent.

// If we declare a new object, this new object will inherit all its properties and methods from the SAME
// '__proto__' object that is the prototype of the x object.
let y = {};

// Here both 'x' and 'y' objects are referencing the same '__proto__' Object, so we have a single instance of '__proto__'
// in memory
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)); // --> true

// ! Prototypical inheritance
// Even if our Object is empty (it doesnt have his own methods and properties) we can still access methods that are defined
// in '__proto__' object.
console.log(x.toString()); // --> [object Object]
// We can access this method because, when we access a property or a method on an object, JS engine 1st looks for that property
// or method on the Object itself ('x' in this case), if it cant find it, then it looks at the prototype (parent) of that object,
// again if it cant find it in the prototype object, it will look all the way up to the root object ('__proto__').

// So prototypicall inheritance then can be defined the next way
// * When accessing a property or a method on an object, JS engine walks up the prototype chain to find the target member.
// ! A prototype is just a regular object in memory. Every object has a prototype or a parent, EXCEPT the root object
