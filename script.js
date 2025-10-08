// 🌸 Activar música al hacer clic
function iniciarMusica() {
  const musica = document.getElementById("musica");
  musica.play().then(() => {
    musica.volume = 0.6;
    document.querySelector(".boton-musica").style.display = "none";
    crearEstrellitas();
  }).catch(() => {
    alert("💫 Toca la pantalla para activar la música mágica 🎶");
  });
}

// 🌠 Crear estrellitas doradas
function crearEstrellitas() {
  for (let i = 0; i < 40; i++) {
    const estrella = document.createElement("div");
    estrella.classList.add("estrellita");
    estrella.style.left = Math.random() * 100 + "vw";
    estrella.style.background = `radial-gradient(circle, hsl(${Math.random()*60 + 40}, 90%, 80%), transparent)`;
    estrella.style.animationDuration = 3 + Math.random() * 4 + "s";
    estrella.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(estrella);
  }
}
