// Write an async function that creates a directory called test.
// Inside the directory, create three files (file1.txt, file2.txt, file3.txt).
// Write "Hello, World!" into each file.
// Read the contents of all files and log them.
const fs = require("fs");
function createDirectoryAndFiles(dirName, fileNamesArr) {
  fs.mkdir(`./testFs/${dirName}`, { recursive: true }, (err) => {
    if (err) throw new Error("directort is not created");
    for (let index = 0; index < fileNamesArr.length; index++) {
      fs.writeFile(
        `./testFs/${fileNamesArr[index]}`,
        "",
        { recursive: true },
        (err) => {
          if (err)
            throw new Error(`file ${fileNamesArr[index]} is not created`);
          fs.writeFile(
            `./testFs/${fileNamesArr[index]}`,
            "Hello, World!",
            (err) => {
              if (err)
                throw new Error(
                  `writing not done in file ${fileNamesArr[index]}`
                );
              fs.readFile(
                `./testFs/${fileNamesArr[index]}`,
                "utf-8",
                (err, data) => {
                  if (err) throw new Error("reading of file is not done");
                  console.log(data);
                }
              );
            }
          );
        }
      );
    }
  });
}
createDirectoryAndFiles("test", ["file1.txt", "file2.txt", "file3.txt"]);
