const names = new Set();

const capsNames = new Set();

names.add("Bilbo");
names.add("Hermione");
names.add("Spock");
names.add("Leia");

for(const name of names) {
    capsNames.add(name.toUpperCase())
};

for(const capName of capsNames) {
    console.log(capName)
}