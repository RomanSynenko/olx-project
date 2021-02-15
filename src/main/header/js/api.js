import axios from 'axios';
import { ruCategoryUrl } from './russianToEnglish';
import {addMarkupRoot} from './addMarkup';


async function receiveHeader() {
    try {
        const {data: header} = await axios.get(ruCategoryUrl);    
        return header  
    } catch (err) {
        console.log(err);        
    };      
};

async function receiveSearchValue(inputValue) {
    try {
        const searchUrl = `https://callboard-backend.goit.global/call/find?search=${inputValue}`;
    const {data: value} = await axios.get(searchUrl);
    addMarkupRoot(value)
    } catch (err) {
        console.log(err);
    };
    
};

async function receiveCategories(valueFilter) {
    try {
        const specificCategoriesUrl = `https://callboard-backend.goit.global/call/specific/${valueFilter}`
    const {data:GoodsСategory } = await axios.get(specificCategoriesUrl);
    addMarkupRoot(GoodsСategory)    
    const searchRef = document.querySelector('#search');
    searchRef.elements.query.value = '';
    } catch (err) {
        console.log(err);
    }
    
};

export {receiveHeader, receiveSearchValue, receiveCategories} ;