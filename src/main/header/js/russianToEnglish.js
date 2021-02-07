import axios from 'axios';
const ruCategoryUrl = 'https://callboard-backend.goit.global/call/russian-categories';
const enCategoryUrl = 'https://callboard-backend.goit.global/call/categories';

const getData = async () => {
    const { data: enCategoriesData } = await axios.get(enCategoryUrl);
    const { data: ruCategoriesData } = await axios.get(ruCategoryUrl);
    const categoriesMap = ruCategoriesData.reduce((acc, item, index) => {
        return {
            ...acc,
            [item]: enCategoriesData[index]
        }       
    }, {}); 
  return categoriesMap; 
};

export  {getData, ruCategoryUrl};