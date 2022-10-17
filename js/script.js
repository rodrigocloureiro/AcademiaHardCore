// var header = document.getElementsByClassName('header');
var header = document.querySelector('.header');
console.log(header);

var menu = document.querySelector(".menu");
var btnMenu = document.querySelector(".btn-menu");

window.addEventListener('scroll', function(){

    console.log("ROLOU");

    menu.classList.remove("menu-open");

    var scrollPixels = window.scrollY;

    // Se o usuário rolar +de 150px à partir do TOPO...
    if(scrollPixels > 150) {
        // console.log("OK");
        header.classList.add('header-fixed');
    }
    else {
        // console.log("AINDA NÃO");
        header.classList.remove('header-fixed');
    }

});

btnMenu.addEventListener('click', function() {
    menu.classList.toggle("menu-open");
});