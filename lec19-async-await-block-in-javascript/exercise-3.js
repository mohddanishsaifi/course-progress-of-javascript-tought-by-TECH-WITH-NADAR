const goGetCandies = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ candy: "Sour keys", quantity: 10 });

        }, 2000)
    });
}

const sellCandies = (candy) => {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(25 * candy.quantity);
        }, 3000)
    })
}
const useCandy = async () => {
    try{
    const candy = await goGetCandies();
    const result = await sellCandies(candy);
    console.log(result);
    }catch(error) {
        console.log("Error happened")
    }
}
useCandy();

goGetCandies().then((candyObject)=> {
    return candyObject.quantity;
}).then((value) => {
    console.log(value * 25);
})