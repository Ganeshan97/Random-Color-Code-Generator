const color_code = document.body.querySelector(".color-code");

const btn = document.body.querySelector(".btn");

const popup_text = document.body.querySelector(".popup_text");

btn.addEventListener("click", function () {
  let cc;

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Math.random();
  cc = `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`;

  color_code.textContent = cc;
  document.body.style.backgroundColor = cc;
  popup_text.innerHTML = "Click to copy!";
});

color_code.addEventListener("click", () => {
  navigator.clipboard.writeText(color_code.textContent);
  popup_text.innerHTML = "Copied!";
});
