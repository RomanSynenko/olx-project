import productTpl from '../templates/marcupCategories.hbs';
import getRusCategoriesWithProduct from '../js/fetchAPI';
import initSlider from '../js/slider';
import onOpenModal from '../../cardProduct/cardMain';
import renderFooter from '../../footer/footer';

const refs = {
    bodyContainer: document.querySelector('#root')
};

let pageNamber = 1;

async function renderCategoriesWithProduct() { 
    pageNamber = 1;
    const data = await getRusCategoriesWithProduct(pageNamber);

    const markap = productTpl(data);
    refs.bodyContainer.insertAdjacentHTML('beforeend', markap);
   
    renderFooter();

    const cardsCategory = document.querySelector('.js-container-category');
    // !! ждемо Колю
    // cardsCategory.forEach(el => {
        
    // })
    // !!
    cardsCategory.addEventListener('click', handlerCardCategory);

    function handlerCardCategory(event) {
        event.preventDefault();
        onOpenModal(event.target.dataset.titleFilter);        
    }


    // onOpenModal()    

    // pageNamber += 1; 
     
        
    initSlider(settingSlader());

    // const seeAll = document.querySelectorAll('.title_categories_conteiner');
    // seeAll.forEach(element => element.addEventListener('click', openAllProduct));

    loadMoreHeandler();    
};



function loadMoreHeandler() {
    const loadMoreBtn = document.querySelector('[data-action="load-more"]');
    loadMoreBtn.addEventListener('click', loadMoreCategories);
}
    
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


// renderCategoriesWithProduct();

// async function openAllProduct(event) {
//     event.preventDefault();
//     const category = event.target.dataset.action;
  
//     const { data: allProduct } = await axios.get(`https://callboard-backend.goit.global/call/specific/${category}`);
    
//     console.log(allProduct);
// };
 
async function loadMoreCategories() {    
    const secBtn = document.querySelector('.section-btn');
    secBtn.remove();
    const refsSpiner = document.querySelector('.loader-btn');
    refsSpiner.classList.remove('is-hidden-spinner');
    pageNamber += 1;
    const data = await getRusCategoriesWithProduct(pageNamber);
    
    const markap = productTpl(data);
    refs.bodyContainer.insertAdjacentHTML('beforeend', markap);
    refsSpiner.remove();
    // refsSpiner.classList.add('is-hidden');

    loadMoreHeandler();
    
    window.scrollTo({
        top: document.documentElement.offsetHeight,
            });
    

    if (pageNamber === 3) { 
        const secBtn = document.querySelector('.section-btn');
        secBtn.remove();
    }   
    
    initSlider(settingSlader());
};

export default renderCategoriesWithProduct;