// We saw that inheritance is a really usefull tool for solving the problem of code reuse,
// we have to be really careful about using it, because it can make our source code complex
// and fragile.
// ! Keep it simple and stupid, start with simple objects.
// If we see a number of objects that share similar features, then perhaps we can encapsulate those
// features inside of a generic object and use inheritance.
// * Inheritance is not the only solution to enable code reuse, we can use the 'Composition' technique.
// Inheritance hierarchies are very fragile, if you want to use inheritance keep it to one level,
// do not go more than one level above.
// ! Favor Composition over Inheritance.
// With composition isntead of having a complex hierachies, we can compose a few objects together to
// create a new object, and this technique give us a great flexibility.
// ! In JS we can use Mixins to achieve composition

// lets define a new object
const canEat = {
  eat: function () {
    this.hunger--;
    console.log('eating');
  },
};

const canWalk = {
  walk: function () {
    console.log('walking');
  },
};

// Now we can compose these objects togeter and create a person, that can walk and eat.
// In ES6 we have a new method 'Object.assign()' that we can use it to copy all properties
// and methods from one object to another.
// We pass an empty object as the tardet.
// And then pass one or more source objects.
const person = Object.assign({}, canEat, canWalk);
console.log(person); // --> { eat: [λ: eat], walk: [λ: walk] }

// If we are using a constructor function we can still use this technique.
function Person() {}
Object.assign(Person.prototype, canEat, canWalk);

const person2 = new Person();
person2.walk(); // --> walking

// Lets say that tomorrow we are going to add two new objects in this application
// First we define a new feature
const canSwim = {
  swim: function () {
    console.log('swim');
  },
};

// Then we define a new constructor
function Goldfish() {}

// We modify the prototype
Object.assign(Goldfish.prototype, canSwim, canEat);

const golfish = new Goldfish();
golfish.swim(); // --> swim

// * We can extract the logic of '.assign()' into a function, called Mixin
// This function can take multiple sources, thats why we add the Rest Operator (...)
function mixin(target, ...sources) {
  // '...sources' will be an array, we cant pass an array to the assign function
  // So we use the spread operator (...), so we can spread an array into multiple arguments
  Object.assign(target, ...sources);
}

// New constructor
function Duck() {}

mixin(Duck.prototype, canEat, canSwim, canWalk);

const donald = new Duck();
donald.swim(); // --> swim
donald.eat(); // --> eating
donald.walk(); // --> walking
