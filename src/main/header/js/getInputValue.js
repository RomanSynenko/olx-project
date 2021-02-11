import { receiveSearchValue } from './api';
import { removeActiveFilter } from './utils';
import refs from './header';

function onGetInputValue(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue = form.elements.query.value
    receiveSearchValue(inputValue);
    const filterRef = document.querySelector('#filter');
    removeActiveFilter(filterRef);
    form.reset();
    refs.search.firstElementChild.classList.remove('search-mobile');
    refs.jsMenuMobile.classList.remove('none-close-menu-filter');
};

export default onGetInputValue;