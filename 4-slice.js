// Write a function getSubarray that takes an array and two indices, start and end. Use the slice method to return a new array containing elements from the start index (inclusive) to the end index (exclusive).

function getSubarray(arr, start, end) {
  return arr.slice(start, end);
}
console.log(getSubarray([1, 2, 3, 4, 5], 1, 4));

function removeFirstElement(arr) {
  return arr.slice(1);
}

console.log(removeFirstElement([10, 20, 30, 40]));
