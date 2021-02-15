import checkUserLoginIn from '../../authorization/js/check-user-login';
import { handlerOpenFormAuth } from '../../forms-actions-js/open-form-auth';

const rootRef = document.querySelector('#root');

function authorizationRoot() {
    // ! REQUIRED (Refresh Token)
    checkUserLoginIn();


    // ! EGOR CABINET
    // const patchRef = document.querySelector('.patch');
    // patchRef.addEventListener('click', handlerPatchUserAd);

    const btnMobileOpen = document.querySelector('.wrap-registration-mobil.js__wrap-btn');
    const btnOpen = document.querySelector('.wrap-registration.js__wrap-btn');
    const btnUserAd = document.querySelectorAll('#userAd[name="user-ad"]');

    btnUserAd.forEach(el => el.addEventListener('click', handlerOpenFormAuth));
    
    btnMobileOpen.addEventListener('click', handlerOpenFormAuth);
    btnOpen.addEventListener('click', handlerOpenFormAuth);
};

export default authorizationRoot;
