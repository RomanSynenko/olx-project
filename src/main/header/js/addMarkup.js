import { resetList} from './utils';

const rootRef= document.querySelector('#root');

function addMarkup(header, tpl) {
    resetList();
    rootRef.insertAdjacentHTML('beforeend', tpl(header));    
};

export default addMarkup;