const user = {
  name: "Alice",
  contact: {
    email: "alice@example.com",
    address: {
      city: "Wonderland",
      zip: "12345",
    },
  },
};

const {
  name,
  contact: {
    email,
    address: { city, zip },
  },
} = user;
console.log(name, email, city, zip);

const {
  name: userName,
  contact: {
    email: userEmail,
    address: { city: userCity, zip: userZip },
  },
} = user;

console.log(userName, userEmail);

const numbers = [1, 2, 3, 4, 5];

const [one, two, ...rest] = numbers;
console.log(rest);
