import axios from "axios";
import { baseUrl, headers } from './fetchHeaders';

const deleteUserCall = async (cardId) => {
    const res = await axios.delete(`/call/${cardId}`) 
    return res
                
}
    
export default deleteUserCall;