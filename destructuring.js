// const team = {
//   leader: {
//     name: "Alice",
//     role: "Team Lead",
//   },
//   members: [
//     { name: "Bob", role: "Developer" },
//     { name: "Charlie", role: "Designer" },
//   ],
// };

// //   Accepts the team object as an argument.

// const numbers = [10, 20, 30, 40, 50, 60, 70];
// const arr = numbers.splice(2, 2);
// console.log(numbers, arr);
// numbers.splice(2, 0, 25, 35);
// console.log(numbers);
// numbers.splice(5, 2, "sixty", "seventy");
// console.log(numbers);
const data = [
  { id: 1, name: "Alice", age: 25, score: 85 },
  { id: 2, name: "Bob", age: 30, score: 92 },
  { id: 3, name: "Charlie", age: 28, score: 78 },
  { id: 4, name: "David", age: 22, score: 88 },
  { id: 5, name: "Emma", age: 27, score: 74 },
  { id: 6, name: "Frank", age: 35, score: 80 },
  { id: 7, name: "Grace", age: 29, score: 91 },
  { id: 8, name: "Henry", age: 26, score: 86 },
  { id: 9, name: "Isabel", age: 32, score: 82 },
  { id: 10, name: "Jack", age: 24, score: 87 },
  { id: 11, name: "Kate", age: 31, score: 76 },
  { id: 12, name: "Liam", age: 34, score: 90 },
  { id: 13, name: "Mia", age: 23, score: 75 },
  { id: 14, name: "Noah", age: 33, score: 89 },
  { id: 15, name: "Olivia", age: 29, score: 95 },
  { id: 16, name: "Peter", age: 27, score: 81 },
  { id: 17, name: "Quinn", age: 25, score: 73 },
  { id: 18, name: "Rachel", age: 28, score: 84 },
  { id: 19, name: "Sam", age: 32, score: 93 },
  { id: 20, name: "Tina", age: 22, score: 70 },
  { id: 21, name: "Uma", age: 35, score: 88 },
  { id: 22, name: "Victor", age: 30, score: 82 },
  { id: 23, name: "Wendy", age: 24, score: 86 },
  { id: 24, name: "Xander", age: 33, score: 79 },
  { id: 25, name: "Yara", age: 31, score: 90 },
  { id: 26, name: "Zane", age: 26, score: 77 },
  { id: 27, name: "Anna", age: 28, score: 85 },
  { id: 28, name: "Ben", age: 30, score: 92 },
  { id: 29, name: "Cathy", age: 29, score: 78 },
  { id: 30, name: "Don", age: 27, score: 83 },
  { id: 31, name: "Eva", age: 25, score: 74 },
  { id: 32, name: "Finn", age: 24, score: 88 },
  { id: 33, name: "Gina", age: 31, score: 81 },
  { id: 34, name: "Hank", age: 33, score: 86 },
  { id: 35, name: "Ivy", age: 29, score: 80 },
  { id: 36, name: "James", age: 32, score: 95 },
  { id: 37, name: "Kim", age: 23, score: 77 },
  { id: 38, name: "Leo", age: 26, score: 89 },
  { id: 39, name: "Mandy", age: 28, score: 72 },
  { id: 40, name: "Ned", age: 25, score: 91 },
  { id: 41, name: "Omar", age: 30, score: 85 },
  { id: 42, name: "Paula", age: 24, score: 94 },
  { id: 43, name: "Quincy", age: 27, score: 83 },
  { id: 44, name: "Rita", age: 32, score: 76 },
  { id: 45, name: "Steve", age: 35, score: 87 },
  { id: 46, name: "Tara", age: 31, score: 80 },
  { id: 47, name: "Ugo", age: 26, score: 92 },
  { id: 48, name: "Vera", age: 28, score: 78 },
  { id: 49, name: "Will", age: 30, score: 84 },
  { id: 50, name: "Xena", age: 25, score: 88 },
  { id: 51, name: "Yasmin", age: 29, score: 75 },
  { id: 52, name: "Zoe", age: 32, score: 89 },
  { id: 53, name: "Adam", age: 24, score: 93 },
  { id: 54, name: "Beth", age: 33, score: 82 },
  { id: 55, name: "Carl", age: 27, score: 87 },
  { id: 56, name: "Diana", age: 26, score: 74 },
  { id: 57, name: "Eli", age: 35, score: 90 },
  { id: 58, name: "Faye", age: 31, score: 83 },
  { id: 59, name: "Gary", age: 29, score: 77 },
  { id: 60, name: "Helen", age: 28, score: 85 },
  { id: 61, name: "Ian", age: 30, score: 91 },
  { id: 62, name: "Jill", age: 25, score: 79 },
  { id: 63, name: "Ken", age: 32, score: 94 },
  { id: 64, name: "Liz", age: 27, score: 81 },
  { id: 65, name: "Matt", age: 26, score: 86 },
  { id: 66, name: "Nina", age: 24, score: 82 },
  { id: 67, name: "Oscar", age: 29, score: 80 },
  { id: 68, name: "Penny", age: 35, score: 88 },
  { id: 69, name: "Quinn", age: 30, score: 75 },
  { id: 70, name: "Rick", age: 33, score: 92 },
  { id: 71, name: "Sara", age: 25, score: 73 },
  { id: 72, name: "Tom", age: 24, score: 90 },
  { id: 73, name: "Ursula", age: 32, score: 78 },
  { id: 74, name: "Vince", age: 28, score: 82 },
  { id: 75, name: "Wade", age: 27, score: 85 },
  { id: 76, name: "Xander", age: 31, score: 89 },
  { id: 77, name: "Yvonne", age: 29, score: 86 },
  { id: 78, name: "Zach", age: 35, score: 80 },
  { id: 79, name: "Amy", age: 30, score: 84 },
  { id: 80, name: "Bill", age: 32, score: 91 },
  { id: 81, name: "Chloe", age: 28, score: 95 },
  { id: 82, name: "Doug", age: 24, score: 70 },
  { id: 83, name: "Ella", age: 27, score: 87 },
  { id: 84, name: "Fred", age: 26, score: 74 },
  { id: 85, name: "Gail", age: 31, score: 90 },
  { id: 86, name: "Holly", age: 29, score: 77 },
  { id: 87, name: "Isaac", age: 25, score: 88 },
  { id: 88, name: "Jake", age: 30, score: 76 },
  { id: 89, name: "Kelly", age: 33, score: 89 },
  { id: 90, name: "Lara", age: 32, score: 81 },
  { id: 91, name: "Mark", age: 24, score: 92 },
  { id: 92, name: "Nancy", age: 28, score: 83 },
  { id: 93, name: "Owen", age: 27, score: 78 },
  { id: 94, name: "Paul", age: 26, score: 80 },
  { id: 95, name: "Rosa", age: 29, score: 85 },
  { id: 96, name: "Tim", age: 31, score: 87 },
  { id: 97, name: "Uma", age: 24, score: 75 },
  { id: 98, name: "Vito", age: 32, score: 88 },
  { id: 99, name: "Willa", age: 35, score: 91 },
  { id: 100, name: "Xia", age: 30, score: 79 },
];
// Group users into age ranges: 20-25, 26-30, 31-35. For each group:

//     Find the user with the highest score.
//     Return an object for each group with the group range, top scorer's name, and their score.

const groupAge = data.reduce(
  (group, student) => {
    if (student.age >= 20 && student.age <= 25) {
      group["20-25"].push(student);
    } else if (student.age >= 26 && student.age <= 30) {
      group["26-30"].push(student);
    } else if (student.age >= 31 && student.age <= 35) {
      group["31-35"].push(student);
    } else {
    }
    return group;
  },
  {
    "20-25": [],
    "26-30": [],
    "31-35": [],
  }
);
console.log(groupAge);

let avgScoreByGroup = {};
for (let group in groupAge) {
  const totalScore = groupAge[group].reduce((total, student) => {
    total += student.score;
    return total;
  }, 0);
  avgScoreByGroup[group] = {
    averageScore: (totalScore / groupAge[group].length).toFixed(2),
  };
}
console.log(avgScoreByGroup);

const averageScorebyFirstName = data.reduce((acc, curr) => {
  if (acc.hasOwnProperty(curr.name[0])) {
    acc[curr.name[0]]["cnt"]++;
    acc[curr.name[0]]["average"] += Number(
      (curr.score / acc[curr.name[0]]["cnt"]).toFixed(2)
    );
  } else {
    acc[curr.name[0]] = { cnt: 1, average: curr.score };
  }
  return acc;
}, {});
console.log(averageScorebyFirstName);
//most common age
const ageCnt = data.reduce((acc, curr) => {
  if (acc.hasOwnProperty(curr.age)) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(ageCnt);
let commonAgecnt = 0;
let commonAge = 0;
for (let age in ageCnt) {
  if (ageCnt[age] > commonAgecnt) {
    commonAge = Number(age);
    commonAgecnt = ageCnt[age];
  }
}
console.log(commonAge);
