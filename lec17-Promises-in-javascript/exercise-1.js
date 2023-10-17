console.log("Program Started");

const myPromise = new Promise((resoleve, reject) => {
    setTimeout(() => {
        resoleve("Program complete");
    }, 3000);
    setTimeout(() => {
        reject("Program Failed")
    }, 2000);
});

console.log(myPromise);
console.log("Program in progress...");

myPromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});