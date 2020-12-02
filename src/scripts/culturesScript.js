let cultures = [...document.querySelectorAll('.culture-type__single-culture')];
let culturesTitle = [...document.querySelectorAll('.name-block__title')];
let partnersBlock = [...document.querySelectorAll('.partners-logos__single-partner')];
let allCulture = ['Пшеница', 'Кукуруза', 'Картофель', 'Подсолнечник', 'Сахарная свекла', 'Соя', 'Ячмень', 'Рапс', 'Лук и чеснок', 'Томаты', 'Перец', 'Капуста']

cultures.forEach((culture, i) => {
    culture.style.background = `url('../img/culture-bg-${i + 1}.png') no-repeat center`;
})
culturesTitle.forEach((title, i) => {
    title.innerHTML = allCulture[i];
})
partnersBlock.forEach((partner, i) => {
    partner.innerHTML = `<img src='../img/partners-logo-${i + 1}.png' alt="Partner logo">`;
})