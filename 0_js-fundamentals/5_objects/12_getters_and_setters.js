function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };
  this.draw = function () {
    console.log('drawii');
  };
}
// 'defaultLocation' is a private member of the constructor function,
// imagine we want to display that property somewhere in our application
// only read the property using dot notation.
// To define a property like that we use the method '.defineProperty()' from Object constructor
// function.
function CircleGetter(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.draw = function () {
    console.log('drawii');
  };

  // The 1st argument of this method is the object that you want to add the new property to.
  // The 2nd argument is the name of the property that we are going to use to call.
  // The 3rd argument is an object, which we add a key:value pair.
  //    The 'key' is 'get' its a special keyword.
  //    The 'value' is a function
  // ! This is reffered as a read only property.
  Object.defineProperty(this, 'callDefaultLocation', {
    get: function () {
      return defaultLocation;
    },
  });

  // Another syntax of the same
  Object.defineProperty(this, 'callDefaultLocation2', {
    value: defaultLocation,
    writable: false,
  });
}

// When we access the property 'callDefaultLocation' the function defined in 'get' will be called
const circle = new CircleGetter(10);
console.log(circle.callDefaultLocation); // --> { x: 0, y: 0 }
console.log(circle.callDefaultLocation2); // --> { x: 0, y: 0 }
console.log(circle); // --> CircleGetter { radius: 10, draw: [λ] }

// If we would like to set the value of this property from the outside we declare a setter
// in the same '.defineProperty()' method.
function CircleSetGetter(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.draw = function () {
    console.log('drawii');
  };

  Object.defineProperty(this, 'callDefaultLocation', {
    get: function () {
      return defaultLocation;
    },

    // This function takes an argument called 'value'
    set: function (value) {
      // Since we are using a function, we can perform some validation for the value before
      // setting the variable value.
      if (!value.x || !value.y)
        // If either property is falsy.
        throw new Error('not a valid value');

      defaultLocation = value;
    },
  });
}

const circle2 = new CircleSetGetter(100);

circle2.callDefaultLocation = { x: 10, y: 15 };
console.log(circle2.callDefaultLocation); // --> { x: 10, y: 15 }

circle2.callDefaultLocation = 1; // --> not a valid value
