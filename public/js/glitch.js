/**
 * Get handles
 */
const div = document.getElementsByClassName("profile")[0];
const glitchy_el = document.getElementById("glitchy_header");
const elemType = "h2";
const interval = 3000;
/**
 * Position & style glitchy element
 */
//glitchy_el.style.position ="absolute";
glitchy_el.style.left = `${50}%`;
glitchy_el.style.transform = "translateX(-50%)";
glitchy_el.style.top = `${45}%`;
glitchy_el.style.color = "white";
glitchy_el.style.fontSize = "26px";
glitchy_el.style.fontWeight = "18px";
/**
 * Get rest of the handles and
 * do the glitch
 */
const txt_cp1 = document.createElement(elemType);
const txt_cp2 = document.createElement(elemType);
txt_cp1.innerHTML = glitchy_el.innerText;
txt_cp2.innerHTML = glitchy_el.innerText;

const txt1 = glitchy_el.getAttribute("txt1");
const txt2 = glitchy_el.getAttribute("txt2");
const g1 = document.createElement(elemType);
const g2 = document.createElement(elemType);
g1.innerText = txt1;
g2.innerText = txt2;

div.appendChild(txt_cp1);
div.appendChild(txt_cp2);
div.appendChild(g1);
div.appendChild(g2);

//Original text coords
txt_cp1.style.visibility = "hidden";
txt_cp2.style.visibility = "hidden";
g1.style.visibility = "hidden";
g2.style.visibility = "hidden";
setTimeout(() => {
const {x,y} = glitchy_el.getBoundingClientRect();

let txt_cp1_x = 50;
let txt_cp1_y = y-10;

let txt_cp2_x = 50;
let txt_cp2_y = y-12;

let g1_x = 51;
let g1_y = y-32;

let g2_x = 51+(window.screen.availWidth/window.innerWidth)*5;
let g2_y = y-34;
/**
 * Default styles
 */
txt_cp1.style.color = "#FFFFFF";
//txt_cp1.style.position = "absolute";
txt_cp1.style.left = `${txt_cp1_x}%`;
txt_cp1.style.top = `${txt_cp1_y}px`;
txt_cp1.style.translate = "transformX(-50%)";
txt_cp1.style.fontSize = "26px";
txt_cp1.style.fontWeight = "18px";
txt_cp1.style.webkitTextStroke = ".5px green"
txt_cp1.style.visibility = "hidden";

txt_cp2.style.color = "#FFFFFF";
//txt_cp2.style.position = "absolute";
txt_cp2.style.left = `${txt_cp2_x}%`;
txt_cp2.style.top = `${txt_cp2_y}px`;
txt_cp2.style.translate = "transformX(-50%)";
txt_cp2.style.fontSize = "26px";
txt_cp2.style.fontWeight = "18px";
txt_cp2.style.webkitTextStroke = ".5px red"
txt_cp2.style.visibility = "hidden";

g1.style.color = "#FFFFFF";
//g1.style.position = "absolute";
g1.style.left = `${g1_x}%`;
g1.style.top = `${g1_y}px`;
g1.style.fontSize = "26px";
g1.style.fontWeight = "18px";
g1.style.visibility = "hidden";
g1.style.webkitTextStroke = ".75px green"

g2.style.color = "#FFFFFF";
//g2.style.position = "absolute";
g2.style.left = `${g2_x}%`;
g2.style.top = `${g2_y}px`;
g2.style.fontSize = "26px";
g2.style.fontWeight = "18px";
g2.style.visibility = "hidden";
g2.style.webkitTextStroke = ".5px red"

const createGlitch = async () => {
    txt_cp1_x = 50;
    txt_cp1_y = y-10;
    
    txt_cp2_x = 50;
    txt_cp2_y = y-12;
    
    g1_x = 51;
    g1_y = y-32;
    
    g2_x = 51+(window.screen.availWidth/window.innerWidth)*5;
    g2_y = y-34;

    txt_cp1.style.left = `${txt_cp1_x}%`;
    txt_cp1.style.top = `${txt_cp1_y}px`;
    txt_cp2.style.left = `${txt_cp2_x}%`;
    txt_cp2.style.top = `${txt_cp2_y}px`;
    
    txt_cp1.style.visibility = "visible";
    //div.style.clip = "rect(10px,200px,20px,0px)";
    await glitchPromise(50, () => {
        glitchy_el.style.visibility = "hidden";
        txt_cp1.style.left = `${txt_cp1_x-.2}%`;
        txt_cp2.style.visibility = "visible";
    });
    
    await glitchPromise(50, () => {
        txt_cp1.style.visibility = "hidden";
        txt_cp2.style.left = `${txt_cp1_x+.2}%`;
        txt_cp2.style.top = `${txt_cp1_y-2}px`;

        g1.style.visibility = "visible";
    });
    await glitchPromise(50, () => {
        g1.style.top = `${g1_y-1}px`;
        g1.style.left = `${g1_x+.1}%`;
    });
    await glitchPromise(25, () => {
        txt_cp1.style.visibility = "visible";
        txt_cp1.style.left = `${txt_cp1_x+.2}%`;
        txt_cp1.style.top = `${txt_cp1_y-2}px`;
        txt_cp2.style.visibility = "hidden";

        g1.style.visibility = "hidden";
        g2.style.visibility = "visible";
    });
    await glitchPromise(45, () => {
        txt_cp2.style.visibility = "visible"
        txt_cp1.style.left = `${txt_cp1_x+.1}%`;
        txt_cp1.style.top = `${txt_cp1_y-2}px`;
        txt_cp2.style.left = `${txt_cp1_x-.1}%`;
        txt_cp2.style.top = `${txt_cp1_y-1}px`;

        g2.style.left = `${g2_x+.1}%`;
    });
    await glitchPromise(50, () => {
        txt_cp1.style.visibility = "hidden";
        txt_cp2.style.left = `${txt_cp1_x+.2}%`;
        txt_cp2.style.top = `${txt_cp1_y+1}px`; 

        g1.style.visibility = "visible";
        g2.style.visibility = "visible";
    });
    await glitchPromise(35, () => {
        txt_cp1.style.visibility = "hidden";
        txt_cp2.style.visibility = "hidden";

        g1.style.visibility = "hidden";
        g2.style.visibility = "hidden";

        glitchy_el.style.visibility = "visible";
        //div.style.left = `${x}px`;
        //div.style.top = `${y}px`;
        glitchy_el.style.clip = "auto";
    });
}

const glitchPromise = (delay,func) => new Promise((res,rej) => {
    setTimeout(() => {
        func();
        res();
    },delay);
});

createGlitch();
setInterval(createGlitch,interval);
},5000);
