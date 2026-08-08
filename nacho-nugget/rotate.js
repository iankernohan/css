const left = document.getElementById("button-left");
const right = document.getElementById("button-right");
const up = document.getElementById("button-up");
const down = document.getElementById("button-down");

const xDisplay = document.getElementById("x-display");
const yDisplay = document.getElementById("z-display");
const scene = document.querySelector(".scene");

let initialZ = 45;
let initialX = 65;
let initialFontSize = 20;
let intervalId;
const fireRate = 100;
const turnAmount = 5;

let currentX = localStorage.getItem("currentX");
let currentZ = localStorage.getItem("currentZ");

if (!currentX) {
  localStorage.setItem("currentX", initialX);
  currentX = initialX;
}
if (!currentZ) {
  localStorage.setItem("currentZ", initialZ);
  currentZ = initialZ;
}

scene.style.transform = `rotateX(${currentX ?? initialX}deg) rotateZ(${currentZ ?? initialZ}deg)`;
updateDisplay(currentX ?? initialX, currentZ ?? initialZ);

function updateDisplay(x, z) {
  xDisplay.innerText = `X: ${x}deg`;
  yDisplay.innerText = `Z: ${z}deg`;
}

right?.addEventListener("mousedown", () => {
  turnRight();

  intervalId = setInterval(() => {
    turnRight();
  }, fireRate);
});

right?.addEventListener("mouseup", () => {
  clearInterval(intervalId);
});

right?.addEventListener("mouseleave", () => {
  clearInterval(intervalId);
});

function turnRight() {
  currentX = parseInt(localStorage.getItem("currentX"));
  currentZ = parseInt(localStorage.getItem("currentZ"));
  const updated = currentZ - turnAmount;
  localStorage.setItem("currentZ", updated);
  scene.style.transform = `rotateX(${currentX}deg) rotateZ(${updated}deg)`;
  updateDisplay(currentX, updated);
}

left?.addEventListener("mousedown", () => {
  turnLeft();

  intervalId = setInterval(() => {
    turnLeft();
  }, fireRate);
});

left?.addEventListener("mouseup", () => {
  clearInterval(intervalId);
});

left?.addEventListener("mouseleave", () => {
  clearInterval(intervalId);
});

function turnLeft() {
  currentX = parseInt(localStorage.getItem("currentX"));
  currentZ = parseInt(localStorage.getItem("currentZ"));
  const updated = currentZ + turnAmount;
  localStorage.setItem("currentZ", updated);
  scene.style.transform = `rotateX(${currentX}deg) rotateZ(${updated}deg)`;
  updateDisplay(currentX, updated);
}

up?.addEventListener("mousedown", () => {
  turnup();

  intervalId = setInterval(() => {
    turnup();
  }, fireRate);
});

up?.addEventListener("mouseup", () => {
  clearInterval(intervalId);
});

up?.addEventListener("mouseleave", () => {
  clearInterval(intervalId);
});

function turnup() {
  currentX = parseInt(localStorage.getItem("currentX"));
  currentZ = parseInt(localStorage.getItem("currentZ"));
  const updated = currentX + turnAmount;
  localStorage.setItem("currentX", updated);
  scene.style.transform = `rotateX(${updated}deg) rotateZ(${currentZ}deg)`;
  updateDisplay(updated, currentZ);
}

down?.addEventListener("mousedown", () => {
  turndown();

  intervalId = setInterval(() => {
    turndown();
  }, fireRate);
});

down?.addEventListener("mouseup", () => {
  clearInterval(intervalId);
});

down?.addEventListener("mouseleave", () => {
  clearInterval(intervalId);
});

function turndown() {
  currentX = parseInt(localStorage.getItem("currentX"));
  currentZ = parseInt(localStorage.getItem("currentZ"));
  const updated = currentX - turnAmount;
  localStorage.setItem("currentX", updated);

  scene.style.transform = `rotateX(${updated}deg) rotateZ(${currentZ}deg)`;
  updateDisplay(updated, currentZ);
}
