import axios from "axios";
import { baseUrl, headers } from './fetchHeaders';

const deleteFavouritesCall = async (cardId) => {
    const res = await axios.delete(`${baseUrl}/call/favourite/${cardId}`, { headers })  
   return res
}

export default deleteFavouritesCall;