const getRandomNumber = function* () {
  for (let i = 1; i <= 5; i++) {
    yield Math.floor(Math.random() * 9 + 1);
  }
};

const groceryList = function* () {
  const groceries = ["Avacado", "Cookie", "Milk", "Soup", "Soda"];

  for (let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * groceries.length);

    const item = groceries[index];
    groceries.splice(index, 1);
    yield item;
  }
};

const randomGeneratorObject = getRandomNumber();
const groceryGeneratorObject = groceryList();

for (let i = 1; i <= 5; i++) {
  let number = randomGeneratorObject.next().value;
  let grocery = groceryGeneratorObject.next().value;
  console.log(number, grocery);
}
