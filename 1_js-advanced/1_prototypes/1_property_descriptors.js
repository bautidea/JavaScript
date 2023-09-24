let person = {
  name: 'bauti',
};

// if we iterate over the members of the created object we are not going to see
// the methods inherited from the prototype object.
for (let key in person) console.log(key); // --> name

// The only property we have is name, but we can still use other properties from
// object the prototype
console.log(person.toString()); // --> [object Object]
// None of the properties and method defined in the prototype are visible.

// We cant iterate over all the properties and methods defined in the prototype element
// because in JS, properties have atributes attached to them, sometimes this atributes prevent
// the properties to been enumerated.

// 1st lets get the prototype for 'person'
let objectBase = Object.getPrototypeOf(person);
// Lets see the atributes attached to the 'toString()' method.
// This will return a property descriptor
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor); // --> { value: [λ: toString], writable: true, enumerable: false, configurable: true }
//  configurable: true --> that means we can delete this member if we want to.
//  enumerable: false --> This is why when we iterate over the person object we couldnt see this method.
//  writable: true -->  This means we can overwrite the method, we can set its value

// * When you create your own objects, you can set these attributes for your properties.
// We can create the properties using the method 'Object.defineProperty()'
let person2 = {
  name: 'bautis',
};
// Defining properties.
Object.defineProperty(person2, 'name', {
  writable: false, // This will become read only.
  enumerable: true, // This will no show up in 'Object.keys()'.
  configurable: false, // We cannot delete the property.
});

person2.name = 'jhon';
console.log(person2); // --> { name: 'bautis' }

console.log(Object.keys(person2)); // --> [] (if enumerable: false) / [ 'name' ] (if enumerable: true)

delete person2.name;
console.log(person2); // --> { name: 'bautis' }
