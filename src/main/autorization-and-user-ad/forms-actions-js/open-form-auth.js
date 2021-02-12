import submitForm from './submit-form';
import formRegister from '../authorization/templates/form-registration.hbs';
import modalFormCall from '../user-ad/template/modal-form-call.hbs';
import pnotify from '../pnotify/pnotify';
import axios from 'axios';

const rootRef = document.querySelector('#root');

const refs = {};
let categoryList = null;

function initRefs() {
    refs.inputFile = document.querySelector('.inputfile');
    refs.categoryFormMenu = document.querySelector('.wrap-category');
    refs.inputCategory = document.querySelector('.input-form[name="category"]');
};

function handlerOpenFormAuth(event) {
    const value = event.target.name;

    if (!localStorage.getItem('accessToken') && value === "user-ad") return pnotify.noAuthMessage();
    // if (value === 'outlogin')
    
    if (value === "auth" || value === "login") {
        const markup = formRegister({ isAuth: value === "auth" });
        renderForms(markup);
    };

    if (value === 'user-ad') {
        fetchRussinCategory();  
    };
}

async function fetchRussinCategory() {
    const { data: rusCategory } = await axios.get('/call/russian-categories');
    categoryList = rusCategory;
    const markup = modalFormCall(categoryList);

    renderForms(markup);
    // refs.containerImg = document.querySelector('.file[name="file"]');
    initRefs();
    
    refs.inputFile.addEventListener('change', handlerPreloadFile);
    refs.categoryFormMenu.addEventListener('click', handlerFormCategoryMenu);
    refs.inputCategory.addEventListener('focus', handlerFocusCategory);
}

function renderForms(markup) {
    rootRef.insertAdjacentHTML('beforeend', markup);
    submitForm();
};

function handlerPreloadFile(event) {
    document.querySelector('.file[name="file"]').style.border = "none";
    const plusRef = document.querySelectorAll('.download');
    const imagesPreloadRef = document.querySelectorAll('img[name="file-preload"]');
     
    for (let i = 0; i < event.target.files.length; i++) {
        imagesPreloadRef[i].src = URL.createObjectURL(event.target.files[i]);
        imagesPreloadRef[i].classList.add('preload-img');
        plusRef[i].style.display = "none";
    };
};

function handlerFocusCategory() {
    initRefs();
    refs.categoryFormMenu.classList.remove('is-hidden');
};

async function handlerFormCategoryMenu(event) {
    event.preventDefault();
    const index = categoryList.indexOf(event.target.textContent);
    
    const { data: engCategory } = await axios.get('/call/categories');
    initRefs();
    
    const input = document.querySelector('input[name="category"]');
    input.value = engCategory[index];
    refs.categoryFormMenu.style.display = "none";
};

    
export { handlerOpenFormAuth, handlerPreloadFile, handlerFormCategoryMenu };
