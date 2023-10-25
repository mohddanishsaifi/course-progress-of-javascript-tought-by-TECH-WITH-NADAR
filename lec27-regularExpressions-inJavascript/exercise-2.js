const email = "monkey@trees.com";

const emailPattern = /\w*@\w*\.com$/;

console.log(emailPattern)
console.log(email.match(emailPattern));