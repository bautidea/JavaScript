/*
  Arrays
  Sometimes in our application we might have a list of values, 
  we use an array to store that list.
  An array is a data structure that we use to represent a list of items.
*/
let selectedColors = ["red", "blue"]; // '[]' indicates this is an Array literal.
console.log(selectedColors);

/*
  Since JavaScript is a dynamic language (the type of variables can
  change at run times), this means that the lenght and type of objects
  we have on the array are dynamic, they can change.
*/
selectedColors[2] = 2;
console.log(selectedColors);

/*
  Technically an array is an object, it has a bunch of properties that
  we can acces using the dot notation.
*/
console.log(typeof selectedColors);
console.log(selectedColors.length);
