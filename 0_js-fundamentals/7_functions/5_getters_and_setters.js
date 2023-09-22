// We are goint to look at special kind of methods in objects
// getters and setters.

// Imagine you have this object
const person = {
  firsName: 'Bauti',
  lastName: 'De Angelis',
};

// if we want to display the full name we have to do somthing like this
console.log(`${person.firsName} ${person.lastName}`); // --> Bauti De Angelis.

// The problem with this approach is that mabe there are multiple places on
// the application where we want to display the full name.
// We should repeat the template literal 'console.log(`${person.firsName} ${person.lastName}`);'
// every time.
// * A better aproach is to define a method in the object, and move the expression there.
const person2 = {
  firsName: 'Jahon',
  lastName: 'Wick',
  fullName() {
    return `${this.firsName} ${this.lastName}`;
  },
};

console.log(person2.fullName()); // --> Jahon Wick

// There are a couple problems with this approach:
//  - This is a read only property, we cannot set the person full name
//    from the outside
// *    person.fullName = 'Jhon Cena'
//    It would be nice if we could write the full name and then the first
//    and last name in the properties would be automatically set based
//    on what we pass as fullName.
// - The other issue is that is not comfortable to call this like a method
//   it would be better if we can treat it like a property (we drop parentheses).
// *    console.log(person.fullName)
// Thats were Getters and Setters come in play.

// ! Getters => Access properties on an object.
// ! Setters => Change (mutate) properties on an object.
const person3 = {
  firsName: 'John',
  lastName: 'Chi',
  // Prefixing with the 'get' keyword. So we can access the full name
  // like a property.
  get fullName() {
    return `${this.firsName} ${this.lastName}`;
  },
  // To set this from the outside we need to add a setter.
  // This method needs a parameter, and its value will be what we have
  // at the right of the assignment operator.
  // person.fullName = 'Jhon Cena' --> 'Jhon Cena' is the value.
  set fullName(value) {
    const parts = value.split(' ');
    this.firsName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person3.fullName); // --> John Chi
console.log(person3); // --> { firsName: 'Jhon', lastName: 'Chi', fullName: [Getter/Setter] }

person3.fullName = 'Jhon Cena';
console.log(person3); // --> { firsName: 'Jhon', lastName: 'Cena', fullName: [Getter/Setter] }
