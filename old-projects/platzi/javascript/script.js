const ipad = window.matchMedia('screen and (max-width: 768px)');
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');

ipad.addListener(validation);

function validation(event) {
    if(event.matches) {
        burgerButton.addEventListener('click', showMenu);
    } else {
        burgerButton.removeEventListener('click', showMenu);
    }
}
validation(ipad);

function showMenu() {
    if(menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }
}