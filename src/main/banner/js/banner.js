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
    return console.log(event.target.dataset.title);
};


function makeRequestBanner() {
    makeRequest()
        .then((res) => {
            const windowWidth = document.documentElement.clientWidth;
            renderMobile(res);

            if (windowWidth > 767 && windowWidth < 1280) {
                renderBottomSection(res);

            }
            if (windowWidth > 1280) {
                renderDesctopMarcup(res);
            }
            slider(settingSladerBanner());
            rootRef.addEventListener('click', bannerClick);
        })
};

function settingSladerBanner() {
    let slidesPerView = 0;
    let el = '.swiper-pagination';
    return { slidesPerView, el };
};

export default makeRequestBanner;