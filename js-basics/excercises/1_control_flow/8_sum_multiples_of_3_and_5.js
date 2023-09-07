/**
 * @description This function will return the sum of all the multiples of 3 and 5,
 * from 0 up to this limit.
 *
 * @date 2023-09-07
 *
 *  @param {number} limit - limit number to include.
 *
 * link to function {@link sumMultiples}
 */
function sumMultiples(limit) {
  let totalSum = 0;

  for (let i = 0; i <= limit; i++) {
    let numberToSum = i % 3 === 0 || i % 5 === 0 ? i : 0;
    totalSum += numberToSum;
  }

  return totalSum;
}

console.log(sumMultiples(10));
