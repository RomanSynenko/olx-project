import axios from 'axios';
const instanseBanner = axios.create({
    baseURL: 'https://callboard-backend.goit.global/call/ads'
});
const makeRequest = async () => {
    try {
        const { data } = await axios.get(instanseBanner.defaults.baseURL);
        return data
    } catch (error) {
        throw error;
    }
};
export default makeRequest;