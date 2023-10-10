let total = 0;

let grades = [55, 63, 82, 98, 91, 43];

for(let i = 0; i < grades.length; i++) {
    total += grades[i];
}

console.log(total / grades.length);