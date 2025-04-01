const fs = require("fs");

function createFile(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.promises
        .writeFile(`./testFs/createDelete/${name}.txt`, `hello ${name}`)
        .then(() => {
          resolve(`file ${name} is created`);
        })
        .catch((err) => {
          reject(err);
        });
    }, 1000);
  });
}

function deleteFile(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.promises
        .rm(`./testFs/createDelete/${name}`)
        .then(() => {
          resolve(`file ${name} is deleted successfully`);
        })
        .catch((err) => {
          reject(err);
        });
    }, 1000);
  });
}

async function processTask() {
//   let fileNames = await fs.promises.readdir("./testFs/createDelete");
//   for (let i = 0; i < fileNames.length; i++) {
//     try {
//       const msg = await deleteFile(fileNames[i]);
//       console.log(msg);
//     } catch (err) {
//       throw new Error(err);
//     }
//   }

}

processTask();
