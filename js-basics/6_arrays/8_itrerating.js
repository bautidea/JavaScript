const numbers = [1, 2, 3];

//  We can use the 'for..of' loop
for (let number of numbers) console.log(number); // --> 1, 2, 3

// Theres another way, thats using the 'forEach()' method,
// it takes a callback function.
// In this case each element in the array gets passed to the
// callback function.
numbers.forEach(function (number) {
  console.log(number); // --> 1, 2, 3
});

// We can write it with an arrow function.
// * And one thing to have in mind is that the callback function
// * can optionally take an aditional parameter, the index
numbers.forEach((number, index) => console.log(`Ind ${index} - Num ${number}`));
// --> Ind 0 - Num 1, Ind 1 - Num 2, Ind 2 - Num 3
