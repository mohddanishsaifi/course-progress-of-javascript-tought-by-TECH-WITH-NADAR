const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const uniqueNumbers = new Set();

for(let i = 0; i < numbers.length; i++) {
    if(uniqueNumbers.has(numbers[i])) {
        console.log(numbers[i]);
        break;
    } else {
        uniqueNumbers.add(numbers[i]);
    }
}