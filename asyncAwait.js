const data = require("./app.json");

async function number() {
  for (let i = 0; i < 10; i++) {
    console.log("hello");
    const num = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
      }, 2000);
    });
    console.log(num);
    console.log("hii" + i);
  }
}

// console.log(number());
console.log(data.name);
