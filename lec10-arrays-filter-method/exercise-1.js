const countries = ["France", "South Africa", "Brazil", "United States", "Sweden"];

const newArray = countries.filter((country) => {
    if(country.includes(" "))
    return true;
    return false;
});
console.log(countries);
console.log(newArray);