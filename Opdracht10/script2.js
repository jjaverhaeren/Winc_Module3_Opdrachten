let name = prompt(`Hallo! Welkom bij  WHAT's THE MAGIC NUMBER! Hoe heet je?`);
let min = prompt(
  `Geef een min en een max waartussen we het Magic Number gaan raden. Voer eerst het kleinste getal in en druk op OK om verder te gaan.`
);
let max = prompt(`Voer het grootste getal in.`);

let num = prompt(
  `Wat is volgens jou het Magic Number? Voer een heel getal in.`
);

// let roundedNum = Math.round(num);

let magicNum = Math.floor(Math.random() * (max - min + 1) + min);
alert(`${magicNum} was het te raden Magic Number...`);

if (num !== magicNum) {
  alert(
    `Sorry ${name}. ${roundedNum} was dus niet het Magic Number. Je mag nog een keer proberen.`
  );
} else {
  win();
}

const win = () => {
  alert(
    `WOW ${name}! Je hebt het Magic Number geraden! Je bent hier echt goed in! Druk op OK en daarna cmd-R om nog eens te spelen.`
  );
};
