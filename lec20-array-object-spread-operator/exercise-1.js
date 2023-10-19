const views = [[5, 10, 20], [10, 20, 30]];

const viewsCopy = [...views];
viewsCopy[1].push(40);
viewsCopy[0].pop();

console.log(views);
console.log(viewsCopy);

viewsCopy.push([100, 200]);
console.log("-------------------------")
console.log(views);
console.log(viewsCopy);