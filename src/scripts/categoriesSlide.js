$(document).ready(function () {
    $('.categories-block__categories-list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-next"></button>'
    });
});