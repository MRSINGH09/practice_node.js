const fs = require("fs");
// fs.mkdir("./testFs/testDirectory", { recursive: true }, (error) => {
//   console.log("created !");
// });
// try {
//   fs.writeFile(
//     "./testFs/test2.js",
//     'console.log("hello")',
//     { recursive: false },
//     (err) => {
//       if (err) throw new Error(err);
//       else console.log("file is created");
//     }
//   );
// } catch (err) {
//   console.log(err);
// }

fs.mkdir("./testFs/testDir", { recursive: true }, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log("directory creation successfully");
  }
});

const p1 = new Promise((resolve, reject) => {
  fss.writeFile(
    "./testFs/testDir/test1.js",
    "hii there",
    { recursive: true },
    (err) => {
      if (err) reject(err);
      else resolve("file created successfully");
    }
  );
});
// const data = fs.readFile("./testFs/testDir/test1.js", (err) => {
//   if (err) {
//     throw new Error(err);
//   } else {
//     console.log("reading is successful");
//   }
// });
// console.log(data);
// try {
//   fs.rm("./testFs/testDirectory", { recursive: true }, (err) => {
//     if (err) {
//       throw new Error(err);
//     } else {
//       console.log("deletion successful");
//     }
//   });
// } catch (err) {}

// try {
//   fs.rm("./testFs/testDir", { recursive: true }, (err) => {
//     if (err) {
//       throw new Error(err);
//     } else {
//       console.log("deletion successful");
//     }
//   });
// } catch (error) {
//   console.log(error);

data.then((res) => console.log(res));
// // }
