const items = [
  {
    item: "mouse pad",
    price: "$30",
    category: "electronics",
  },
  {
    item: "tshirt",
    price: "$38",
    category: "apparel",
  },
  {
    item: "table",
    price: "$321",
    category: "furniture",
  },
  {
    item: "keyboard",
    price: "$300",
    category: "electronics",
  },
  {
    item: "charging cable",
    price: "$90.5",
    category: "electronics",
  },
  {
    item: "adapter",
    price: "$100.5",
    category: "electronics",
  },
];

// ] filter electronics below $100.5, use only reduce
// and give output like this "the items less than $100.5 are 1. mouse pad 2. adapter ...

function electronicsItem() {
  let cnt = 1;
  let filteredItems = items.reduce((acc, item) => {
    const price = Number(item.price.split("").slice(1).join(""));
    if (item.category === "electronics" && Number(price) < 100.5) {
      acc += ` ${cnt++}. ${item.item}`;
    }
    return acc;
  }, "the items less than $100.5 are");
  console.log(filteredItems);
  return filteredItems;
}

console.log(electronicsItem());
