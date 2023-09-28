// In classical OOP, we have two types of methods,
//  - Instance Methods --> These methods are available on an instance of the class, which is an object.
//  - Static Methods --> Are available on the class itself, not the object instance. We often use them to
//                       create utility that are not specific to a given object.
//                        * To call static methods, we dont have to create an instance of the class.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  // * Instance Method
  // This draw method is specific to the Cirlce object.
  draw() {
    console.log('draw');
  }

  // * Static Method
  // This class is not tied to a particular Circle object.
  // To make it static we use the 'static' keyword on the font, with this, this method will no longer be
  // available on a circle object.
  // But is accessible on the class reference
  static parse(str) {
    // Assuming tht str is a valid JSON object, and it has a 'radius' property, we can get that property
    // store it on a const.
    const radius = JSON.parse(str).radius;
    // And then new up (create) a Circle object with tht radius.
    return new Circle(radius);
    // ! With this method we dont have to create a circle object first
    // (because we dont have a circle object to start with, we have a JSON string)
  }
}

// If we create a circle object here
const c = new Circle(2);
console.log(c); // --> Circle { radius: 2 }
// * c.parse(); // --> c.parse is not a function
// Parse is accessible on the class reference.
Circle.parse;

// So with static methods we are not working with a particular circle object, we are working with the class itself.
// To create a new circle object using the Static Method
const circle = Circle.parse('{ "radius": 5 }');
console.log(circle); // --> Circle { radius: 5 }

// ! We use Static methods to create functions that are not tied to a particular object.
// For example we have the Math built-in object, that give us a bounch of utility methods
// we can use the dot notation to ispect them --> 'Math.'
console.log(Math.max(1, 2, 3)); // --> 3
// Here we are not newing up the Math class --> 'new Math()'.
// If we would to define a class like this
class Math2 {
  static abs(value) {
    // ...
  }

  static sum(value1, value2) {
    return value1 + value2;
  }
}

console.log(Math2.sum(1, 5)); // --> 6
