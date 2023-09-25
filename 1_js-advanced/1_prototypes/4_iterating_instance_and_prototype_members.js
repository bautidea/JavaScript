// One thing to have in mind is that is doesnt matter when you change the prototype.
function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function () {
    console.log('move');
  };
}

// We can create an object first, and then modify the prototype.
const c2 = new Circle(1);

// Prototype members.
Circle.prototype.draw = function () {
  console.log('draw');
};

const c1 = new Circle(1);

// We can see that the draw method is available, because we are dealing with objects references,
// we have a sinlge object in memory, as soon as we modify that the changes are applied
// immediatly.
c2.draw(); // --> draw
