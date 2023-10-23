const randomNumber = function* () {
    while(true) {
        yield Math.random();
    }
}

const randomGeneratorObject = randomNumber();

for(let i = 0; i < 10; i++) {
    let value = randomGeneratorObject.next().value;
    console.log(i, value);
}