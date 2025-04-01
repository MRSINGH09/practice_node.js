function check() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hiii");
    }, 2000);
  });
}

// function resolvedInTime(timer, promise) {
//   let settledData = null;
//   promise.then((data) => {
//     settledData = data;
//   });
//   const clear_Interval = setInterval(() => {
//     console.log(timer);
//     if (settledData || timer == 0) {
//       clearInterval(clear_Interval);
//       if (settledData) {
//         console.log(settledData);
//       } else {
//         console.error("promise cannot resolved");
//       }
//     } else {
//       timer--;
//     }
//   }, 1000);
// }
resolvedInTime(5, check());
