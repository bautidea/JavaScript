// Lets see what we have here.
// extend function - Intermediate Function Ineritance
function extend(Child, Parent) {
  // Note that the first letter of these parametars are uppercase, because we are expecting
  // them to be Constructor functions.
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

// Creating new Circle object.
const c = new Circle();

// Sometimes when we face inheritance we might encouter a situation were the implementation
// that we've defined in a parent object (line 14) might not work or be ideal in a child object.
// Imagine that 'duplicate' method works for most of the 'Shape' objects but it should
// behave differently for 'Circle' objects, thats when we use
// ! Method Overriding - reimplementing a method on a child object
// Override a method that is defined in the base object.
// All we have to do is redefine the method in the Circle object.
// * Its very important to put this after 'extending' the Cirlce object, because we are
// * resetting the prototype.
Circle.prototype.duplicate = function () {
  console.log('duplicate circle');
};

// This worked because of prototypical inheritance, Js engine pick the first implementation of this method,
// the implementation on the child object will be used.
c.duplicate(); // --> duplicate circle

// Sometimes we might want to use the implementation on the parent object as well.
Circle.prototype.duplicate = function () {
  // We are going to 'call' the duplicate method on the parent or Shape object.
  // We can call the duplicate method in the parent like a regular function, we should use
  // the 'call' method to set the context for '.this'
  Shape.prototype.duplicate.call(this);
  console.log('duplicate circle');
};

c.duplicate(); // --> duplicate \n duplicate circle
