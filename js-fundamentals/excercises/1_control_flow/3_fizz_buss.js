// If the number that we are passing to this function is divisible by
// 3 --> Fizz.
// 5 --> Buzz.
// Both (3 & 5) --> FizzBuzz.
// Not divisible by 3 or 5 --> We get the same number.
// Not a number --> 'Not a number'.

function fizzBuzz(input) {
  if (typeof input === "number") {
    if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
    else if (input % 3 === 0) return "Fizz";
    else if (input % 5 === 0) return "Buzz";

    return input;
  }

  return NaN;
}

let output = fizzBuzz("8");
console.log(output);
