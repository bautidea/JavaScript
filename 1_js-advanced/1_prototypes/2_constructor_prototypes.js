// * Constructors also have a prototype property

function Cirlce(radius) {
  this.raidus = radius;
}
const circle = new Circle(10);

// In Js Functions are objects, so they have properties and methods.
// We have Circle.prototype property that returnt the object that will be used
// as the parent for object created by 'Circle' constructor.
console.log(Circle.prototype); // --> Circle {}
// It the same as
console.log(Object.getPrototypeOf(circle)); // --> Circle {}

// * So '.prototype' will return us the prototype of all elements created by that object

// So if we create an empty object its prototype will be the constructor function
// 'Object {}'.
let obj = {};
// When we use the Object Literal Syntax, under the hood its translated to --> new Object()
// so thats our constructor.
console.log(Object.getPrototypeOf(obj)); // --> {}

// Now this constructor ('Object()') has a prototype property 'Object.prototype' this will return
// the object that will be used as the prototype for all object created by the 'Object()' constructor.
console.log(Object.prototype); // --> {}

// ! So both of these are exactly the same
let equal = Object.getPrototypeOf(obj) === Object.prototype;
console.log(equal); // --> true

// Another example,
// When we use array literal, under the hood array constructor will be called 'new Array()'
let array = [];
console.log(Object.getPrototypeOf(array)); // --> []
console.log(Array.prototype); // --> []

let equalArray = Object.getPrototypeOf(array) === Array.prototype;
console.log(equalArray); // --> true
