let allSort = [...document.querySelectorAll('.single-sort__sort-type')];
let allListSort = [...document.querySelectorAll('.sorting-catalog__single-sort li')];
allSort.forEach((el) => {
    el.addEventListener('click', () => {
        allSort.forEach((b) => {
            b.classList.remove('sort-open')
        })
        el.classList.toggle('sort-open')
    })
})

allListSort.forEach((srt) => {
    srt.addEventListener('click', () => {
        srt.closest('ul').previousElementSibling.innerHTML = srt.innerHTML;
    })
});