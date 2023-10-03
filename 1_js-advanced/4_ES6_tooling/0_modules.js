// In real world applications we dont want to have a single gigantic file with houndreds of
// lines of code, its hard to maintain.
// We should split our code into multiple files, and we call each of these files a module.
// Implementing modules give us a number of benefits:
//  - Increase the maintainablity --> Because the code is better organized.
//  - Reuse --> We can reuse these modules in differents applications.
//  - Abstract code --> Wich means we can hide some of the complexity in a module, and only expose
//                      the essentials.
const _radius2 = new WeakMap();
class Circle2 {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  // We can also define a setter really easily.
  set radius(value) {
    if (value <= 0) throw new Error('Invalid radius');
    _radius.set(this, value);
  }
}

const c2 = new Circle2(8);
