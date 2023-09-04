/*
    In JS we have two types of conditional statemens:
    1 - if and else
    2 - switch and case
*/
// If hour is between 6 am and 12 pm -> Good morning!
// If it is between 12pm and 6pm -> Good afternoon!
// Otherwise -> Good evening!
const d = new Date();
let hour = d.getHours();

if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening");
}
