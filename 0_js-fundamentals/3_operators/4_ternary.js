// If a customer has more than 100, points, they are a 'gold' customer,
// otherwise they are a 'silver'.
let points = 10;
// This expression produces a boolean, now depending on the result (true or
// false), we are going to determinate the value of the 'type' variable.
let type = points > 100 ? "gold" : "silver";
console.log(type);
