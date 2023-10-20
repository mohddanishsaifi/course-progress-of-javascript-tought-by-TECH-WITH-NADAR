const snacks = {
    chips: {name: "Pringles", salty: true},
    candy: {name: "Twizzlers", salty: false},
    chocolate: {name: "Mars", salty: false}
};
const {candy, fruit = {name : "Banana", salty: false}} = snacks;

console.log(candy);
console.log(fruit);