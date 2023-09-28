// In ES6 or ES2015, there is a new way to create objects and implement inheritance, thats using classes,
// but these classes are not like classes in C# o Java, they are functions.
function Circle2(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log('draw');
  };
}

// Lets see hwo we can rewrite this code using ES6 classes.
// We start with the class key word, and then the name of the class.
class Circle {
  // * Body of the class (everything inside the curly braces).
  // In the body we can define methods and properties.

  // One special method is 'constructor' --> // * We use this to initialize objects just like a constructor function
  constructor(radius) {
    this.radius = radius;

    // So it doesnt end in prototype.
    this.move = function () {
      console.log('move');
    };
  }

  // We just add the name of the method.
  draw() {
    console.log('draw');
  }
}

// We create Object as before.
const c = new Circle(1);

// NOTE that we dont have the draw method in the object, so
// * All methods that we have in the body of ES6 classes will end up at the prototype of the cirlce object.
// * If you dont want a method to end up in the prototype then you have to define it in the constructor
console.log(c); // --> Circle { radius: 1, move: [λ] }

// As i said at the beggining these classes are functions.
console.log(typeof Circle); // --> function
