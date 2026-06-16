const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",(e)=>{
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});

const boot = document.getElementById("boot");
const app = document.getElementById("app");

setTimeout(()=>{
boot.style.opacity="0";
setTimeout(()=>{
boot.classList.add("hidden");
app.classList.remove("hidden");
typeText();
countUp();
},1000);
},3000);

const text = "A cinematic AI operating system for the next generation web.";
let i = 0;
function typeText(){
const el = document.getElementById("typeText");
let interval = setInterval(()=>{
el.textContent += text[i];
i++;
if(i>=text.length) clearInterval(interval);
},40);
}

function countUp(){
document.querySelectorAll(".count").forEach(el=>{
let target = +el.getAttribute("data-target");
let count = 0;
let step = target/100;
let int = setInterval(()=>{
count += step;
el.textContent = Math.floor(count);
if(count>=target) el.textContent = target;
if(count>=target) clearInterval(int);
},20);
});
}

document.querySelectorAll(".magnetic").forEach(btn=>{
btn.addEventListener("mousemove",(e)=>{
let x = e.offsetX;
let y = e.offsetY;
btn.style.transform = `translate(${x/10}px,${y/10}px)`;
});
btn.addEventListener("mouseleave",()=>{
btn.style.transform="translate(0,0)";
});
});
