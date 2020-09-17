const fruits = {
  apple: 23,
  orange: 34,
  pear: 16,
  banana: 12,
  lemon: 3,
};

//create array with properties of Object:

const typeOfFruit = Object.keys(fruits);
console.log(typeOfFruit);

//create array with values of properties of Object:

const numberOfFruits = Object.values(fruits);
console.log(numberOfFruits);

//create array of array's with key-value pairs:

const typePlusNumberOfFruits = Object.entries(fruits);
console.log(typePlusNumberOfFruits);

// destructure the array into keys and values:
console.log(`In this fruits Object there are:`);
for (const [fruit, count] of typePlusNumberOfFruits) {
  console.log(`${count} ${fruit}s`);
};
