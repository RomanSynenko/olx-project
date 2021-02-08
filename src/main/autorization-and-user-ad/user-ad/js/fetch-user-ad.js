import axios from 'axios';

async function fetchUserAd(data) {
    const userAd = await axios.post('/call', data);

    console.log(userAd);
};

export default fetchUserAd;