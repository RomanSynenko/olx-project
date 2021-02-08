import axios from "axios";
import modalFormCall from '../template/modal-form-call.hbs';
import submitForm from '../../forms-actions-js/submit-form';

const rootRef = document.querySelector('#root');

async function handlerPatchUserAd() {
    const { data: {calls} } = await axios.get('/user');
    const userAd = calls.filter(el => el.title === "Hren");
    console.log(calls);
    
    const id = userAd[0]._id;

    fetchPatchUserAd(id);
}

async function fetchPatchUserAd(id) {
    const { data } = await axios.patch(`/call/${id}`);
    const markup = modalFormCall(data)

    rootRef.insertAdjacentHTML('beforeend', markup);

    submitForm();
}

export default handlerPatchUserAd;