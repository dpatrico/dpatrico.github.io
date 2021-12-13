$(document).ready(function () {
    $("#slider").bxSlider({
        pause: 3000,
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 25,
        captions: true,
        randomStart: true,
        pagerType: 'short',
        pagerSelector: '#id_pager'
    });
});