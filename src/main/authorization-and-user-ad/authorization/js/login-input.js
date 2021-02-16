import axios from 'axios';
import pnotify from '../../pnotify/pnotify';
import { spinnerClassRemove } from '../../forms-actions-js/spinner';
import { removeBackdrop } from '../../forms-actions-js/close-modal-actions';
import { handlerUserLoginOut } from '../../authorization/js/login-out';
import {removeMenuFilterTablet } from '../../../header/js/utils';

axios.defaults.baseURL = 'https://callboard-backend.goit.global';

async function fetchUserLogin(dataForm) {
    try {
        const { data } = await axios.post('/auth/login', dataForm);
        localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
        localStorage.setItem("sid", JSON.stringify(data.sid))

        const AUTH_TOKEN = `Bearer ${data.accessToken}`
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        
        // document.querySelector('button[name="user-ad"]').disabled = false; 
        
        if (window.outerWidth < 768) {
            changeBtnAuthMobile();
        };        
        changeBtnAuth();
        removeMenuFilterTablet(); 
        pnotify.infoMessage();
    } catch (error) {
        spinnerClassRemove();

        throw pnotify.errorMessage();
    };
    
    removeBackdrop();
};

function changeBtnAuth() {
    const login = document.querySelector('#loginBtn[name="login"]');
    login.classList.add('display-none');
    const authBtn = document.querySelector('#authBtn[name="auth"]');
    authBtn.classList.add('display-none');

     
    const officeBtn = document.querySelector('#officeBtn');
    officeBtn.classList.remove('display-none');
    const outLoginRef = document.querySelector('#logout[name="loginOut"]');
    outLoginRef.classList.remove('display-none');

    outLoginRef.addEventListener('click', handlerUserLoginOut);
};

function changeBtnAuthMobile() {
    const login = document.querySelector('#loginBtn-mob[name="login"]');
    login.classList.add('display-none');
    const authBtn = document.querySelector('#authBtn-mob[name="auth"]');
    authBtn.classList.add('display-none');

     
    const officeBtn = document.querySelector('#officeBtn-mob');
    officeBtn.classList.remove('display-none');
    const outLoginRef = document.querySelector('#logout-mob[name="loginOut"]');
    outLoginRef.classList.remove('display-none');

    outLoginRef.addEventListener('click', handlerUserLoginOut);
}


export { fetchUserLogin, changeBtnAuth, changeBtnAuthMobile };