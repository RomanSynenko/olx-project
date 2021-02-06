import templateModal from '../cardProduct/templates/templateModal.hbs'
// import '../cardProduct/cardProduct.scss'
import axios from 'axios'
import '../cardProduct/image/Vector.svg'




// const markup  = templateModal();
// const markupId = document.querySelector('#root')
// markupId.insertAdjacentHTML('beforeend', markup)
//  console.log(markup); 


const openModalBtn=document.querySelector('button[data-action="open-modal"]')
const closeModalBtn=document.querySelector('button[data-action="close-modal"]')

// const backdropRef =document.querySelector('.js-backdrop')
openModalBtn.addEventListener('click', onOpenModal)
 closeModalBtn.addEventListener('click', onCloseModal)
 
// backdropRef.addEventListener('click',onBackDropClick)
async function onOpenModal(){
  const testProduct= 'https://callboard-backend.goit.global/call/find?search=car'
    
  const{data}=await axios.get(testProduct)
  const markupId = document.querySelector('#root')
  markupId.insertAdjacentHTML('beforeend', templateModal(data[0]))
  
  const infoBtn = document.querySelector('.infoBtn')
  infoBtn.addEventListener('click', onClickInfo)
  
  const modal= document.querySelector('.modal')
  const close=document.querySelector('.close')
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  close.onclick = function() {
    modal.style.display = "none";
  }
  
  // openModalBtn.onclick = function() {
  //   modal.style.display = "block";
  // }
  }
  
  function onCloseModal (){
    document.body.classList.remove('show-modal')
  }
  

function onClickInfo (event){
console.dir(event.target.textContent)
event.target.textContent = event.target.textContent === 'Информация о продавце'?'Ольга на ОЛХ':'Информация о продавце';
}

    // console.log(data)

// const markup  = templateModal();
// const markupId = document.querySelector('#root')
// markupId.insertAdjacentHTML('beforeend', markup)
// })


// showBtn = document.querySelector('.showBtn-description');
// openModalBtn.addEventListener('click', ()=>{
//   document.body.classList.add('show-modal')
//   const testProduct= 'https://callboard-backend.goit.global/call/find?search=car'
  
//   const{data}=axios.get(testProduct).then(({data})=>{
//     // console.log(data)
//     markupId.insertAdjacentHTML('beforeend', templateModal(data[0])) 
//     const infoBtn = document.querySelector('.infoBtn')
//     infoBtn.addEventListener('click', function(event){
//       // event.preventDefault();
//       showBtn.classList.toggle("js-infoBtn-show");
//       // event.target.textContent = event.target.textContent === 'Информация о продавце'?'Ольга на ОЛХ':'Информация о продавце';
//       console.dir(event)
//       // event.target.textContent = 'Jkmuf yf JK{'
//     })
//   })
  // console.log(data)
  

// })

// closeModalBtn.addEventListener('click', ()=>{
//   document.body.classList.remove('show-modal')
// })
// backdropRef.addEventListener('click',event=>{
//   // console.log(event)
// })


// console.log(infoBtn)
// const button = document.getElementById('button');
// const menu = document.getElementById('menu');

// button.addEventListener('click', () =>{
//     if(button.dataset.trigger === 'false'){
//         button.innerText = 'Закрыть';
//         menu.style.display = 'block';
//         button.dataset.trigger = true;
//     }else{
//         button.innerText = button.dataset.text;
//         menu.style.display = 'none';
//         button.dataset.trigger = false;
//     }
// });

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