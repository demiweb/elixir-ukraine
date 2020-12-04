let allSort = [...document.querySelectorAll('.single-sort__sort-type')];
let allListSort = [...document.querySelectorAll('.sorting-catalog__single-sort li')];
allSort.forEach((el, i) => {
    el.addEventListener('click', () => {

        allSort.forEach((b, k) => {
            if ( i !== k) {
                b.classList.remove('sort-open');
            } else {
                b.classList.toggle('sort-open')
            }
        })

    })
})

allListSort.forEach((srt) => {
    srt.addEventListener('click', () => {
        srt.closest('ul').previousElementSibling.innerHTML = srt.innerHTML;
    })
});