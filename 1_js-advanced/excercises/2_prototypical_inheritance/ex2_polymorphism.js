// Starting from the last excercise im going to create:
//  - a new method for 'HtmlSelectElement', called .render() --> this will return a select html element.
//  - a new object called 'HtmlImgElement', thats inherits from HtmlElement, that can be clicked, focused,
//    but it also has its own render method (will return the img element on html).

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

  this.render = function () {
    const selectItems = varItems.map((v) => `<option>${v}</option>`);

    return `<select>\n  ${selectItems.join('\n  ')}\n</select>`;
  };

  this.addItem = function (newItem) {
    varItems.push(newItem);
  };

  this.removeItem = function (toRemove) {
    // varItems = varItems.filter((value) => value != toRemove);

    // The one above is a better implementation.
    varItems.splice(varItems.indexOf(toRemove), 1);
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImgElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}

HtmlImgElement.prototype = new HtmlElement();
HtmlImgElement.prototype.constructor = HtmlImgElement;

const e = new HtmlSelectElement([1, 2, 3]);
const i = new HtmlImgElement();

i.click(); // --> clicked.
i.src = 'https://';
console.log(i.render()); // --> <img "src=https://" />

// Now im going to create an array of elements an iterate over it
const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImgElement('http://'),
];

for (let element of elements) console.log(element.render());
// * <select>
// *   <option>1</option>
// *   <option>2</option>
// *   <option>3</option>
// * </select>
// * <img "src=http://" />
