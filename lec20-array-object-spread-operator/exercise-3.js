const superhero = {
    name: "Bruce wayne", 
    alias: "Batman", 
    universe: "DC", 
    happy: false,
    enimies: ["Joker", "CatWoman", "Bane"],
    bestMovie: {title: "The Dark knight", rating: 95}
}
const newSuperhero = JSON.parse(JSON.stringify(superhero));

newSuperhero.position = "Poison Ivy";
newSuperhero.bestMovie.year = 2008;
console.log("--------------------");

console.log(superhero);
console.log(newSuperhero);