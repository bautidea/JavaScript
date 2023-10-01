// As we said later abstaction is one of the core concepts in OOP.
// Abstraction --> Hiding details and complexity, and showing only the essential.
// To implement abstractions we implement private properties and methods, we hide certain members
// of an object, so they cannot be accessible from the outside.

class Circle {
  // This property is public by default.
  constructor(radius) {
    this.radius = radius;
  }
}

// To create private properties in ES6 there are basically three approaches.

// ! First approach (is not recommended)
// Use an underscore (_) as naming convention, we name the private properties with a '_' prefix.
// And then we assume that this is a private property.
class Circle2 {
  constructor(radius) {
    this._radius = radius;
  }
}
// This is not recommended because we can still acces that variable.
const c2 = new Circle2(2);
console.log(c2._radius); // --> 2
// This is not abstraction is a convention for developers, it doesnt prevent another developer from writing
// code again this property.

// ! Second approach --> Symbol()
// In ES6 we have a new type, a primitive type, called 'symbol'.
// '.Symbol()' its a function we call to generate a symbol.
// A symbol is essentially a unique identifier, every time we call this function we get a unique identifier.
console.log(Symbol() === Symbol()); // --> false
// We can use this unique value as the property name for an object.

const _radius3 = Symbol();

class Circle3 {
  constructor(radius) {
    // In Js we can access a property in an object in two ways (dot notation and bracket notation)
    // dot --> this.radius
    // bracket --> this['radius']
    // * We can use symbols as property names instead of a string.
    this[_radius3] = radius;
  }
}

const c3 = new Circle3(2);
// We see 'Symbol()' as the name of the property, this is how we see it internally.
console.log(c3); // --> Circle3 { [Symbol()]: 2 }
console.log(c3._radius3); // --> undefined

// If we set multiple properties using symbols, the properties names will all show up as symbols, but internally
// they are unique.

// We can acces the '_radius' propertie using the next method
console.log(Object.getOwnPropertyNames(c3)); // --> []
// We got an empty array because we dont have any properties in this object.
const key = Object.getOwnPropertySymbols(c3);

console.log(key); // --> [ Symbol() ]

// We can acces to the property like this, we select by bracket notation the property we want to display.
console.log(c3[key[0]]); // --> 2

// * To make private methods

const _radius4 = Symbol();

const _draw = Symbol();
class Circle4 {
  constructor(radius) {
    this[_radius4] = radius;
  }

  // In ES6 we have a feature called 'Computed Property Names', we can add brackets, and inside of these brackets
  // we add an expression, when that expression is evaluated, the resulting value will be used as the name of a
  // property or method.
  // [_draw] --> Will evaluate 'Symbol()' and get a unique identifier, and set it as the name of the method.
  [_draw]() {
    console.log('draw');
  }
}

const c4 = new Circle4(2);
console.log(c4); // --> Circle4 { [Symbol()]: 2 }

// ! Third approach --> WeakMaps()
// we can use WeakMaps (new type of ES6) to impelemnt private properties and methods in an object.
// A WeakMap is essentially a dictionary, where keys are objects and values can be anything.
// The reason is called WeakMap is because the keys are weak, so if there are no reference to these keys,
// they will be garbage collected.

const _radius5 = new WeakMap();
const _move = new WeakMap();
const _paint = new WeakMap();

class Circle5 {
  constructor(radius) {
    // Inside of the constructor we are not goingt to set the '_radius' property.
    // Instead we are going to work with the '_radius' key map.
    // We call the 'set()' method and pass as the first argument a key, that would be an object (it cannot be a symbol),
    // here we pass 'this' as the instance of Cicle5 object.
    // And as a second argument we pass the value.
    _radius5.set(this, radius);

    // To set a private method we still have to initialize it on the constructor, but we pass as a value a function.
    _move.set(this, function () {
      console.log(`move ${this}`);
      // We can see that 'this' is undefined, because the 'this' we are using in the '_move' method is pointing to the function declared as
      // value of the WeakMap.
    });

    // So we can use an arrow function, instead of a regular function. Because arrow functions use the 'this' value of the containing function
    // so it will be inherited from what we have in the constructor (in this case 'Circle5' object).
    _paint.set(this, () => {
      console.log(`paint ${this}`);
    });
  }

  // If we want to acces this property, inside of this class, we use the 'get' method instead of the 'set'.
  // Then we pass the key we want to access.
  draw() {
    console.log(_radius5.get(this));
  }

  move() {
    // To acces the _move function we use the same technique as above, the output will be a function, so we got to call it
    _move.get(this)();
  }

  paint() {
    _paint.get(this)();
  }
}

// Technically we can access the radius private property if we get access to the WeakMap defined in _radius5 (line 94),
// but we can hide this _radius5 in a module, and only export the Cirlce5 class, and we wont have access to this WeakMap.
const c5 = new Circle5(2);
console.log(c5); // --> Circle5 {}
c5.draw(); // --> 2
c5.move(); // --> move undefined

c5.paint(); // --> paint [object Object]

// We can also create just one WeakMap for all the private members.
const privateProps = new WeakMap();

class Circle6 {
  constructor(radius) {
    privateProps.set(this, {
      radius: radius,
      draw: () => {
        console.log('draw');
      },
    });
  }

  // In order to acces a property we would have to do something like this
  draw() {
    // Since this returns an object with the property 'radius' and the method 'draw', we have to specify the property / method
    // we are trying to access.
    privateProps.get(this).draw();
  }
}
