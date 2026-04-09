const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

const reveals = document.querySelectorAll(".reveal");

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach((item) => revealObserver.observe(item));
} else {
  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.88;

    reveals.forEach((item) => {
      const top = item.getBoundingClientRect().top;
      if (top < trigger) {
        item.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll, { passive: true });
  window.addEventListener("load", revealOnScroll);
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {
    faqItems.forEach((other) => {
      if (other !== item) {
        other.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

const signupForm = document.getElementById("signupForm");
const signupMessage = document.getElementById("signupMessage");

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    signupMessage.textContent = "Merci ! Votre inscription a bien été enregistrée.";
    signupForm.reset();
  });
}

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactMessage.textContent = "Merci ! Votre message a bien été envoyé.";
    contactForm.reset();
  });
}

const cursorGlow = document.querySelector(".cursor-glow");
let cursorX = 0;
let cursorY = 0;
let cursorRAF = false;

window.addEventListener("mousemove", (e) => {
  if (!cursorGlow) return;

  cursorX = e.clientX;
  cursorY = e.clientY;

  if (!cursorRAF) {
    cursorRAF = true;
    requestAnimationFrame(() => {
      cursorGlow.style.left = `${cursorX}px`;
      cursorGlow.style.top = `${cursorY}px`;
      cursorRAF = false;
    });
  }
});