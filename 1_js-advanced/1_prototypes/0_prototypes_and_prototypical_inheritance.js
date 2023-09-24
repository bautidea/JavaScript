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
// Here x is linked to another object, which is it's prototype ('Object {}'). Every object that we create in JS
// directly or indirectly inherits from this object.
// * '__proto__' is the root of all objects in JS, and it doesnt have a prototype or parent.

// If we declare a new object, this new object will inherit all its properties and methods from the SAME
// 'Object {}' object that is the prototype of the x object.
let y = {};

// Here both 'x' and 'y' objects are referencing the same 'Object {}' Object, so we have a single instance of 'Object {}'
// in memory
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)); // --> true

// ! Prototypical inheritance
// Even if our Object is empty (it doesnt have his own methods and properties) we can still access methods that are defined
// in prototype (parent) 'Object {}' object.
console.log(x.toString()); // --> [object Object]
// We can access this method because, when we access a property or a method on an object, JS engine 1st looks for that property
// or method on the Object itself ('x' in this case), if it cant find it, then it looks at the prototype (parent) of that object,
// again if it cant find it in the prototype object, it will look all the way up to the root object.

// So prototypicall inheritance then can be defined the next way
// * When accessing a property or a method on an object, JS engine walks up the prototype chain to find the target member.
// * A prototype is just a regular object in memory. Every object has a prototype or a parent, EXCEPT the root object

// ! Multilevel inheritance.
// Arrays also have a prototype ('Array []'), which at the same thime 'Array []' inherits from 'Object {}',
// So in memory we have the next thing,
// *    myArray <-- Array [] <-- Object {}
// 'myArray' derives from 'Array []', and 'Array []' derives from 'Object {}'
// * This is what we call Multilevel inheritance
let myArray = [];
console.log(Array.__proto__);

// What about the objects created using a Constructor Function.
function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log('drawii');
  };
}

// Everytime we call the circle constructor to create a new circle object this 'Circle' constructor will create a new object
// and set it's prototype property to 'constructor: f Cicle(radius)'
const circle = new Circle(10);

// * Multiple Objects created by a given cosntructor will have the same prototype.
// So all circle objects created by 'Circle' constructor will have the same prototype, and similarily, all arrays created by the
// Array constructor wil have the same prototype.
