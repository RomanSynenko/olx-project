import submitForm from './submit-form';
import formRegistr from '../authorization/templates/form-registration.hbs';

const rootRef = document.querySelector('#root');

function handlerOpenFormAuth(event) {
    const value = event.target.name
    const markup = formRegistr({ isAuth: value === "auth" });
    
    rootRef.insertAdjacentHTML('beforeend', markup);
    // value === "login" ? document.querySelector('.modal-auth').style.height = "430px" : null;
    
    submitForm();
};

export default handlerOpenFormAuth;