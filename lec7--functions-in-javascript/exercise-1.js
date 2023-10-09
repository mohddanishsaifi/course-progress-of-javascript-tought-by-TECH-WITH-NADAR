const noRemainder = (number, mod) => {
    if(number % mod === 0)
        return true;
    else
        return false;
}
const result1 = noRemainder(10, 7);
const result2 = noRemainder(100, 10);
    console.log(result1);
    console.log(result2);