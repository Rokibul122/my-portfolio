// Loader

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

// Typing Animation

const words = [
  "Electronics Learner",
  "Technology Enthusiast",
  "GitHub Explorer",
  "Future Technician"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent =
      currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingElement.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// Counter Animation

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

  const updateCounter = () => {

    const target =
      +counter.getAttribute("data-target");

    const count =
      +counter.innerText;

    const increment =
      target / 100;

    if (count < target) {

      counter.innerText =
        Math.ceil(count + increment);

      setTimeout(updateCounter, 20);

    } else {

      counter.innerText = target;

    }
  };

  updateCounter();
});


// Scroll Reveal

const revealElements =
document.querySelectorAll(
".section,.project-card,.service-card,.timeline-item"
);

function reveal() {

  revealElements.forEach(el => {

    const windowHeight =
      window.innerHeight;

    const revealTop =
      el.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {

      el.style.opacity = "1";
      el.style.transform =
        "translateY(0px)";

    }
  });
}

revealElements.forEach(el => {

  el.style.opacity = "0";
  el.style.transform =
    "translateY(40px)";
  el.style.transition =
    "all .8s ease";

});

window.addEventListener(
  "scroll",
  reveal
);
