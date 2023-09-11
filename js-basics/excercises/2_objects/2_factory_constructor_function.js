// The goal of this excercise is to create the address object
// used in the previous excercise using a Constructor and a
// Factory function.

/**
 * ! - Factory Function -
 * Takes the inputs and return an Adress Object.
 * {@link createAddressFactory}
 *
 * @date 2023-09-11
 *
 * @param { String } street
 * @param { String } city
 * @param { String } zipCode
 */
function createAddressFactory(city, zipCode, street) {
  return {
    city,
    zipCode,
    street,
  };
}

/**
 * ! - Constructor Function -
 * Takes the inputs and return an Adress Object.
 * {@link createAddressConstructor}
 *
 * @date 2023-09-11
 *
 * @param { String } street
 * @param { String } city
 * @param { String } zipCode
 */
function CreateAddressConst(city, zipCode, street) {
  this.city = city;
  this.zipCode = zipCode;
  this.street = street;
}

/**
 * This function takes an address object and displays all the properties
 * and its current values - {@link showAddress}
 *
 * @date 2023-09-11
 *
 * @param { Object } addressObj
 */
function showAddress(addressObj) {
  for (let key in addressObj) {
    console.log(`${key} : ${addressObj[key]}`);
  }
}

const address1 = createAddressFactory('Bahia Blanca', '8000', 'Cruz del sur');
showAddress(address1); // --> city : Bahia Blanca, zipCode : 8000, street : Cruz del sur

const address2 = new CreateAddressConst(
  'Monte Hermoso',
  '8000',
  'Avenida Peron'
);
showAddress(address2); // --> city : Monte Hermoso, zipCode : 8000, street : Avenida Peron
