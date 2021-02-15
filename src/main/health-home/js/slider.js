import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

function slider({
    selector = '.card-container',

}) {
    return new Swiper(selector,
        {
            loopPreventsSlide: true,
            loop: true,
            // spaceBetween: 10,
            pagination: {
                dynamicBullets: true,
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
        });
}

export default slider;
