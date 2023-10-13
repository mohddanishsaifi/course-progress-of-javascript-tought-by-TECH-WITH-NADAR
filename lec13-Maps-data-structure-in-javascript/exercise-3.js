const houseForSale = new Map();

houseForSale.set("area", 940);
houseForSale.set("value", 320000);
houseForSale.set("streetNumber", "Fifth street");
houseForSale.set("built", 2012);
houseForSale.set("owner", {name: "Blake", age: 29});
houseForSale.set("offers", [290000, 295000,315000, 312000]);

console.log("2", houseForSale);

houseForSale.delete("built");
houseForSale.get("owner").age = 30;

const max = houseForSale.get("offers").reduce((result, current) => {
    if(result < current)
    return current;
    return result;
}, 0);
console.log(max);

houseForSale.set("sale price", 312000);
console.log(houseForSale);
