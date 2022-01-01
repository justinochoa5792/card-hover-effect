const cardWrapper = document.getElementById("cardWrapper");
const card = document.getElementById("card");
const highlight = document.getElementById("highlight");

const xAngle = 10;
const yAngle = 10;

function hoverEffect(e) {
  card.style.transition = "none";
  highlight.style.transition = "none";

  const x = e.offsetX;
  const y = e.offsetY;

  const { width, height } = cardWrapper.getBoundingClientRect();

  const halfWidth = width / 2;
  const halfHeight = height / 2;

  const rotationY = ((x - halfWidth) / halfWidth) * xAngle;
  const rotationX = ((y - halfHeight) / halfHeight) * yAngle;

  card.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
  highlight.style.left = `${(rotationY / yAngle) * 30 * -1}%`;
  highlight.style.top = `${(rotationX / xAngle) * 30 * -1}%`;
}

function addTransition() {
  card.style.transition = "transform 0.5s ease-in-out";
  card.style.transform = `rotateY(0) rotateX(0)`;
  highlight.style.transition = "left 0.5s ease-in-out, top 0.5s ease-in-out";

  highlight.style.left = `-20%`;
  highlight.style.top = `-13%`;
}

cardWrapper.addEventListener("mousemove", hoverEffect);

cardWrapper.addEventListener("mouseleave", addTransition);
