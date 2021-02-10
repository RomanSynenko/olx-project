import fetchUserLogin from '../authorization/js/login-input';
import submitUserForms from './submit-user-forms';
import { handlerKeydown, handlerModalClose, handlerBackdropClick } from './close-modal-actions';
import fetchUserAuth from '../authorization/js/authorization';
import fetchUserAd from '../user-ad/js/fetch-user-ad';
import { spinnerClassAdd } from './spinner';
import { fetchPatchUserAd } from '../user-ad/js/patch-user-ad';

const refs = {};

function initRefs() {
    refs.form = document.querySelector('.js__form');
    refs.cancelBtn = document.querySelector('#cancelBtn');
    refs.closeBtn = document.querySelector('.modal-add-close');
    refs.backdropCloseModal = document.querySelector('.backdrop-add');
};

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

    const { currentTarget: { elements } } = event;
    
    if (elements.userAd && elements.userAd.className === 'btn-form-add edit') {
        const form = new FormData(event.target);
        const id = elements.userAd.dataset.id
        fetchPatchUserAd(form, id);
        return;
    };

    if (elements.userAd) {
        const form = new FormData(event.target);
        fetchUserAd(form);
        return;
    };
    
    const formData = submitUserForms(event);

    if (elements.login) fetchUserLogin(formData);
    
    if (elements.auth) fetchUserAuth(formData); 
};



export default submitForm;
