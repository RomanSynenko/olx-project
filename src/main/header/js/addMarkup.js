import { resetList} from './utils';

const headerRef= document.querySelector('#header');

function addMarkup(header, tpl) {
    resetList();
    headerRef.insertAdjacentHTML('beforeend', tpl(header));    
};

export default addMarkup;