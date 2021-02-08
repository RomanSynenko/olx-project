import { receiveSearchValue } from './api';
import { removeActiveFilter } from './utils';

function onGetInputValue(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue = form.elements.query.value
    receiveSearchValue(inputValue);
    const filterRef = document.querySelector('#filter');
    removeActiveFilter(filterRef);
    form.reset();
};

export default onGetInputValue;