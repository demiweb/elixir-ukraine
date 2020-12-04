let productInfoNavs = [...document.querySelectorAll('.product-navs__product-info-nav')];
let productAllNavs = [...document.querySelectorAll('.product-nav-content__nav-content-product')];

productInfoNavs.forEach((nav) => {
    nav.addEventListener('click', () => {
        if (nav.classList.contains('product-nav-content__nav-content-product--active')) {

        } else {
            let navId = nav.dataset.id;
            productAllNavs.forEach((oneNav) => {
                oneNav.classList.remove('product-nav-content__nav-content-product--active');
            })
            document.getElementById(navId).classList.add('product-nav-content__nav-content-product--active')
            productInfoNavs.forEach((item) => {
                item.classList.remove('product-navs__product-info-nav--active');
            })
            nav.classList.add('product-navs__product-info-nav--active')
        }
    })
})