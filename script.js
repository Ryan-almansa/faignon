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




function createBird() {
  const bird = document.createElement("div");
  bird.classList.add("bird");

  // Position verticale aléatoire (en haut de l'écran)
  const yPosition = Math.random() * window.innerHeight * 0.5;
  bird.style.top = `${yPosition}px`;

  // Direction aléatoire : gauche -> droite ou droite -> gauche
  const flyRight = Math.random() > 0.5;
  bird.style.left = flyRight ? `-50px` : `${window.innerWidth + 50}px`;
  bird.style.transform = flyRight ? "scaleX(1)" : "scaleX(-1)";

  // Ajout dans le document
  document.body.appendChild(bird);

  // Animation : déplacement horizontal
  setTimeout(() => {
    bird.style.transition = "transform 5s linear";
    bird.style.transform += flyRight
      ? ` translateX(${window.innerWidth + 100}px)`
      : ` translateX(-${window.innerWidth + 100}px)`;
  }, 100);

  // Supprime l'oiseau après 5 secondes
  setTimeout(() => bird.remove(), 5000);
}

// Crée un oiseau toutes les 2 secondes
setInterval(createBird, 2000);
