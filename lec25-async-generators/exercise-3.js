const asyncGenerator = async function* (time) {
    while(true){
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        }, time)
    })
    time = time * 2;
}
}
const generatorObject = asyncGenerator(1);

const objectFunction = async () => {
    for await (const item of generatorObject) {
        console.log(item);
    }
}
objectFunction();