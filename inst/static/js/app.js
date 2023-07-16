const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60,
        }
    }
});

const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    slidesPerView: 3.5,
    spaceBetween: 60,
});

sliderMain.controller.control = sliderBg;

document.querySelectorAll('.slider__item').forEach(main_item => {
    main_item.addEventListener('click', event => {
        document.querySelectorAll('.slider__item.opened').forEach(item => {
            if (main_item != item) {
                item.classList.toggle('opened');
            }
        });
        main_item.classList.toggle('opened');
    })
});

let desc = document.querySelector('.description');
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden');
});