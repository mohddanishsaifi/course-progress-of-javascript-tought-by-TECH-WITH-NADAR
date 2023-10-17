let number = 1337;
try {
  number += Math.floor(Math.random() * 1000);
  console.log(number);
  if (number < 2000) {
    throw new Error("You lose!");
  } else {
    console.log("You win!");
  }
} catch (error) {
  console.log(error);
  console.log(number);
}
console.log("Programm complete");
