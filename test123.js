function setTimeer(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}
async function counter(n) {
  for (let i = 0; i < n; i++) {
    const data = await setTimeer(i);
    console.log(data);
  }
}
counter(5);
