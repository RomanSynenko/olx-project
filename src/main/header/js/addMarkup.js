import './header';
import HeaderTpl from '../templates/header.hbs';
import SearchTpl from '../templates/search.hbs';

const headerRef = document.querySelector('#header');
const root = document.querySelector('#root');

function addMarkup(header) {
   headerRef.insertAdjacentHTML('beforeend', HeaderTpl(header));   
    
};

function addMarkupRoot(value) {
    root.insertAdjacentHTML('beforeend', SearchTpl(value)); 
    
};

export {addMarkup, addMarkupRoot};