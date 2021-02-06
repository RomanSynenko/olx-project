import addTempl from '../template/modal-call.hbs';
import handlerKeydown from '../../root/js/keydown-listenter';
import handlerSubmitForm from '../../forms-actions-js/submit-user-forms';
import handlerUserAd from './handler-user-ad';

const rootRef = document.querySelector('#root');

function handlerAddUserForm() {

    const markup = addTempl();
    rootRef.insertAdjacentHTML('beforeend', markup)
    
    window.addEventListener('keydown', handlerKeydown);

    const submitRef = document.querySelector('.form__call');

    submitRef.addEventListener('submit', handlerUserAd);
}

export default handlerAddUserForm;