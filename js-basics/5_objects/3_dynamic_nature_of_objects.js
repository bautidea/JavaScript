// One thing to understand about objects in JS is that they are dynamic.
// which means once you create them you can add new properties or methods,
// or even remove existing ones.

const circle = {
  radius: 1,
};

// Adding properties.
circle.color = "yellow";
circle.draw = function () {
  console.log("draw");
};

console.log(circle);

// Deleting properties.
// By using the 'delete' operator we can remove a member from an object.
// That member can be a property or a method.
delete circle.color;
delete circle.draw;

console.log(circle);

/**
 * * When we use const that doesnt mean that an object cannot be modified,
 * * it means that we cannot reassign this variable.
 */

circle = {}; // --> Assignment error.
