const values = [[1, 2, 3], [0, 0, 1], [3, 6, 9], [0, 1, 2]];

const hasTwos = values.filter((value) => {
    // for(let i = 0; i < value.length; i++) {
    //     if(value[i] === 2)
    //     return true;
    // }
    if(value.includes(2))
    return  true;
    return false;
});

console.log(values);

console.log(hasTwos);