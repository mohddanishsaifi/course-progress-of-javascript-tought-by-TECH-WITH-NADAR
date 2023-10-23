const asyncGenerator = async function* (sentence) {
    let vowelsString = "AEIOUaeiou";
    for(const letter of sentence) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                if(vowelsString.includes(letter)) {
                    resolve('*')
                } else{
                    resolve(letter.toUpperCase());
                }
            }, 100)
        })
    }
}

const generatorObject = asyncGenerator("Monkeys are coolest animal!");

const useGenerator = async () => {
    for await (const letter of generatorObject) {
        console.log(letter);
    }
}
useGenerator();