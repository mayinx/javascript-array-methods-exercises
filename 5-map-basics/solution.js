const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Your code below
const numbersDoubled = numbers.map((el) => {
  return el * 2;
});
const numbersDividedByTwo = numbers.map((el) => {
  return el / 2;
});
const numbersMultipliedBySelf = numbers.map((el) => {
  return el * el;
});

console.log(numbersDoubled);
console.log(numbersDividedByTwo);
console.log(numbersMultipliedBySelf);
