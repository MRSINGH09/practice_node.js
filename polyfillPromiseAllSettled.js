//polyfill of promise.Allsettled()

function promiseAllSettled(arr) {
  return new Promise((resolve) => {
    if (!Array.isArray(arr)) {
      throw new TypeError("input must be an array");
    } else if (arr.length == 0) {
      resolve([{ status: "rsolved", data: "" }]);
    } else {
      const resultArr = [];
      let resolved = 0;
      arr.forEach((promise, index) => {
        if (!isPromise(promise)) {
          resolved++;
          resultArr[index] = { status: "resolved", data: promise };
          if (resolved == arr.length) {
            resolve(resultArr);
          }
        } else {
          promise
            .then((data) => {
              resultArr[index] = { status: "resolved", data: data };
            })
            .catch((err) => {
              if (index + 1 == arr.length) {
                resolve(resultArr);
              }
              resultArr[index] = { status: "rejected", reason: `${err}` };
            })
            .finally(() => {
              resolved++;

              if (resolved == arr.length) {
                resolve(resultArr);
              }
            });
        }
      });
    }
  });
}
function isPromise(promise) {
  if (typeof promise.then == "function") return true;
  else return false;
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 resolved");
  }, 3000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p3 resolved");
  }, 4000);
});

promiseAllSettled([p1, p2, p3]).then((data) => {
  console.log(data);
});
