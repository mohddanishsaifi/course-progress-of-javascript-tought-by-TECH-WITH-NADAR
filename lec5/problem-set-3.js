let loopCounter = 1;

while(loopCounter <= 100) {
    if(loopCounter === 50){
        console.log("Half way there!");
    }else if(loopCounter === 100) {
        console.log("You have made it!");
    }
    else if(loopCounter % 10 === 0) 
    console.log("Checkpoint!", loopCounter)
    loopCounter++;
}

console.log("All Done");