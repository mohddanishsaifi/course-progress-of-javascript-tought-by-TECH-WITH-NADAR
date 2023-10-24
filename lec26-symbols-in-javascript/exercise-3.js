const book = {
  name: "1984",
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,
};

book[Symbol.asyncIterator] = async function* () {
  const entries = Object.entries(book);
  for (const entry of entries) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(entry);
      }, 1000);
    });
  }
};

const useAsync = async () => {
  for await (const value of book) {
    console.log(value);
  }
};
useAsync();
