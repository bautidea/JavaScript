// By default everything that we define here is considered private, unless
// we explicitly export it using the 'export' keyword before the Circle class.
const _radius = new WeakMap();

// When we export the class we'll be able to work with the propertyes but wont
// be able to work with radius WeakMap.
export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log(`Circle with radius ${_radius.get(this)}`);
  }
}
