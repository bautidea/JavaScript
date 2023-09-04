/* 
  With switch and case we can compare the value of a variable against
  other values.
*/
// We want to see if this guest is a guest, a moderator, or and admin.
let role;

// For switch..case instead of having a condition inside paretheses.
// we have a variable, and then we add case statements.
// Each case statement is used to compare the value of the variable
// with something.
switch (role) {
  case "guest":
    console.log("Guest user");
    // We need to add the break statement to exit the switch block.
    // Otherwise the other statements here will be executed.
    break;

  case "moderator":
    console.log("Moderator user");
    break;

  // Optionally if none of this cases are matched we can have a
  // default statement.
  default:
    console.log("Unknown user");
  // No break needed because after the execution of this case
  // there is no other to exectue.
}
