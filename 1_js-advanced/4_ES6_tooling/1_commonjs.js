// A simple rule of thumb about modularity
// * Cohesion --> Things that are highly related should go together.
// So we are going to find the things that are highly related and move them out of this file.
// WeakMap and Circle class are highly related, so we are going to take them to other file.
// * "1_commonjs_module.js"

// const _radius = new WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);
//   }

//   draw() {
//     console.log(`Circle with radius ${_radius.get(this)}`);
//   }
// }

// To import a module we use the 'require()' function, it is a part of the CommonJS format.
// Here we pass a related path to the module we want to import.
const Circle = require('./1_commonjs_module'); // it isnt necessary to add .js it is inferred.
// In the Circle module we are only exporting the Circle class, the '_radius' WeakMap is not accessible
// from this module.

const c = new Circle(8);
c.draw(); // --> Circle with radius 8
