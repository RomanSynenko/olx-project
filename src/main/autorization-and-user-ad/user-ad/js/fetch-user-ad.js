import axios from 'axios';

const headers = {
    "Content-Type": "multipart/form-data"
};

async function fetchUserAd(data) {
    const userAd = await axios.post('/call', data);

    console.log(userAd);
}

export default fetchUserAd;