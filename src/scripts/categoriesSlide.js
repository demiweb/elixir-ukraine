$(document).ready(function () {
    $('.categories-block__categories-list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 531,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }]
    });
});