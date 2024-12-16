// Write a function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers(arr) {
  const resultArr = arr.filter((elem) => elem % 2 == 0);
  return resultArr;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
