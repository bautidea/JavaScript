const _radius = new WeakMap();

export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Hello from circle module :P');
    console.log(`Circle with radius ${_radius.get(this)}`);
  }
}
