// In low level languaged (C or C++), when creating an object, we need to
// allocate memory to it, and when we're done we need to deallocate memory.
// In JS, we dont have this concept, we can easily create a new object:
let circle = {};
// At the time we initialized this object, the memory is automatically allocated
// to this object, then we can use that.
console.log(circle);
// And when we are done using we dont have to deallocate the memory.
// * JS engine has what we call a garbage collector.
// The job of this garbage collector is to find the variables or constants
// that are no longer used an then dellocate the memory.
// ! Memory allocation and deallocation happend behind the scenes.
// This garbage collector runs in the background,it figures out waht variables
// are not used, and then it will automatically deallocate their memory.
