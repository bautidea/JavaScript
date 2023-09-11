// In this excercise we are going to use the constructor function that
// was created in the previous excercise.
// And the goal is to create two functions:
//    The first one is to check if two given addresses are equal.
//    The second one is to know if the given addresses are poiting to the
//      same object.

/**
 * Takes the inputs and return an Adress Object.
 * {@link createAddress}
 *
 * @date 2023-09-11
 *
 * @param { String } street
 * @param { String } city
 * @param { String } zipCode
 */
function CreateAddress(city, zipCode, street) {
  this.city = city;
  this.zipCode = zipCode;
  this.street = street;
}

const address1 = new CreateAddress('a', 'b', 'c');
const address2 = new CreateAddress('a', 'b', 'c');
const address3 = new CreateAddress('a', 'b', 'f');
const address4 = new CreateAddress('d', 'e', 'f');

/**
 * This function takes two objects and compare if each key : vaule
 * pair are equals.
 * If they are, returns true otherwise false.
 *
 * @date 2023-09-11
 *
 * @param { Object } address1
 * @param { Object } address2
 */
function areEqual(address1, address2) {}

console.log(areEqual(address1, address5));
