import axios from "axios";
import { baseUrl, headers} from './fetchHeaders';

export const userFavourites = async () => {
    const { data } = await axios.get(`${baseUrl}/call/favourites`, { headers })  
                 
    return data;
} 

export const userOwn = async () => {
    const { data } = await axios.get(`${baseUrl}/call/own`, { headers })

    return data;
}



