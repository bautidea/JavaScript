/**
 * ! In JS Functions are Objects.
 */

// This function is an object.
function Cirlce(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Cirlce(4);

console.log(Cirlce.name); // Name of function
console.log(Cirlce.lenght); // Number of arguments
console.log(Cirlce.constructor); // Function that was used to create the object.

// When we declare a function, internally JS engine will use the 'Function()'
// constructor to create the object.
const funCirlce = new Function(
  "radius",
  `
    this.radius = radius;
      this.draw = function () {
        console.log("draw");
      };
  `
);

const circle = new funCirlce(5);

console.log(circle);

// A few methods that are available in our functions.

// 'call' - To call a function, the arguments are:
//  The first is 'this', passing an empty object and 'this' will reference, the
//    empty object we passed.
//  After that, we add our arguments explicitly (radius = 1).
Cirlce.call({}, 2); // === const another = new Cirlce(2).

// 'apply' - exactly like the call method, we can can call a function,
// but instead of passing all the arguments explicitly, we pass them
// as an array.
Circle.apply({}, [2]);
