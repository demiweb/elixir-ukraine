let burgerBtn = [...document.querySelectorAll('.header-navigation__list-container')];

function toggleVisible() {
    burgerBtn[0].classList.toggle('header-navigation__list-container--active');
}