const users = [
  { name: "Alice", age: 25, city: "New York", purchases: [120, 50, 30] },
  { name: "Bob", age: 30, city: "London", purchases: [200, 100] },
  { name: "Charlie", age: 35, city: "Paris", purchases: [] },
  { name: "David", age: 22, city: "New York", purchases: [50] },
  { name: "Eve", age: 28, city: "Paris", purchases: [10, 15, 25] },
];

//   Use filter to get all users who are above 25 years old.
const avove25 = users.filter((user) => user.age > 25);
console.log(avove25);
// Use map to create a new array containing only the names and total purchase amounts of each user.
const nameAndPurchas = users.map((user) => ({
  name: user.name,
  purchases: user.purchases,
}));

console.log(nameAndPurchas);

// Use reduce to find the total revenue (sum of all purchases from all users).
const totalRevenue = users.reduce((total, user) => {
  let sum = 0;
  for (let index = 0; index < user.purchases.length; index++) {
    sum += user.purchases[index];
  }
  total += sum;
  return total;
}, 0);
console.log(totalRevenue);

// Use destructuring to extract the names of users living in New York.
const [, , , { name: nameOfUser }] = users;
console.log(nameOfUser);

// Chain filter and map to get a list of cities where users have made at least one purchase.
const cities = users
  .filter((user) => user.purchases.length > 0)
  .reduce((acc, user) => {
    if (!acc.includes(user.city)) acc.push(user.city);
    return acc;
  }, []);
console.log(cities);

// Add a sort step to arrange the users by their total purchase amount in descending order. Combine it with your existing solution for mapping names and total purchases:
const totalPurchase = users.map((user) => {
  let total = 0;
  for (let purchase of user.purchases) {
    total += purchase;
  }
  return {
    name: user.name,
    purchases: total,
  };
});
console.log(totalPurchase);
totalPurchase.sort((a, b) => b.purchases - a.purchases);
console.log(totalPurchase);
