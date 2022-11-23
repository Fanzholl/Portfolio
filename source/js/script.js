function openMenu() {
    burger.style.display = 'none';
    menu.style.transform = 'translateX(0%)';
}

function closeMenu() {
    menu.style.transform = 'translateX(100%)'
    burger.style.display = 'block';
}

let menu = document.querySelector('.menu')
let close = document.querySelector('.close');
let burger = document.querySelector('.burger_container');
let heighter = document.documentElement.clientHeight;
menu.style.height = heighter + 'px';
console.log(heighter);
burger.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);