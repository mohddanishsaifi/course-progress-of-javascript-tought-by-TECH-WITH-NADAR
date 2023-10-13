const maxico = new Map();

maxico.set("id", 24);
maxico.set("name", "Mexico");
maxico.set("capital", "Mexico City");
maxico.set("neighbours", ["USA", "Guatemala", "Belize"]);
console.log(maxico);

maxico.set("id", 25);
maxico.get("neighbours").push("Honduras");

console.log(maxico);