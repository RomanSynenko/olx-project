import axios from 'axios';
import pnotify from '../../pnotify/pnotify';


async function fetchUserAuth(formData) {
    try {
        await axios.post('/auth/register', formData);
        pnotify.successMessage();
    } catch (error) {
        if (error.message === 'Request failed with status code 409') {
            pnotify.alertMessage();
        };
    };
    
};

export default fetchUserAuth;