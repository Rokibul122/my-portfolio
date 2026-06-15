// ======================
// Loader
// ======================

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});

// ======================
// Typing Animation
// ======================

const typingElement = document.querySelector(".typing");

if (typingElement) {

  const words = [
    "Electronics Learner",
    "Technology Enthusiast",
    "GitHub Explorer",
    "Future Technician"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

      typingElement.textContent =
        currentWord.substring(0, charIndex + 1);

      charIndex++;

      if (charIndex === currentWord.length) {

        deleting = true;

        setTimeout(typeEffect, 1500);

        return;
      }

    } else {

      typingElement.textContent =
        currentWord.substring(0, charIndex - 1);

      charIndex--;

      if (charIndex === 0) {

        deleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {
          wordIndex = 0;
        }
      }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
  }

  typeEffect();
}

// ======================
// Scroll Reveal Animation
// ======================

const revealElements = document.querySelectorAll(
  ".section, .skill-card, .service-card, .project-card"
);

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(40px)";
  element.style.transition =
    "all 0.8s ease";
});

function revealOnScroll() {

  revealElements.forEach((element) => {

    const windowHeight =
      window.innerHeight;

    const elementTop =
      element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {

      element.style.opacity = "1";
      element.style.transform =
        "translateY(0)";
    }
  });
}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

// ======================
// Mobile Menu
// ======================

const menuBtn =
  document.querySelector(".menu-btn");

const navLinks =
  document.querySelector(".nav-links");

if (menuBtn && navLinks) {

  menuBtn.addEventListener(
    "click",
    () => {
      navLinks.classList.toggle("active");
    }
  );
}

// ======================
// Smooth Navbar Close
// ======================

document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        if (navLinks) {
          navLinks.classList.remove("active");
        }
      }
    );
  });

// ======================
// Contact Form Demo
// ======================

const contactForm =
  document.querySelector(".contact-form");

if (contactForm) {

  contactForm.addEventListener(
    "submit",
    function (e) {

      e.preventDefault();

      alert(
        "Thank you! Your message has been received."
      );

      contactForm.reset();
    }
  );
}
