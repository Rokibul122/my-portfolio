/* ==========================================
   ROKIBUL ISLAMIC HUB
   SVG Islamic Pattern Generator
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    createIslamicPattern();

    window.addEventListener("resize", () => {
        createIslamicPattern();
    });

});

function createIslamicPattern(){

    const svg = document.getElementById("islamicPattern");

    if(!svg) return;

    svg.innerHTML = "";

    const width = window.innerWidth;
    const height = window.innerHeight;

    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    const spacing = 120;

    for(let x = 0; x < width + spacing; x += spacing){

        for(let y = 0; y < height + spacing; y += spacing){

            drawStar(svg, x, y, 40);

        }

    }

}

function drawStar(svg, cx, cy, radius){

    const ns = "http://www.w3.org/2000/svg";

    const group = document.createElementNS(ns, "g");

    group.setAttribute(
        "transform",
        `translate(${cx},${cy})`
    );

    group.style.opacity = "0.18";

    const polygon = document.createElementNS(ns, "polygon");

    let points = [];

    for(let i = 0; i < 16; i++){

        const angle =
            (Math.PI / 8) * i;

        const r =
            i % 2 === 0
            ? radius
            : radius * 0.45;

        const px =
            Math.cos(angle) * r;

        const py =
            Math.sin(angle) * r;

        points.push(`${px},${py}`);
    }

    polygon.setAttribute(
        "points",
        points.join(" ")
    );

    polygon.setAttribute(
        "fill",
        "none"
    );

    polygon.setAttribute(
        "stroke",
        "#0F9D58"
    );

    polygon.setAttribute(
        "stroke-width",
        "1.2"
    );

    group.appendChild(polygon);

    const circle = document.createElementNS(ns,"circle");

    circle.setAttribute("r", radius * 0.25);

    circle.setAttribute("fill", "none");

    circle.setAttribute(
        "stroke",
        "#FFD700"
    );

    circle.setAttribute(
        "stroke-width",
        "1"
    );

    group.appendChild(circle);

    animatePattern(group);

    svg.appendChild(group);
}

function animatePattern(group){

    let angle =
        Math.random() * 360;

    function rotate(){

        angle += 0.05;

        group.setAttribute(
            "transform",
            group.getAttribute("transform")
            + ` rotate(${angle})`
        );

        requestAnimationFrame(rotate);
    }

    rotate();
}
