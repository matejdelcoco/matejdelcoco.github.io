// Mobile Menu Logic
const hamburger = document.querySelector(".hamburger");
const navLinks = document.getElementById("nav-links");

function toggleMenu() {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

// Section Navigation
function navigate(sectionId) {
  document
    .querySelectorAll("section")
    .forEach((sec) => sec.classList.remove("active"));
  document
    .querySelectorAll(".nav-links a")
    .forEach((link) => link.classList.remove("active-link"));

  document.getElementById(sectionId).classList.add("active");

  const activeLink = document.getElementById("link-" + sectionId);
  if (activeLink) activeLink.classList.add("active-link");

  if (navLinks.classList.contains("active")) {
    toggleMenu();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// LOGICA INTERATTIVA BRISCOLA GAME
// ==========================================

// Apre/Chiude il pannello del gioco
function toggleGame(btn) {
  const wrapper = document.getElementById("briscola-game-wrapper");
  wrapper.classList.toggle("open");

  if (wrapper.classList.contains("open")) {
    btn.innerHTML = "Close Game ⬆️";
  } else {
    btn.innerHTML = "Try the Game 🎮";

    // Se chiudi il pannello mentre eri a schermo intero, togli il fullscreen
    if (wrapper.classList.contains("fullscreen")) {
      toggleFullscreen();
    }
  }
}

// Allarga il pannello a schermo intero e oscura lo sfondo
function toggleFullscreen() {
  const wrapper = document.getElementById("briscola-game-wrapper");
  const backdrop = document.getElementById("fullscreen-backdrop");

  // Attiva/Disattiva le classi necessarie
  const isFullscreen = wrapper.classList.toggle("fullscreen");
  backdrop.classList.toggle("active", isFullscreen);

  // Blocca lo scroll della pagina principale se sei in fullscreen
  if (isFullscreen) {
    document.body.classList.add("game-fullscreen-active");
  } else {
    document.body.classList.remove("game-fullscreen-active");
  }
}
