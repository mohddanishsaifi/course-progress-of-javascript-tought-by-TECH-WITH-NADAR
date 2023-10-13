const maxico = {
    id: 24,
    name: "Maxico",
    capital: "Mexico City",
    neighbours: ["USA", "Guatemal", "Belize"],
};

console.log(maxico);

maxico.id = 25;


maxico.neighbours.push("Honduras");
console.log(maxico);