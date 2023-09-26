//  In the example of last lesson.
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

Circle.prototype.draw = function () {
  console.log('draw');
};

// ! We can access the constructors through the prototype property, in a dynamic way.
console.log(Circle.prototype.constructor); // --> [λ: Circle]

// So technically we can use the prototype property to create a new object
const cr2 = new Circle.prototype.constructor(10);
console.log(cr2); // --> Circle { radius: 10 }
console.log(cr2.constructor); // --> [λ: Circle]

// * These expressions are equivalent --> new Circle() = new Circle.prototype.constructor()
// We use the 'new Circle2()' form because is shorter and cleaner, but in some rare circumstances
// you may get the constructor function somewhere in your application, and dynamically create an object
// based on the constructor function

// ! Whenever we reset the prototype of an object, we should also reset the constructor
Circle.prototype = Object.create(Shape.prototype);

const sh = new Shape();
const cr = new Circle(1);

// Because when we changed the prototype inheritance the constructor property changed, we dont have the
// same constructor.
// This is returning the 'Shape()' function, not the 'Cirlce ()' function.
console.log(cr.constructor); // --> [λ: Shape]
console.log(Circle.prototype.constructor); // --> [λ: Shape]

// So with what we have now we can no longer create 'Circle' objects, based in its constructor in a dynamic
// way.
const crb = new Circle.prototype.constructor();
console.log(crb); // --> Shape { shapeFunction: [λ] }

// * To reset the constructor
Circle.prototype.constructor = Circle;

console.log(cr.constructor); // --> [λ: Circle]
console.log(Circle.prototype.constructor); // --> [λ: Circle]
