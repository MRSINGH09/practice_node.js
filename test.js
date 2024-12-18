async function func() {
  for (let i = 0; i < 5; i++) {
    const d = await p1;
    console.log(d);
    console.log(i);
  }
}
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hiii");
  }, 2000);
});
func();
