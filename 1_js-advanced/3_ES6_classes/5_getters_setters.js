// So here we have defined a private property, but mabey we want to read this value.
// Perhaps we dont want to set it, we just want to read it, one way is to define a method 'getRadius'
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  getRadius() {
    return _radius.get(this);
  }
}

const c = new Circle(5);
console.log(c.getRadius()); // --> 5

// We can make it nicer if we could read that, as a property 'c.radius', we saw in the previous lesson that we
// can define a getter in the constructor using 'Object.defineProperty()' to define a getter.
// * class Circle {
// *   constructor(radius) {

// *     _radius.set(this, radius);

// *     Object.defineProperty(this, 'radius') {
// *       get: function () { ... }
// *     }
// *   }
// * }
// In ES6 we can define a getter and a setter much easier. We simply add the 'get' keyword on the front of the property
// we want to get.
const _radius2 = new WeakMap();

class Circle2 {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  // We can also define a setter really easily.
  set radius(value) {
    if (value <= 0) throw new Error('Invalid radius');
    _radius.set(this, value);
  }
}

const c2 = new Circle2(8);
// Initially we have the radius o.
console.log(c2.radius); // --> 8
// We can reset it...
c2.radius = 15;
console.log(c2.radius); // --> 15
c2.radius = -3; // --> Invalid radius.
