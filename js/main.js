document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  // Abrir menú
  menuButton?.addEventListener("click", () => {
    mobileMenu?.classList.remove("-translate-x-full");
  });

  // Cerrar menú
  closeMenu?.addEventListener("click", () => {
    mobileMenu?.classList.add("-translate-x-full");
  });

  // Cerrar menú al hacer scroll
  window.addEventListener("scroll", () => {
    mobileMenu?.classList.add("-translate-x-full");
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
      mobileMenu.classList.add("-translate-x-full");
    }
  });
});
