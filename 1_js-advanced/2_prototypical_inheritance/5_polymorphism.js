// extend function - Intermediate Function Ineritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// Shape constructor
function Shape() {}

// 'duplicate' method on Shape prototype
Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

// Circle constructor.
function Circle() {}

// Circle inherit form the shape.
extend(Circle, Shape);

// Method overriding
Circle.prototype.duplicate = function () {
  console.log('duplicate circle');
};

const c = new Circle();

// ! Polymorphsim
// It means many forms.
// Continuing from the example from last lecture.
function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log('duplicate square');
};
//  Basically now we have a simply hierarchy, on the top we have the Shape object,
// and we have two child objects Cirlce and Shape, each object will provide a different
// implementation of the '.duplicate()' method.
// * So we have many implementations or forms of the 'duplicate' method - polymorphism

// Imagine we have an array of shape objects
const shapeArray = [new Circle(), new Square()];
// Iterating over array, now depending on the type of the shape object a different implementation
// or a different form of the duplicate method will be called.
for (let shape of shapeArray) shape.duplicate(); // --> duplicate circle // --> duplicate square
// In OOP, we encapsulate our variables and functions into objects.
// When we encapsulate variables and functions into objects, and use inheritance, we can execute
// many forms of a method, using a single line of code.
