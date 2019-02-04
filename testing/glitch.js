/**
 * Get handles
 */
const div = document.getElementById("glitchy_div");
const elemType = "div";
const interval = 4000;
const div_x = 100;
const div_y = 100;
/**
 * Position & style glitchy element
 */
div.style.position ="absolute";
div.style.left = `${div_x}px`;
div.style.top = `${div_y}px`;
div.style.color = "white";
div.style.fontSize = "26px";
div.style.fontWeight = "18px";
/**
 * Get rest of the handles and
 * do the glitch
 */
const txt_cp1 = document.createElement(elemType);
const txt_cp2 = document.createElement(elemType);
txt_cp1.innerHTML = div.innerText;
txt_cp2.innerHTML = div.innerText;

const txt1 = div.getAttribute("txt1");
const txt2 = div.getAttribute("txt2");
const g1 = document.createElement(elemType);
const g2 = document.createElement(elemType);
g1.innerText = txt1;
g2.innerText = txt2;

document.querySelector("body").appendChild(txt_cp1);
document.querySelector("body").appendChild(txt_cp2);
document.querySelector("body").appendChild(g1);
document.querySelector("body").appendChild(g2);

//Original text coords
const {x,y} = div.getBoundingClientRect();
const txt_cp1_x = x+2;
const txt_cp1_y = y-2;

const txt_cp2_x = x-2;
const txt_cp2_y = y+2;

const g1_x = x+40;
const g1_y = y-16;

const g2_x = x+170;
const g2_y = y-16;
/**
 * Default styles
 */
txt_cp1.style.color = "#FFFFFF";
txt_cp1.style.position = "absolute";
txt_cp1.style.left = `${txt_cp1_x}px`;
txt_cp1.style.top = `${txt_cp1_y}px`;
txt_cp1.style.fontSize = "26px";
txt_cp1.style.fontWeight = "18px";
txt_cp1.style.webkitTextStroke = ".5px green"
txt_cp1.style.visibility = "hidden";

txt_cp2.style.color = "#FFFFFF";
txt_cp2.style.position = "absolute";
txt_cp2.style.left = `${txt_cp2_x}px`;
txt_cp2.style.top = `${txt_cp2_y}px`;
txt_cp2.style.fontSize = "26px";
txt_cp2.style.fontWeight = "18px";
txt_cp2.style.webkitTextStroke = ".5px red"
txt_cp2.style.visibility = "hidden";

g1.style.color = "#FFFFFF";
g1.style.position = "absolute";
g1.style.left = `${g1_x}px`;
g1.style.top = `${g1_y}px`;
g1.style.fontSize = "26px";
g1.style.fontWeight = "18px";
g1.style.visibility = "hidden";
g1.style.webkitTextStroke = ".5px green"

g2.style.color = "#FFFFFF";
g2.style.position = "absolute";
g2.style.left = `${g2_x}px`;
g2.style.top = `${g2_y}px`;
g2.style.fontSize = "26px";
g2.style.fontWeight = "18px";
g2.style.visibility = "hidden";
txt_cp2.style.webkitTextStroke = ".5px red"

const createGlitch = async () => {
    txt_cp1.style.left = `${txt_cp1_x}px`;
    txt_cp1.style.top = `${txt_cp1_y}px`;
    txt_cp2.style.left = `${txt_cp2_x}px`;
    txt_cp2.style.top = `${txt_cp2_y}px`;
    
    txt_cp1.style.visibility = "visible";
    txt_cp1.style.background = "black";
    txt_cp2.style.background = "black";
    //div.style.clip = "rect(10px,200px,20px,0px)";
    
    await glitchPromise(50, () => {
        div.style.visibility = "hidden";
        txt_cp1.style.left = `${txt_cp1_x-2}px`;
        txt_cp2.style.visibility = "visible";
    });
    await glitchPromise(50, () => {
        txt_cp1.style.visibility = "hidden";
        txt_cp2.style.left = `${txt_cp1_x+2}px`;
        txt_cp2.style.top = `${txt_cp1_y-2}px`;

        g1.style.visibility = "visible";
    });
    await glitchPromise(50, () => {
        g1.style.top = `${g1_y-1}px`;
        g1.style.left = `${g1_x+1}px`;
    });
    await glitchPromise(25, () => {
        txt_cp1.style.visibility = "visible";
        txt_cp1.style.left = `${txt_cp1_x+2}px`;
        txt_cp1.style.top = `${txt_cp1_y-2}px`;
        txt_cp2.style.visibility = "hidden";

        g1.style.visibility = "hidden";
        g2.style.visibility = "visible";
    });
    await glitchPromise(45, () => {
        txt_cp2.style.visibility = "visible"
        txt_cp1.style.left = `${txt_cp1_x+1}px`;
        txt_cp1.style.top = `${txt_cp1_y-2}px`;
        txt_cp2.style.left = `${txt_cp1_x-1}px`;
        txt_cp2.style.top = `${txt_cp1_y-1}px`;
    });
    await glitchPromise(50, () => {
        txt_cp1.style.visibility = "hidden";
        txt_cp2.style.left = `${txt_cp1_x+2}px`;
        txt_cp2.style.top = `${txt_cp1_y+1}px`; 

        g1.style.visibility = "visible";
        g2.style.visibility = "visible";
    });
    await glitchPromise(35, () => {
        txt_cp1.style.visibility = "hidden";
        txt_cp2.style.visibility = "hidden";

        g1.style.visibility = "hidden";
        g2.style.visibility = "hidden";

        div.style.visibility = "visible";
        div.style.left = `${div_x}px`;
        div.style.top = `${div_y}px`;
        div.style.clip = "auto";
    });
}

const glitchPromise = (delay,func) => new Promise((res,rej) => {
    setTimeout(() => {
        func();
        res();
    },delay);
});

createGlitch();
setInterval(createGlitch,interval)