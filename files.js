const fs = require("fs");
const { clearInterval } = require("timers");
function deleteFile(name) {
  return new Promise((resolve) => {
    fs.promises.rm(name).then(() => {
      resolve("file is deleted successfully");
    });
  });
}

fs.promises.writeFile(`./testFs/test.txt`, "").then(() => {
  console.log("file created successfully");

  let cnt = 5;
  const intervelInstance = setInterval(() => {
    console.log(`file is deleted in ${cnt--} seconds`);
    if (cnt == 0) {
      clearInterval(intervelInstance);
      deleteFile(`./testFs/test.txt`).then((data) => {
        console.log(data);
      });
    }
  }, 1000);
});
