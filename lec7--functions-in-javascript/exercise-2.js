const login = (username, password) => {
    if(username === "admin" ) {
        return true;
    }else if(username === "monkey" && password === "123") {
        return true;
    } else if(username === "moomoo" && password === "farm") {
        return true;
    } else 
        return false;
}

const test = login("hello", 'meow');
const test2 = login('admin', 'lol');
const test3 = login('monkey', '123');
const test4 = login('moomoo', 'farm');
const test5 = login('moomoo', 'moo');

console.log(test);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);