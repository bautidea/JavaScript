// By default, everything that we define in a module is considered to be private, it wont be accessible
// to the outside, unless we explicitly export it.

// Implementation Detail.
const _radius = new WeakMap();

// Public Interface.
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log(`Circle with radius ${_radius.get(this)}`);
  }
}

//  The way we export an object in Node or CommonJs format is like this
// We have the keyword 'module', which refers to the current module.
// This 'module' has a property called exports. This is an object, we can add one or more properties to this object.

// Since we are only importing one object, we can reset the object 'module.exports' to circle.
// So when we import this module, we'll get the circle class.
module.exports = Circle;
// The object that we export is known as 'Public Interface'

// If we would have multiple classes here, and wanted to export them all together
// * module.exports.Circle = Circle;
// * module.exports.Square = Square;
// So 'module.exports' is an object with two properties (Cirle and Square), we can import this object inside our
// main file, and acces these properties.
