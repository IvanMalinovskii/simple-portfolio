
new WOW().init();

let swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.projects__pagination',
        bulletClass: 'projects__bullet',
        bulletActiveClass: 'projects__bullet_active',
        clickable: true
    }
});