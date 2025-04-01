//polyfill promse.race

function PromiceAny(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject(new TypeError("PromiceAny: argument must be an array"));
    } else if (arr.length == 0) {
      resolve(null);
    } else {
      arr.forEach((promise) => {
        if (!isPromise(promise)) {
          resolve(promise);
        } else {
          promise
            .then((data) => {
              resolve(data);
            })
            .catch((err) => {
              reject(err);
            });
        }
      });
    }
  });
}

function isPromise(promise) {
  if (typeof promise.then == "function") {
    return true;
  } else return false;
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
  }, 3000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 resolved");
  }, 4000);
});

PromiceAny([p1, 5, p2, p3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
