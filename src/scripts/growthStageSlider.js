$(document).ready(function () {
    $('.growth-stages__list').slick({
        slidesToShow: 8,
        slidesToScroll:1,
        infinite: false,
        prevArrow: '<button class="slick-prev-nutrition nutrition-control-arrow"></button>',
        nextArrow: '<button class="slick-next-nutrition nutrition-control-arrow"></button>',
        swipeToSlide: false,
        swipe: false,
        touchMove: false,
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    touchMove: false,
                    swipe: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    touchMove: true,
                    swipe: true

                }
            },
            {
                breakpoint: 531,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    touchMove: true,
                    swipe: true

                }
            }]
    });
});