// In the previous file we created an object usign Object Literal Syntax,
// but there's a problem here.
// Imagine if we wanted to create two cirlce objects. Like this:
let circle = {
  radius: 1,
  location: {
    x: 2,
    y: 3,
  },
  move: function () {
    console.log("Moving circle...");
  },
};

let circle2 = {
  radius: 1,
  location: {
    x: 2,
    y: 3,
  },
  move: function () {
    console.log("Moving circle...");
  },
};

/**
 * ! the problem we have here is that we have duplicated the implementation
 * ! of draw method.
 * * If our objects have logic we need different ways to create objects.
 * Thats when we use
 * ! Factory or constructor functions.
 */

/**
 * ! Factory function.
 * * We use camer notation to declare factory functions.
 */
// Whenever we call this function we'll get a circle object.
function createCircle(radius) {
  return {
    // In modern JS if our key and value are the same, we can declare a property like this.
    radius, // Same as radius : radius

    // Instead of declaring the function as a key : value pair, we can define it like this
    draw() {
      console.log("Drawing circle...");
    },
  };
}

// We call this function to create a circle object.
let cirlce3 = createCircle(5);
console.log(cirlce3);
cirlce3.draw();

/**
 * ! Constructor function.
 * The function of this is to construct or create an object.
 * * The naming convention for constructor function is different.
 * * We should use Pascal notation by convention.
 */

// Note that the function name is 'Circle' not 'CreateCircle'.
function Circle(radius) {
  // Instead of returning an object we are going to initialize an object by using the
  // 'THIS' keyword.
  // Its a reference to the object that is executing this piece of code.
  // 'this' --> references an empty object.
  this.raidus = radius; // Setting the propery 'radius'.
  this.draw = function () {
    console.log("drawing through construct function.");
  };
}

// Creating the Cirlce object.
// When we use the 'new' operator here, three things happens:
// 1 - Creates an empty JS object. like --> const x = {};
// 2 - It will set 'this' to point this new empty object.
// 3 - It will return this new object from 'Circle' function. like --> 'return'
//     thats why, we dont have to explicitly add the 'return' statement in a
//     constructor function.
const circleConstructor = new Circle(15);

console.log(circleConstructor);
circleConstructor.draw();
