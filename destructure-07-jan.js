const company = {
  name: "TechCorp",
  departments: [
    {
      name: "Engineering",
      manager: { name: "Alice", age: 40 },
      employees: [
        {
          name: "Bob",
          skills: ["JavaScript", "React", "Node.js"],
          projects: [
            { title: "Project A", deadline: "2024-05-01" },
            { title: "Project B", deadline: "2024-06-15" },
          ],
        },
        {
          name: "Charlie",
          skills: ["Python", "Django", "Machine Learning"],
          projects: [
            { title: "Project X", deadline: "2024-04-20" },
            { title: "Project Y", deadline: "2024-07-30" },
          ],
        },
      ],
    },
    {
      name: "Marketing",
      manager: { name: "Diana", age: 35 },
      employees: [
        {
          name: "Eve",
          skills: ["SEO", "Content Writing", "Analytics"],
          projects: [
            { title: "Campaign 1", deadline: "2024-03-01" },
            { title: "Campaign 2", deadline: "2024-08-15" },
          ],
        },
      ],
    },
  ],
};
//   Use destructuring to extract the names of all departments and their managers.
const {
  departments: [
    {
      name: departmentName,
      manager: { name: managerName },
    },
  ],
} = company;
console.log(departmentName, managerName);
