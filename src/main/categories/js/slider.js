import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

function initSlider({
  selector = '.swiper-container',
  slidesPerView = 1,
  el = '.swiper-pagination'
}) {
  return new Swiper(selector,
{
//   direction: 'vertical',
  // loop: true,

  // If we need pagination
  slidesPerView,
  
  // spaceBetween: 10,

  pagination: {
    el,
    // clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 4,
    }
  }
});
}
// .swiper-button-hidden

export default initSlider;