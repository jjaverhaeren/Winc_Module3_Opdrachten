let name = prompt(`Hallo! Welkom bij  WHAT's THE MAGIC NUMBER! Hoe heet je?`);
let min = prompt(
  `Hallo ${name}. Geef een min en een max waartussen we het Magic Number gaan raden. Voer eerst het kleinste getal in en druk op OK om verder te gaan.`
);
let max = prompt(`Voer het grootste getal in.`);
Math.floor(Math.random() * (max - min + 1)) + min;
let maxAttempts = 5;
let attempt = 1;

const guess = function () {
  if (maxAttempts - attempt === -1) {
    endGame();
  } else {
    num = prompt(
      `Wat is volgens jou het Magic Number? Voer een heel getal in.`
    );
    if (num === magicNum) {
      win();
    } else {
      lose();
    }
  }
};

const lose = function () {
  if (maxAttempts - attempt === 0) {
    alert(`Sorry ${name}. ${num} was ook niet het Magic Number.`);
    endGame();
  } else {
    alert(
      `Sorry ${name}. ${num} was niet het Magic Number. Je mag nog ${
        maxAttempts - attempt
      } keer raden.`
    );
    attempt++;
    guess();
  }
};

const win = () => {
  alert(
    `WOW ${name}! Je hebt het Magic Number geraden! Je bent hier echt goed in! Druk op OK en daarna cmd-R om nog eens te spelen.`
  );
};

const game = function () {
  if (attempt < maxAttempts) {
    guess();
  } else {
    alert(
      `Sorry ${name}. Je mag niet meer raden. Volgende keer beter! Druk OK en vervolgens cmd-R om nog eens te spelen.`
    );
  }
};

const endGame = function () {
  alert(
    `Het Magic Number was ${magicNum}! Dankjewel voor het spelen van Guess the Magic Number. druk op OK en vervolgens cmd-R om nog een keer te spelen. `
  );
};

game();
