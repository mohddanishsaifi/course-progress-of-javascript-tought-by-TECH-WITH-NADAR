const user = {
    name : "Misha", 
    age: 22,
    settings: {colour: "blue"}
};

console.log("Creating user");
try {
console.log(user.profile.colour);
} catch (error) {
    console.log(error);
}   



console.log("User Created");