const parrallex=document.getElementById("header");
window.addEventListener("scroll", function(){
    let offset =window.pageYOffset;
   parrallex.style.backgroundPositionY=offset*0.5 + "px";
})