const banana = {
    name: "banana", 
    quantity: 1,
    price: 1.95,
};

const apple = {
    name: "apple",
    quantity: 1,
    price: 1.45,
};
const candy = {
    name: "candy",
    quantity: 1,
    price: 3.50,
};
const store = new Map();

store.set("storeNumber", 5);
store.set("locationCity", "Milan");
store.set("locationCountry", "Italy");
store.set("products", [banana, apple, candy]);

console.log("-----------3--")
console.log(store);
console.log("-------------------------")
for(let i = 0; i < store.get("products").length; i++) {
    console.log(store.get("products")[i])
}
console.log("----5-");

console.log(store.get("products")[2]);

store.get("products")[0].price = 1.75;

console.log(store);
console.log(banana);

candy.price = 4.99;

console.log(store);
console.log(candy);