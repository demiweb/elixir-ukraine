let openBtns = [...document.querySelectorAll('.support-header__open-button')];
let allSupportServices = [...document.querySelectorAll('.single-support-service')];

allSupportServices.forEach((srvc, i) => {
    srvc.addEventListener('click', () => {
        allSupportServices.forEach((ss, m) => {
            if (m === i) {

            } else {
                ss.classList.remove('single-support-service--open');
            }
        })
        openBtns.forEach((cls, k) => {
            if (k === i) {

            } else {
                cls.classList.remove('support-header__open-button--opened');
            }
        })
        let container = [...srvc.querySelectorAll('.support-header__open-button')];
        container[0].classList.toggle('support-header__open-button--opened');
        srvc.classList.toggle('single-support-service--open');
    })
})