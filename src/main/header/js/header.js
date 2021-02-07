import HeaderTpl from '../templates/header.hbs';
import { getData} from './russianToEnglish';
import addMarkup from './addMarkup';
import resetList from './resetList';
import addActiveFilter from './setActiveClass';
import { receiveHeader, receiveCategories } from './api';
import onGetInputValue from './getInputValue';
import removeActiveFilter from './removeActiveClass';



receiveHeader().then(header => {    
    addMarkup(header, HeaderTpl);
    const refs = {
        filterRef: document.querySelector('#filter'),
        searchRef: document.querySelector('#search'),
        resetBtnRef: document.querySelector('#reset'),
    };   
    const { filterRef, searchRef, resetBtnRef } = refs;   
    
    
    filterRef.addEventListener('click', onFilterClick);
    searchRef.addEventListener('submit', onGetInputValue);
    resetBtnRef.addEventListener('click', onClickReset);
    
    
    function onFilterClick(e) {
        // if (e.target.nodeName !== "BUTTON") return; 
        if (e.target.dataset.filter !== 'filter') return;
        removeActiveFilter(filterRef);
        addActiveFilter(e.target);

        getData().then(el => {
            const valueFilter = el[e.target.textContent];
            receiveCategories(valueFilter);
        });
    };  

    function onClickReset() {
        resetList();
        removeActiveFilter(filterRef);
    }; 
       
});