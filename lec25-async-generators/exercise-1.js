const asyncGenerator = async function* ()  {
    while(true) {
        const random = Math.floor(Math.random() *  101);

    if(random <= 50) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Fast");
            }, 500)
        });
    } else {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Slow");
            }, 3000)
        });
    }
    }
}

const generatorObject = asyncGenerator();
let i = 10
const useAsyncGenerator = async () => {
    for await (const randomNumber of generatorObject) {
        console.log(randomNumber)
        if(i == 0)
        break;
    i--;
    }
}

useAsyncGenerator();