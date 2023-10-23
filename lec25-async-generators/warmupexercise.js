const asyncGenerator = async function* () {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * 10);
            resolve(randomNumber);
        }, 1000)
    })
}
const asyncGeneratorObject = asyncGenerator();

const asyncFunction = async () => {
    for await (const value of asyncGeneratorObject) {
        console.log(value);
    }
}
asyncFunction();