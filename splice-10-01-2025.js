let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.splice(2, 2, "three", "four");
console.log(arr);

arr.splice(2, 2);
console.log(arr);
console.log(arr.slice(1, 3));
