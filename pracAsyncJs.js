// Returns a Promise that resolves to a user's information after 2 seconds.
// fetchUserPosts: Takes a userId as an argument and returns a Promise that resolves to a list of posts after 1 second.

function getUserInformation(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        userId: "123M",
        name: "John Doe",
        email: "johndoe@example.com",
      });
    }, 2000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId == "123M") {
        resolve([
          { id: 1, title: "Post 1", content: "This is post 1" },
          { id: 2, title: "post 2", content: "this is content of post 2" },
        ]);
      }
      reject("userNot found");
    }, 1000);
  });
}

// using promises
// getUserInformation("123M")
//   .then((data) => {
//     // console.log(data);
//     return fetchUserPosts(data.userId);
//   })
//   .then((data) => {
//     console.log(data);
//   });

//using async Await
async function getPost(uId) {
  const user = await getUserInformation(uId);
  const posts = await fetchUserPosts(user.userId);
  console.log(posts);
}
// getPost("123M");

// fetchDataA: Returns a Promise that resolves to "Data from API A" after 1 second.
// fetchDataB: Returns a Promise that resolves to "Data from API B" after 2 seconds.
// fetchDataC: Returns a Promise that resolves to "Data from API C" after 3 seconds.

function fetchDataA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Data from API A");
    }, 1000);
  });
}

function fetchDataB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from API B");
    }, 2000);
  });
}
function fetchDataC() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Data from API C");
    }, 3000);
  });
}
// Promise.all([fetchDataA(), fetchDataB(), fetchDataC()])
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

//   using async await
async function fetchData() {
  try {
    const data = await Promise.all([fetchDataA(), fetchDataB(), fetchDataC()]);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
// fetchData();

// promise.any
// Promise.race([fetchDataA(), fetchDataB(), fetchDataC()])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// const fs = require("fs");
// const promise1 = fs.promises.readFile("./testFs/com.txt", "utf-8");
// promise1
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));
async function func(){
  for(let i=0;i<5;i++){
    const d=await p1
    console.log(d)
    console.log(i)
  }
}
const p1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("hiii")
  },2000)
})
func()