/* ==================================
   ROKIBUL DEV PLATFORM
   SCRIPT.JS
================================== */

/* -------------------------------
   MOUSE GLOW EFFECT
-------------------------------- */

const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

/* -------------------------------
   CODE TYPING ANIMATION
-------------------------------- */

const typingElement = document.getElementById("typing");

const typingText =
"Deploying ROKIBUL DEV PLATFORM... Build Successful ✓";

let typingIndex = 0;

function typeWriter() {

    if (!typingElement) return;

    if (typingIndex < typingText.length) {

        typingElement.innerHTML += typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeWriter, 60);

    }

}

window.addEventListener("load", typeWriter);

/* -------------------------------
   FAQ ACCORDION
-------------------------------- */

const faqButtons =
document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer =
        button.nextElementSibling;

        const isOpen =
        answer.style.display === "block";

        document
        .querySelectorAll(".faq-answer")
        .forEach(item => {
            item.style.display = "none";
        });

        if (!isOpen) {
            answer.style.display = "block";
        }

    });

});

/* -------------------------------
   SCROLL REVEAL
-------------------------------- */

const revealElements =
document.querySelectorAll(
`
.feature-card,
.repo-card,
.code-card,
.team-card,
.price-card,
.dashboard-card,
.timeline-item,
.stat-card,
.contact-form,
.newsletter,
.section-title
`
);

revealElements.forEach(el => {
    el.classList.add("reveal");
});

function revealOnScroll() {

    revealElements.forEach(el => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        el.getBoundingClientRect().top;

        const revealPoint = 120;

        if (
            elementTop <
            windowHeight - revealPoint
        ) {

            el.classList.add("active");

        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* -------------------------------
   STATS COUNTER
-------------------------------- */

const counters =
document.querySelectorAll(
".stat-card h2"
);

function runCounters() {

    counters.forEach(counter => {

        if (
            counter.classList.contains(
            "counted"
            )
        ) return;

        counter.classList.add(
        "counted"
        );

        const finalText =
        counter.innerText;

        const number =
        parseInt(
        finalText.replace(/\D/g,'')
        );

        let current = 0;

        const increment =
        Math.max(
        1,
        Math.floor(number / 120)
        );

        const timer =
        setInterval(() => {

            current += increment;

            if(current >= number){

                counter.innerText =
                finalText;

                clearInterval(timer);

            }else{

                if(
                finalText.includes("%")
                ){

                    counter.innerText =
                    current + "%";

                }else{

                    counter.innerText =
                    current.toLocaleString() + "+";

                }

            }

        },15);

    });

}

const statsSection =
document.querySelector(".stats");

const statsObserver =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

runCounters();

}

});

},
{
threshold:0.3
}
);

if(statsSection){
statsObserver.observe(statsSection);
}

/* -------------------------------
   PROGRESS BAR ANIMATION
-------------------------------- */

const progressBars =
document.querySelectorAll(
".progress-fill"
);

const progressObserver =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const width =
entry.target.style.width;

entry.target.style.width =
"0";

setTimeout(()=>{

entry.target.style.width =
width;

},200);

}

});

},
{
threshold:0.4
}
);

progressBars.forEach(bar=>{

const width =
window.getComputedStyle(bar)
.width;

bar.dataset.width = width;

});

window.addEventListener("load",()=>{

progressBars.forEach(bar=>{

const computedWidth =
bar.offsetWidth + "px";

bar.style.width = computedWidth;

progressObserver.observe(bar);

});

});

/* -------------------------------
   NAVBAR ACTIVE LINK
-------------------------------- */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener(
"scroll",
()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop;

const sectionHeight =
section.clientHeight;

if(
pageYOffset >=
sectionTop -
200
){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add("active");

}

});

}
);

/* -------------------------------
   FLOATING PARTICLES
-------------------------------- */

function createParticle(){

const particle =
document.createElement("div");

particle.classList.add(
"floating-particle"
);

particle.style.left =
Math.random()*100 + "vw";

particle.style.width =
Math.random()*5+2+"px";

particle.style.height =
particle.style.width;

particle.style.animationDuration =
Math.random()*8+8+"s";

document.body.appendChild(
particle
);

setTimeout(()=>{
particle.remove();
},15000);

}

setInterval(
createParticle,
400
);

/* -------------------------------
   NEWSLETTER FORM
-------------------------------- */

const newsletter =
document.querySelector(
".newsletter form"
);

if(newsletter){

newsletter.addEventListener(
"submit",
(e)=>{

e.preventDefault();

const btn =
newsletter.querySelector(
"button"
);

btn.innerHTML =
"Subscribed ✓";

setTimeout(()=>{

btn.innerHTML =
"Subscribe";

},2500);

});

}

/* -------------------------------
   CONTACT FORM
-------------------------------- */

const contactForm =
document.querySelector(
".contact-form"
);

if(contactForm){

contactForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

const button =
contactForm.querySelector(
"button"
);

button.innerHTML =
"Message Sent ✓";

setTimeout(()=>{

button.innerHTML =
"Send Message";

contactForm.reset();

},2500);

});

}

/* -------------------------------
   TERMINAL COMMAND LOOP
-------------------------------- */

const terminalBody =
document.querySelector(
".terminal-body"
);

const commands = [

"$ git push origin main",
"$ build completed",
"$ deployment successful",
"$ analytics updated",
"$ ci pipeline passed",
"$ project synchronized"

];

let commandIndex = 0;

function terminalLoop(){

if(!terminalBody) return;

const p =
document.createElement("p");

p.textContent =
commands[commandIndex];

terminalBody.appendChild(p);

commandIndex++;

if(
commandIndex >=
commands.length
){
commandIndex = 0;
}

while(
terminalBody.children.length > 12
){
terminalBody.removeChild(
terminalBody.children[3]
);
}

}

setInterval(
terminalLoop,
2500
);

/* -------------------------------
   CONTRIBUTION GRAPH
-------------------------------- */

const graphCells =
document.querySelectorAll(
".graph-grid div"
);

graphCells.forEach(cell=>{

const level =
Math.floor(
Math.random()*4
);

if(level===0){

cell.style.opacity=".2";

}

if(level===1){

cell.style.opacity=".4";

}

if(level===2){

cell.style.opacity=".7";

}

if(level===3){

cell.style.opacity="1";

}

});

/* -------------------------------
   SMOOTH BUTTON SCROLL
-------------------------------- */

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

/* -------------------------------
   LOADER
-------------------------------- */

window.addEventListener(
"load",
()=>{

document.body.classList.add(
"loaded"
);

});

/* -------------------------------
   PERFORMANCE MONITOR DEMO
-------------------------------- */

let performanceValue = 90;

setInterval(()=>{

const performanceBar =
document.querySelector(".p90");

if(!performanceBar) return;

performanceValue +=
Math.random() > .5 ? 1 : -1;

if(performanceValue > 100)
performanceValue = 100;

if(performanceValue < 80)
performanceValue = 80;

performanceBar.style.width =
performanceValue + "%";

},2000);

/* -------------------------------
   CONSOLE BRANDING
-------------------------------- */

console.clear();

console.log(
"%cROKIBUL DEV PLATFORM",
"font-size:22px;font-weight:bold;color:#2383ff;"
);

console.log(
"%cDeveloper Experience Optimized",
"color:#7ee787;font-size:14px;"
);

console.log(
"%cVersion 2.0 Production Build",
"color:#ffffff;"
);

/* ==================================
   END OF SCRIPT
================================== */
