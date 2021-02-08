import axios from 'axios';
import pnotify from '../../pnotify/pnotify';
import { spinnerClassRemove } from '../../forms-actions-js/spinner';
import { removeBackdrop } from '../../forms-actions-js/close-modal-actions';

async function fetchUserAuth(formData) {
    try {
        await axios.post('/auth/register', formData);

        pnotify.successMessage();

        removeBackdrop();

    } catch (error) {
        if (error.message === 'Request failed with status code 409') {
            pnotify.alertMessage();  
        };

        if (error.message === 'Request failed with status code 400') {
            pnotify.errorMessage();
        };

        spinnerClassRemove();
    };
};

export default fetchUserAuth;