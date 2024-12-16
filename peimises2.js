const users = [
  { userId: 1, name: "Alice", email: "alice@example.com" },
  { userId: 2, name: "Bob", email: "bob@example.com" },
  { userId: 3, name: "Charlie", email: "charlie@example.com" },
  { userId: 4, name: "Dhamu", email: "Dhamu@123.com" },
];

const orders = [
  { userId: 1, orders: ["Order1", "Order2"] },
  { userId: 2, orders: ["Order3"] },
  { userId: 3, orders: [] },
];
// Write a function fetchUserData(userId) that returns a promise. Chain two more promises: one for fetching user details and another for fetching user orders.
function userData(userId) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.userId == userId);
    if (user) {
      resolve(user);
    } else {
      reject("User not found");
    }
  });
}

function userOrder(userId) {
  return new Promise((resolve, reject) => {
    const ordersList = orders.find((user) => user.userId == userId);
    if (ordersList.length == 0) {
      reject("not orders listed");
    } else {
      resolve(ordersList.orders);
    }
  });
}
userData(1)
  .then((data) => {
    console.log(data);
    return userOrder(1);
  })
  .then((orders) => {
    console.log(orders);
  })
  .catch((error) => {
    console.log(error);
  });

// using async await

async function fetchData() {
  try {
    const user = await userData(1);
    const orders = await userOrder(1);
    console.log(orders);
  } catch (err) {
    console.log(err);
  }
}
fetchData();

// using callback

function fetchUser(id) {
  const user = users.find((user) => user.userId == id);
  if (user) return user;
  return "User Not Found";
}

function fetchOrder(id) {
  const order = orders.find((order) => order.userId == id);
  if (!order) return "no orders";
  return order;
}

function fetchOrderDetails(id, callback) {
  const user = fetchUser(id);
  if (user == "User Not Found") throw new Error("User Not Found");
  callback(user.userId);
}
fetchOrderDetails("1", (id) => {
  const order = fetchOrder(id);
  console.log(order);
});
