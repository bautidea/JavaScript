// Every object in Js has a property called 'Constructor', that references
// the function that was used to construct or create that object.

/**
 * * Factory function.
 */
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Factory drawing...");
    },
  };
}

const factoryCircle = createCircle(2);

/**
 * * Construct function.
 */
function Circle(radius) {
  this.raidus = radius;
  this.draw = function () {
    console.log("Construct drawing...");
  };
}

const constructorCirlce = new Circle(4);

// Lets look at the constructor property of each function.
console.log(factoryCircle.constructor); // --> f Object - This is an built-in constructor function.
console.log(constructorCirlce.constructor); // --> f Circle - This return the Circle function that we used to create this object.

// When we create an object using the object literal syntax, internally the JS engine
// uses this constructor function.

let x = {}; // === let x = new Object();

// Because we used the Object Literal Syntax, internally it was created using the object constructor
// function.
// In Js we have a few other built in constructors.

new String(); // But we usually use String Literals= '', "", ``.
new Boolean(); // Boolean literals = ture or false.
new Number(); // Number literals = 1, 2, 3, ...

/**
 * ! Every object has a constructor property, and that references the function that was used
 * ! to create an object.
 */
