import buttonOpen from '../templates/button-open.hbs';
import checkUserLoginIn from '../../authorization/js/check-user-login';
import { handlerOpenFormAuth } from '../../forms-actions-js/open-form-auth';
import { handlerPatchUserAd } from '../../user-ad/js/patch-user-ad';

const rootRef = document.querySelector('#root');

function authorizationRoot() {
    // ! REQUIRED (Refresh Token)
    checkUserLoginIn();

    rootRef.insertAdjacentHTML('beforeend', buttonOpen())

    const btnOpen = document.querySelector('.btn-open');
    
    btnOpen.addEventListener('click', handlerOpenFormAuth);
}

authorizationRoot();
export default authorizationRoot;

// ! -------------------------


// * -----FetchPatch-------
const patchRef = document.querySelector('.patch');
patchRef.addEventListener('click', handlerPatchUserAd);
//* ------------


// ? code for Egor: class for button-login-out === outlogin__btn

// ! garbage
import axios from 'axios';
const btnRef = document.querySelector('.second');
btnRef.addEventListener('click', ac);

async function ac() {
    await axios.get('/user')
};
// ! -------


// ! out login
const outLoginRef = document.querySelector('.outlogin');
outLoginRef.addEventListener('click', out)

async function out() {
    await axios.post('/auth/logout');
}
// ! ---------


let inputs = document.querySelectorAll('.inputfile');

Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
        labelVal = label.querySelector('.download').innerText;
  
    input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
            countFiles = this.files.length;
  
        if (countFiles)
            label.querySelector('.download').innerText = 'Загружен' + countFiles;
        else
            label.querySelector('.download').innerText = labelVal;
    });
});
