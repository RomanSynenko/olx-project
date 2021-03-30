import './header';
import HeaderTpl from '../templates/header.hbs';
import SearchTpl from '../templates/search.hbs';
import authorizationRoot from '../../authorization-and-user-ad/root/js/root';
import onOpenModal from '../../cardProduct/cardMain';

const headerRef = document.querySelector('#header');
const root = document.querySelector('#root');

function addMarkup(header) {
    headerRef.insertAdjacentHTML('beforeend', HeaderTpl(header));
    authorizationRoot(); 
    
};

function addMarkupRoot(value) {
    root.insertAdjacentHTML('beforeend', SearchTpl(value));
    const containerCard = document.querySelector('#list');
    
    containerCard.addEventListener('click', onClickCardFilter);   
};

function onClickCardFilter(event) {
    event.preventDefault();
    if(!event.target.closest('li')){
        return
    }  
    const titleFilter = event.target.closest('li').dataset.titleFilter;
    onOpenModal(titleFilter);
}

export {addMarkup, addMarkupRoot};