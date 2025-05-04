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

  // Smooth scroll para anclas internas
  document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href.includes("#") || href === "#") return true;
      if (href.split("#")[0] !== "" && href.split("#")[0] !== window.location.pathname) return true;

      e.preventDefault();
      const targetId = href.split("#")[1];
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        mobileMenu?.classList.add("-translate-x-full");
      }
    });
  });

  // Ajustar padding del body
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    document.body.style.paddingTop = navbar.offsetHeight + "px";

    // Sticky scroll behavior
    let lastScroll = 0;
    window.addEventListener("scroll", function () {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        navbar.classList.remove("scroll-up");
        return;
      }
      if (currentScroll > lastScroll && !navbar.classList.contains("scroll-down")) {
        navbar.classList.remove("scroll-up");
        navbar.classList.add("scroll-down");
      } else if (currentScroll < lastScroll && navbar.classList.contains("scroll-down")) {
        navbar.classList.remove("scroll-down");
        navbar.classList.add("scroll-up");
      }
      lastScroll = currentScroll;
    });
  }

  // Contact form
  const contactForm = document.getElementById("contact-form");
  contactForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    console.log("Form submitted:", data);
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
    this.reset();
  });

  // Eventos dinámicos
  const portfolioData = [
    {
      title: "Campeonato Nacional 2024",
      category: "Tiro Olímpico",
      image: "assets/portfolio/campeonato-nacional.jpg",
      link: "#",
    },
    {
      title: "Copa ISSF 2024",
      category: "Competencia Internacional",
      image: "assets/portfolio/copa-issf.jpg",
      link: "#",
    },
    {
      title: "Torneo Regional",
      category: "Bench Rest",
      image: "assets/portfolio/torneo-regional.jpg",
      link: "#",
    },
    {
      title: "Steel Challenge",
      category: "Tiro Rápido",
      image: "assets/portfolio/steel-challenge.jpg",
      link: "#",
    },
  ];

  const portfolioGrid = document.querySelector(".portfolio-grid");
  if (portfolioGrid) {
    portfolioData.forEach((item) => {
      const portfolioItem = document.createElement("div");
      portfolioItem.className = "portfolio-item";
      portfolioItem.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <div class="portfolio-overlay">
              <h3>${item.title}</h3>
              <p>${item.category}</p>
              <a href="${item.link}" class="cta-button">Ver Evento</a>
          </div>
        `;
      portfolioGrid.appendChild(portfolioItem);
    });
  }

  // Animación en scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".service-card, .portfolio-item, .stat-card");
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementPosition < windowHeight - 100) {
        element.classList.add("animate");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Inicial
});
