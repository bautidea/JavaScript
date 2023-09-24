function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log('draw');
  };
}

const c1 = new Circle(10);
const c2 = new Circle(1);

console.log(c1); // --> Circle { radius: 10, draw: [λ] }
console.log(c2); // --> Circle { radius: 1, draw: [λ] }
// With the current implementation, if we have a big amount of Circle objects in the memory,
// we also going to have a big amount of '.draw()' methods.
// So if we want to have a large amount of these objects in the memory, we are going to waste
// a lot of memory by keeping copies of all these methods.

// The solution is to take the 'draw()' method out of 'Circle' object, and put it its prototype,
// we are going to have a single instance of this prototype in the memory.
// So we are going to have a single isntance of the 'draw()' method.

// To do that, we learned that every constructor has a '.prototype' property, so using
// Circle.prototype we can quickly access this object, since JS Objects are dynamic, we can always
// add something to them, like the draw method.

// So essentially we have two kinds of properties and methods in JS
// ! Instance properties and methods --> Instance members.
// ! Prototype members.
function Circle2(radius) {
  // * Instance members.
  this.radius = radius;
}

// * Prototype members.
Circle2.prototype.draw = function () {
  console.log('draw');
};

const c3 = new Circle2(10);
const c4 = new Circle2(1);

// Now our circles doesnt have the method, instead the '.draw()' method is on the prototype
// of this Object.
console.log(c3); // -->Circle { radius: 10 }
console.log(c4); // --> Circle { radius: 1 }
// Because of the prototypical inheritance, we can still access the 'draw()' method.

// ! We can overwrite the implementation of methods in the prototype of out circle object
// For example we can overwrite the next method.
console.log(c3.toString()); // --> [object Object]

Circle2.prototype.toString = function () {
  return `Circle with radius ${this.radius}`;
};

console.log(c3.toString()); // --> Circle with radius 10
// When we call this method, based on prototypical inheritance, JS looks at our 'Circle' object
// for the '.toString()' method, since we dont have this method there, then, it looks at it's prototype
// 'Circle2.prototype', we overwritten this method in line 53, so that implementation will be used.

// * Even though we have another implementation of the '.toString()' method on the root element
let x = {};
console.log(x.toString()); // --> [object Object]
console.log(c4.toString()); // --> Circle with radius 1
// * the implementation in line 56 method will be used for Circle2 constructor, because it is more accessible.

// ! In both members (Cirlcle and its prototype), we can reference other members
// For example, in the draw method, which is a prototype method, i can easily call an instance method
// on the circle class.
function Circle3(radius) {
  // * Instance members.
  this.radius = radius;

  this.move = function () {
    console.log('move');
  };
}

// * Prototype members.
Circle3.prototype.draw = function () {
  this.move();
  console.log('draw');
};

const c5 = new Circle3(10);
c5.draw(); // --> move draw

// By the same way, in an instance method we can reference a prototype member.
// For that im going to create a new constructor function
function Circle4(radius) {
  // * Instance members.
  this.radius = radius;

  this.move = function () {
    this.draw();
    console.log('move');
  };
}

// * Prototype members.
Circle4.prototype.draw = function () {
  console.log('draw');
};

const c6 = new Circle4(10);
c6.move(); // --> draw move

// The JS engine will find the 'draw()' method on the prototype.
