// In this excercise im going to get all the movies in 2018
// with reating greater than 4, and order them by rating
// in descending order.
// It only should be displayed the title in the output
const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
];

function sortMovies(moviesArray) {
  // First lets sort the array.
  const sortArray = moviesArray.sort((a, b) => {
    if (a.rating > b.rating) return -1;
    if (a.rating < b.rating) return 1;
    return 0;
  });

  for (movie of sortArray) {
    if (movie.year === 2018 && movie.rating > 4) {
      console.log(movie.title);
    }
  }
}

sortMovies(movies); // --> 'b', 'a'

// Another approach
// Here instead of doing this
// .sort((a, b) => {
//   if (a.rating > b.rating) return -1;
//   if (a.rating < b.rating) return 1;
//   return 0;
// })
// Im going to do this
// .sort((a,b) => b.rating - a.rating)
// If b > a we will get a positive value, wich means the order is correct.
// if b < a we will get a negative value, which means the order is not correct.
// if a = b then no sort is needed.
const titles = movies
  .filter((movie) => movie.year === 2018 && movie.rating >= 4)
  .sort((a, b) => b.rating - a.rating)
  .map((m) => m.title);

console.log(titles);
