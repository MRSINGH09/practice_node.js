const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    rating: 4.4,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    rating: 4.9,
  },
  { id: 3, title: "1984", author: "George Orwell", year: 1949, rating: 4.8 },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    rating: 4.6,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    rating: 4.1,
  },
  {
    id: 6,
    title: "Moby Dick",
    author: "Herman Melville",
    year: 1851,
    rating: 3.9,
  },
  {
    id: 7,
    title: "War and Peace",
    author: "Leo Tolstoy",
    year: 1869,
    rating: 4.3,
  },
  { id: 8, title: "The Odyssey", author: "Homer", year: -800, rating: 4.7 },
  {
    id: 9,
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    year: 1320,
    rating: 4.2,
  },
  {
    id: 10,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    year: 1880,
    rating: 4.5,
  },
];

//   Return a list of books with a rating of 4.5 or higher.
// Include the title and the rating in the output.

function booksWithRating() {
  const bookList = books.reduce((list, book) => {
    if (book.rating >= 4.5) {
      list.push({ title: book.title, rating: book.rating });
    }
    return list;
  }, []);
  console.log(bookList);
}
// booksWithRating();

function oldestBook() {
  const oldestBook = books.reduce(
    (oldest, book) => {
      if (book.year < oldest.year) {
        oldest = { title: book.title, author: book.author, year: book.year };
      }
      return oldest;
    },
    { year: 3000 }
  );
  console.log(oldestBook);
}
// oldestBook();

function averageRatingOfCentury() {
  const averageRating = books.reduce(
    (avgObj, book) => {
      if (book.year >= 1800 && book.year < 1900) {
        avgObj["18th-century"]["total"] += book.rating;
        const average = Number(
          (
            avgObj["18th-century"].total / ++avgObj["18th-century"]["cnt"]
          ).toFixed(2)
        );
        avgObj["18th-century"]["average"] = average;
      } else if (book.year >= 1900 && book.year < 2000) {
        avgObj["19th-century"]["total"] += book.rating;
        const average = Number(
          (
            avgObj["19th-century"].total / ++avgObj["19th-century"]["cnt"]
          ).toFixed(2)
        );
        avgObj["19th-century"]["average"] = average;
      } else if (book.year >= 2000 && book.year < 2100) {
        avgObj["20th-century"]["total"] += book.rating;
        const average = Number(
          (
            avgObj["20th-century"].total / ++avgObj["20th-century"]["cnt"]
          ).toFixed(2)
        );
        avgObj["20th-century"]["average"] = average;
      }

      return avgObj;
    },
    {
      "18th-century": { total: 0, cnt: 0, average: 0 },
      "19th-century": { total: 0, cnt: 0, average: 0 },
      "20th-century": { total: 0, cnt: 0, average: 0 },
    }
  );
  console.log(averageRating);
}
averageRatingOfCentury();
