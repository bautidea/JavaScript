const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// Iterating over all the properties and method of an object.
for (let key in circle) {
  console.log(key); // --> radius, draw. Obtaining keys
  console.log(circle[key]); // --> 1, f: draw. Obtaining the values.
}
/**
 * But when using the 'for of' loop in an object, we get an error.
 * ! The 'for of' loop can only be used with iterables, such as arrays and maps.
 * So we cannot iterate with objects,

 * * for (let key of circle) {
 * *   console.log(key); // --> ($_$w, Circle) is not iterable.
 * * }

 * * However, we have the method 'Object.keys()'.
 * With it we can get all keys in our circle object, and this will return an
 * Array, and since the Arrays are iterable, we can use the 'for of' loop.
 */
console.log(Object.keys(circle)); // --> [ 'radius', 'draw' ]

for (let key of Object.keys(circle)) {
  console.log(key); // --> radius, draw
}

/**
 *  The Object function is a built in Constructor function, somwhere in the engine
 * we have:
 * *     function Object() {}
 *  And whenever we create an object using object literal syntax, internally
 * that is translated into a call to this constructor function.
 *  So when we create an object using literal syntax, like
 * *    const x { value : 1 };
 *  This is translated to a call to this object, constructor function. It looks like
 * *    const x = new Object();
 *  All function in JS are objects, so they have properties and methods we can access
 * using the dot notation. So when we type:
 * *    Object.
 *  We can see al the properties and methods defined in this Object, and here we are using
 * *    Object.keys()
 *  '.keys()' method, returns a string array, which contains all the prperties and
 * methods on this object.
 *
 * ! There is another method similar to Object.keys().
 */

// That other method is called '.entries()'.
// Instead of returning the keys as a string array, it return each value : pair as an Array.
for (let entry of Object.entries(circle)) {
  console.log(entry); // --> [ 'radius', 1], [ 'draw', f: draw]
}

/**
 *  * Sometimes we want to see if a given object has a given property or method.
 *  To do dat we can use the 'in' operator.
 * With the in operator you can see if a given property exist in an Object
 */
if ("radius" in circle) console.log("yes"); // --> yes
