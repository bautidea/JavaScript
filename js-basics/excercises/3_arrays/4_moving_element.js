// In this excercise im going to create a function that will move an element
// to a different prosition in an array.

/**
 * This function takes an array as input, and will move the element in the passed index
 * to the offset position.{@link move}
 *
 * @date 2023-09-17
 * @param { array } output
 * @param { number } index
 * @param { number } offset
 */
function move(array, index, offset) {
  // Creating a copy of the input array.
  const output = [...array];
  // Obtaning array lenght.
  const arrayLength = output.length;
  // Obtaining value of element to move.
  const num = output[index];
  // Obtaning total displacement of element.
  const displacement = index + offset;

  // If the displacement is greater thant the lenght of the array that means that the element
  // will end up 'outside' the array, so in that case im going to display an error msg.
  if (displacement >= arrayLength || displacement < 0)
    return console.error('Invalid offset.');

  // If the displacement is not greater than the length
  // Removing element from current position.
  output.splice(index, 1);
  // Appending element value to the new postition, this position is the sum of the current index
  // and the wanted offset.
  output.splice(displacement, 0, num);
  // Returning new array.
  return output;
}

const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 2);
console.log(output);
