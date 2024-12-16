const data = {
  users: [
    {
      id: 1,
      name: "Alice",
      orders: [
        {
          id: 101,
          items: [
            { product: "Laptop", quantity: 1, price: 1000 },
            { product: "Mouse", quantity: 2, price: 20 },
          ],
        },
        {
          id: 102,
          items: [{ product: "Keyboard", quantity: 1, price: 50 }],
        },
      ],
    },
    {
      id: 2,
      name: "Bob",
      orders: [
        {
          id: 103,
          items: [
            { product: "Monitor", quantity: 1, price: 200 },
            { product: "Mouse", quantity: 1, price: 20 },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Charlie",
      orders: [],
    },
  ],
};
//   Calculate the total revenue from all orders across all users.

const revenue = data.users
  .reduce((ordersArr, user) => {
    ordersArr.push(...user.orders);
    return ordersArr;
  }, [])
  .reduce((itemsArr, order) => {
    if (order.items.length != 0) {
      itemsArr.push(...order.items);
    }
    return itemsArr;
  }, [])
  .reduce((revenue, item) => {
    revenue += item.price * item.quantity;
    return revenue;
  }, 0);
console.log(revenue);

// Create an array of all product names (no duplicates) from all orders.
const productsNameArr = data.users
  .reduce((ordersArr, user) => {
    ordersArr.push(...user.orders);
    return ordersArr;
  }, [])
  .reduce((itemsArr, order) => {
    if (order.items.length != 0) {
      itemsArr.push(...order.items);
    }
    return itemsArr;
  }, [])
  .reduce((productName, item) => {
    if (!productName.includes(item.product)) productName.push(item.product);
    return productName;
  }, []);
console.log(productsNameArr);

// Identify the user who placed the most orders and return their name.

const mostOrderuser = data.users.reduce(
  (mostOrder, user) => {
    if (user.orders.length > mostOrder.orderCnt) {
      mostOrder = { userName: user.name, orderCnt: user.orders.length };
    }
    return mostOrder;
  },
  { orderCnt: 0 }
).userName;
console.log(mostOrderuser);

// Create a summary object where each user's name is a key, and the value is their total amount spent.
const userTotalSpent = data.users
  .map((user) => {
    const orderArr = user.orders.reduce((orderItem, order) => {
      orderItem.push(...order.items);
      return orderItem;
    }, []);
    return { userName: user.name, totalSpent: orderArr };
  })
  .map((user) => {
    const total = user.totalSpent.reduce((total, order) => {
      total += order.price * order.quantity;
      return total;
    }, 0);
    user["totalSpent"] = total;
    return user;
  });
console.log(userTotalSpent);

// Determine the product sold in the highest quantity.
const quantityOfProductSold = data.users
  .reduce((allOrderditems, user) => {
    user.orders.forEach((order) => allOrderditems.push(...order.items));
    return allOrderditems;
  }, [])
  .reduce((orderQuantityEachProduct, order) => {
    if (orderQuantityEachProduct.hasOwnProperty(order.product)) {
      orderQuantityEachProduct[order.product] += order.quantity;
    } else {
      orderQuantityEachProduct[order.product] = order.quantity;
    }
    return orderQuantityEachProduct;
  }, []);
const mostSoldproduct = Object.entries(quantityOfProductSold).reduce(
  (acc, product) => {
    if (product[1] > acc.quantity)
      acc = { product: product[0], quantity: product[1] };
    return acc;
  },
  { quantity: 0 }
);
console.log(mostSoldproduct);
