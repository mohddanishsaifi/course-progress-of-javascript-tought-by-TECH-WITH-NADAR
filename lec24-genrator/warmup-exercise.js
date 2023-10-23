const countTo10 = function* () {
    for(let i = 0; i <= 10; i++) {
        yield i;
    }
}

const generatorObject = countTo10();
console.log(generatorObject)

for(const count of generatorObject) {
    console.log(count);
}