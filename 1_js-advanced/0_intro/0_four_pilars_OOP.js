// 4 Core concepts or pilar in Object-Orientes Programming
//  - Encapsulation --> group related variables and function together --> Reduce complexity + increase reusability
//  - Abstraction --> hide details and complexity and show only the essentials --> Reduce complexity + isolate imact of changes
//  - Inheritance --> eliminate redundant code
//  - Ploymorphism --> refactor ugly switch/case statements

// In OOP we combine a group of related variables and funtions into a
// unit, called object.
// We refer to variables as properties, and the functions as methods.

// * Encapsulation
// In OOP you group related variables and functions that operate on them into
// objects.
// The above implementetion is procedural, we have variables in one side and
// functions on the other side. They are hard to decouple.
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary * (overtime * rate);
}
// Object-Oriented way of solving this problem.
// We can have an employee object with the next properties
let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary * (this.overtime * this.rate);
  },
};
// This is better because:
//  - The function doesnt have parameters (In the procedural example the function
//      has three input parameters). The reason that we dont have parameters is because
//      all the used parameters are properties of the object (because the properties and
//      function are highly related, they are grouped together)

// * Abstraction
// We can hide some properties and methods from the outside, and this give us a couple
// of benefits.
//  - We will make the interface of the objects simpler (using an object with fewer
//      properties its simpler than an object with several properties and methods).
//  - Reduce the impact of change (If we change the inner or private methods, those
//      changes will not leak to the outside).

// * Inheritance
// This is a mechanism that allows you to eliminate redundant code.
// When an object inherit methods and/or properties from a father element, we can reduce
// redundant code by using methods of the father object.

// * Polymorphism
// Basically it means many forms (Poly-Morph ism). OOP is a technique that allow you to
// get rid of long if..else, switch..case statements

// Notations:
//  - When you write code using OOP functions end up having fewer parameters.
