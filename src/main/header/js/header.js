import HeaderTpl from '../templates/header.hbs';
import { getData} from './russianToEnglish';
import addMarkup from './addMarkup';
import { receiveHeader, receiveCategories } from './api';
import onGetInputValue from './getInputValue';
import {
    resetList, addActiveFilter, removeActiveFilter,
    onClickMenuFilter, onClickCloseBurgerMenu, onClickSearchIcon, onClickReset
} from './utils';


const refs = {
    
};

receiveHeader().then(header => {    
    addMarkup(header, HeaderTpl);
    
    refs.filter= document.querySelector('#filter'),
    refs.search= document.querySelector('#search'),
    refs.resetBtn= document.querySelector('#reset'),
    refs.filterMenu=document.querySelector('#checkbox-filter');
    refs.auth = document.querySelector('#auth');
    refs.closeBurgerMenu = document.querySelector('#close');
    refs.iconSearch = refs.search.querySelector('.js-icon-search');
    refs.jsMenuMobile=document.querySelector('.js-menu-mobile');
        
    refs.filter.addEventListener('click', onFilterClick);
    refs.search.addEventListener('submit', onGetInputValue);
    refs.resetBtn.addEventListener('click', onClickReset);
    refs.filterMenu.addEventListener('click', onClickMenuFilter);
    refs.closeBurgerMenu.addEventListener('click', onClickCloseBurgerMenu); 
    refs.iconSearch.addEventListener('click', onClickSearchIcon);
});

function onFilterClick(e) {
    if (e.target.dataset.filter !== 'filter') return;
    removeActiveFilter(refs.filter);
    addActiveFilter(e.target);

    getData().then(el => {
        const valueFilter = el[e.target.textContent];
        receiveCategories(valueFilter);
        
    });
};

export default refs;