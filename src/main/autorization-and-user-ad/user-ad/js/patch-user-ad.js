import axios from "axios";
import modalFormCall from '../template/modal-form-call.hbs';
import submitForm from '../../forms-actions-js/submit-form';
import { spinnerClassRemove, } from '../../forms-actions-js/spinner';
import { removeBackdrop } from '../../forms-actions-js/close-modal-actions';

const rootRef = document.querySelector('#root');

const refs = {};

function initRefs() {
    refs.editBtn = document.querySelector('.btn-form-add');
    refs.plus = document.querySelector('.download');
    refs.imagesPreloadRef = document.querySelectorAll('img[name="file-preload"]');
    refs.deleteBtn = document.querySelector('.delete');
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
    
    const markup = modalFormCall(newOwn);
    rootRef.insertAdjacentHTML('beforeend', markup);
    initRefs();

    const { editBtn, plus, imagesPreloadRef, deleteBtn } = refs; 
    plus.style.display = 'none';
    editBtn.classList.add('edit');
    editBtn.setAttribute('data-id', newOwn._id);
    deleteBtn.setAttribute('data-id', newOwn._id);


    for (let i = 0; i < newOwn.imageUrls.length; i += 1) {
        imagesPreloadRef[i].classList.add('preload-img');
    };

    submitForm();
    deleteBtn.addEventListener('click', fetchDeleteUserAd);
};

async function fetchPatchUserAd(form, id) {

    try {
       const { data } = await axios.patch(`/call/${id}`, form);
        removeBackdrop();
        
    } catch {
        spinnerClassRemove();
    }
};

async function fetchDeleteUserAd(event) {
    try {
        const id = event.target.dataset.id
        await axios.delete(`/call/${id}`);
        removeBackdrop();
    } catch {
        spinnerClassRemove();
    }
    
}

export { handlerPatchUserAd, fetchPatchUserAd };