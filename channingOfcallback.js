const fs = require("fs");
function callBack(fn) {
  console.log("i am reading file 1");
  setTimeout(() => {
    const data = fs.readFile("./testFs/testfile.txt", "utf-8", (err, data) => {
      if (err) {
        throw new Error(err);
      } else {
        console.log("file read successfully");
        return data;
      }
    });
    console.log(data);
  }, 1000);

  //   fn(data);
}
function call2(data) {
  console.log("this is call2");
  console.log(data);
}
function call3() {
  console.log("call 3");
  console.log(data);
}

callBack(call2);
