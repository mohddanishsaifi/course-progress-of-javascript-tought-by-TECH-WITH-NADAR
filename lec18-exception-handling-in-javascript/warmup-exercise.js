console.log("Program Started");

try{
    throw new Error("Uh oh!");
} catch(error) {
    console.error(error);
}

console.log("Program completed");