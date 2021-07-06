// Given an array of school grades (german version, from 1 to 6), we want to create
// 2 new arrays:

// - One including only the grades lower than 3
// - One including only the grades greater or equal to 3

// Create this 2 arrays using the `filter` method.
// `console.log` the newly created arrays to finish. Verify that they are including the correct numbers.

const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 2.4, 4.1, 6];

// Your code below
const goodGrades = grades.filter((el) => {
  return el < 3;
});
const badGrades = grades.filter((el) => {
  return el >= 3;
});

console.log(goodGrades);
console.log(badGrades);
