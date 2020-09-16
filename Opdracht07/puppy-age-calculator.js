const calculateDogAge = function(age, conversionRate) {
    let dogAge = conversionRate * age;
    console.log(`Your doggie is ${dogAge} years old in dog years!`);
;}

console.log(calculateDogAge(2, 7));
console.log(calculateDogAge(5, 7));
console.log(calculateDogAge(2, 8));