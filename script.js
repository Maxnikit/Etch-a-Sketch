let chosenSize = 16;
let chosenColor = "#393E46";

const container = document.getElementById("container");
const gridSizeLabel = document.getElementById("gridSizeLabel");
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
      boxCreated.addEventListener("mouseover", (event) => {
        boxCreated.style.backgroundColor = chosenColor;
      });
    }
  }
}

const gridSize = document.getElementById("gridSize");
gridSize.addEventListener("input", (event) => {
  chosenSize = event.target.value;
  gridSizeLabel.textContent =
    `${event.target.value}` + "x" + `${event.target.value}`;
  createGrid(chosenSize);
});

const boxes = document.querySelectorAll(".box");
const boxColor = document.getElementById("colorPicker");

boxColor.addEventListener("input", (event) => {
  chosenColor = event.target.value;
});
const resetButton = document.getElementById("resetButton");
console.log(resetButton);
resetButton.addEventListener("click", (event) => {
  console.log("click");
  chosenSize = 16;
  console.log(chosenSize);
  chosenColor = "#393E46";
  colorPicker.value = chosenColor;
});
