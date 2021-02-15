import axios from 'axios';

async function getRusCategoriesWithProduct(pageNamber) {
    const productsUrl = `https://callboard-backend.goit.global/call?page=${pageNamber}`;
    const categorisUrl = 'https://callboard-backend.goit.global/call/categories';
    const rusCategoriesUrl = 'https://callboard-backend.goit.global/call/russian-categories';
    
    const { data: categoriesData } = await axios.get(categorisUrl);
    const { data: rusCategoriesData } = await axios.get(rusCategoriesUrl);
    // console.log(categoriesData);
    // console.log(rusCategoriesData);
    const categoriesMap = categoriesData.reduce((acc, item, index) => {
        return {
            ...acc,
            [item]: rusCategoriesData[index]
        }       
    }, {});
    
    const { data: categories } = await axios.get(`${productsUrl}`);  
    // console.log(categories);
    // console.log(categoriesMap);
    
    const categoriesWithProducts = Object.entries(categories).map(item => {
        return {
            title: categoriesMap[item[0]] ? categoriesMap[item[0]] : item[0],
            products: item[1]
        }
    });
    return categoriesWithProducts;
};

export default getRusCategoriesWithProduct;