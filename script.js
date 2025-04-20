function changeBackgroundColor(color) {
  let section;
  section = document.getElementById("coding-journey");
  section.style.backgroundColor = color;
}

let intro;
intro = document.getElementById("intro");
intro.addEventListener("click", () => changeBackgroundColor("#2CA02C"));

let react;
react = document.getElementById("react");
react.addEventListener("click", () => changeBackgroundColor("#FF7F0E"));

document.getElementById("backend").addEventListener("click", () => changeBackgroundColor("#9467BD"));

