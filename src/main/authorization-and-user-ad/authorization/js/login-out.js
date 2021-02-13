import loginOutForm from '../templates/login-out-form.hbs';
import submitForm from '../../forms-actions-js/submit-form';
import axios from 'axios';
// import pnotify from '../../pnotify/pnotify';

const rootRef = document.querySelector('#root');

function handlerUserLoginOut() {
    if (!localStorage.getItem('accessToken')) return;
    rootRef.insertAdjacentHTML('beforeend', loginOutForm());
    submitForm();
};

async function fetchLoginOut() {
    try {
        await axios.post('/auth/logout');
        localStorage.clear();
        if (window.outerWidth < 768) {
            changeBtnAuthReverseMobile();
        }
        
        changeBtnAuthReverse();
    } catch {};

    document.querySelector('.backdrop-add').remove();
};

function changeBtnAuthReverse() {
    const login = document.querySelector('#loginBtn[name="login"]');
    login.classList.remove('display-none');
    const authBtn = document.querySelector('#authBtn[name="auth"]');
    authBtn.classList.remove('display-none');

     
    const officeBtn = document.querySelector('#officeBtn');
    officeBtn.classList.add('display-none');
    const outLoginRef = document.querySelector('#logout[name="loginOut"]');
    outLoginRef.classList.add('display-none');

};

function changeBtnAuthReverseMobile() {
    const login = document.querySelector('#loginBtn-mob[name="login"]');
    login.classList.remove('display-none');
    const authBtn = document.querySelector('#authBtn-mob[name="auth"]');
    authBtn.classList.remove('display-none');

     
    const officeBtn = document.querySelector('#officeBtn-mob');
    officeBtn.classList.add('display-none');
    const outLoginRef = document.querySelector('#logout-mob[name="loginOut"]');
    outLoginRef.classList.add('display-none');

};



export { handlerUserLoginOut, fetchLoginOut };