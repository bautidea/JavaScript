// This first excercise is about creating an adress object with
// three properties:
//    - Street
//    - City
//    - Zip Code
// Then Create a function that take an address object and displays
// all properties and their respective value.

/**
 * This function takes the inputs and return an Adress Object.
 * {@link createAddress}
 *
 * @date 2023-09-11
 *
 * @param { String } street
 * @param { String } city
 * @param { String } zipCode
 */
function createAddress(city, zipCode, street) {
  return {
    city,
    zipCode,
    street,
  };
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

const address1 = createAddress('Bahia Blanca', '8000', 'Cruz del sur 818');
showAddress(address1);
