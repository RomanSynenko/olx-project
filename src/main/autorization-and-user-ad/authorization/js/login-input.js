import axios from 'axios';
import pnotify from '../../pnotify/pnotify';
axios.defaults.baseURL = 'https://callboard-backend.goit.global'

async function fetchUserLogin(dataForm) {
    try {
        const { data } = await axios.post('/auth/login', dataForm);
        localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
        localStorage.setItem("sid", JSON.stringify(data.sid))

        const AUTH_TOKEN = `Bearer ${data.accessToken}`
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        pnotify.infoMessage();
    } catch (error) {
        console.log(error);
        if (error.message === 'Request failed with status code 403') throw pnotify.errorMessage();   
    }

    document.querySelector('.backdrop-add').remove();
};

export default fetchUserLogin;