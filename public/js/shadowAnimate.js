const head = document.getElementById("projects_header");

window.addEventListener("scroll",() => {
    let scale = .5*Math.tanh(window.scrollY/100-3)+.5;
    head.style.setProperty("--left1",-1+scale*2+"px");
    head.style.setProperty("--left2",-2+scale*4+"px");
    head.style.setProperty("--left3",-3+scale*6+"px");
    head.style.setProperty("--left4",-4+scale*8+"px");
    head.style.setProperty("--left5",-5+scale*10+"px");
});