/**
 * This function takes a parameter called limit, and when we call this function
 * we should call all the numbers, from 0 to 'limit'.
 * Indicates if each number is "EVEN" or "ODD".
 * @date 2023-09-07
 * @param { Number } limit
 * Located in line {@link showNumbers}
 */
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    let evenOrOdd = i % 2 ? "ODD" : "EVEN";

    console.log(`${i} - ${evenOrOdd}`);
  }
}

showNumbers(15);
