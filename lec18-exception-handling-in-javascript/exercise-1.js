for(let i = 1; i <= 10; i++) {
    console.log(i);
    if(i === 5) {
        try{
            throw new Error("Boom!");

        } catch(err) {
            console.log(err)
        }
    }
}