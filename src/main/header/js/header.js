import HeaderTpl from '../templates/header.hbs';
import { getData} from './russianToEnglish';
import addMarkup from './addMarkup';
import { receiveHeader, receiveCategories } from './api';
import onGetInputValue from './getInputValue';
import { resetList, addActiveFilter, removeActiveFilter } from './utils';


const refs = {
    
};

receiveHeader().then(header => {    
    addMarkup(header, HeaderTpl);
    
    refs.filterRef= document.querySelector('#filter'),
    refs.searchRef= document.querySelector('#search'),
    refs.resetBtnRef= document.querySelector('#reset'),
        
    refs.filterRef.addEventListener('click', onFilterClick);
    refs.searchRef.addEventListener('submit', onGetInputValue);
    refs.resetBtnRef.addEventListener('click', onClickReset);
});

function onFilterClick(e) {
    if (e.target.dataset.filter !== 'filter') return;
    removeActiveFilter(refs.filterRef);
    addActiveFilter(e.target);

    getData().then(el => {
        const valueFilter = el[e.target.textContent];
        receiveCategories(valueFilter);
    });
};  

function onClickReset() {
    resetList();
    removeActiveFilter(refs.filterRef);
}; 