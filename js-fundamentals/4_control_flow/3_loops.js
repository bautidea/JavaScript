/*  
    In Js we have various kind of loops, and all these loops
    essentially repeat an action a number of times. We have:
    - For.
    - While.
    - Do...While.
    - For...in.
    - For...of.
*/

// For loops.
/*
  For loops need 3 statements,
  - The first is called initialExpression (here we declare an initialized variable)
  - The second is what we call a condition, we compare the value of the first expression
      with something else. The loop will run as long as this condition evaluates to true.
  - The third part is called incrementExpression,we use this part to increment the value
      of the initialExpression once a loop is completed.
*/
for (let i = 0; i < 5; i++) {
  console.log("For Hello World");
}

// While loops.
/* 
  One difference between while loops and for loops, is that:
  In For loops the loop variable (usually 'i') its part of the
  loop itself.
  But in while loops, you have to declare this variable externally.
*/
let i = 0; // This i is different from the i of the For loop because the other is out of scope.
// Now that the loop variable is initialized we add while statement. We add the condition
// between paretheses like for loop.
while (i < 5) {
  console.log("While Hello World");
  i++; // We increment i inside loop.
}

// Do-While loops
/*  
  They are very similar to while loops, but they have a difference, do-while loops are ALWAYS
  executed at least once, even if the while-condition evaluates to false.
  In while loops the condition get evaluated first and the the statement is executed.
  In do-while loops the condition is evaluated at the end, that means that the statement is
    always executed at least once, Even if the condition is false.
  Just as while loops we have to declare the loop variable externally.
*/
i = 0;
do {
  console.log("Do-While Hello World");
  i++;
} while (i < 5);
