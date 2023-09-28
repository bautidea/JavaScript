//'use strict';
// We are going to see the 'this' keyword in a closer look.
const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

const c = new Circle();
// In this case we are pointing to de Cicle object, so 'this' will be Cirlce object.
// * Method call --> its called this way because we are calling a method on an object.
c.draw(); // --> Circle { draw: [λ] }
// In this case 'this' in the '.draw()' method will be pointing to 'c', that is a 'Circle' object.

// Im going to give a reference to the '.draw()' method
// This will return the draw() function.
const cirDraw = c.draw;
console.log(cirDraw); // --> [λ]

// Now calling this function.
// * Function call --> Because we are calling this on a stand alone function ('.draw()') that is not a part of an object.
cirDraw(); // --> Window {...}
// Instead of seeing the Circle object, we are seeing the 'window' object.
// We didnt get the circle object because, when we call a method as a Function call, by default 'this' will point to the
// global object which is 'Window'

// In Js we have a mode called 'Strict Mode', that when enabled, JS engine will be more sensitive, it will do more error checking.
// If there are errors that silently fail, its going to turn them into exceptions, and also, it will change the behavior of the
// 'this' keyword in functions.

// ! We can enable the strict mode by using by adding the string 'use strict' at the start of the document.
// After doing this we will see that instead of getting the window object (line 22), we'll get 'undefined'.
cirDraw(); // --> undefined

// * So in 'Strict Mode' if we call a method as a function 'this' by default will no longer point to global object, it will be setted to undefined
// The reason for this is to prevent us from accidentally modify the global object.

// Lets see how the 'this' keyword behave on ES6 classes.
class Circle2 {
  draw() {
    console.log(this);
  }
}

const c2 = new Circle2();
const cirDraw2 = c2.draw;
cirDraw2(); // --> undefined
// We get undefined because, by default, the body of our classes is executed in the 'Strict Mode', so whether we explicitly enable the Strict Mode or not,
// JS will execute the body of the class on the Strict Mode, and this will prevent us from accidentally modifying the global object.
