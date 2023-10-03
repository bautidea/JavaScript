// In this excercise im going to implement a 'stack' using ES6 classes.
// A stack is a special kind of data structure, like a physical stack, or pipe. It has the next operations:
//  - push --> Adding an object into the 'box'.
//  - pop --> Removing the top object of the 'box'.
//  - peek --> Returns the object on top of the stack.
const _elements = new WeakMap();
class Stack {
  constructor() {
    _elements.set(this, []);
  }

  push(value) {
    _elements.get(this).push(value);
  }

  pop() {
    if (this.count === 0) throw new Error('Stack is empty');
    _elements.get(this).pop();
  }

  peek() {
    if (this.count === 0) throw new Error('Stack is empty');
    return _elements.get(this).slice(-1)[0];
  }

  get count() {
    return _elements.get(this).length;
  }
}

const stack = new Stack();
stack.push('a');
console.log(stack.peek()); // --> a
stack.push('b');
console.log(stack.peek()); // --> b
console.log(stack.count); // --> 2
stack.pop();
console.log(stack.peek()); // --> a
stack.pop();
console.log(stack.peek()); // --> Stack is empty
