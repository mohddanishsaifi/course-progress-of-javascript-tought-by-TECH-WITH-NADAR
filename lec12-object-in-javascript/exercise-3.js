const houseForSale = {
    area: 940,
    value: 320000,
    streetName: 'Fifth Street',
    built: '2012',
    owner: {name : "blake", age: 29},
    offers: [290000, 295000, 315000, 312000],

};

console.log(houseForSale);

delete houseForSale.built;

houseForSale.owner.age = 30;

console.log(houseForSale.offers.reduce((max, current) => {
    if(max < current)
        max = current;
    return max;
}, 0));

houseForSale["sale price"] = 312000;

console.log(houseForSale);
