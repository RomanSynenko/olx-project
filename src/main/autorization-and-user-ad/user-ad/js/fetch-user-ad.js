import axios from 'axios';
import { spinnerClassRemove } from '../../forms-actions-js/spinner';
import { removeBackdrop } from '../../forms-actions-js/close-modal-actions';

async function fetchUserAd(data) {
    try {
        await axios.post('/call', data);
        
    } catch (error) {
        console.log('fuck');
        spinnerClassRemove();
        return;
    }
     
    removeBackdrop();
};

export default fetchUserAd;