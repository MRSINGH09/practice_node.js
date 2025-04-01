const fs = require("fs");

// fs.promises
//   .writeFile("./testFs/practice03.txt", "")
//   .then(() => {
//     console.log("file is created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// fs.rm("./testFs/practice03.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file is successfully removed");
//   }
// });

function writeFile() {
  return new Promise((resolve, reject) => {
    fs.writeFile("./testFs/prac-03.txt", "hello", { flag: "a" }, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("file is written successfully");
      }
    });
  });
}

writeFile()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
async function readFile() {
  const data = await fs.promises.readFile("./testFs/prac-03.txt", "utf-8");
  console.log(data);
}
readFile();
fs.promises
  .mkdir("./testFs-03", { recursive: true })
  .then(console.log("file is created"))
  .catch((err) => console.log(err));
