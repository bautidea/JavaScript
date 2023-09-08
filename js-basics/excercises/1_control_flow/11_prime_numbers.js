/**
 * This function takes a limit, and show all primes number from 0 to that limit.
 * A prime number is a number that can only be divided by 1 and iself.
 *  {@link showPrimes}
 *
 * @date 2023-09-08
 *
 * @param { number } limit
 */
function showPrimes(limit) {
  if (limit === 0) return console.log("Limit cant be 0");

  for (let number = 1; number <= limit; number++) {
    if (number === 2 || number === 3) console.log(number);
    if (number % 2 != 0 && number % 3 != 0) console.log(number);
  }
}

// Another implementation.
function showPrimes2(limit) {
  for (number = 1; number <= limit; number++) {
    let isPrime = true;

    for (factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) console.log(number);
  }
}

showPrimes(20);
showPrimes2(20);
