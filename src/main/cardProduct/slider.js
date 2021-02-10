import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
function initSlider({
  selector = '#swip',
  slidesPerView = 1,
}) {
  return new Swiper(selector,
{
//   direction: 'vertical',
  // loop: true,

  // If we need pagination
  slidesPerView,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
}


export default initSlider;