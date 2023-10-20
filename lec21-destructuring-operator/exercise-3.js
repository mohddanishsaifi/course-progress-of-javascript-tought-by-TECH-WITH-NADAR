const xyzCalc = ({x, y, z}) => {
    return 5 * x - 2 * y -z;
}
const result1 = xyzCalc({x: 20, y: 2, z: 7});
const result2 = xyzCalc({x: 2, y: 1, z: 20});
const result3 = xyzCalc({x: 100, y: 100,z: 100});
console.log(result1);
console.log(result2);
console.log(result3);
