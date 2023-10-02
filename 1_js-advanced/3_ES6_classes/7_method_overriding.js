// Method overriding is when we have a method on a based class, and we want to change
// its implementation in a direct class, or a direct object.
class Shape {
  move() {
    console.log('move');
  }
}

// Perhaps our circle need a different implementation of the 'move()' method.
// So we can override the 'move()' method by reimplementing it in the circle class.
class Circle extends Shape {
  move() {
    console.log('Circle move');
  }
}

const c = new Circle();
c.move(); // --> Circle move
// The implementation of the child object is used, because of prototypical inheritance.
// When we execute this method, JS engine first look for this method on the child object.

// Lets imagine we want to reuse some of the code we implemented in the parent 'move()' method.
// We can call it by using the 'super' keyword.
class Square extends Shape {
  move() {
    super.move();
    console.log('Square move');
  }
}

const s = new Square();
s.move(); // --> move --> Square move
