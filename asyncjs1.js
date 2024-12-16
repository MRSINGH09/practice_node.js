async function func1() {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (i == 6) {
          reject("intentional Error");
        }
        resolve(i);
      }, 1000);
    });
  }
  return "func1 completed";
}

func1()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
