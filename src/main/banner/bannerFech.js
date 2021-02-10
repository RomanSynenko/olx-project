import axios from 'axios';
import slider from './slider'
import markupSliderMobile from './templates/markupMobile.hbs'
import './style/style.scss'

const rootRef = document.querySelector('#root');
const instanse = axios.create({
    baseURL: 'https://callboard-backend.goit.global/call/ads'
});

const makeRequest = async () => {
    try {
        const { data } = await axios.get(instanse.defaults.baseURL);
        return data
    } catch (error) {
        throw error;
    }
};

makeRequest()
    .then((res) => {
        // Сюда добавить проверки по ширине экрана 
        const windowWidth = document.documentElement.clientWidth;
        console.log(windowWidth)
        if (windowWidth < 767) {
            const createSlider = markupSliderMobile(res);
            rootRef.insertAdjacentHTML('beforeend', createSlider);
        }
        slider(settingSlader());
    })

function settingSlader() {
    let slidesPerView = 0;
    let el = '.swiper-pagination';
    return { slidesPerView, el };
};
