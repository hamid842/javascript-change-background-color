const colorBtn = document.querySelector(".colorBtn");
const bodyBgc = document.querySelector("body");

const colors = ["yellow", "red", "green", "#3b5698"];

bodyBgc.addEventListener("click", changeColor);

function changeColor() {
  let random = Math.floor(Math.random() * colors.length);
  bodyBgc.style.backgroundColor = colors[random];
}
