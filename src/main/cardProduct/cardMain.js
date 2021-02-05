import templateModal from '../cardProduct/templates/templateModal.hbs'
import '../cardProduct/cardProduct.scss'
import axios from 'axios'



// const menuData = {
//   title: 'Eat it createElement, templates rule!',
//   items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html']

// };

const markup  = templateModal();
const markupId = document.querySelector('#root')
markupId.insertAdjacentHTML('beforeend', markup)
//  console.log(markup); 


const openModalBtn=document.querySelector('button[data-action="open-modal"]')
const closeModalBtn=document.querySelector('button[data-action="close-modal"]')
const backdropRef =document.querySelector('.js-backdrop')
openModalBtn.addEventListener('click', ()=>{
  document.body.classList.add('show-modal')
  const testProduct= 'https://callboard-backend.goit.global/call/find?search=car'
  
  const{data}=axios.get(testProduct).then(({data})=>{
    console.log(data)
    markupId.insertAdjacentHTML('beforeend', templateModal(data[0])) 
  })
  console.log(data)
  

})

closeModalBtn.addEventListener('click', ()=>{
  document.body.classList.remove('show-modal')
})
backdropRef.addEventListener('click',event=>{
  console.log(event)
})

// const productsUrl = 'https://callboard-backend.goit.global/call?page=1'

// const fetch = async()=>{
//   const {data} = await axios.get(`${productsUrl}`)
//   const products = Object.entries(data)
//   const product = products.map(item=>{
//     return{
//       title: item[0], description: item [1], price: item[2], imageUrls: item[3]
//     }
//   })
//   console.log(product)
// }


// const productsUrl = 'https://callboard-backend.goit.global/call?page=1';

// const ssmc= 'https://callboard-backend.goit.global/call/find?search=ssmc'
// const Data = async ()=> {
//   const{data}=await axios.get(ssmc)
//   console.log(data)
//   templateModal(data)
// }

// Data()
// const getData = async () => {
//   const { data: categoriesData } = await axios.get(productsUrl);
// //   const { data: rusCategoriesData } = await axios.get(rusCategoriesUrl);
// console.log(categoriesData);
// //   console.log(rusCategoriesData);
// //   const categoriesMap = categoriesData.reduce((acc, item, index) => {
// //       return {
// //           ...acc,
// //           [item]: rusCategoriesData[index]
// //       }       
// //   }, {});
  
//   const { data: categories } = await axios.get('${productsUrl}');  
//   console.log(categories);
//   // console.log(categoriesMap);
  
//   const categoriesWithProducts = Object.entries(categories).map(item => {
//       return {
//           title: categoriesData[item[0]] ? categoriesData[item[0]] : item[0],
//           products: item[1]
          
//       }
//   });
//   return categoriesWithProducts;
// }

// const render = async () => {
//   const data = await getData();

//   const markap = productTpl(data);
//   markupId.insertAdjacentHTML('beforeend', markap);
 
//   return data;    
// };

// render();