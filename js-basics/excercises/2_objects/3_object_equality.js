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
const address4 = address1;

/**
 * This function takes two objects and compare if each 'key : vaule'
 * pair is equal.
 * If they are, returns true otherwise false.
 *
 * @date 2023-09-11
 *
 * @param { Object } address1
 * @param { Object } address2
 */
function areEqual(address1, address2) {
  // * Appling Signle Resposability Principle.
  const equalAdresses = checkingEquality(address1, address2);

  if (equalAdresses) return console.log('Equal addresses');
  return console.log('Addresses are different');
}

/**
 * * Appling Single Resposability Principle
 * to differentiate actions. This function is in chanrge of checking
 * if each key and each value in address1 is on address2.
 * {@link checkingEquality}
 *
 * @date 2023-09-12
 *
 * @param { Object } address1 - Passed through 'areEqual' function.
 * @param { Object } address2 - Passed through 'areEqual' function.
 */
function checkingEquality(address1, address2) {
  for (let key in address1) {
    if (address2[key] && address1[key] === address2[key]) continue;
    else return false;
  }

  return true;
}

/**
 * This function tells if two given objects are pointing to the same object,
 * the same memory space.
 *
 * @date 2023-09-12
 *
 * @param { Object } address1
 * @param { Object } address2
 */
function areSame(address1, address2) {
  if (address1 === address2)
    return console.log('Objects referencing the same memory space');
  return console.log('Objects are not referencing the same memory space');
}

areEqual(address1, address2); // --> Equal addresses
areEqual(address1, address3); // --> Addresses are different

areSame(address1, address2); // --> Objects are not referencing the same memory space
areSame(address1, address4); // --> Objects referencing the same memory space
