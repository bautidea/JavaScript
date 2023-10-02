// Lets see how we can implement inheritance in ES6
class Shape {
  move() {
    console.log('move');
  }
}

// To have this Circle inherit from the shape class, we only have to use the keyword
// extends.
// With this keyword we dont have to reset the constructor.
class Circle extends Shape {
  // All methods implemented here (the one that are outside 'contructor()') will end up in the prototype for 'Circle'
  draw() {
    console.log('draw');
  }
}

const c = new Circle();
// Methods are not in Cirlce objet, they are in his prototype
console.log(c); // --> Circle {}
c.move(); // --> move
c.draw(); // --> draw

// Lets imagine all our shapes need a color

class Shape2 {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log('move');
  }
}

class Circle2 extends Shape2 {
  // If we have a constructor in the parent class, and then we add a constructor in the direct class
  // inside of the child constructor we should make sure to call the parent constructor first to initialize the
  // base object.
  constructor(color, radius) {
    // We can use the 'super' keyword to reference the parent object.
    // We call the constructor as a function and pass the argument needed for the constructor, 'color' in this case.
    super(color);

    this.radius = radius;
  }
  draw() {
    console.log('draw');
  }
}

const c2 = new Circle2('red', 5);
// Methods are not in Cirlce objet, they are in his prototype.
// We inherit color from our parent class (Shape) and we added radius on the Circle class itself.
console.log(c2); // --> Circle2 { color: 'red', radius: 5 }
