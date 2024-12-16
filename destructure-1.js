const response = {
  data: {
    user: {
      id: 123,
      name: "Chris",
      settings: {
        notifications: true,
        darkMode: false,
      },
    },
    posts: [
      { id: 1, title: "First Post", likes: 100 },
      { id: 2, title: "Second Post", likes: 200 },
    ],
  },
};

const {
  data: {
    user: { id, name },
  },
} = response;

console.log(id, name);

const {
  data: {
    user: {
      settings: { notifications, darkMode },
    },
  },
} = response;
console.log(notifications, darkMode);

const {
  data: {
    posts: [, { title }],
  },
} = response;
console.log(title);

const {
  data: {
    posts: [firstPost, secondPost],
  },
} = response;
console.log(firstPost, secondPost);
