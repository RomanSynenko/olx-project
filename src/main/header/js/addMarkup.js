import './header';
import HeaderTpl from '../templates/header.hbs';
import SearchTpl from '../templates/search.hbs';
import authorizationRoot from '../../authorization-and-user-ad/root/js/root';

const headerRef = document.querySelector('#header');
const root = document.querySelector('#root');

function addMarkup(header) {
    headerRef.insertAdjacentHTML('beforeend', HeaderTpl(header));
    authorizationRoot(); 
    
};

function addMarkupRoot(value) {
    root.insertAdjacentHTML('beforeend', SearchTpl(value)); 
    
};

export {addMarkup, addMarkupRoot};