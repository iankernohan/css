const nacho__and__nugget = document.getElementById("nacho__and__nugget");
const scene = document.querySelector(".scene");

let dragBeginX;
let dragBeginY;

nacho__and__nugget.addEventListener("dragstart", (event) => {
  if (!dragBeginX) dragBeginX = (event.clientX / window.innerWidth) * 100;
  if (!dragBeginY) dragBeginY = (event.clientY / window.innerHeight) * 100;
});

window.addEventListener("dragover", (event) => {
  event.preventDefault();
});

window.addEventListener("drop", (event) => {
  event.preventDefault();

  const dragEndX = (event.clientX / window.innerWidth) * 100;
  const dragEndY = (event.clientY / window.innerHeight) * 100;

  const dragDiffX = dragBeginX - dragEndX;
  const dragDiffY = dragBeginY - dragEndY;

  const sceneStyles = window.getComputedStyle(scene);
  const currentPositionX =
    (parseInt(sceneStyles.left) / window.innerWidth) * 100;
  const currentPositionY =
    (parseInt(sceneStyles.top) / window.innerHeight) * 100;

  const newPositionX = currentPositionX - dragDiffX;
  const newPositionY = currentPositionY - dragDiffY;

  if (newPositionX > -30 && newPositionX < 130)
    scene.style.left = `${newPositionX}%`;
  if (newPositionY > -30 && newPositionY < 130)
    scene.style.top = `${newPositionY}%`;

  dragBeginX = undefined;
  dragBeginY = undefined;
});
