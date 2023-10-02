// In this excercise im going to implement a 'stack' using ES6 classes.
// A stack is a special kind of data structure, like a physical stack, or pipe. It has the next operations:
//  - push --> Adding an object into the 'box'.
//  - pop --> Removing the top object of the 'box'.
//  - peek --> Returns the object on top of the stack.
const _elements = new WeakMap();

class Stack {
  constructor() {
    this[_elements] = [];
    this.count = _elements.length;
  }

  push(value) {
    _elements.push(value);
  }
}

const stack = new Stack();
stack.push('a');
