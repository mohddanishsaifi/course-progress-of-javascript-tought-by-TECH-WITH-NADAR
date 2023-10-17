console.log("Program started");

const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 10000)
});

console.log(myPromise1);
console.log("Program in progress...");

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 5000)
});

myPromise1.then((num1) => {
    console.log(num1)
});
myPromise2.then((num2) => {
    console.log(num2);
});

Promise.all([myPromise1, myPromise2]).then((values) => {
    console.log(values[0]+values[1] )
});