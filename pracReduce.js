const nestedArray = [[1, 2], [3, 4], [5]];
// Expected Output: [1, 2, 3, 4, 5]

const flatenArray = nestedArray.reduce((acc, elem) => {
  acc.push(...elem);
  return acc;
}, []);
console.log(flatenArray);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
// Group by age
// Expected Output: { 25: [{name: "Alice", age: 25}, {name: "Charlie", age: 25}
const group = people.reduce((acc, elem) => {
  if (acc.hasOwnProperty(elem.age)) {
    acc[elem.age].push(elem);
  } else {
    acc[elem.age] = [elem];
  }
  return acc;
}, {});
console.log(group);

const numbers = [5, 10, 15, 20];
// Expected Output: [225, 400]
const square = numbers.filter((elem) => elem > 10).map((num) => num ** 2);
console.log(square);

// calculate the total price of products with a price greater than 20.
const products = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 25 },
  { name: "Product 3", price: 30 },
];
// Expected Output: 55
const totalPrice = products
  .filter((elem) => elem.price > 20)
  .reduce((acc, product) => {
    acc += product.price;
    return acc;
  }, 0);
console.log(totalPrice);
