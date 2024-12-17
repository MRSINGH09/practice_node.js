// reate a Promise that resolves after 2 seconds with a message "Promise Resolved!".
// Log the message once the Promise is resolved.

const { resolve } = require("path");

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved!");
//   }, 2000);
// });

// promise1.then((data) => {
//   console.log(data);
// });

// // Create a Promise that rejects with an error message "Promise Rejected!".
// // Use .catch to handle the rejection and log the error.
// const promise2 = new Promise((resolve, reject) => {
//   reject("Promise Rejected!");
// });

// promise2.then((data) => console.log(data)).catch((err) => console.log(err));

// // Create a chain of Promises where:

// //     The first Promise resolves with the number 5.
// //     The second Promise multiplies the result by 2.
// //     The third Promise subtracts 3 from the result.

// // Log the final result.
// function promises(num) {
//   return new Promise((resolve, reject) => {
//     resolve(num);
//   });
// }

// promises(5)
//   .then((data) => promises(data * 2))
//   .then((data) => promises(data - 3))
//   .then((data) => console.log(data));

//   Create a function waitAndLog that:

//     Takes a number as input.
//     Resolves with the input after a delay of 1 second.

// Use this function in a Promise chain to log numbers 1, 2, and 3 sequentially with a delay.
//

// Create a chain of Promises where:

//     The first Promise resolves with "Step 1".
//     The second Promise throws an error "Error at Step 2".
//     The third Promise resolves with "Step 3".

// Handle the error and log a message when an error occurs.
// function promise(err, step) {
//   return new Promise((resolve, reject) => {
//     if (err) reject(`Error at step ${step}`);
//     resolve(`step ${step}`);
//   });
// }

// promise(false, 1)
//   .then((data) => {
//     console.log(data);
//     return promise(true, 2);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//     return promise(false, 3);
//   })
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

// Create a function fetchData that simulates an API call by returning a Promise:

//     Resolves with data after 2 seconds.
//     Rejects with an error "API Error" if a flag is set to true.

// Use the function and handle both success and failure cases.
// function fetchData(flag) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (flag) {
//         resolve({ name: "abhishek singh", Love: "Munnu" });
//       }
//       reject("API Error");
//     }, 2000);
//   });
// }
// fetchData(false)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Write a program that:

//     Creates three Promises that resolve with "A", "B", and "C" after delays of 1, 2, and 3 seconds, respectively.
//     Use Promise.all to log all results at once when all Promises resolve.
function promises(str, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str);
    }, time * 1000);
  });
}
// Promise.all([promises("A", 1), promises("B", 2), promises("c", 3)]).then(
//   (data) => {
//     console.log(data);
//   }
// );

// Create three Promises that resolve with "First", "Second", and "Third" after delays of 2, 4, and 6 seconds, respectively.
// Use Promise.race to log the result of the first Promise that resolves.

// Promise.race([promises("First", 2), 1, promises("third", 6)]).then((data) =>
//   console.log(data)
// );

// Create a function retry that:

//     Accepts a Promise-returning function and a retry count.
//     Attempts to resolve the Promise up to the given retry count.
//     If all attempts fail, it rejects with an error message "All retries failed!".

function returnPromise() {
  return new Promise((resolve, reject) => reject("err attempt"));
}
// function retry(callBack, retryCnt) {
//   callBack()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err + retryCnt--);
//       if (retryCnt > 0) {
//         retry(callBack, retryCnt);
//       } else {
//         console.log("All retries failed!");
//       }
//     });
// }
// retry(returnPromise, 5);

//Write a function conditionalPromise that:

// Takes a number as input.
// Returns a Promise that resolves with "Even Number" if the number is even.
// Rejects with "Odd Number" if the number is odd.

// function conditionalPromise(num) {
//   return new Promise((resolve, reject) => {
//     if (num % 2 == 0) resolve("Even Number");
//     reject("Odd Number");
//   });
// }
// conditionalPromise(3)
//   .then((data) => console.log(data))
//   .catch((err) => {
//     throw new Error(err);
//   });

// Create a file called test.txt with content "Hello, World!".
// Append " Adding more content." to the file.
// Read the content of the file and log it.
// Delete the file.
const fs = require("fs");
function readWriteAndDelete(mode, filePath, content = null) {
  return new Promise((resolve, reject) => {
    if (mode == "write") {
      fs.writeFile(filePath, content, { flag: "a" }, (err) => {
        if (err) reject("writing fails");
        resolve("writiing is successful");
      });
    } else if (mode == "delete") {
      fs.rm(filePath, (err) => {
        if (err) reject(err);
        resolve("file deleted successfully");
      });
    } else {
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    }
  });
}
// readWriteAndDelete("write", "./testFs/promisesFs.txt", "Hello, World!")
//   .then((data) => {
//     console.log(data);
//     return readWriteAndDelete(
//       "write",
//       "./testFs/promisesFs.txt",
//       " Adding more content."
//     );
//   })
//   .then((data) => {
//     console.log(data);
//     return readWriteAndDelete("read", "./testFs/promisesFs.txt");
//   })
//   .then((data) => {
//     console.log(data);
//     return readWriteAndDelete("delete", "./testFs/promisesFs.txt");
//   })
//   .then((data) => {
//     console.log(data);
//   });

async function solution() {
  try {
    const data = await readWriteAndDelete(
      "write",
      "./testFs/promisesFs.txt",
      "Hello, World!"
    );
    console.log(data);
    const data2 = await readWriteAndDelete(
      "write",
      "./testFs/promisesFs.txt",
      "more content added"
    );
    console.log(data2);
    const data3 = await readWriteAndDelete("read", "./testFs/promisesFs.txt");
    console.log(data3);
    const data4 = await readWriteAndDelete("delete", "./testFs/promisesFs.txt");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

solution();
