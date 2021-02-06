import axios from 'axios';


function fetchUserAuth(formData) {
    console.log(formData);

    const data = axios.post('/auth/register', formData);
}

export default fetchUserAuth;