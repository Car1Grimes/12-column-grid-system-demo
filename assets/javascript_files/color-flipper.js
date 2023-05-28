const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const body = document.getElementById("color-flipper");
const color = document.getElementById("color-flipper__color");
const btn = document.getElementById("color-flipper__btn");
const hexLength = hex.length;

function getRandomHexCode() {
  let hexCode = "#";
  for (let i = 0; i < 6; ++i) {
    hexCode += hex[Math.floor(Math.random() * hexLength)];
  }
  return hexCode;
}

btn.addEventListener("click", function () {
  color.textContent = getRandomHexCode();
  body.style.backgroundColor = getRandomHexCode();
});

btn.addEventListener("mouseover", function () {
  btn.style.backgroundColor = getRandomHexCode();
});
