const myConsole = new Map();

myConsole.set("log", (message) => {
    console.log(message);
});

myConsole.set(1, "number one");
myConsole.set("1", "string one");
myConsole.get("log")("hello world");

console.log(myConsole.get(1));
console.log(myConsole.get("1"));