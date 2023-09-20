let chosenSize = 16;
let chosenColor = "#393E46";
let lastChosenColor = "#393E46";
let rainbowMode = false;
let newRgbArray = [];
const container = document.getElementById("container");
const boxColor = document.getElementById("colorPicker");
const rainbowButton = document.getElementById("rainbowButton");
const gridSize = document.getElementById("gridSize");
const gridSizeLabel = document.getElementById("gridSizeLabel");
const resetButton = document.getElementById("resetButton");
const boxes = document.querySelectorAll(".box");
createGrid(chosenSize);

function createGrid(chosenSize) {
  container.textContent = "";
  for (let index = 0; index < chosenSize; index++) {
    const column = document.createElement("div");
    column.classList.toggle("column");
    container.appendChild(column);
    for (let index = 0; index < chosenSize; index++) {
      const boxCreated = document.createElement("div");
      boxCreated.classList.toggle("box");
      column.appendChild(boxCreated);
      paintOnHover(boxCreated);
    }
  }
}

gridSize.addEventListener("input", (event) => {
  chosenSize = event.target.value;
  gridSizeLabel.textContent =
    `${event.target.value}` + "x" + `${event.target.value}`;
  createGrid(chosenSize);
});
boxColor.addEventListener("input", (event) => {
  chosenColor = event.target.value;
  lastChosenColor = chosenColor;
});

resetButton.addEventListener("click", (event) => {
  chosenSize = 16;
  chosenColor = "#393E46";
  colorPicker.value = chosenColor;
  gridSize.value = chosenSize;
  gridSizeLabel.textContent = chosenSize + "x" + chosenSize;
  createGrid(chosenSize);
});

function paintOnHover(boxCreated) {
  boxCreated.addEventListener("mouseover", (event) => {
    if (rainbowMode === false) {
      boxCreated.style.backgroundColor = chosenColor;
    } else {
      chosenColor = randomRgbColor();
    } //
    boxCreated.style.backgroundColor = chosenColor;
  });
}

rainbowButton.addEventListener("click", (event) => {
  rainbowMode = !rainbowMode;
  if (rainbowMode === true) {
    rainbowButton.classList.toggle("rainbowButtonActive");
  } else {
    rainbowButton.classList.toggle("rainbowButtonActive");
    chosenColor = lastChosenColor;
  }
});

function randomRgbColor() {
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  return "rgb(" + r + "," + g + "," + b + ")";
}
console.log(chosenColor);

const hexToRgb = (hex) =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));

// TODO Разобраться с затемнением(по 10% за наводку). Пока что получается хреново
for (let iOut = 0; iOut < 3; iOut++) {
  let originalN = hexToRgb(chosenColor)[iOut];
  let modifiedN = originalN;
  console.log(originalN);
  tenPercent = Math.floor((originalN / 100) * 10);
  console.log(tenPercent);
  for (let i = 0; i < 20; i++) {
    if (modifiedN > 0) {
      modifiedN -= tenPercent;
      newRgb = modifiedN;
      newRgbArray.splice(iOut, 1, newRgb);
    } else {
      modifiedN = 0;
      newRgb = modifiedN;
      newRgbArray.splice(iOut, 1, newRgb);
    }
    console.log(newRgb);
  }
  console.log(modifiedN);
  console.log(newRgbArray);
}
