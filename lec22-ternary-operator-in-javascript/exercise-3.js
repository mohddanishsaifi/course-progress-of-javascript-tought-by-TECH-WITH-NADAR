const character = ["Han Solo", "Spock", "Darth", "Yoda", "Neo", "Sarah Connor"];

const newCharacter = character.filter((item) => {
    if(item.includes(" ")) {
        return true;
    } else {
        return false;
    }
})


const newCharacter1 = character.filter(item => item.includes(' ') ? true : false)
console.log(newCharacter1);