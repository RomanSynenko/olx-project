import axios from "axios";
import modalFormCall from '../template/modal-form-call.hbs';
import submitForm from '../../forms-actions-js/submit-form';
import { spinnerClassRemove, } from '../../forms-actions-js/spinner';
import { removeBackdrop } from '../../forms-actions-js/close-modal-actions';
import { handlerPreloadFile, handlerFormCategoryMenu } from '../../forms-actions-js/open-form-auth';

const rootRef = document.querySelector('#root');

const refs = {};

function initRefs() {
    refs.inputFile = document.querySelector('.inputfile');
    refs.editBtn = document.querySelector('.btn-form-add');
    
    refs.plus = document.querySelector('.download');
    refs.imgFile = document.querySelector('img[name="file-preload"]');
    // refs.imagesPreload = document.querySelectorAll('img[name="file-preload"]');
    refs.deleteBtn = document.querySelector('.delete');
    refs.categoryFormMenu = document.querySelector('.wrap-category');
};

async function handlerPatchUserAd(event) {
   
    // const id = event.terget.dataset.id;
    const { data: {favourites} } = await axios.get('/call/own');
    console.log(favourites);
    // ! Временно!!!!
    // const own = favourites.filter(el => el.title === "Hren");
    const own = favourites.filter(el => el.title === "Hren");

    // ?? Финальный вариант
    // const own = favourites.filter(el => el._id === id);

    const newOwn = { ...own[0], ...{ edit: true } };
    console.log(newOwn);
    
    const markup = modalFormCall(newOwn);
    rootRef.insertAdjacentHTML('beforeend', markup);

    initRefs();
    editForm(newOwn._id);

    submitForm();
    refs.deleteBtn.addEventListener('click', fetchDeleteUserAd);
};

function editForm(id) {
    initRefs();   
    const { editBtn, deleteBtn, inputFile, categoryFormMenu, plus, imgFile } = refs; 

    plus.style.display = 'none';
    imgFile.classList.add('preload-img');
    editBtn.classList.add('edit');
    editBtn.setAttribute('data-id', id);
    deleteBtn.setAttribute('data-id', id);
    categoryFormMenu.addEventListener('click', handlerFormCategoryMenu);
    inputFile.addEventListener('change', handlerPreloadFile);
};

async function fetchPatchUserAd(form, id) {
    try {
        await axios.patch(`/call/${id}`, form);
        removeBackdrop();
        
    } catch {
        spinnerClassRemove();
    };
};

async function fetchDeleteUserAd(event) {
    try {
        const id = event.target.dataset.id
        await axios.delete(`/call/${id}`);
        removeBackdrop();
    } catch {
        spinnerClassRemove();
    }; 
};

export { handlerPatchUserAd, fetchPatchUserAd };