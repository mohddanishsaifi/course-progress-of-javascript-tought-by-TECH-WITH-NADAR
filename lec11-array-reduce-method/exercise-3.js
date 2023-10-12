const items = ["light" , "banana", "phone", "book", "mouse"];

const caps = items.map((item) => {
    return item.toUpperCase();
});
const concat = caps.reduce((concatinated, currentItem)=> {
    return concatinated + " " + currentItem;
}, "");

const alternative = items
  .map((item) => {
    return item.toUpperCase();
  })
  .reduce((concatinated, currentItem) => {
    return concatinated + " " + currentItem;
  }, "");

console.log(items);
console.log(caps);
console.log(concat);

console.log(alternative)