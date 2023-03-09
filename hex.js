const color = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color_code = document.body.querySelector(".color-code");

const btn = document.body.querySelector(".btn");

const popup_text = document.body.querySelector(".popup_text");

btn.addEventListener("click", function () {
  let cc = "#";
  for (let i = 0; i < 6; i++) {
    cc += color[getRandomNumber()];
  }

  color_code.textContent = cc;
  document.body.style.backgroundColor = cc;
  popup_text.innerHTML = "Click to copy!";
});

function getRandomNumber() {
  return Math.floor(Math.random() * color.length);
}

color_code.addEventListener("click", () => {
  navigator.clipboard.writeText(color_code.textContent);
  popup_text.innerHTML = "Copied!";
});
