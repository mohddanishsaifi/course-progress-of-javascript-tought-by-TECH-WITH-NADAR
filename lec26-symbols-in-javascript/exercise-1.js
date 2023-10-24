const movie = {
    name: "Blade Runner",
    director: "Ridley Scott",
    year: "1992",
    rating: 89, 
    genre: "Science Fiction",
    [Symbol("budget")]: 30,
    [Symbol("Box office")]: 41.6,
}

for(const [key, value] of Object.entries(movie)) {
    console.log(`${key} => ${value}`);
}
for (const prop of Object.getOwnPropertySymbols(movie)) 
console.log(prop);