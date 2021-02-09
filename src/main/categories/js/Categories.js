import productTpl from '../templates/marcupCategories.hbs';
import axios from 'axios';
import initSlider from '../js/slider'

const refs = {
    bodyContainer: document.querySelector('#root')
};

const productsUrl = 'https://callboard-backend.goit.global/call?page=1';
const categorisUrl = 'https://callboard-backend.goit.global/call/categories';
const rusCategoriesUrl = 'https://callboard-backend.goit.global/call/russian-categories';

async function getRusCategoriesWithProduct() {
    const { data: categoriesData } = await axios.get(categorisUrl);
    const { data: rusCategoriesData } = await axios.get(rusCategoriesUrl);
    // console.log(categoriesData);
    // console.log(rusCategoriesData);
    const categoriesMap = categoriesData.reduce((acc, item, index) => {
        return {
            ...acc,
            [item]: rusCategoriesData[index]
        }       
    }, {});
    
    const { data: categories } = await axios.get(`${productsUrl}`);  
    // console.log(categories);
    // console.log(categoriesMap);
    
    const categoriesWithProducts = Object.entries(categories).map(item => {
        return {
            title: categoriesMap[item[0]] ? categoriesMap[item[0]] : item[0],
            products: item[1]
        }
    });
    return categoriesWithProducts;
};

async function renderCategoriesWithProduct() {
    const data = await getRusCategoriesWithProduct();
    

    const markap = productTpl(data);
    refs.bodyContainer.insertAdjacentHTML('beforeend', markap);
        
    initSlider(settingSlader());

    const seeAll = document.querySelectorAll('.title_categories_conteiner');
    seeAll.forEach(element => element.addEventListener('click', openAllProduct));

    const loadMoreBtn = document.querySelector('[data-action="load-more"]');
    loadMoreBtn.addEventListener('click', loadMoreCategories);
};
    
function settingSlader() {
    const windowWidth = Math.max(document.documentElement.clientWidth);
    const swiperPrev = document.querySelectorAll('[data-action="btn-swiper-prev"]');
    const swiperNext = document.querySelectorAll('[data-action="btn-swiper-next"]');

    let slidesPerView = 0;
    let el = '.swiper-pagination';
        
    if (windowWidth >= 320 && windowWidth < 768) {
        slidesPerView = 1;
        swiperPrev.forEach(element => element.classList.replace('swiper-button-prev', 'swiper-button-hidden'));
        swiperNext.forEach(element => element.classList.replace('swiper-button-next', 'swiper-button-hidden'))
    } if (windowWidth >= 768) {
        slidesPerView = 2;
        el = ''        
    } if (windowWidth >= 1280) {
        slidesPerView = 4
    }

    return { slidesPerView, el };
};

renderCategoriesWithProduct();

async function openAllProduct(event) {
    event.preventDefault();
    const category = event.target.dataset.action;
  
    const { data: allProduct } = await axios.get(`https://callboard-backend.goit.global/call/specific/${category}`);
    
    console.log(allProduct);
};
 
async function loadMoreCategories() {
    
};