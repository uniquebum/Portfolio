window.addEventListener("resize",() => {
    let height = Math.max(350,350*window.innerWidth/1000);
    document.getElementById("profile-header")
    .style.height = height + "px";
});

window.addEventListener("load",() => {
    let height = Math.max(350,350*window.innerWidth/1000);
    document.getElementById("profile-header")
    .style.height = height + "px";
});