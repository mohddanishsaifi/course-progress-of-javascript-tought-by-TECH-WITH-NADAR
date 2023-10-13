const backpack = new Map();

backpack.set(1, {name: "Sword",  value: 300});
backpack.set(2, {name: "Banana", value: 5});
backpack.set(3, {name: "Gold Nugget", value: 10000});
backpack.set(4, {name: "Pants", value: 100});

for(const item of backpack) {
  
    console.log(`${item[1].name}: $${item[1].value}`);
}