// ! 'this' references the object that is executing the current function
// If the function is part of an object, we call it method.
// So if that function is a method in an object 'this' references that object itself.
// If that function is a regular function, it means its not part of an object
// 'this' references the global object, which is the window object in browsers or
// global in node.

// * method -> obj
// * function -> global (window, global)

const video = {
  title: 'a',
  play() {
    console.log(this);
  },
};
// We get the video object.
video.play(); // --> { title: 'a', play: [λ: play] }
// Because play() is a method in the video object, this references, the object itself.
// We can add a method later on, and we still get the same result.
video.stop = function () {
  console.log(this);
};
video.stop(); // --> { title: 'a', play: [λ: play], stop: [λ] }

// Lets what happends when this is referencing a function.
function playVid() {
  // * console.log(this);
}
playVid(); // --> Here we get the global object.

// What if we use a Constructor function.
function CreateVideo(title) {
  (this.title = title), console.log(this);
}
const v = new CreateVideo('b'); // --> CreateVideo { title: 'b' }
// Insead of the window object we get a new object, because, when we use the 'new'
// operator it creates a new empty object, and set 'this' in the constructor fucntion,
// to point to this empty object.

const video2 = {
  title: 'a',
  tags: ['b', 'c', 'd'],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    });
  },
};
// In this case the keyword 'this' is referecing the window object, it isnt referencing the
// video2 object because im using the 'this' keyword inside a callback function, that function
// its a regular function, its not a method in video2 object.
video2.showTags(); // --> undefined 'b', undefined 'c', undefined 'd'

// To solve this, in this particular case, the forEach() method has two parameters, the callback function
// the secon parametter is 'thisArg', we can pass an object here and 'this' can reference that object.
// Because at that point we are in the showTags() method, we are not inside that callback fucntion.
const video3 = {
  title: 'a',
  tags: ['b', 'c', 'd'],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};
video3.showTags(); // --> a b, a c, a d
// ! Not all methods in JS allow you to pass the 'this' argument
// So we have a few different solutions for that.
