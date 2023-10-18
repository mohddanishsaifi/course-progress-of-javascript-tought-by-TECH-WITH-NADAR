const fetchPokemon =  () => {
    const newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Danger, danger!"));
        }, 2000)
    })
    return newPromise;
}

console.log("Program started");

const Pokemon = async () => {   
    let result;
    try {
     result = await fetchPokemon();
     console.log(result.data);

    } catch(error) {
        console.log(error);
    }
    
}

Pokemon();

console.log("Program complete");

/**
 * Program started
 * Program complete
 * {name: "Pickachu", power: 20}
 * 
 */