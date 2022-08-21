let header=document.querySelector('.header');
let menuBurger=document.querySelector('.header__burger');
// let headerLink=document.querySelector('.header__link');
let headerMenu=document.querySelector('.header__nav');


menuBurger.onclick = () => {
    header.classList.toggle('active');
    headerMenu.classList.toggle('active');
    menuBurger.classList.toggle('active');
}

window.onscroll = () => {
    header.classList.remove('active');
    headerMenu.classList.remove('active');
    menuBurger.classList.remove('active');
};