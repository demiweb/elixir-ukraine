let modalWindow = [...document.querySelectorAll('.elixir-modal-window')][0];
let modalCatalog = [...document.querySelectorAll('.modal-catalog')][0];
let modalConsult = [...document.querySelectorAll('.modal-consultation')][0];
let helpConsultBtn = [...document.querySelectorAll('.elixir-catalog__need-help-block .buy-buttons__button')][0];

function openModal(e) {
    if (e.id === 'download-catalog-btn') {
        modalCatalog.classList.add('opened-modal');

    } else {
        modalWindow.classList.add('opened-modal')

    }
    document.body.classList.add('scroll-hidden');
}

modalWindow.addEventListener('click', closeModalWindow);
modalCatalog.addEventListener('click', closeModalWindow);
function closeModalWindow() {

    modalWindow.classList.remove('opened-modal');
    modalCatalog.classList.remove('opened-modal');
    modalConsult.classList.remove('opened-modal');
    document.body.classList.remove('scroll-hidden');

}


function addConsultEvent () {
    if (helpConsultBtn === undefined) {

    } else {
        helpConsultBtn.addEventListener('click', () => {
            modalConsult.classList.add('opened-modal');
            document.body.classList.add('scroll-hidden');
        })
    }
}


