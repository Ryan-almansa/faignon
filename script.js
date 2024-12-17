const grassContainer = document.getElementById("grass-container");

function createRaindrop() {
  const raindrop = document.createElement("div");
  raindrop.classList.add("raindrop");

  const xPosition = Math.random() * window.innerWidth;
  raindrop.style.left = `${xPosition}px`;

  document.body.appendChild(raindrop);

  raindrop.addEventListener("animationend", () => {
    growFlower(xPosition); 
  });
}

function growFlower(x) {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  flower.style.left = `${x}px`;

  grassContainer.appendChild(flower);

  setTimeout(() => flower.remove(), 5000);
}

function growFlowere(x) {
  const flowere = document.createElement("div");
  flowere.classList.add("flower");

  flowere.style.left = `${x}px`;

  grassContainer.appendChild(flowere);

  setTimeout(() => flowere.remove(), 5000);
}

setInterval(createRaindrop, 300);
