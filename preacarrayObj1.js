const orders = [
  {
    orderId: 1,
    customerName: "Alice",
    items: [
      { productName: "Laptop", price: 1000, quantity: 1 },
      { productName: "Mouse", price: 50, quantity: 2 },
    ],
  },
  {
    orderId: 2,
    customerName: "Bob",
    items: [
      { productName: "Keyboard", price: 100, quantity: 1 },
      { productName: "Headset", price: 200, quantity: 1 },
    ],
  },
  {
    orderId: 3,
    customerName: "Charlie",
    items: [{ productName: "Monitor", price: 300, quantity: 2 }],
  },
  {
    orderId: 4,
    customerName: "Alice",
    items: [{ productName: "USB Cable", price: 10, quantity: 5 }],
  },
];
//   List All Product Names: Extract all the product names from all orders into a single array.

function allProductNames() {
  let productNames = orders
    .reduce((allProducts, orders) => {
      allProducts.push(...orders.items);
      return allProducts;
    }, [])
    .reduce((nameArr, item) => {
      for (let index = 0; index < item.quantity; index++) {
        nameArr.push(item.productName);
      }
      return nameArr;
    }, []);
  console.log(productNames);
}
allProductNames();
// Filter Expensive Orders: Return an array of orders where the total price of all items in the order exceeds $500.

function expensiveItems() {
  const expensiveItems = orders.filter((order) => {
    const expense = order.items.reduce((totalExpense, items) => {
      return (totalExpense += items.price * items.quantity);
    }, 0);
    return expense > 500;
  });
  console.log(expensiveItems);
}
expensiveItems();
