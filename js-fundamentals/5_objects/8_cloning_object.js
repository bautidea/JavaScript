// Using this technique we can get all the properties in an object, and make
// a copy of an object.
// Lets say we want to copy the next object.
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

const another = {};

// Using 'for..in' loop to access all the 'circle' object and copy them into
// the new created object.
for (let property in circle) {
  another[property] = circle[property];
}

console.log(another); // --> { radius: 1, draw: [f: draw] }
// This approach is a little bit old. In moder Js we have a better way to achieve
// the same thing.

//* One way is to use the 'Object.assign()' method
//    As the first argument we can pass a target Object, it can be a new or existing Object.
//    And the we can pass one or more source objects.
// What this method does, it takes all the properties in this source object ('circle') and
// copies them into the new object.
const another2 = Object.assign({}, circle);
console.log(another2); // --> { radius: 1, draw: [f: draw] }

// An example of passing an existing object.
let existingObj = {
  color: "red",
};
const another3 = Object.assign(existingObj, circle);
console.log(another3); // --> { color: 'red', radius: 1, draw: [f: draw] }

// * There is another simpler and more elegant way to achieve the same thing.
//  Using the 'spread' Operator ('...'), to spread the Object we want to copy.
// Basically this operator takes all the properties and methods in the targeted object,
// and put them in the decalared object.
// ! This is the simpler way to clone an object.
const another4 = { ...circle };
console.log(another4); // --> { radius: 1, draw: [f: draw] }
