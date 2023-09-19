// What would happen if instead of passing a valid string as 'value' to the
// setter, we would pass another type, like a boolean or a number.
const person = {
  firsName: 'Bauti',
  lastName: 'De Angelis',

  get fullName() {
    return `${person.firsName} ${person.lastName}`;
  },

  set fullName(value) {
    const parts = value.split(' ');
    this.firsName = parts[0];
    this.lastName = parts[1];
  },
};

// If we would pass a boolean we would get the next error.
// * person.fullName = true; // --> value.split is not a function
// because '.split()' is a method to be used with strings, booleans dont
// have this method.
// So here we need to implement 'error handling'. In situations like this, we
// should do error handling at the beginning of a function or method.
// * This is called 'Defensive Programming'

// One way to solve it is like this
const person2 = {
  firsName: 'Bauti',
  lastName: 'De Angelis',

  get fullName() {
    return `${person.firsName} ${person.lastName}`;
  },

  set fullName(value) {
    if (typeof value !== 'string') return;
    const parts = value.split(' ');
    this.firsName = parts[0];
    this.lastName = parts[1];
  },
};
// This will not take effect because it will be catched by the return.
person2.fullName = true;
console.log(person2); // --> { firsName: 'Bauti', lastName: 'De Angelis', fullName: [Getter/Setter] }

// But sometimes we want to report an error in the application,
// * Thats where we need to throw an exception
// When we throw an exception the lines after the 'throw' statment are not
// executed, wit will jump out of the method.
// And the controll will move to the catch block.
const person3 = {
  firsName: 'Bauti',
  lastName: 'De Angelis',

  get fullName() {
    return `${person.firsName} ${person.lastName}`;
  },

  set fullName(value) {
    // Instead of return we use throw keyword and then create a new error object.
    // * Error() is a constructor function.
    if (typeof value !== 'string') throw new Error('Value is not a string');

    const parts = value.split(' ');
    this.firsName = parts[0];
    this.lastName = parts[1];
  },
};
// * person3.fullName = true; // --> Value is not a string.

// ! Do not confuse errors with exceptions
// There is a slight difference between the two
// Error would be when we create the error object.
// * const e = new Error('Some error');
// But the moment you throw this error we refer to that as an exception.
// * throw e; // --> Some error

// So the method in line 56 is throwing an exception, so we need to catch it
// so we can display it to the user.
// In the next line (same as line 62) we recieve the exception. We need to wrap
// it in a try block.
// A try block can have one or more statements.
// One of these statements at least can throw a exception.
try {
  person3.fullName = true;
} catch (e) {
  // We have to add the 'catch' block after.
  // In a 'catch block' we can get an error object and do something with it.
  // We give an identifier in the parenthesis, 'e' is the error object that we are
  // throwing in line 56.
  console.log(e);
}

// Suppose we pass an empty string as full name.
try {
  person3.fullName = '';
  console.log(person3); // --> { firsName: '', lastName: undefined, fullName: [Getter/Setter] }
} catch (e) {
  console.log(e);
}

// We want to make sure that the user is typing a first name and last name.

const person4 = {
  firsName: 'Bauti',
  lastName: 'De Angelis',

  get fullName() {
    return `${person.firsName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== 'string') throw new Error('Value is not a string');

    // When spliting the string.
    const parts = value.split(' ');

    if (parts.length !== 2) throw new Error('Enter a first and last name');

    this.firsName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person4.fullName = '';
  console.log(person4);
} catch (e) {
  console.log(e); // --> [Error: Value is not a string]
}
