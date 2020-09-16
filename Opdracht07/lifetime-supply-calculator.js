const calculateSupply = function(age, amountPerDay) {
    const maxAge = 99;
    const totalAmount = (maxAge - age) * 365 * Math.round(amountPerDay);
    console.log(`You will need €${totalAmount},- to last you untill the ripe old age of ${maxAge}.`);
};

// console.log(calculateSupply(43, 3));
// console.log(calculateSupply(20, 11));
console.log(calculateSupply(65, 11));
console.log(calculateSupply(65, 11.4));
console.log(calculateSupply(65, 11.6));