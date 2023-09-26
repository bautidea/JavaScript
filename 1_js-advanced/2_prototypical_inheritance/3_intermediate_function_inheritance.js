// We have setted up the inheritance chain properly
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle(radius, color) {
  Shape.call(this, color);

  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log('draw');
};

// Lets create another object that inherits from square.
function Square(size) {
  this.size = size;
}

// Reseting prototype chain.
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

const sq = new Square(5);
sq.duplicate(); // --> duplicate

// As we define multiple objects, we dont want to every time set the prototype chain
// for every new object, its a little bit noisy.
// So we can refactor the code, and put these two lines into a function that we can reuse.
// ! Intermediate Function Inheritance
function extend(Child, Parent) {
  // Note that the first letter of these parametars are uppercase, because we are expecting
  // them to be Constructor functions.
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// Lets create a new object using this function
function Triangle(size) {
  this.size = size;
}
// Reseting prototype
extend(Triangle, Shape);

const tri = new Triangle(8);

tri.duplicate(); // --> duplicate
