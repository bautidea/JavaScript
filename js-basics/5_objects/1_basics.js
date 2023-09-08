/* 
    We've learned that objects are a collections of key value pairs.
    So if we have properties that are highly relates, we want to encapsulate
    them inside an object.
    We put variables inside an object to send that object anywhere in our programs.
    We can pass it to a function, and all that variables are going to be accesed by 
    the function.
*/

// The purpose of an object is to group relates variables.
/**
 * ! This object is created using Object Literal Syntax.
 */
let circle = {
  radius: 1,
  location: {
    x: 2,
    y: 3,
  },
  isVisible: true,
};

/**
 * * Instead of defining functions in a stand alone way like below.
 */
// We can have a function to draw a circle.
function draw() {
  console.log("drawing circle..");
}
// Another to move the circle.
function move() {}

/**
 * ! Its better to put these functions inside of the circle object.
 * With this where we have the circle object we have acces to all its properties and functions.
 *
 * ! This is know as Object-Oriented Programming (OOP).
 * Its an style of programming where we see a program as a collection of objects that talk
 * to each other to perform some functionality.
 * ! If a function is part of an object, we call the function a method
 *  * To add a function to an object
 */
let circleWithFunction = {
  radius: 1,
  location: {
    x: 2,
    y: 3,
  },
  isVisible: true,
  draw: draw(),
  move: function moveCircle() {
    console.log("Moving circle...");
  },
};

circleWithFunction.draw; // Calling draw method of the circle object.
circleWithFunction.move();
