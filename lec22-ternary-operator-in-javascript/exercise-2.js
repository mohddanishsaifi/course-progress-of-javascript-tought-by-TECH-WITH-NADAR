const wizards = ["Gandalf", "Voidemort", "Harry", "Jafar", "Saruman", "Marlin"];

// const newArray = wizards.map((item) => {
//     if(item.includes('n'))
//     return item.replace('n', '*');
//     else
//     return  item.toUpperCase();
// });


const newArray = wizards.map((item) => item.includes('n') ? item.replaceAll('n', '*') : item.toUpperCase())
console.log(newArray);