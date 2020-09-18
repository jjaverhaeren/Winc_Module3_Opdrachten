alert(
  `Hallo! Welkom bij  WHAT's THE MAGIC NUMBER!   - druk OK om verder te gaan.`
);
let name = prompt("Hoe heet je?");
let number = prompt(
  `Hey ${name}! Raad jij the Magic number!? Noem eens een nummer tussen 0 en 25.`
);
if (number >= 25 || number < 0) {
  alert(
    `Sorry, dat is geen nummer tussen 0 en 25... druk cmd-R om het nog eens te proberen.`
  );
}

let roundedNum = Math.round(num);
alert(`Je hebt ${roundedNum} gekozen.`);

let magicNum = Math.round(Math.random() * 25);
alert(`Het Magic Number was.....${magicNum}!`);

if (roundedNum === magicNum) {
  alert(
    `WOW ${name}!! Het nummer was inderdaad ${magicNum} Jij bent echt goed hierin!`
  );
  alert(
    `Ik vond het leuk. Druk eerst op OK en dan cmd-R om nog eens te spelen.`
  );
} else {
  alert(
    `Jammer ${name}. ${roundedNum} is niet hetzelfde als ${magicNum}. Volgende keer beter. Druk eerst op OK en dan cmd-R om nog eens te spelen.`
  );
}
