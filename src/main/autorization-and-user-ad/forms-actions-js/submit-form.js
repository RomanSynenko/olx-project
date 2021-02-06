import fetchUserLogin from '../authorization/js/login-input';
import submitUserForms from './submit-user-forms';
import handlerKeydown from '../root/js/keydown-listenter';
import fetchUserAuth from '../authorization/js/authorization';

function submitForm() {
    window.addEventListener('keydown', handlerKeydown);
    const submitRef = document.querySelector('.form__call');
    submitRef.addEventListener('submit', handlerSubmitFormAuth);
};

async function handlerSubmitFormAuth(event) {
    event.preventDefault();
    const formData = submitUserForms(event);
    
    const { currentTarget: { elements } } = event
    const attribute = elements.login;

    attribute ? fetchUserLogin(formData) : fetchUserAuth(formData);
};

async function fetchCall(data) {
    console.log(data);
    const res = await axios.post('/call', data, { headers });

};

export default submitForm;
