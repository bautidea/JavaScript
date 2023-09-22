// nubers is declared as a constant, that means we cannot re-assing
// this variable to something else.
const numbers = [3, 4];
// Hoever we can modify the content of this array, we can add or remove
// existing elements.
// So constant does not stop us from modigying the content of an array.
// * We are goning to see three methods to add new elements to an array
// * to the
//  - End
//  - Beggining
//  - Middle
// to see all methods type 'numbers.' and scroll.

// * End
// We can pass one or mode arguments and they will be passed to the array
numbers.push(5, 6);
console.log(numbers); // --> [ 3, 4, 5, 6 ]

// * Beggining
numbers.unshift(1, 2);
console.log(numbers); // --> [ 1,2, 3, 4, 5, 6 ]

// * Middle
// With this method we can go to a given position and add new elements or
// remove existing elements.
// Splice takes three parameters:
// - Index to start from, where the new element will be added or deleted.
// - How many elements we want to delete (in this example 0).
// - Items to add.
numbers.splice(2, 0, 'a', 'b');
console.log(numbers); // --> [ 1, 2, 'a', 'b', 3, 4, 5, 6 ]
