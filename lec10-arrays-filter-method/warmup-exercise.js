const practice = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const evenNumbers = practice.filter((number) => {
    if(number % 2 === 0) {
        return true;
    }
    return false;
});

console.log(practice);
console.log(evenNumbers);