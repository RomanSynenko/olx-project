
import { getData} from './russianToEnglish';
import {addMarkup} from './addMarkup';
import { receiveHeader, receiveCategories } from './api';
import onGetInputValue from './getInputValue';
import {
     addActiveFilter, removeActiveFilter,
    onClickMenuFilter, onClickCloseBurgerMenu, onClickSearchIcon, onClickReset,clearRoot
} from './utils';
import clickOnMyAccountButtonEgor from '../../health-home/js/h-home-index';
//

const refs = {
    root: document.querySelector('#root'),
};

receiveHeader().then(header => {
    addMarkup(header);

    refs.filter= document.querySelector('#filter'),
    refs.search= document.querySelector('#search'),
    refs.resetBtn= document.querySelector('#reset'),
    refs.filterMenu=document.querySelector('#checkbox-filter');
    refs.auth = document.querySelector('#auth');
    refs.closeBurgerMenu = document.querySelector('#close');
    refs.iconSearch = refs.search.querySelector('.js-icon-search');
    refs.jsMenuMobile = document.querySelector('.js-menu-mobile');
    refs.myOffice = document.querySelector('#officeBtn');
    refs.myOfficeMob=document.querySelector('#officeBtn-mob');



    refs.filter.addEventListener('click', onFilterClick);
    refs.search.addEventListener('submit', onGetInputValue);
    refs.resetBtn.addEventListener('click', onClickReset);
    refs.filterMenu.addEventListener('click', onClickMenuFilter);
    refs.closeBurgerMenu.addEventListener('click', onClickCloseBurgerMenu);
    refs.iconSearch.addEventListener('click', onClickSearchIcon);
    refs.myOffice.addEventListener('click', clickOnMyAccountButtonEgor);
    refs.myOfficeMob.addEventListener('click', clickOnMyAccountButtonEgor)
});




function onFilterClick(e) {
    if (e.target.dataset.filter !== 'filter') return;
    removeActiveFilter(refs.filter);
    addActiveFilter(e.target);
    clearRoot();
    getData().then(el => {
        const valueFilter = el[e.target.textContent];
        receiveCategories(valueFilter);

    });
};

export default refs ;
