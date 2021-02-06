import axios from 'axios';
import submitUserForms from '../../forms-actions-js/submit-user-forms';

const headers = {
    "Content-Type": "multipart/form-data"
};

function handlerUserAd(event) {
    event.preventDefault();

    const dataForm = submitUserForms(event);

    fetchUserAd(dataForm);
}

async function fetchUserAd(data) {
    const userAd = await axios.post('/call', data);

    console.log(userAd);
}

export default handlerUserAd;
