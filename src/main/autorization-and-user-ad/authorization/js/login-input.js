import axios from 'axios';
import pnotify from '../../pnotify/pnotify';
import { spinnerClassRemove } from '../../forms-actions-js/spinner';
import { removeBackdrop } from '../../forms-actions-js/close-modal-actions';
axios.defaults.baseURL = 'https://callboard-backend.goit.global';

async function fetchUserLogin(dataForm) {
    try {
        const { data } = await axios.post('/auth/login', dataForm);
        localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
        localStorage.setItem("sid", JSON.stringify(data.sid))

        const AUTH_TOKEN = `Bearer ${data.accessToken}`
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        
        document.querySelector('button[name="user-ad"]').disabled = false;
        pnotify.infoMessage();
    } catch (error) {
        spinnerClassRemove();

        throw pnotify.errorMessage();
    };
    
    removeBackdrop();
};

export default fetchUserLogin;