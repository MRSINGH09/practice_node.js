const employees = [
  { id: 1, name: "Alice Johnson", department: "Engineering", salary: 75000 },
  { id: 2, name: "Bob Smith", department: "Marketing", salary: 50000 },
  { id: 3, name: "Charlie Adams", department: "Engineering", salary: 82000 },
  { id: 4, name: "Diana Prince", department: "Sales", salary: 55000 },
  { id: 5, name: "Edward Johnson", department: "Marketing", salary: 60000 },
  { id: 6, name: "Fiona Clark", department: "Engineering", salary: 78000 },
  { id: 7, name: "George King", department: "Sales", salary: 47000 },
  { id: 8, name: "Hannah Brown", department: "Engineering", salary: 83000 },
  { id: 9, name: "Isabel Smith", department: "Sales", salary: 49000 },
];
//   Create a function that filters employees by their department.
function filterEmplpyeByDepertment(department) {
  return employees
    .filter((employe) => employe.department == department)
    .reduce((acc, employe) => {
      acc.push({ id: employe.id, name: employe.name, salary: employe.salary });
      return acc;
    }, []);
}
console.log(filterEmplpyeByDepertment("Engineering"));

// Use map to extract the last names of all employees.

function lastName() {
  return employees.map((employe) => {
    return employe.name.split(" ")[1];
  });
}
console.log(lastName());

// employe with highest salary

function highestSalary() {
  return employees.reduce(
    (acc, employe) => {
      if (employe.salary > acc.salary) acc = employe;
      return acc;
    },
    { salary: 0 }
  );
}

console.log(highestSalary());
