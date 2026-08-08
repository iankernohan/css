const zoomIn = document.getElementById("button-zoom-in");
const zoomOut = document.getElementById("button-zoom-out");
const zoomRange = document.getElementById("zoom-range");

const fontSizeChangeAmount = 1;
let currentFontSize = parseInt(localStorage.getItem("currentFontSize"));

if (!currentFontSize) {
  localStorage.setItem("currentFontSize", initialFontSize);
  currentFontSize = initialFontSize;
}

document.body.style.fontSize = `${currentFontSize}px`;
zoomRange.value = currentFontSize + "";

zoomIn.addEventListener("click", handleZoomIn);

function handleZoomIn() {
  const updated = currentFontSize + fontSizeChangeAmount;
  document.body.style.fontSize = `${updated}px`;
  const zoomAmount = localStorage.setItem("currentFontSize", updated);
  currentFontSize = updated;
}

zoomOut.addEventListener("click", handleZoomOut);

function handleZoomOut() {
  const updated = currentFontSize - fontSizeChangeAmount;
  document.body.style.fontSize = `${updated}px`;
  const zoomAmount = localStorage.setItem("currentFontSize", updated);
  currentFontSize = updated;
}

zoomRange.addEventListener("input", (e) => {
  document.body.style.fontSize = `${e.target.value}px`;
  const zoomAmount = localStorage.setItem("currentFontSize", e.target.value);
  currentFontSize = parseInt(e.target.value);
});
