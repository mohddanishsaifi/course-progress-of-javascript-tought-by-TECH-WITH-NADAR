let loggedIn = false;
let loopCount = 0;
while (loggedIn === false) {
    console.log("Incorrect login credentials");
    loopCount++;
    if(loopCount === 3) {
        loggedIn = true;
    }
}
console.log("Sucessfully logged in!")