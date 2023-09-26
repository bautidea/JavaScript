function Circle2(radius) {
  this.radius = radius;
}

Circle2.prototype.draw = function () {
  console.log('draw');
};

Circle2.prototype.duplicate = function () {
  console.log('duplicate');
};

// Lets imagine that in a future we are going to add another object (like an square object), and this
// new object should have a '.duplicate()' method with the same implementation.
// We dont want to repeat the implementation in the prototype of this object
// *  function Square ()  {}
//
// *  Square.prototype.duplicate = function () { console.log('duplicate') }
// Instead we want to use inheritance.
// We could create an object for which Circle and Square can inherit from.
// For example we can define Shape() object and put this method in it, and then have Square() and Circle()
// inherit from the Shape() object.

function Shape() {
  this.shapeFunction = function () {
    console.log('Shape Function');
  };
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle(radius) {
  this.radius = radius;
}

// In Js we have a method for creating an object with a given prototype.
// 'Object.create()' - The argument of this method is the object to use as a prototype.
//      So we pass 'Shape.prototype' - the object that inherits from all objects created by Shape.
// Now all we have to do is to use this object as the prototype for our Circle Object
console.log(Object.create(Shape.prototype)); // --> Shape {}

console.log(Circle.prototype); // --> Circle {}

// So we reset the Circle.prototype
Circle.prototype = Object.create(Shape.prototype);

console.log(Circle.prototype); // --> Shape {}
// * We dont have to worry about the 'Shape' in 'Circle.prototype'
// This doesnt mean that is the Shape object, this still is a Circle object, what we are seeing is
// the parent for that Object.

Circle.prototype.draw = function () {
  console.log('draw');
};

const sh = new Shape();
const cr = new Circle(1);

// Now the circle object hast the draw method, and also has the duplicate method that inherits from
// Shape Object.
cr.draw(); // --> draw
cr.duplicate(); // --> duplicate
