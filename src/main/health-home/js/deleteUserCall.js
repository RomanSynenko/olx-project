import axios from "axios";
import { baseUrl, headers } from './fetchHeaders';

const deleteUserCall = async (cardId) => {
    const res = await axios.delete(`${baseUrl}/call/${cardId}`, { headers })  
                
}
    
export default deleteUserCall;