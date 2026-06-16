/* ==========================================
   ROKIBUL PRIME LIVING
   Ultra Premium script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeCursor();
    initializeScrollProgress();
    initializeCounters();
    initializeTheme();
    initializeMobileMenu();
    initializePropertySearch();
    initializeMagneticButtons();
    initializeParallax();
    initializeNavbar();
    initializeGSAPAnimations();
    initializeFloatingEffects();

});

/* ==========================================
   CUSTOM CURSOR
========================================== */

function initializeCursor() {

    const cursor = document.getElementById("cursor");
    const blur = document.getElementById("cursor-blur");

    if (!cursor || !blur) return;

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        blur.style.left = e.clientX - 125 + "px";
        blur.style.top = e.clientY - 125 + "px";

    });

    document.querySelectorAll(
        "a,button,.property-card,.glass-card"
    ).forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor.style.transform = "scale(2)";
            cursor.style.background = "#00bfff";

        });

        item.addEventListener("mouseleave", () => {

            cursor.style.transform = "scale(1)";
            cursor.style.background = "#00bfff";

        });

    });

}

/* ==========================================
   SCROLL PROGRESS
========================================== */

function initializeScrollProgress() {

    const progress = document.querySelector(".progress-bar");

    if (!progress) return;

    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const percentage = (scrollTop / height) * 100;

        progress.style.width = percentage + "%";

    });

}

/* ==========================================
   ANIMATED COUNTERS
========================================== */

function initializeCounters() {

    const counters =
        document.querySelectorAll(".counter");

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target =
                    +counter.dataset.target;

                let count = 0;

                const speed = target / 120;

                const update = () => {

                    count += speed;

                    if (count < target) {

                        counter.innerText =
                            Math.floor(count);

                        requestAnimationFrame(update);

                    } else {

                        counter.innerText =
                            target;

                    }

                };

                update();

                observer.unobserve(counter);

            });

        });

    counters.forEach(counter => {

        observer.observe(counter);

    });

}

/* ==========================================
   DARK / LIGHT MODE
========================================== */

function initializeTheme() {

    const toggle =
        document.querySelector(".theme-toggle");

    if (!toggle) return;

    const saved =
        localStorage.getItem("theme");

    if (saved === "light") {

        document.body.classList.add("light-mode");

        toggle.textContent = "☀️";

    }

    toggle.addEventListener("click", () => {

        document.body.classList.toggle(
            "light-mode"
        );

        const isLight =
            document.body.classList.contains(
                "light-mode"
            );

        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );

        toggle.textContent =
            isLight ? "☀️" : "🌙";

    });

}

/* ==========================================
   MOBILE MENU
========================================== */

function initializeMobileMenu() {

    const menuBtn =
        document.querySelector(".menu-btn");

    const nav =
        document.querySelector(".nav-links");

    if (!menuBtn || !nav) return;

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

/* ==========================================
   PROPERTY SEARCH UI
========================================== */

function initializePropertySearch() {

    const form =
        document.getElementById(
            "propertySearch"
        );

    if (!form) return;

    form.addEventListener("submit", e => {

        e.preventDefault();

        const values =
            [...form.elements]
            .filter(el =>
                el.tagName === "INPUT" ||
                el.tagName === "SELECT"
            )
            .map(el => el.value);

        console.log(
            "Property Search:",
            values
        );

        alert(
            "Searching Luxury Properties..."
        );

    });

}

/* ==========================================
   MAGNETIC BUTTON EFFECT
========================================== */

function initializeMagneticButtons() {

    const buttons =
        document.querySelectorAll(
            ".primary-btn,.secondary-btn,.glass-btn"
        );

    buttons.forEach(btn => {

        btn.addEventListener(
            "mousemove",
            e => {

                const rect =
                    btn.getBoundingClientRect();

                const x =
                    e.clientX -
                    rect.left -
                    rect.width / 2;

                const y =
                    e.clientY -
                    rect.top -
                    rect.height / 2;

                btn.style.transform =
                    `translate(${x * 0.2}px, ${y * 0.2}px)`;

            }
        );

        btn.addEventListener(
            "mouseleave",
            () => {

                btn.style.transform =
                    "translate(0,0)";

            }
        );

    });

}

/* ==========================================
   PARALLAX EFFECT
========================================== */

function initializeParallax() {

    const hero =
        document.querySelector(".hero");

    if (!hero) return;

    window.addEventListener("scroll", () => {

        const offset =
            window.scrollY * 0.4;

        hero.style.backgroundPositionY =
            offset + "px";

    });

}

/* ==========================================
   SMART NAVBAR
========================================== */

function initializeNavbar() {

    const navbar =
        document.querySelector(".navbar");

    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        const current =
            window.pageYOffset;

        if (current > 100) {

            navbar.classList.add(
                "navbar-scrolled"
            );

        } else {

            navbar.classList.remove(
                "navbar-scrolled"
            );

        }

        if (current > lastScroll &&
            current > 150) {

            navbar.style.transform =
                "translateY(-100%)";

        } else {

            navbar.style.transform =
                "translateY(0)";

        }

        lastScroll = current;

    });

}

/* ==========================================
   FLOATING CARDS
========================================== */

function initializeFloatingEffects() {

    const cards =
        document.querySelectorAll(
            ".glass-card,.property-card"
        );

    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            e => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX -
                    rect.left;

                const y =
                    e.clientY -
                    rect.top;

                const rotateY =
                    (x / rect.width - 0.5) * 15;

                const rotateX =
                    -(y / rect.height - 0.5) * 15;

                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.03)
                    `;

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(0deg)
                    rotateY(0deg)
                    scale(1)
                    `;

            }
        );

    });

}

/* ==========================================
   GSAP ANIMATIONS
========================================== */

function initializeGSAPAnimations() {

    if (typeof gsap === "undefined")
        return;

    gsap.registerPlugin(
        ScrollTrigger
    );

    gsap.from(".hero-content", {

        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"

    });

    gsap.from(".hero-stats .glass-card", {

        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2

    });

    gsap.utils.toArray(
        ".section-header"
    ).forEach(section => {

        gsap.from(section, {

            scrollTrigger: {

                trigger: section,
                start: "top 80%"

            },

            opacity: 0,
            y: 60,
            duration: 1

        });

    });

    gsap.utils.toArray(
        ".property-card"
    ).forEach(card => {

        gsap.from(card, {

            scrollTrigger: {

                trigger: card,
                start: "top 90%"

            },

            opacity: 0,
            y: 80,
            duration: 1

        });

    });

    gsap.utils.toArray(
        ".testimonial-card"
    ).forEach(card => {

        gsap.from(card, {

            scrollTrigger: {

                trigger: card,
                start: "top 90%"

            },

            opacity: 0,
            scale: 0.8,
            duration: 1

        });

    });

}

/* ==========================================
   SMOOTH SCROLL LINKS
========================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if(!target) return;

            target.scrollIntoView({

                behavior:"smooth"

            });

        }
    );

});

/* ==========================================
   PROPERTY MODAL PLACEHOLDER
========================================== */

document
.querySelectorAll(".property-card button")
.forEach(btn => {

    btn.addEventListener("click", () => {

        alert(
            "Luxury Property Details Modal"
        );

    });

});

/* ==========================================
   CONTACT FORM
========================================== */

const contactForm =
    document.querySelector(
        ".contact-form"
    );

if(contactForm){

    contactForm.addEventListener(
        "submit",
        e => {

            e.preventDefault();

            alert(
                "Message Sent Successfully"
            );

            contactForm.reset();

        }
    );

}

/* ==========================================
   FLOATING ACTION BUTTONS
========================================== */

const callBtn =
    document.querySelector(".call-btn");

if(callBtn){

    callBtn.addEventListener(
        "click",
        () => {

            window.location.href =
                "tel:+7585093412";

        }
    );

}

const chatBtn =
    document.querySelector(".chat-btn");

if(chatBtn){

    chatBtn.addEventListener(
        "click",
        () => {

            alert(
                "Opening Live Chat..."
            );

        }
    );

}

/* ==========================================
   PREMIUM LOADER EFFECT
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add(
        "loaded"
    );

    console.log(
        "ROKIBUL PRIME LIVING Loaded"
    );

});
