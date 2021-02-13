import buttonOpen from '../templates/button-open.hbs';
import checkUserLoginIn from '../../authorization/js/check-user-login';
import { handlerOpenFormAuth } from '../../forms-actions-js/open-form-auth';

const rootRef = document.querySelector('#root');

function authorizationRoot() {
    // ! REQUIRED (Refresh Token)
    checkUserLoginIn();


    // ! EGOR CABINET
    // const patchRef = document.querySelector('.patch');
    // patchRef.addEventListener('click', handlerPatchUserAd);

    rootRef.insertAdjacentHTML('beforeend', buttonOpen())

    const btnOpen = document.querySelector('.js__wrap-btn');
    
    btnOpen.addEventListener('click', handlerOpenFormAuth);
}

authorizationRoot();
export default authorizationRoot;
