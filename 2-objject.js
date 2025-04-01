// Write a function filterAdults that takes an array of objects, where each object represents a person with properties name and age. Return an array containing only the people who are 18 or older.
// const people = [
//   { name: "John", age: 16 },
//   { name: "Jane", age: 22 },
//   { name: "Mark", age: 17 },
//   { name: "Mary", age: 19 },
// ];
// function filterAdults(people) {
//   const resultArr = people.filter((elem) => elem.age >= 18);
//   return resultArr;
// }
// // debuger;

// console.log(filterAdults(people));

// function timerTesting() {
//   console.time(`timer`);
//   for (let i = 0; i < 2000000; i++) {}
//   console.timeEnd("timer");
// }
// timerTesting();

console.log("script start");

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2 start");
  await async3();
  console.log("async2 end");
}

async function async3() {
  console.log("async3 start");
  return Promise.resolve().then(() => {
    console.log("async3 promise resolved");
  });
}

setTimeout(() => {
  console.log("setTimeout");
}, 0);

async1();

Promise.resolve()
  .then(() => {
    console.log("promise1");
    return Promise.resolve().then(() => {
      console.log("nested promise in promise1");
    });
  })
  .then(() => {
    console.log("promise2");
  })
  .then(() => {
    console.log("promise3");
  })
  .then(() => {
    console.log("promise4");
  });

console.log("script end");
