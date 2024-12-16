const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
// Expected Output: ["Alice", "Bob", "Charlie"]

const nameArr = users.map((user) => {
  return user.name;
});
console.log(nameArr);

const strings = ["a", "b", "c"];
// Expected Output: [{ value: "a" }, { value: "b" }, { value: "c" }]
const obj = strings.map((elem) => ({ value: elem }));
console.log(obj);
