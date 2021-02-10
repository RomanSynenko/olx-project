import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
function slider({
    selector = '.banner-siema',

}) {
    return new Swiper(selector,
        {
            loopPreventsSlide: true,
            speed: 1000,
            autoplay: {
                delay: 3000,
            },
            loop: true,
            spaceBetween: 10,
            pagination: {
                dynamicBullets: true,
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
        });
}

export default slider;