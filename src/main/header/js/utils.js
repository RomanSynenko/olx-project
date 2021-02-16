import refs from './header';
import renderCategoriesWithProduct from '../../categories/js/Categories';
import makeRequestBanner from '../../banner/js/banner';
const root = document.querySelector('#root');


function resetList() {
    const listRef = document.querySelector('#list');
    listRef && listRef.remove();
};

function addActiveFilter(nextActiveFilter) {
    nextActiveFilter.classList.add('active');
    removeMenuFilterTablet()
    refs.auth.classList.add('is-hidden-btn-auth');
    refs.auth.classList.remove('is-show-btn-auth');
}

function removeActiveFilter(filterRef) {
    const currentActiveFilter = filterRef.querySelector('.active');
    if (currentActiveFilter) {
        currentActiveFilter.classList.remove('active')
    };
};

function removeMenuFilterTablet() {
    refs.filter.classList.remove('is-open');
    refs.filterMenu.checked = false;
}

function onClickMenuFilter() {
    refs.filter.classList.add('is-open');
    refs.closeBurgerMenu.classList.remove('display-none');
    refs.auth.classList.remove('is-hidden-btn-auth');
    refs.auth.classList.add('is-show-btn-auth');

    if (!refs.filterMenu.checked) {
        refs.filter.classList.remove('is-open');
        
    }    
}

function onClickCloseBurgerMenu() {
    refs.closeBurgerMenu.classList.add('display-none');
    refs.filter.classList.remove('is-open');
    refs.filterMenu.checked = false;

    refs.auth.classList.add('is-hidden-btn-auth');
    refs.auth.classList.remove('is-show-btn-auth');
}

function onClickSearchIcon() {
    refs.search.firstElementChild.classList.add('search-mobile'); 
    refs.jsMenuMobile.classList.add('display-none');
    
}



function onClickReset() {   
    resetList();
    removeActiveFilter(refs.filter);
    if (root.firstElementChild === null) {
        makeRequestBanner();
        renderCategoriesWithProduct();
    }
   
    setTimeout(() => {
        refs.resetBtn.blur();
    },200)
};

function clearRoot() {
    refs.root.innerHTML = '';    
}
    
export {
    resetList, addActiveFilter, removeActiveFilter,
    onClickMenuFilter, onClickCloseBurgerMenu, onClickSearchIcon, onClickReset,clearRoot
};