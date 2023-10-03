// In real world applications we dont want to have a single gigantic file with houndreds of
// lines of code, its hard to maintain.
// We should split our code into multiple files, and we call each of these files a module.
// Implementing modules give us a number of benefits:
//  - Increase the maintainablity --> Because the code is better organized.
//  - Reuse --> We can reuse these modules in differents applications.
//  - Abstract code --> Wich means we can hide some of the complexity in a module, and only expose
//                      the essentials.
const _radius = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  // We can also define a setter really easily.
  draw() {
    console.log(`Circle with radius ${_radius.get(this)}`);
  }
}

const c = new Circle(8);
c.draw();

// Here we are using a weakmap to implement a private property in our class. So when we create
// the circle object we dont have access to the radius property (c.radius --> does not exists).
// However in this code i have access to the WeakMap, so i can read the '_radius' private property
console.log(_radius.get(c)); // --> 8
// What we should do here is to take the Circle class and the radius WeakMap and put it in a separate file (a module)
// and then only expose the cirle class to the outside.
// And with that we wont have access to the WeakMap.

// * Popular Module Formats:
//   - AMD - Asynchronus Module Definition. --> Primarily used in browser applications.
// * - CommonJS --> Used in Node.
//   - UMD - Universal Module Definition. --> Can be used both in browser and Node.js.
// * - ES6 Modules --> From ES6 JS native supports module format. Its used in browsers.
// Out of this list we are going to focus on CommonJS and ES6 Modules.
