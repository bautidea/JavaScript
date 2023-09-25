// We are going to see how to iterate over instance vs prototype properties.
function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function () {
    console.log('move');
  };
}

const c1 = new Circle(1);

// Prototype members.
Circle.prototype.draw = function () {
  console.log('draw');
};

// * 'Object.keys()' ONLY returns instance keys.
console.log(Object.keys(c1)); // --> [ 'radius', 'move' ]

// * 'for...in' loop returns ALL members
for (let key in c1) console.log(key); // --> radius, move, draw

// In JS language we often use the word 'own' instead of instance. Referring to
// instance members as 'own' members.
// The next method will return if a object has a certain 'own' property.
console.log(c1.hasOwnProperty('radius')); // --> true
// We get false for 'draw' method, because its a prototype member.
console.log(c1.hasOwnProperty('draw')); // --> false
