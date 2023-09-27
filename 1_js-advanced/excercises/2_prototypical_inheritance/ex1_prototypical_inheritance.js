// Im going to design two objects, HtmlElement, and HtmlSelectElement, we have prototypical inheritance, the parent is
// HtmlElement.

function HtmlElement() {
  this.click = function () {
    console.log('clicked');
  };
}

HtmlElement.prototype.focus = function () {
  console.log('focused');
};

function HtmlSelectElement(inputArray = []) {
  let varItems = inputArray;

  Object.defineProperty(this, 'items', {
    get: function () {
      return varItems;
    },
  });

  this.addItem = function (newItem) {
    varItems.push(newItem);
  };

  this.removeItem = function (toRemove) {
    // varItems = varItems.filter((value) => value != toRemove);

    // The one above is a better implementation.
    varItems.splice(varItems.indexOf(toRemove), 1);
  };
}
const e = new HtmlElement();

// Here we have to select as the 'HtmlSelectElement' prototype an instance of
// HtmlElement, because the '.click()' method is an instance member, not a prototype
// method.
// It wont work because the method 'Object.create()' will create a new object and set the
// prototype of that object to te prototype of HtmlElement. And this object (prototype of HtmlElement)
// has only one method ('.focus()').
// To fix this instead of using 'Object.create(HtmlSelectElement)' we need to create an HtmlElement object
// because in that object we are going to have the click method.
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement();

console.log(s.constructor); // --> [λ: HtmlSelectElement]
s.focus(); // --> focused
s.click(); // --> clicked

s.addItem(1);
s.addItem(2);
s.addItem(2);
console.log(s.items); // --> [ 1, 2, 2 ]
s.removeItem(2);
console.log(s.items); // --> [ 1, 2 ]
