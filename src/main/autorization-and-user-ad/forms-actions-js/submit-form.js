import fetchUserLogin from '../authorization/js/login-input';
import submitUserForms from './submit-user-forms';
import { handlerKeydown, handlerModalClose, handlerBackdropClick } from './close-modal-actions';
import fetchUserAuth from '../authorization/js/authorization';
import fetchUserAd from '../user-ad/js/fetch-user-ad';
import { spinnerClassAdd } from '../forms-actions-js/spinner'; 

const refs = {};

function submitForm() {
    window.addEventListener('keydown', handlerKeydown);

    refs.submitBtn = document.querySelector('.js__form');
    refs.cancelBtn = document.querySelector('#cancelBtn');
    refs.closeBtn = document.querySelector('.modal-add-close');
    refs.backdropCloseModal = document.querySelector('.backdrop-add');
    refs.inputFile = document.querySelector('.inputfile');
    refs.categoryFormMenu = document.querySelector('.wrap-category');

    const { submitBtn, cancelBtn, closeBtn, backdropCloseModal, inputFile, imagesPreload, categoryFormMenu } = refs;
    
    submitBtn.addEventListener('submit', handlerSubmitFormAuth);
    cancelBtn.addEventListener('click', handlerModalClose);
    closeBtn.addEventListener('click', handlerModalClose);
    backdropCloseModal.addEventListener('click', handlerBackdropClick);
    inputFile.addEventListener('change', handlerPreloadFile);
    categoryFormMenu.addEventListener('click', handlerFormCategoryMenu)

};

function handlerFormCategoryMenu(event) {
    event.preventDefault();

    const input = document.querySelector('input[name="category"]');
    input.value = event.target.dataset.category;

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


function handlerPreloadFile(event) {
    document.querySelector('.download').style.display = 'none';
    
    const imagesPreloadRef = document.querySelectorAll('img[name="file-preload"]');

    for (let i = 0; i < event.target.files.length; i++) {
        imagesPreloadRef[i].src = URL.createObjectURL(event.target.files[i]);
        imagesPreloadRef[i].classList.add('preload-img');
    };

    // for (let i = 0; i < event.target.files.length; i++) {
    //     const images = new Image();
    //     images.src = URL.createObjectURL(event.target.files[i]);
    //     images.classList.add('preload-img');
    //     console.log(typeof images);
    //     refs.divPreloadWrap.insertAdjacentHTML('beforeend', images)
    // }
}


export default submitForm;
