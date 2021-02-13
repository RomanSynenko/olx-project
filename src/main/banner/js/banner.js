import makeRequest from './apiService';
import slider from './slider';
import markupSliderMobile from '../templates/markupSlider.hbs';
import markupBottomSection from '../templates/markupBottomSection.hbs';
import markupDesctopRightSection from '../templates/markupDesctopRightSection.hbs';
import '../style/style.scss';

const rootRef = document.querySelector('#root');
const renderMobile = (res) => {
    const createSlider = markupSliderMobile(res);
    rootRef.insertAdjacentHTML('beforeend', createSlider);
};
const renderBottomSection = (res) => {
    const sliderRef = document.querySelector('.banner');
    const bottomSectionArray = res.slice(8, 10);
    const marcupBottomSection = markupBottomSection(bottomSectionArray);
    sliderRef.insertAdjacentHTML('beforeend', marcupBottomSection);
};
const renderDesctopMarcup = (res) => {
    const sliderRef = document.querySelector('.banner');
    const desctopRightSection = res.slice(4, 6);
    const desctopBottomSection = res.slice(7, 10);
    const marcupRightDesctop = markupDesctopRightSection(desctopRightSection);
    const marcupBottomDesctop = markupBottomSection(desctopBottomSection);
    sliderRef.insertAdjacentHTML('beforeend', marcupRightDesctop);
    sliderRef.insertAdjacentHTML('afterend', marcupBottomDesctop);
};
const bannerClick = (event) => {
    return event.target.dataset.title;
};
const listenerBanner = (el) => {
    const refs = document.querySelectorAll(el);
    refs.forEach(
        (element) => {
            element.addEventListener('click', bannerClick);
        }
    )
};

makeRequest()
    .then((res) => {
        const windowWidth = document.documentElement.clientWidth;
        renderMobile(res);
        listenerBanner('.banner-slide');
        if (windowWidth > 767 && windowWidth < 1280) {
            listenerBanner('.banner-items');
            renderBottomSection(res);
        }
        if (windowWidth > 1280) {
            renderDesctopMarcup(res);
            listenerBanner('.item-cotainer_right_section');
            listenerBanner('.banner-items');
        }

        slider(settingSladerBanner());
    })

function settingSladerBanner() {
    let slidesPerView = 0;
    let el = '.swiper-pagination';
    return { slidesPerView, el };
};
