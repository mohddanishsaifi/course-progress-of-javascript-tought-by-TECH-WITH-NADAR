const nums = [10, 20, 30, 40, 50];

const timesTwo = nums.map((num) => {
    return 2 * num;
});
const over50 = timesTwo.filter((item) => {
    if(item > 50) 
    return true;
    return false;
})
console.log(nums);
console.log(timesTwo);
console.log(over50);