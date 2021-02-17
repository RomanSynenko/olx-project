import axios from "axios";
import { baseUrl, headers } from './fetchHeaders';

const deleteFavouritesCall = async (cardId) => {    
    const res = await axios.delete(`/call/favourite/${cardId}`)  
   return res
}

export default deleteFavouritesCall;