import submitForm from './submit-form';
import formRegister from '../authorization/templates/form-registration.hbs';
import modalFormCall from '../user-ad/template/modal-form-call.hbs';
import pnotify from '../pnotify/pnotify';

const rootRef = document.querySelector('#root');

const refs = {};

function initRefs() {
    refs.inputFile = document.querySelector('.inputfile');
    refs.categoryFormMenu = document.querySelector('.wrap-category');
};

function handlerOpenFormAuth(event) {
    const value = event.target.name;
    let markup = null;

    if (!localStorage.getItem('accessToken') && value === "user-ad") return pnotify.noAuthMessage();
    // if (value === 'outlogin')

    
    if (value === "auth" || value === "login") {
        markup = formRegister({ isAuth: value === "auth" });
        renderForms(markup);
    };

    if (value === 'user-ad') { 
        markup = modalFormCall();
        renderForms(markup);
        initRefs();
        refs.inputFile.addEventListener('change', handlerPreloadFile);
        refs.categoryFormMenu.addEventListener('click', handlerFormCategoryMenu);
    };
};

function renderForms(markup) {
    rootRef.insertAdjacentHTML('beforeend', markup);
    submitForm();
};

function handlerPreloadFile(event) {
    document.querySelector('.download').style.display = 'none';
    
    const imagesPreloadRef = document.querySelectorAll('img[name="file-preload"]');

    for (let i = 0; i < event.target.files.length; i++) {
        imagesPreloadRef[i].src = URL.createObjectURL(event.target.files[i]);
        imagesPreloadRef[i].classList.add('preload-img');
    };
};

function handlerFormCategoryMenu(event) {
    event.preventDefault();

    const { target: { dataset } } = event;
    
    const input = document.querySelector('input[name="category"]');
    input.value = dataset.category;
    refs.categoryFormMenu.style.display = "none"
};

export default handlerOpenFormAuth;
