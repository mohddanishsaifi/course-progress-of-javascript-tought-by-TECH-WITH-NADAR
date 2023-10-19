const animal = {
  name: "Koala",
  kingdom: "Australia",
  cute: true,
  friends: [{ name: "kangaroo", kingdom: "Australia" }],
};
const koala = {...animal, "tail": false};

console.log(animal);
console.log(koala);

animal.cute = false;

console.log("----");
console.log(animal);
console.log(koala);

console.log("---------------");

animal.friends.cute = false;
console.log(animal);
console.log(koala);