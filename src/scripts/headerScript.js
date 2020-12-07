let burgerBtn = [...document.querySelectorAll('.header-navigation__list-container')];

function toggleVisible() {
    burgerBtn[0].classList.toggle('header-navigation__list-container--active');
    document.body.classList.toggle('scroll-hidden');
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

// modalscript

let modalWindow = [...document.querySelectorAll('.elixir-modal-window')][0];
let allModalWindow = [...document.querySelectorAll('.elixir-modal-window')];
let closeBtn = [...document.querySelectorAll('.close-modal-block')];
let modalCatalog = [...document.querySelectorAll('.modal-catalog')][0];
let modalCart = [...document.querySelectorAll('.added-cart')];
let modalOneClick = [...document.querySelectorAll('.modal-one-click')][0];
let modalConsult = [...document.querySelectorAll('.modal-consultation')][0];
let helpConsultBtn = [...document.querySelectorAll('.elixir-catalog__need-help-block .buy-buttons__button')][0];

function openModal(e) {
    if (e.classList.contains('cart-add-btn')) {
        modalCart[0].classList.add('opened-modal')
    }

    else if (e.id === 'download-catalog-btn') {
        modalCatalog.classList.add('opened-modal');

    } else if (e.id === 'order-one-click') {
        modalOneClick.classList.add('opened-modal');

    } else {
        modalWindow.classList.add('opened-modal')

    }
    document.body.classList.add('scroll-hidden');
}

function addCatalogModalEvent() {
    if (modalCatalog === undefined) {

    } else {
        modalCatalog.addEventListener('click', closeModalWindow);

    }
}
function addCartModalEvent() {
    if (modalCart[0] === undefined) {

    } else {
        modalCart[0].addEventListener('click', closeModalWindow);

    }
}

function addModalWindowEvent() {
    if (modalWindow === undefined) {

    } else {
        modalWindow.addEventListener('click', closeModalWindow);

    }
}

function addConsultEvent() {
    if (helpConsultBtn === undefined) {

    } else {
        helpConsultBtn.addEventListener('click', () => {
            modalConsult.classList.add('opened-modal');
            document.body.classList.add('scroll-hidden');
        })
    }
}

function addOveCLickEvent() {
    if (modalOneClick === undefined) {

    } else {
        modalOneClick.addEventListener('click', closeModalWindow);

    }
}

closeBtn.forEach((cb) => {
    cb.addEventListener('click', () => {
        allModalWindow.forEach((amw) => {
            amw.classList.remove('opened-modal');
            document.body.classList.remove('scroll-hidden');
        })
    })
})

function closeModalWindow(e) {
    e.target.closest('.elixir-modal-window').classList.remove('opened-modal');
    document.body.classList.remove('scroll-hidden');

}


addCatalogModalEvent();
addConsultEvent();
addModalWindowEvent();
addOveCLickEvent();
addCartModalEvent();


// search script
let searchIcon = [...document.querySelectorAll('.search-container__search-icon-block')][0];
let searchField = [...document.querySelectorAll('.search-cart-block__search-container input')][0];
let searchList = [...document.querySelectorAll('.search-cart-block__search-container ul')][0];

searchIcon.addEventListener('click', () => {
        searchIcon.classList.toggle('search-open');

        searchField.classList.remove('entered-text');
    }
)


searchField.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        console.log(searchField.value)
        searchField.classList.add('entered-text');
    }
})

document.addEventListener('click', (e) => {
    let searchContainer = [...document.querySelectorAll('.search-cart-block__search-container')][0];
    if (!e.target.closest('.search-cart-block__search-container')) {
        searchIcon.classList.remove('search-open');

        searchField.classList.remove('entered-text');
    } else {

    }

})