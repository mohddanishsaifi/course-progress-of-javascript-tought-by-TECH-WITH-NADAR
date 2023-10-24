const book = {
    name: "1984",
    author: "George Orwell", 
    year: 1949,
    rating: 4.6,
    genre: "Science Fiction",
    movie: true,
    [Symbol.iterator]: function* () {
        
        yield* Object.values(this);
    }
}

for(const value of book) {
    console.log(value);
}