/**
 * This function will return the amount of rows that takes as an input.
 * In each row a '*' will be printed, incrementing the amount of '*' by
 * one in each row. {@link showStars}
 *
 * @date 2023-09-08
 *
 * @param { number } rows - amount of rows to show stars.
 */
function showStars(rows, printpirm = true, printChar = "*") {
  for (let i = 1; i <= rows; i++) {
    if (printpirm) console.log(" ".repeat(rows - i), printChar.repeat(i * 2));
    if (!printpirm) console.log(printChar.repeat(i));
  }
}

showStars(5, (printpirm = true));
showStars(5, (printpirm = false));
