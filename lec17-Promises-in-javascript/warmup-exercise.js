console.log("Program Started");
const promise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        resolve();
    }, 3000)
})
console.log(promise);
console.log("Program in progress...")
promise.then(()=> {
    console.log("Program completed")
})