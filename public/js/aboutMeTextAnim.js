const aboutMeTxt = document.getElementById("about_me");
const code = document.querySelector("code");

let txt = aboutMeTxt.innerHTML;
txt = txt.replace("<code>","");
txt = txt.replace("</code>","");
txt = txt.replace("<br>","");
txt = txt.replace("<br>","");
txt = txt.trim();
txt = txt.split(" ");
let txtFormatted = "";

for (let i = 0; i < txt.length; i++) {
    if (txt[i] === " ") { txtFormatted += "&nbsp;"; }
    else if (txt[i] !== "") { 
        txtFormatted += `<span class="animText">` + txt[i] + `&nbsp;</span>`; 
    }
}
code.innerHTML = txtFormatted;

const chars = document.getElementsByClassName("animText");
for (let i = 0; i < chars.length; i++) {
    chars[i].style.setProperty('--left',600*(Math.random()-.5) + "px");
    chars[i].style.setProperty('--top',600*(Math.random()-.5) + "px");
    chars[i].style.setProperty('--rot',600*(Math.random()-.5) + "deg");
}