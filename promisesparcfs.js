// Reads a list of file paths from an array.
// Uses Promise.all to fetch the stats of each file (using fs.promises.stat).
// Logs the size of each file in bytes.
// If any file path is invalid, catch the error and log which file caused it.

const fs = require("fs");

function readFiles(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, data) => {
      if (err) {
        reject(`cant read file ${filePath}`);
      } else resolve(data.size);
    });
  });
}
readFiles("./testFs/file1.txt").then((data) => {
  console.log(data);
});

async function readStatus(filePaths) {
  const p1 = readFiles(filePaths[0]);
  const p2 = readFiles(filePaths[1]);
  const data = await Promise.all([p1, p2]);
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
  console.log(data);
}
readStatus(["./testFs/file1.txt", "./testFs/file2.txt", "./testFs/file3.txt"]);

// Reads the content of three files (file1.txt, file2.txt, file3.txt) in parallel using Promise.all.
// Combines the content into a single string.
// Writes the combined content into a new file called combined.txt.
// Logs a success message once the operation is complete.

//callback
function readFile(filePath, string, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      throw new Error(`cant read  ${filePath}`);
    } else {
      string += data;
      callback(string);
    }
  });
}
// readFile("./testFs/file1.txt", "", (data) => {
//   readFile("./testFs/file2.txt", data, (data) => {
//     readFile("./testFs/file3.txt", data, (data) => {
//       console.log(data);
//       fs.writeFile("./testFs/comb1.txt", data, (err) => {
//         if (err) {
//           throw new Error(`cant write`);
//         } else {
//           console.log("Success");
//         }
//       });
//     });
//   });
// });

// promises
function readFilePromises(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(`cant read ${filePath} :`, err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromises("./testFs/file1.txt").then((data) => {
  console.log(data);
});
function readFilespromise() {
  Promise.all([
    readFilePromises("./testFs/file1.txt"),
    readFilePromises("./testFs/file2.txt"),
    readFilePromises("./testFs/file3.txt"),
  ]).then((data) => {
    let combinedStr = data.reduce((acc, data) => {
      acc += data;
      return acc;
    }, "");
    fs.writeFile("./testFs/combinedPromises.txt", combinedStr, (err) => {
      if (err) {
        throw new Error(`cant write`);
      } else {
        console.log("Success");
      }
    });
  });
}
// readFilespromise();

// async await
async function readFilesAsync() {
  try {
    const data = await Promise.all([
      readFilePromises("./testFs/file1.txt"),
      readFilePromises("./testFs/file2.txt"),
      readFilePromises("./testFs/file3.txt"),
    ]);
    console.log(data);
    const combinedData = data.reduce((acc, data) => {
      acc += data;
      return acc;
    }, "");
    console.log(combinedData);
    fs.writeFile("./testFs/combinesAsyncAwait.txt", combinedData, (err) => {
      if (err) throw err;
      console.log("success");
    });
  } catch (err) {
    console.log(err);
  }
}
readFilesAsync();
