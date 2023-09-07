/**
 * This function should display all the properties of the input object
 * that are of type string.
 * eg: Suppose we have the next object
 *          const movie = {
 *              title : 'spiderman',
 *              releaseYear : 2018,
 *              rating : 5,
 *              actor : 'bauti'
 *          }
 *      The output should be:
 *          title spiderman
 *          actor bauti
 * @date 2023-09-07
 * @param obj - object
 * @link {@link showProperties}
 */
function showProperties(obj) {
  for (key in obj)
    if (typeof obj[key] == "string") console.log(`${key} - ${obj[key]}`);
}

const person = {
  personName: "Bauti",
  age: 30,
  livesIn: "Bahia Blanca",
  dogs: 2,
};

showProperties(person);
