function promiseAll(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject(new TypeError("first argument must be an array"));
    } else if (arr.length == 0) {
      resolve([]);
    } else {
      const result = [];
      let resolved = 0;
      arr.forEach((promise, index) => {
        if (!isPromse(promise)) {
          resolved++;
          result[index] = promise;
          if (resolved == arr.length) {
            resolve(result);
          }
        } else {
          promise
            .then((resolvedData) => {
              result[index] = resolvedData;
              if (resolved == arr.length) {
                resolve(result);
              }
            })
            .catch((err) => {
              reject(new Error(err));
            });
        }
      });
    }
  });
}

function isPromse(input) {
  return typeof input.then === "function";
}
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);
promiseAll([p1, p2, p3, 10]).then((data) => {
  console.log(data);
});
