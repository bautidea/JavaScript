// This function will return true if the passed width is bigger than
// the height.
// In other words will tell if a given img is portrait (widht < height --> return False)
// of landscape (width > height --> return True).

// I decided to make this using an user input. i installed
// 'prompt-sync' library using 'npm install prompt-sync' in terminal.
const prompt = require("prompt-sync")();

// We should not return true or false explicitly of a function.
function isLandscape(width, height) {
  // Here is no need to indicate '? true : false', because this operator
  // will evaluate true or false independently.
  return Number(width) > Number(height);
}

let widthInput = prompt("Indicate width:");
let heightInput = prompt("Indicate height:");

let result = isLandscape(widthInput, heightInput);
console.log(result);
