const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];
const seenNumbers = new Map();
let j = 2;
for(let i = 0; i < numbers.length; i++) {
    if(!seenNumbers.has(numbers[i])) {
        seenNumbers.set(numbers[i], i);
    } else {
        if(j--)
        console.log(i, seenNumbers.get(numbers[i]))
    }
}
console.log(seenNumbers);