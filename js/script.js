// var header = document.getElementsByClassName('header');
var header = document.querySelector('.header');
var menu = document.querySelector('.menu');
console.log(header);

window.addEventListener('scroll', function(){

    console.log("ROLOU");

    var scrollPixels = window.scrollY;

    // Se o usuário rolar +de 150px à partir do TOPO...
    if(scrollPixels > 150) {
        // console.log("OK");
        header.classList.add('header-fixed');
        menu.classList.add('menu-fixed');
    }
    else {
        // console.log("AINDA NÃO");
        header.classList.remove('header-fixed');
        menu.classList.remove('menu-fixed');
    }

});

var btnMenu = document.querySelector(".btn-menu");
var menu = document.querySelector(".menu");

btnMenu.addEventListener("click", function() {
    menu.classList.toggle("menu-open");
    this.classList.toggle("clicado"); // ou btnMenu.classList.toggle("clicado");
});