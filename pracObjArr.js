const company = {
  name: "TechSolutions",
  departments: [
    {
      name: "Development",
      employees: [
        { name: "Alice", age: 28, role: "Frontend Developer", salary: 75000 },
        { name: "Bob", age: 35, role: "Backend Developer", salary: 85000 },
      ],
    },
    {
      name: "Marketing",
      employees: [
        { name: "Charlie", age: 30, role: "SEO Specialist", salary: 60000 },
        { name: "David", age: 32, role: "Content Writer", salary: 55000 },
      ],
    },
    {
      name: "HR",
      employees: [{ name: "Eve", age: 29, role: "HR Manager", salary: 65000 }],
    },
  ],
};

// Extract a flat array of all employee names from the company.
function getEmployeeNames() {
  const employeeName = company.departments
    .reduce((employeArr, dept) => {
      employeArr.push(...dept.employees);
      return employeArr;
    }, [])
    .map((employee) => {
      return employee.name;
    });
  console.log(employeeName);
}
getEmployeeNames();

// Calculate the total salary paid to all employees.
function getTotalSalary() {
  const totalSalary = company.departments
    .reduce((employeArr, dept) => {
      employeArr.push(...dept.employees);
      return employeArr;
    }, [])
    .reduce((totalSalary, employee) => {
      return (totalSalary += employee.salary);
    }, 0);
  console.log(totalSalary);
}
getTotalSalary();

function findEmployeeByRole(role) {
  const employeeByRole = company.departments
    .reduce((employeeArr, dept) => {
      employeeArr.push(...dept.employees);
      return employeeArr;
    }, [])
    .filter((employee) => employee.role === role);
  console.log(employeeByRole);
}
findEmployeeByRole("Backend Developer");

// Identify the department that has the highest total salary.
function highestTotalSalary() {
  const departmentWithHighestSalary = company.departments.reduce(
    (deptObj, dept) => {
      const totalSalary = dept.employees.reduce((total, employee) => {
        total += employee.salary;
        return total;
      }, 0);
      if (deptObj.totalSalary < totalSalary) {
        deptObj = { department: dept.name, totalSalary: totalSalary };
      }
      return deptObj;
    },
    { totalSalary: 0 }
  );
  console.log(departmentWithHighestSalary);
}
highestTotalSalary();

// Write a function to calculate the average age of employees in each department.
function averageAge() {
  const averageAgeObj = company.departments.reduce((averageObj, dept) => {
    const totalAge = dept.employees.reduce((totalAge, employee) => {
      return (totalAge += employee.age);
    }, 0);
    averageObj[dept.name] = totalAge / dept.employees.length;
    return averageObj;
  }, {});
  console.log(averageAgeObj);
}
averageAge();
