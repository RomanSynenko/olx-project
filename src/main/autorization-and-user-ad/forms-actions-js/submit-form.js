import fetchUserLogin from '../authorization/js/login-input';
import submitUserForms from './submit-user-forms';
import { handlerKeydown, handlerModalClose, handlerBackdropClick } from './close-modal-actions';
import fetchUserAuth from '../authorization/js/authorization';
import fetchUserAd from '../user-ad/js/fetch-user-ad';
import { spinnerClassAdd } from '../forms-actions-js/spinner'; 

const refs = {};

function submitForm() {
    window.addEventListener('keydown', handlerKeydown);

    refs.submitBtn = document.querySelector('.js__form'),
    refs.cancelBtn = document.querySelector('#cancelBtn'),
    refs.closeBtn = document.querySelector('.modal-add-close'),
    refs.backdropCloseModal = document.querySelector('.backdrop-add')

    const { submitBtn, cancelBtn, closeBtn, backdropCloseModal } = refs;
    
    submitBtn.addEventListener('submit', handlerSubmitFormAuth);
    cancelBtn.addEventListener('click', handlerModalClose);
    closeBtn.addEventListener('click', handlerModalClose);
    backdropCloseModal.addEventListener('click', handlerBackdropClick);
};

function handlerSubmitFormAuth(event) {
    event.preventDefault();

    spinnerClassAdd();

    const formData = submitUserForms(event);

    const { currentTarget: { elements } } = event;

    //elements.login ? fetchUserLogin(formData) : elements.userAd ? fetchUserAd(formData) : fetchUserAuth(formData);

    if (elements.login) fetchUserLogin(formData);
    if (elements.userAd) fetchUserAd(formData);
    if (elements.auth) fetchUserAuth(formData);
};



export default submitForm;
