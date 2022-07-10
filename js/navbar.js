var inicio = document.querySelector("#index");
var menu = document.querySelector(".header_menu");
var menuEnlaces = document.querySelector(".header_menu");//clase padre
var enlaceMenu = menuEnlaces.querySelectorAll(".header_links")
function toggleMenu(){
    menu.classList.toggle("invisible");
}

inicio.addEventListener("click",function(){
    scrollTo(0,0);
});
menuEnlaces.addEventListener("click",toggleMenu);
