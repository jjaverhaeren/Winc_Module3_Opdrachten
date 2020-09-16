// Deel A:

// const HollandsBroodjeKaas = () => {
//     Neem een wit puntje(broodje);
//     snijd het wit puntje open;
//     smeer echte ongezouten roomboter op het witte puntje;
//     beleg het witte puntje met kaas;
// }

const HollandsBroodjeKaas = () => {
  console.log("Neem een wit puntje(broodje).");
  console.log("snijd het wit puntje open.");
  console.log("smeer echte ongezouten roomboter op het witte puntje.");
  console.log("beleg het witte puntje met kaas.");
};

HollandsBroodjeKaas();

//DEEL B:

//function declaration:
function makeSandwich(topping) {
  console.log(`There you go, a sandwich with ${topping}.`);
}

//function call(s):
makeSandwich("hagelslag");
makeSandwich("pindakaas");

// DEEL C:
function calculateDiscountedPrice(totalAmount, discount) {
  return Math.round(totalAmount - discount);
}

console.log(`Dat is dan €${calculateDiscountedPrice(30, 8)},- alstublieft.`);

//DEEL D:
function calculateDiscountedPrice2(totalAmount, discount) {
  if (totalAmount < 25) {
    return totalAmount;
  } else {
    return Math.round(totalAmount - discount);
  }
}

console.log(`Dat is dan €${calculateDiscountedPrice2(20, 8)},- alstublieft.`);
console.log(`Dat is dan €${calculateDiscountedPrice2(30, 8)},- alstublieft.`);
