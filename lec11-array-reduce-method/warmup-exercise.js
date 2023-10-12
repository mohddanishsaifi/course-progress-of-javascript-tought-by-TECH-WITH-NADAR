const points = [55, 56, 57, 58, 59, 60, 100];

const sum = points.reduce((result, point) => {
        result += point;
        return result;
}, 0)

console.log(points);
console.log(sum);