const aboutMe = function() {
    const aboutArea = document.querySelector(".about_me_area");
    aboutArea.style.display = "inline-block";
    aboutArea.style.animationName = "moveLeftTextBox";
    aboutArea.style.animationDuration = "2s";
    
    const profBtn = document.getElementById("profile_button");
    profBtn.style.animationName = "fadeOut";
    profBtn.style.animationDuration = "2s";
    profBtn.style.opacity = "0";

    const profArea = document.getElementById("profile_text_area");
    //profArea.style.left = "0%";
    profArea.style.top = "3.5%";
    profArea.style.animation = "moveHigh";
    profArea.style.animationDuration = "2s";
}

Array.from(document.getElementsByClassName("about_me"))
    .map(btn => {
        btn.addEventListener("click",aboutMe)
    });
/**
 * TODO MAYBE
 * Async function for animating name to text
 */

 /*
  const nameh1 = document.getElementById("name_h1");
    const namep = document.getElementById("name_p");
    
    setTimeout(() => {
    const posP =namep.getBoundingClientRect(); 
    console.log(posP);
    const posH1 = nameh1.getBoundingClientRect();
    console.log(posH1);
    //nameh1.style.left = posP.x-posH1.x+"px";
    //nameh1.style.top = posP.bottom-posH1.bottom + "px";
    asyncAnim(nameh1,posH1.x,posH1.y,posP.x,posP.y,-20,-20);
    },2050);

 let asyncAnim = async function(el,startX,startY,endX,endY,dx,dy) {
    startX += dx;
    el.style.left = startX+"px";
    if (startX > endX) {
        await new Promise((res,rej) => {
            setTimeout(() => {
                res();
            },100);
        });
        console.log(startX);
        asyncAnim(el,startX-25,startY,endX,endY,dx,dy);
    } else {
        console.log("finished?")
        return 1;
    }
}
*/