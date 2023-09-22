// Lets see how we can combine two arrays or silce an array into two parts
const first = [1, 2, 3];
const second = [4, 5, 6];

// * To concatenate
const combined = first.concat(second);
console.log(combined); // --> [ 1, 2, 3, 4, 5, 6 ]

// We have a method that is the oposite of concat that is
// * slice
// There are multiple ways to use this method, one way is to pass
// a cero based index for the start and the end.
console.log(combined.slice(2, 4)); // --> [ 3, 4 ]

// Another way is that we can exclude the end index and with this
// we get all the elements from the original array, starting from
// the given index.
console.log(combined.slice(2)); // --> [ 3, 4, 5, 6 ]

// And the third way is not to pass any index, and with that we get a copy
// of the original array.
console.log(combined.slice()); // --> [ 1, 2, 3, 4, 5, 6 ]

// * One thing to understand about both these method is that we are dealing with
// * primitive values, these primitives will be copied into the target array.
// * But if you have objects, the objects themselves are not copied, the reference
// * is copied, so that means that the elements in both arrays (the input and the
// * output) will be poiting to the same object.

const firstObj = [{ id: 1 }]; // Reference type

// When we call the concat method this object itselfe its not copied to the combined
// array, only its reference gets copied.
const combinedObj = firstObj.concat(second);
console.log(combinedObj); // --> [ { id: 1 }, 4, 5, 6 ]

// If we change the id from the original object, the id from the combined object
// also will change its value.
// Because we are dealing with a reference type, this object gets copied by its
// reference.
firstObj[0]['id'] = 100;
console.log(combinedObj); // --> [ { id: 100 }, 4, 5, 6 ]
