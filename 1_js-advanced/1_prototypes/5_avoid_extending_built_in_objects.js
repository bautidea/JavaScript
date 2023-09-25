// We might me tempted to do something like this
Array.prototype.shuffle = function () {
  // ...
};

// And we this we can define an array, and we are able to call the shuffle method
const array = [];
array.shuffle();

// While this is really easy to acomplish in JS, its something we should avoid.
// ! We should not modify the built in objects in JS.
// Its possible that in a future, we probably are going to use a library, and that library someone has also
// extended the shuffle method, but with a different implementation.
// A golden rule is:
// ! Dont modify object you dont own !
