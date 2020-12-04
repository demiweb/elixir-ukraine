let modalWindow = [...document.querySelectorAll('.elixir-modal-window')][0];

function openModal() {
    modalWindow.classList.add('opened-modal')
    document.body.classList.add('scroll-hidden');
}

modalWindow.addEventListener('click', closeModalWindow)
function closeModalWindow() {
    modalWindow.classList.remove('opened-modal');
    document.body.classList.remove('scroll-hidden');

}