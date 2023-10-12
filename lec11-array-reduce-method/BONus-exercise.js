const nums = [10, 30, 50, 70, 90];

const squares = nums.map((num) => {
    return num**2;
});
const over1000 = squares.filter((square) => {
    if(square > 1000) 
    return true;
    else 
    return false;

});

const finale = over1000.reduce((result, current) => {
    return result + current;
}, 0)

const alternative = nums
  .map((num) => {
    return num ** 2;
  })
  .filter((square) => {
    if (square > 1000) return true;
    else return false;
  })
  .reduce((result, current) => {
    return result + current;
  }, 0);
console.log(nums);
console.log(squares);
console.log(over1000);
console.log(finale);

console.log(alternative)