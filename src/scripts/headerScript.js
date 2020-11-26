let burgerBtn = [...document.querySelectorAll('.header-navigation__list-container')];

function toggleVisible() {
    burgerBtn[0].classList.toggle('header-navigation__list-container--active');
}

let hdr = [...document.querySelectorAll('.elixir-header')];

window.addEventListener('scroll', () => {
    if (window.innerWidth > 767) {


        if (this.oldScroll > this.scrollY) {
            hdr[0].style.top = '0px';
        } else {
            hdr[0].style.top = '-77px';

        }
        this.oldScroll = this.scrollY;
    } else {
        hdr[0].style.top = '0';

    }
});