for(let loopCount = 1; loopCount <= 100; loopCount++) {
    if(loopCount === 50)
    console.log("Half way there!");
    else if(loopCount === 100)
    console.log("You made it!");
    else if(loopCount % 10 === 0)
    console.log("Checkpoint!", loopCount);
}

console.log("All done!")