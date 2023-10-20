const store = new Map();
store.set("Cups",46);
store.set("Candies", 121);
store.set("Vases", 15);

for(const [key, value] of store) {
    console.log(key, "=> ", value);
}