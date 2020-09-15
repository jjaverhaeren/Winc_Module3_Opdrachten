const age = 17;
const isFemale = true;
const driverStatus = "zat";

if (age >= 18 && isFemale) {
  console.log("Je mag naar binnen. Welkom in de Natte Dweil!");
} else {
  console.log(
    "Sorry, de Natte Dweil laat alleen dames van 18 jaar en ouder binnen."
  );
}

if (driverStatus === "bob") {
  console.log("Je mag rijden. Veilig thuis en tot volgende keer");
} else {
  console.log("Het is beter om de auto te laten staan. We bellen een taxi.");
}
