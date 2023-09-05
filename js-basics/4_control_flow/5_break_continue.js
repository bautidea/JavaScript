// With all the loops seen, there are two keywords, break and
// continue, that can change how the loop behaves.
// Sometimes you want to jump out of a loop for  some reason
// that may happend on runtime.
let i = 0;
while (i <= 10) {
  if (i >= 6) {
    console.log("this is the end i =", i);
    break; // This will exit the loop execution.
  }

  if (i % 2 === 0) {
    i++;
    continue; // Continues the execution of the next iteration.
  }

  console.log(i);
  i++;
}
