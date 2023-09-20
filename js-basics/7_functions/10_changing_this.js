// To change the value of 'this' (imagine that the 'forEach()' method doesnt have
// the second parameter to indicate 'this' argument).
// A simple solution is to define a constant with 'this' as value. Before the callback
// function, because as we said in last lecture, when we use 'this' in a function it
// will reference the window/global object.
// ! This is not the preferred aproach, but its something that is seen in JS applications.
const video = {
  title: 'a',
  tags: ['b', 'c', 'd'],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};

video.showTags(); // --> a b, a c, a d

// Another aproach.
function playVideo(a, b) {
  console.log(this);
}

// Functions are technically objects, so it have properties or methods we can access
// using dot notation --> 'playVideo.' to see them.
// With the methods
//  - apply
//  - bind
//  - call
// we can change the value of 'this' function.

// * .call()
// Is the simplest. The first parameter of the method is 'thisArg', we can pass an
// object and 'this' will reference a new object.
// To pass an argument to the called function we pass it after referencing
// the object, as we would when calling the function.
playVideo.call({ name: 'bauti' }, 1, 2); // --> { name: 'bauti' }

// * .apply()
// Same as before what we pass as the first parameter will be used as the
// value of 'this'.
// The difference beween call and apply is only about passing arguments.
// In the '.apply()' method we need to pass the arguments as an array
playVideo.apply({ name: 'bauti' }, [1, 2]); // --> { name: 'bauti' }

// * .bind()
// Once again the first argument is 'thisArg'. But this method does not call out
// 'playVideo' function, it returns a new function and sets 'this' to point to
// the passed object permanently.
// Since it returns a new function we can store the result in a variable or constant.
const newPlayVideo = playVideo.bind({ name: 'bauti' });
newPlayVideo(); // --> { name: 'bauti' }

// Or we can immediately call the function that is returned
