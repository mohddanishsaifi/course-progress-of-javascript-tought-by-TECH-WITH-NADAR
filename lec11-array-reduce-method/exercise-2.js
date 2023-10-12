const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const afterTax = prices.reduce((sum , price) => {
    if(price > 6)
        sum += price;
    else
    sum += price * 1.2;
    return sum;
}, 0)


console.log(prices);
console.log(afterTax);