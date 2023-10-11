const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const lowPrices = prices.filter((price) => {
    if(price * 1.15 < 10.00)
    return true;
    return false;
});

console.log(prices);
console.log(lowPrices);