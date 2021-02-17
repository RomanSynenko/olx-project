import { receiveSearchValue } from './api';
import { removeActiveFilter,clearRoot } from './utils';
import refs from './header';


function onGetInputValue(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue = form.elements.query.value
    if(inputValue===''|| inputValue===' ') return
    clearRoot();
    receiveSearchValue(inputValue);
    const filterRef = document.querySelector('#filter');
    removeActiveFilter(filterRef);
    form.reset();
    refs.search.firstElementChild.classList.remove('search-mobile');
    refs.jsMenuMobile.classList.remove('display-none');
};

export default onGetInputValue;