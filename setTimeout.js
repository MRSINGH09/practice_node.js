function double(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2 * num);
    }, 1 * 1000);
  });
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
async function count() {
  for (let index = 0; index < arr.length; index++) {
    console.log(await double(arr[index]));
  }
}
count();
// arr.forEach(async (val, index) => {
//   const result = await double(val, index);
//   console.log(result);
// });
