/**
 * This function takes the input array and returns a number of
 * truthy elements in this array.
 * Falsy values = '', null, 0, undefined, false, nan.
 * Truty = Every value that is not falsy.
 * @date 2023-09-07
 * @param { array } array
 * {@link countTruthy}
 */
function countTruthy(array) {
  let countTruthy = 0;
  for (element of array) {
    if (element) countTruthy++;
  }

  return countTruthy;
}

let arrayvar;
let funcArray = ["", "hi", 0, 1, arrayvar];
console.log(countTruthy(funcArray)); // 2 = 1 ["hi"], 2 ["1"]
