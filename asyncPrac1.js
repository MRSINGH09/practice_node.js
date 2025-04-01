// Using callbacks and the `fs` module's asynchronous functions, perform the following tasks:

// 1. Create a directory containing multiple `.txt` files, where the name of each file is a random string and its content is a random number between 1 and 100.
// 2. Rename all the `.txt` files in the directory by appending `_renamed` to their original names.
// 3. After renaming, move all the renamed files into a new subdirectory called `renamed_files`.
const fs = require("fs");
// fs.mkdir("./testFs/randomTxt", { recursive: true }, (err) => {
//   if (err) throw new err();
//   else {
//     for (let i = 0; i < 10; i++) {
//       createFile();
//     }
//   }
// });

function createFile() {
  let str = "abcdefghijklmnopqrstuvwxyzAbcdefghijklmnopqrstuvwxyz";
  let name = "";
  for (let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * str.length);
    name += str[index];
  }
  const content = Math.floor(Math.random() * 100 + 1);
  fs.writeFile(`./testFs/randomTxt/${name}.txt`, String(content), (err) => {
    if (err) throw new err();
    else {
      console.log(`file ${name} created`);
    }
  });
}

//
// fs.readdir("./testFs/randomTxt", (err, files) => {
//   if (err) throw new err();
//   console.log(files);
//   files.forEach((file) => {
//     const renamed = file.split(".");
//     fs.rename(
//       `./testFs/randomTxt/${file}`,
//       `./testFs/randomTxt/${renamed[0]}_renamed.txt`,
//       (err) => {
//         if (err) throw new err();
//         else {
//           console.log(`file ${file} is  renamed to ${renamed[0]}_renamed.txt`);
//         }
//       }
//     );
//   });
// });
fs.mkdir("./testFs/randomTxt/renamedDir", { recursive: true }, (err) => {
  if (err) {
    throw new Error();
  } else {
    console.log("file created successfully");
    fs.readdir("./testFs/randomTxt", (err, file) => {
      if (err) throw new Error(err);
      else {
        file.forEach((file) => {
          fs.rename(
            `./testFs/randomTxt/${file}`,
            `./testFs/randomTxt/renamedDir/${file}`,
            (err) => {
              if (err) throw new Error(err);
              console.log(`${file} moved succussfully`);
            }
          );
        });
      }
    });
  }
});
