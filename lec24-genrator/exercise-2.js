const randomAmountFromRange = function* (amount, min, max) {
    for(let i = 1; i <= amount; i++)  {
        yield Math.floor(Math.random() * (max - min + 1) + min);
    }
}
const generatorObject = randomAmountFromRange(3, 10, 20);
const generatorObject2 = randomAmountFromRange(5, 100, 200);
const generatorObject3 = randomAmountFromRange(10, 1000, 2000);

for(const item of generatorObject) {
    console.log(item);
}
console.log("-------------")
for (const item of generatorObject2) {
  console.log(item);
}
console.log("-------------------------")
for (const item of generatorObject3) {
  console.log(item);
}