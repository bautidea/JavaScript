// Asuming we have the next object.
function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function () {
    // ....
  };
  this.draw = function () {
    this.computeOptimumLocation();
    console.log('draw');
  };
}
const circle = new Circle(10);
console.log(circle); // --> Circle { radius: 10, defaultLocation: { x: 0, y: 0 }, computeOptimumLocation: [λ], draw: [λ] }

// If we use the dot notation, we can see that we can access all properties
// * circle.(radius / defaultLocation / computeOptimumLocation / draw)
// Not all properties / methods should be accesible to the client, maybe the 'computeOptimumLocation'
// method should only be called inside the draw method, so if i would call it in the code
// it could break the object.

// * In OOP we have a concept called Abstraction.
// it means we should hide details and complexity and show or expose only the essentials.
// We should hide the 'defaultLocation' property and 'computeOptimumLocation' method.
// To implement abstraction:
// We use variable declarations, because if we declare a local variable in the object,
// since its local, when the constructor function execution ends, the variable goes outs of scope.
function AbstractedCircle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function () {
    // ....
  };

  this.draw = function () {
    // We dont use 'this' to acces this variable because its not a property or method of the object
    // its just a variable that will initialize when the constructor function is used, once
    // the function terminates its execution the variable will die.
    computeOptimumLocation();
    // If instead we are accessing members of the object we have to use 'this'
    console.log(this.radius);
    console.log('drawii');
  };
}
const abstractedCircle = new AbstractedCircle(10);
console.log(abstractedCircle); // --> AbstractedCircle { radius: 10, draw: [λ] }
abstractedCircle.draw(); // --> 10, drawii
