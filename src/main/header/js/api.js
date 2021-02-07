import axios from 'axios';
import { ruCategoryUrl } from './russianToEnglish';
import addMarkup from './addMarkup';
import searchTpl from '../templates/search.hbs';


async function receiveHeader(){
    const {data: header} = await axios(ruCategoryUrl);    
    return header 
};

async function receiveSearchValue(inputValue) {
    const searchUrl = `https://callboard-backend.goit.global/call/find?search=${inputValue}`;
    const {data: value} = await axios(searchUrl);
    addMarkup(value, searchTpl)
};

async function receiveCategories(valueFilter) {
    const specificCategoriesUrl = `https://callboard-backend.goit.global/call/specific/${valueFilter}`
    const {data:GoodsСategory } = await axios(specificCategoriesUrl);
    addMarkup(GoodsСategory, searchTpl)    
    const searchRef = document.querySelector('#search');
    searchRef.elements.query.value = '';//очистка інпута коли клацаєш на фільтр
};

export {receiveHeader, receiveSearchValue, receiveCategories} ;