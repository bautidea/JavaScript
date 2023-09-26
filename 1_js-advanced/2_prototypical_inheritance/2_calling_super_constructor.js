//  Im going to add a parameter to the 'Shape()' constructor.
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Square(radius) {
  this.radius = radius;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.draw = function () {
  console.log('draw');
};

const sh = new Shape();
const cr = new Square(1);

// If we logg 'cr' on the console, we can only see the radius property, thers no color here
// and from the inheritance point of view, this 'cr' should have a color property.
// This should be initialize at the moment of creating a Circle object
console.log(cr); // --> Circle { radius: 1 }

// To do this we should modify the Circle constructor, and call the Shape constructor
function Circle2(radius, color) {
  // We dont want to use the 'new' operator here
  // * new Shape('red')
  // because this will create a new object and set the color property on that object,
  // we want to use an object that is referenced by 'this.'
  // We need to call to she 'Shape()' function, and set 'this.' to point to the new instance
  // of the Circle object.
  // We can use the '.call()' method, to call the Shape function, and pass as the first argument
  // the object to be used as the current object, we pass the instance of the Circle object
  // ! This is how we call the Super Constructor.
  Shape.call(this, color);

  this.radius = radius;
}

Circle2.prototype = Object.create(Shape.prototype);
Circle2.prototype.constructor = Circle2;

const cr2 = new Circle2(5, 'red');
console.log(cr2); // --> Circle2 { color: 'red', radius: 5 }
