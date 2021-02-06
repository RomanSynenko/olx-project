import fetchUserLogin from '../authorization/js/login-input';
import submitUserForms from './submit-user-forms';
import { handlerKeydown, handlerModalClose, handlerBackdropClick } from './close-modal-actions';
import fetchUserAuth from '../authorization/js/authorization';
import fetchUserAd from '../user-ad/js/fetch-user-ad';

function submitForm() {
    window.addEventListener('keydown', handlerKeydown);

    const refs = {
        submitBtn: document.querySelector('.js__form'),
        cancelBtn: document.querySelector('#cancelBtn'),
        closeBtn: document.querySelector('.modal-add-close'),
        backdropCloseModal: document.querySelector('.backdrop-add')
    };
    const { submitBtn, cancelBtn, closeBtn, backdropCloseModal } = refs;
    
    submitBtn.addEventListener('submit', handlerSubmitFormAuth);
    cancelBtn.addEventListener('click', handlerModalClose);
    closeBtn.addEventListener('click', handlerModalClose);
    backdropCloseModal.addEventListener('click', handlerBackdropClick);
};

async function handlerSubmitFormAuth(event) {
    event.preventDefault();
    const formData = submitUserForms(event);
    
    const { currentTarget: { elements } } = event

    elements.login ? fetchUserLogin(formData) : elements.userAd ? fetchUserAd(formData) : fetchUserAuth(formData);
};

export default submitForm;
