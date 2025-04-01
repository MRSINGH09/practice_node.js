// polyfil of promise.any

function promiseAny(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject(new TypeError("input type must be an array"));
    } else if (arr.length == 0) {
      resolve(null);
    } else {
      let cnt = 0;
      arr.forEach((promise) => {
        if (!isPromise(promise)) {
          resolve(promise);
        } else {
          promise
            .then((res) => {
              resolve(res);
            })
            .catch(() => {
              cnt++;
              if (cnt == arr.length) {
                reject("all promise is rejected");
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
    reject("p1 resolved");
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

promiseAny([p1, p2, p3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
