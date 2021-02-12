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
    } catch {};

    document.querySelector('.backdrop-add').remove();
};

export { handlerUserLoginOut, fetchLoginOut };