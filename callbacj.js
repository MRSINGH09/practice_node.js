// Using callbacks and the fs module's asynchronous functions, do the following:
//         1. Create a directory of random JSON files
//         2. Delete those files simultaneously
const fs = require("fs");
function createAndDelete(createDir, createfile, deleteFiles) {
  try {
    createDir();
    for (let i = 0; i < 5; i++) {
      createfile(i);
      console.log("create");
    }
    for (let i = 0; i < 5; i++) {
      deleteFiles(i);
      console.log("del");
    }
    console.log("hii there");
  } catch (error) {
    console.log(error);
  }
}

function createDir() {
  fs.mkdir("./testFs/randomJson", { recursive: true }, (error) => {
    if (error) throw new Error(error);
    else {
      console.log("file creation successful");
    }
  });
}

function createfile(name) {
  fs.writeFile(
    `./testFs/randomJson/${name}.json`,
    "",
    { recursive: true },
    (err) => {
      if (err) {
        throw new Error(`${name}:`, err);
      } else {
        console.log(` ${name}.json file created successfullycreated`);
      }
    }
  );
}

function deleteFile(name) {
  fs.rm(`./testFs/randomJson/${name}.json`, (err) => {
    if (err) {
      throw new Error(`${name}.json :`, err);
    } else {
      console.log("deletion successFull");
    }
  });
}

createAndDelete(createDir, createfile, deleteFile);
