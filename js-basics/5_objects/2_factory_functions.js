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

// Factory function.
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
