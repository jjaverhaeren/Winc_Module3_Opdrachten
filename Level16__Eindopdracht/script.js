let body = document.querySelector("body");
let blue = document.querySelector(".color1");
let mint = document.querySelector(".color2");
let strawberry = document.querySelector(".color3");
let vanilla = document.querySelector(".color4");
let cinamon = document.querySelector(".color5");
let cafe = document.querySelector(".color6");
let menu = document.querySelector(".nav");
let topBar = document.querySelector(".nav_bar1");
let middleBar = document.querySelector(".nav_bar2");
let bottomBar = document.querySelector(".nav_bar3");
let returnMsg = document.querySelector(".return-msg");

const colorsOut = () => {
  blue.classList.toggle("color1-out");
  mint.classList.toggle("color2-out");
  strawberry.classList.toggle("color3-out");
  vanilla.classList.toggle("color4-out");
  cinamon.classList.toggle("color5-out");
  cafe.classList.toggle("color6-out");
};

const returnMsgOut = () => {
  returnMsg.classList.toggle("return-out");
};

const returnMsgOutWhite = () => {
  returnMsg.classList.toggle("return-out-white");
};

const hamburgerWhite = () => {
  topBar.classList.toggle("bar-white");
  middleBar.classList.toggle("bar-white");
  bottomBar.classList.toggle("bar-white");
};

const hamburgerActive = () => {
  topBar.classList.toggle("bar-active");
  middleBar.classList.toggle("bar-active");
  bottomBar.classList.toggle("bar-active");
};

const onlyBlueOut = () => {
  mint.classList.toggle("color2-out");
  strawberry.classList.toggle("color3-out");
  vanilla.classList.toggle("color4-out");
  cinamon.classList.toggle("color5-out");
  cafe.classList.toggle("color6-out");
};

const onlyMintOut = () => {
  blue.classList.toggle("color1-out");
  strawberry.classList.toggle("color3-out");
  vanilla.classList.toggle("color4-out");
  cinamon.classList.toggle("color5-out");
  cafe.classList.toggle("color6-out");
};

const onlyStrawberryOut = () => {
  blue.classList.toggle("color1-out");
  mint.classList.toggle("color2-out");
  vanilla.classList.toggle("color4-out");
  cinamon.classList.toggle("color5-out");
  cafe.classList.toggle("color6-out");
};

const onlyVanillaOut = () => {
  blue.classList.toggle("color1-out");
  mint.classList.toggle("color2-out");
  strawberry.classList.toggle("color3-out");
  cinamon.classList.toggle("color5-out");
  cafe.classList.toggle("color6-out");
};

const onlyCinamonOut = () => {
  blue.classList.toggle("color1-out");
  mint.classList.toggle("color2-out");
  strawberry.classList.toggle("color3-out");
  vanilla.classList.toggle("color4-out");
  cafe.classList.toggle("color6-out");
};

const onlyCafeOut = () => {
  blue.classList.toggle("color1-out");
  mint.classList.toggle("color2-out");
  strawberry.classList.toggle("color3-out");
  vanilla.classList.toggle("color4-out");
  cinamon.classList.toggle("color5-out");
};

const allBlue = () => {
  body.classList.toggle("bodyblue");
};
const allMint = () => {
  body.classList.toggle("bodymint");
};
const allStrawberry = () => {
  body.classList.toggle("bodystrawberry");
};
const allVanilla = () => {
  body.classList.toggle("bodyvanilla");
};
const allCinamon = () => {
  body.classList.toggle("bodycinamon");
};
const allCafe = () => {
  body.classList.toggle("bodycafe");
};

const navAnimate = () => {
  redBar.classList.toggle(".redbar-animate");
};

// menu.addEventListener("mouseenter", hamburgerActive);
// menu.addEventListener("mouseleave", hamburgerActive);
menu.addEventListener("click", colorsOut);

blue.addEventListener("click", allBlue);
blue.addEventListener("click", onlyBlueOut);
blue.addEventListener("click", returnMsgOutWhite);
blue.addEventListener("click", hamburgerWhite);
mint.addEventListener("click", allMint);
mint.addEventListener("click", onlyMintOut);
mint.addEventListener("click", returnMsgOut);
strawberry.addEventListener("click", allStrawberry);
strawberry.addEventListener("click", onlyStrawberryOut);
strawberry.addEventListener("click", returnMsgOut);
vanilla.addEventListener("click", allVanilla);
vanilla.addEventListener("click", onlyVanillaOut);
vanilla.addEventListener("click", returnMsgOut);
cinamon.addEventListener("click", allCinamon);
cinamon.addEventListener("click", onlyCinamonOut);
cinamon.addEventListener("click", returnMsgOut);
cafe.addEventListener("click", allCafe);
cafe.addEventListener("click", onlyCafeOut);
cafe.addEventListener("click", returnMsgOut);
