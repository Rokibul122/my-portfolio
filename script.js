/* ==========================================
   ROKIBUL ISLAMIC HUB
   Premium Islamic UI Engine
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();

    generateIslamicPattern();

    initParticles();

    createLanterns();

    createMouseGlow();

    initReveal();

});

/* ==========================================
   LOADER
========================================== */

function initLoader(){

    const loader =
        document.getElementById("loader");

    if(!loader) return;

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            loader.style.opacity="0";

            loader.style.transition=
            "all .8s ease";

            setTimeout(()=>{

                loader.remove();

            },800);

        },1200);

    });

}

/* ==========================================
   SVG ISLAMIC PATTERN
========================================== */

function generateIslamicPattern(){

    const svg =
        document.getElementById(
            "islamicPattern"
        );

    if(!svg) return;

    svg.innerHTML="";

    const width=window.innerWidth;
    const height=window.innerHeight;

    svg.setAttribute(
        "viewBox",
        `0 0 ${width} ${height}`
    );

    const ns=
    "http://www.w3.org/2000/svg";

    const spacing=140;

    for(
        let x=0;
        x<width+spacing;
        x+=spacing
    ){

        for(
            let y=0;
            y<height+spacing;
            y+=spacing
        ){

            const star=
            document.createElementNS(
                ns,
                "polygon"
            );

            const points=[];

            for(
                let i=0;
                i<16;
                i++
            ){

                const angle=
                (Math.PI/8)*i;

                const r=
                i%2===0
                ?40
                :18;

                points.push(
                `${Math.cos(angle)*r+x},
                 ${Math.sin(angle)*r+y}`
                );

            }

            star.setAttribute(
                "points",
                points.join(" ")
            );

            star.setAttribute(
                "fill",
                "none"
            );

            star.setAttribute(
                "stroke",
                "#0F9D58"
            );

            star.setAttribute(
                "stroke-width",
                ".7"
            );

            star.setAttribute(
                "opacity",
                ".2"
            );

            svg.appendChild(star);

        }

    }

}

/* ==========================================
   PARTICLE ENGINE
========================================== */

function initParticles(){

    const canvas=
    document.getElementById(
        "particleCanvas"
    );

    if(!canvas) return;

    const ctx=
    canvas.getContext("2d");

    resize();

    window.addEventListener(
        "resize",
        resize
    );

    function resize(){

        canvas.width=
        window.innerWidth;

        canvas.height=
        window.innerHeight;

    }

    const particles=[];

    for(let i=0;i<120;i++){

        particles.push({

            x:
            Math.random()*
            canvas.width,

            y:
            Math.random()*
            canvas.height,

            r:
            Math.random()*2+1,

            speed:
            Math.random()*0.4+0.1

        });

    }

    function animate(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach(p=>{

            ctx.beginPath();

            ctx.arc(
                p.x,
                p.y,
                p.r,
                0,
                Math.PI*2
            );

            ctx.fillStyle=
            "rgba(255,215,0,.5)";

            ctx.fill();

            p.y-=p.speed;

            if(p.y<0){

                p.y=
                canvas.height;

                p.x=
                Math.random()*
                canvas.width;

            }

        });

        requestAnimationFrame(
            animate
        );

    }

    animate();

}

/* ==========================================
   FLOATING LANTERNS
========================================== */

function createLanterns(){

    for(let i=0;i<8;i++){

        const lantern=
        document.createElement("div");

        lantern.className=
        "floating-lantern";

        lantern.style.position=
        "fixed";

        lantern.style.width=
        "12px";

        lantern.style.height=
        "20px";

        lantern.style.borderRadius=
        "6px";

        lantern.style.background=
        "#FFD700";

        lantern.style.boxShadow=
        "0 0 25px #FFD700";

        lantern.style.left=
        Math.random()*100+"vw";

        lantern.style.bottom=
        "-50px";

        lantern.style.opacity=".5";

        lantern.style.pointerEvents=
        "none";

        lantern.style.zIndex="-1";

        document.body.appendChild(
            lantern
        );

        animateLantern(
            lantern,
            Math.random()*10+10
        );

    }

}

function animateLantern(
    lantern,
    duration
){

    let pos=-50;

    function move(){

        pos+=0.3;

        lantern.style.transform=
        `translateY(${-pos}px)
         translateX(
         ${Math.sin(pos/50)*20}px
         )`;

        if(pos>
        window.innerHeight+200){

            pos=-50;

        }

        requestAnimationFrame(
            move
        );

    }

    move();

}

/* ==========================================
   MOUSE GLOW
========================================== */

function createMouseGlow(){

    const glow=
    document.createElement("div");

    glow.style.position=
    "fixed";

    glow.style.width=
    "250px";

    glow.style.height=
    "250px";

    glow.style.borderRadius=
    "50%";

    glow.style.pointerEvents=
    "none";

    glow.style.zIndex="999";

    glow.style.background=
    "radial-gradient(circle,
    rgba(15,157,88,.25),
    transparent 70%)";

    document.body.appendChild(
        glow
    );

    document.addEventListener(
        "mousemove",
        e=>{

            glow.style.left=
            e.clientX-125+"px";

            glow.style.top=
            e.clientY-125+"px";

        }
    );

}

/* ==========================================
   SCROLL REVEAL
========================================== */

function initReveal(){

    const elements=
    document.querySelectorAll(
        ".card,.dashboard-card"
    );

    const observer=
    new IntersectionObserver(
        entries=>{

            entries.forEach(
                entry=>{

                if(
                entry.isIntersecting
                ){

                    entry.target.style.opacity=
                    "1";

                    entry.target.style.transform=
                    "translateY(0)";

                }

            });

        },
        {
            threshold:0.2
        }
    );

    elements.forEach(el=>{

        el.style.opacity="0";

        el.style.transform=
        "translateY(50px)";

        el.style.transition=
        "all .8s ease";

        observer.observe(el);

    });

}

/* ==========================================
   REGENERATE SVG ON RESIZE
========================================== */

window.addEventListener(
    "resize",
    generateIslamicPattern
);
