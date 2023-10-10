const multiple = 10;
const numbers = [10, 11, 12, 13, 14, 15];


const newNumbers = numbers.map((number)=> {
    return number * multiple;
})

for(let i = 0; i < newNumbers.length; i++) {
    console.log(numbers[i] , 'x' , multiple, '=', newNumbers[i])
}