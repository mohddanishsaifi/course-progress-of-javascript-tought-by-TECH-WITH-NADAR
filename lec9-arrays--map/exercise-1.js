const bools = [true, true, false, true, false, false];

const newBools = bools.map((bool) => {
    if(bool)
    return Math.random();
    return 0;
})

console.log(bools);
console.log(newBools);