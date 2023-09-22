/**
 * This function takes the input array, then it calculates the average
 * of the grades array. After that depending on what the result was
 * that grades is maped to obtain a grade.
 *
 * 1 - 59 --> F.
 *
 * 60 - 69 --> D.
 *
 * 70 - 79 --> C.
 *
 * 80 - 89 --> B.
 *
 * 90 - 100 --> A.
 *
 * @date 2023-09-08
 *
 * @param { array } marks - array of students grande.
 *
 * Link to function {@link calculateGrades}.
 */
function calculateGrades(marks) {
  // Obtaining marks average.
  const marksAverage = calculateAverage(marks);

  if (marksAverage < 60) return "F";
  else if (marksAverage < 70) return "D";
  else if (marksAverage < 80) return "C";
  else if (marksAverage < 90) return "B";
  return "A";
}

/**
 * I use this function to obtain the average of an array.
 *
 * @date 2023-09-08
 *
 * @param { array } array
 *
 * link to function {@link calculateAverage}
 */
function calculateAverage(array) {
  const amountOfMarks = array.length;
  let marksSum = 0;

  for (i of array) marksSum += i;

  return marksSum / amountOfMarks;
}

let gradesArray = [80, 80, 100, 100];
console.log(calculateGrades(gradesArray));
