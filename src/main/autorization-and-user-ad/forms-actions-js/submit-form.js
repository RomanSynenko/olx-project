import fetchUserLogin from '../authorization/js/login-input';
import submitUserForms from './submit-user-forms';
import { handlerKeydown, handlerModalClose, handlerBackdropClick } from './close-modal-actions';
import fetchUserAuth from '../authorization/js/authorization';
import fetchUserAd from '../user-ad/js/fetch-user-ad';
import { spinnerClassAdd } from './spinner';

const refs = {};

function initRefs() {
    refs.form = document.querySelector('.js__form');
    refs.cancelBtn = document.querySelector('#cancelBtn');
    refs.closeBtn = document.querySelector('.modal-add-close');
    refs.backdropCloseModal = document.querySelector('.backdrop-add');
}

function submitForm() {
    initRefs();

    const { form, cancelBtn, closeBtn, backdropCloseModal } = refs;

    window.addEventListener('keydown', handlerKeydown);
    form.addEventListener('submit', handlerSubmitFormAuth);
    cancelBtn.addEventListener('click', handlerModalClose);
    closeBtn.addEventListener('click', handlerModalClose);
    backdropCloseModal.addEventListener('click', handlerBackdropClick);
};

function handlerSubmitFormAuth(event) {
    event.preventDefault();

    spinnerClassAdd();

    const formData = new FormData(event.target);
    const { currentTarget: { elements } } = event;

    //elements.login ? fetchUserLogin(formData) : elements.userAd ? fetchUserAd(formData) : fetchUserAuth(formData);

    if (elements.login) fetchUserLogin(formData);
    if (elements.userAd) fetchUserAd(formData);
    if (elements.auth) fetchUserAuth(formData);
};

export default submitForm;
