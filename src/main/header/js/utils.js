import refs from './header';

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

    refs.filterMenu
    
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

// function resetFocus({element}) {
//     setTimeout(() => {
//         element.blur();
//     },200)    
// }


function onClickReset() {
    resetList();
    removeActiveFilter(refs.filter);
    
    setTimeout(() => {
        refs.resetBtn.blur();
    },200)
};
    
export {
    resetList, addActiveFilter, removeActiveFilter,
    onClickMenuFilter, onClickCloseBurgerMenu, onClickSearchIcon, onClickReset
};