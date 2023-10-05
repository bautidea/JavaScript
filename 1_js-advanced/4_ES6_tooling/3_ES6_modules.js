// ! The important thing to take out of this lesson is to take care from the syntax of ES6 modules.
// So here we want to grab the class Circle and the WeakMap and put them into a separate module.
// Then in that module we want to export only the cirlce class, because we want to keep the WeakMap private,
// because it is a part of the implementation detail of the Circle module, we dont want to leak it.
//* const _radius = new WeakMap();

//* class Circle {
//*   constructor(radius) {
//*     _radius.set(this, radius);
//*   }

//*   draw() {
//*     console.log(`Circle with radius ${_radius.get(this)}`);
//*   }
//* }

// To import a file
// * import { Circle } from './3_ES6_circle';  // if you load it like this you get the error from html file.
import { Circle } from './3_ES6_circle.js';
// Now if you open this file from a html file, you will see that there is a 'Uncaight SyntaxError', we can fix this issue using
// web pack.
// But we are going to see a quick work around, its not something to do when you are working with production.
// We go to '3_index.html'.
const c = new Circle(5);
c.draw();
