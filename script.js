let chosenSize = 16;

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
      const box = document.createElement("div");
      box.classList.toggle("box");
      column.appendChild(box);
      box.addEventListener("mouseover", changeColor);
    }
  }
}
function changeColor(e) {
  this.style.backgroundColor = "yellow";
}
const gridSize = document.getElementById("gridSize");
gridSize.addEventListener("input", (event) => {
  chosenSize = gridSize.value;
  chosenSize = event.target.value;
  gridSizeLabel.textContent =
    `${event.target.value}` + "x" + `${event.target.value}`;
  createGrid(chosenSize);
});
