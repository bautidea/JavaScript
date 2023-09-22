// There are times we want to supply default values to the
// parameters of a function.

function interest(principal, rate, years = 5) {
  // One approach is to use truthy values.
  rate = rate || 3.5;
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000)); // --> 1750

// * One thing to have in mind is that once you give a default
// * value to a parameter (years), you should also give all the
// * others parameters before that, a default value.
function interest2(principal, rate = 3.5, years) {
  return ((principal * rate) / 100) * years;
}
console.log(interest2(10000, 5)); // --> NaN
// We can pass 'undefined', and with this the argument will
// be set to its default value.
// ! This is not recommended.
console.log(interest2(10000, undefined, 5)); // --> 1750
