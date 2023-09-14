// Antoher useful method is '.join()'. With this method we can optionally
// pass a string, and it will be used as a separetor.
// This method returns a string.
const numbers = [1, 2, 3];
console.log(numbers.join('a,')); // --> 1a,2a,3

// The '.split()' method goes hands to hand with '.join()', but this
// method is not part of arrays, its part of strings.
const msg = 'This is a msg';
// It will return an array.
const msgArray = msg.split(' ');
console.log(msgArray); // --> [ 'This', 'is', 'a', 'msg' ]

// Now that we have an array we can use the '.join()' method using a
// separator
const combined = msgArray.join('-');
console.log(combined); // --> This-is-a-msg

// ! This method is usefull when creating an URL slug.
// Its when the title of a page is part of a web url
// https://stackoverflow.com/questions/9543518/creating-arrays-in-javascript
// The title of this post is 'Creating arrays in Javascript' and the slug is
// 'creating-arrays-in-javascript'.
