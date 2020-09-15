// const age = 18;
// const isFemale = true;
// const driverStatus = "bob";

// if (age >= 18) {
//   console.log("Je mag naar binnen.");
// } else {
//   console.log("Sorry, je mag niet naar binnen.");
// }

// if (isFemale) {
//   console.log("Hartelijk welkom op onze LadiesNight!");
// } else {
//   console.log("Sorry man, vanavond alleen ladies.");
// }

// if (driverStatus === "bob") {
//   console.log("Fijne avond Bob. Rijdt voorzichtig en tot volgende keer!");
// } else {
//   console.log(
//     "Het lijkt ons beter dat je de auto laat staan. We bellen een taxi voor je."
//   );
// }

let age = 45;

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else if (age < 18) {
  console.log(
    "Sorry. Aan klanten jongen dan 18 jaar schenken wij geen alcohhol"
  );
} else {
  console.log("Dat is dan €3 alsjeblieft.");
}

// const name = "Henk";
// const name = "Bram";
const name = "Sarah";
if (name === "Bram" || name === "Sarah") {
  console.log("Gefeliciteerd! Je krijgt een gratis biertje van ons!");
} else {
  console.log("Dat is dan €3 alsjeblieft.");
}

const gratisCadeau = (totalAmount) => {
  if (totalAmount > 100) {
    console.log(
      "Voor deze speciale gelgenheid, een fles Champagne van de zaak!"
    );
  } else if (totalAmount > 50) {
    console.log("Hoppa! Een gratis portie Nacho's");
  } else if (totalAmount > 25) {
    console.log("Alsjeblieft! Een portie gratis bitterballen!");
  }
};

// gratisCadeau(30);
// gratisCadeau(55);
gratisCadeau(102);
