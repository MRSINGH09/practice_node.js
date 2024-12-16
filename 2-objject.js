// Write a function filterAdults that takes an array of objects, where each object represents a person with properties name and age. Return an array containing only the people who are 18 or older.
const people = [
  { name: "John", age: 16 },
  { name: "Jane", age: 22 },
  { name: "Mark", age: 17 },
  { name: "Mary", age: 19 },
];
function filterAdults(people) {
  const resultArr = people.filter((elem) => elem.age >= 18);
  return resultArr;
}

console.log(filterAdults(people));
