const myButton = document.querySelector(".btn-alert");
const myButton2 = document.querySelector("#mybutton2");
const myButton3 = document.querySelector("#mybutton3");

const body = document.querySelector("body");

const alertMe = () => {
  alert(`button clicked`);
};

const changeColor = () => {
  body.classList.add("red-background");
};

const toggleColor = () => {
  body.classList.toggle("red-background");
};

myButton.addEventListener("click", alertMe);
myButton2.addEventListener("click", changeColor);
myButton3.addEventListener("click", toggleColor);
