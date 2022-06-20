const swiper = new Swiper('.swiper', {
    // Optional parameters


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

let Scrollbar = window.Scrollbar;
const Options={
    'damping' : .06
}

Scrollbar.init(document.querySelector('body'),Options);