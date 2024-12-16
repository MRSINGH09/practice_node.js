const numbers = [5, 10, 15, 20];
// Expected Output: [15, 20]
const outPut = numbers.filter((elem) => elem > 10);
console.log(outPut);
const data = [{ a: 1 }, { b: 2 }, { a: 3, b: 4 }];
// Key: "a"
// Expected Output: [{ a: 1 }, { a: 3, b: 4 }]
const result = data.filter((obj) => !obj.hasOwnProperty("a"));
console.log(result);
