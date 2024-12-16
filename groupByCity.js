const users = [
  { name: "Alice", city: "New York", age: 25 },
  { name: "Bob", city: "London", age: 30 },
  { name: "Charlie", city: "New York", age: 35 },
  { name: "David", city: "London", age: 22 },
  { name: "Eve", city: "Paris", age: 28 },
];
//   Use reduce to group users by their city into an object where the city is the key, and the value is an array of user names.

const userByCity = users.reduce((acc, user) => {
  if (acc.hasOwnProperty(user.city)) acc[user.city].push(user.name);
  else acc[user.city] = [user.name];
  return acc;
}, {});
console.log(userByCity);

// Use reduce to find the oldest user and return their name and age.
const oldestUser = users.reduce(
  (acc, user) => {
    if (acc.age < user.age) {
      acc["name"] = user.name;
      acc["age"] = user.age;
    }
    return acc;
  },
  { age: 10 }
);
console.log(oldestUser);
