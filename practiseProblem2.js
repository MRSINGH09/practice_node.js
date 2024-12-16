const products = [
  {
    category: "Electronics",
    items: [
      { name: "Laptop", price: 1000, inStock: true },
      { name: "Phone", price: 500, inStock: false },
    ],
  },
  {
    category: "Groceries",
    items: [
      { name: "Apple", price: 2, inStock: true },
      { name: "Milk", price: 3, inStock: false },
    ],
  },
];
//   Use map and filter to create an array of all in-stock items.
//   Use reduce to calculate the total price of all in-stock items.
//   Extract the names of all in-stock items into an array using map.

const stockItems = products
  .reduce((acc, category) => {
    acc.push(...category.items);
    return acc;
  }, [])
  .filter((items) => items.inStock);
const totalPriceOfStockItem = stockItems.reduce(
  (acc, item) => (acc += item.price),
  0
);
console.log(totalPriceOfStockItem);
const stockItemNames = stockItems.map((item) => item.name);
