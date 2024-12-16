// Given three files (file1.txt, file2.txt, file3.txt), read all files' contents in parallel using Promise.all.
// Combine the content and write it to a new file called combined.txt.
// Log a success message once the operation is complete.

const fs = require("fs");

const promise2 = new Promise((resolve, reject) => {
  fs.readFile("./testFs/file2.txt", "utf-8", (err, data) => {
    if (err) reject("not readed");
    else {
      resolve(data);
    }
  });
});
const promise3 = new Promise((resolve, reject) => {
  fs.readFile("./testFs/file3.txt", "utf-8", (err, data) => {
    if (err) reject("not readed");
    else {
      resolve(data);
    }
  });
});
const promise1 = new Promise((resolve, reject) => {
  fs.readFile("./testFs/file3.txt", "utf-8", (err, data) => {
    if (err) reject("not readed");
    else {
      resolve(data);
    }
  });
});
function write(data, fileName) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./testFs/${fileName}`, data, (err) => {
      if (err) {
        reject("not writed");
      }
      resolve("writing success");
    });
  });
}
function readFiles() {
  return Promise.all([promise1, promise2, promise3]);
}
readFiles().then((data) => {
  console.log(data);
  let combinedText = "";
  for (let eachData of data) {
    combinedText += eachData;
  }
  write(combinedText, "combined.txt").then((res) => {
    console.log(res);
  });
});

async function readFilesAsync() {
  try {
    const data = await readFiles();
    let combinedData = "";
    for (let eachData of data) {
      combinedData += eachData;
    }
    write(combinedData, "combinedtextAsync");
  } catch (err) {
    console.log(err);
  }
}
readFilesAsync();
