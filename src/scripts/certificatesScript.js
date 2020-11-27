let allCertificates = [...document.querySelectorAll('.certificates-elixir__single-certificate')];
let modalWindow = [...document.querySelectorAll('.modal-certificate')];
let modalImgCont = [...document.querySelectorAll('.modal-certificate__document-container')];
allCertificates.forEach((cert, i) => {
    cert.addEventListener('click', () => {
        let img = document.createElement('img');
        img.classList.add('image-certificate')
        img.addEventListener('click', () => {
            event.stopPropagation();
        })
        img.src = `../img/certificates/certificate-full-${i + 1}.jpg`
        modalWindow[0].classList.add('modal-certificate--active');
        modalImgCont[0].appendChild(img);
        document.body.classList.add('scroll-hidden');
        console.log('added')
    })
})

function closeModal(e) {
    modalWindow[0].classList.remove('modal-certificate--active');
    document.body.classList.remove('scroll-hidden');
    modalImgCont[0].innerHTML = '';
}