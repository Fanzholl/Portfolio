function openMenu() {
    menu.style.transform = 'translateX(0%)';
}

function closeMenu() {
    menu.style.transform = 'translateX(100%)'
}

let menu = document.querySelector('.menu')
let close = document.querySelector('.close');
let humsteron = document.querySelector('.burger_container');
humsteron.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);