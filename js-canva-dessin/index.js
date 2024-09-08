const drawingArea = document.querySelector("#drawing");
const ctx = drawingArea.getContext("2d");
const posX = document.querySelector(".surX");
const posY = document.querySelector(".surY");
let start = false;
let x = 0;
let y = 0;
let erase = document.querySelector("#erase");
let color = document.querySelector("#colorPicker");
let color2 = document.querySelector("#colorPicker2");
let currentColor = color.value;
let currentColor2 = color2.value;
let canvas2 = document.createElement("canvas");
let ctx2 = canvas2.getContext("2d");
canvas2.width = drawingArea.width;
canvas2.height = drawingArea.height;
let range = document.querySelector(".range");

color2.addEventListener("input", function () {
  currentColor2 = this.value;
  redraw();
});
color.addEventListener("input", function () {
  currentColor = this.value;
});
drawingArea.addEventListener("mousedown", () => {
  start = true;
  ctx.beginPath();
  ctx.strokeStyle = currentColor;
  ctx2.beginPath();
  ctx2.strokeStyle = currentColor;
  ctx.lineWidth = range.value;
  ctx2.lineWidth = range.value;
});
document.addEventListener("mouseup", () => {
  start = false;
});
drawingArea.addEventListener("mousemove", (e) => {
  if (start) {
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx2.lineTo(x, y);
    ctx2.stroke();
  }
  x = e.offsetX;
  y = e.offsetY;
  posX.textContent = `X : ${x}`;
  posY.textContent = `Y : ${y}`;
});
drawingArea.addEventListener("mouseleave", () => {
  posX.textContent = `X :`;
  posY.textContent = `Y :`;
});
erase.addEventListener("click", () => {
  ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
});
function redraw() {
  ctx.fillStyle = currentColor2;
  ctx.fillRect(0, 0, drawingArea.width, drawingArea.height);
  ctx.drawImage(canvas2, 0, 0);
}
