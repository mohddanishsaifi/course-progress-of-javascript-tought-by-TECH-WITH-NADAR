const points = [10, 20, 10, 30, 15, 15, 35, 60, 10];

const uniquePoints = new Set();

for(let i = 0; i < points.length; i++) {
    uniquePoints.add(points[i]);
};
console.log(uniquePoints);
const cheatPoints = new Set(points);
console.log(cheatPoints);