import templateModal from '../cardProduct/templates/templateModal.hbs'
import axios from 'axios'
const markupId = document.querySelector('#root');
// const openModalBtn=document.querySelector('button[data-action="open-modal"]')


async function onOpenModal(titleFilter) {
  // console.log('ann тайтл', titleFilter);
  const testProduct = `https://callboard-backend.goit.global/call/find?search=${titleFilter}`
  
  const { data } = await axios.get(testProduct)
  
 
  
  markupId.insertAdjacentHTML('beforeend', templateModal(data[0]))

  const infoBtn = document.querySelector('.card-infoBtn')
  infoBtn.addEventListener('click', async (event)=>{
   const userId = event.target.getAttribute('data-userId')
      const userRequest = `https://callboard-backend.goit.global/user/${userId}`
      const{data}= await axios.get(userRequest)
     
     
     event.target.classList.add('card-infoBtn-open')
      event.target.textContent = `Продавец - на ОЛХ с ${data.registrationDate}\n${data.email}`    
  })
  
  const close=document.querySelector('.card-close')
  const backdropRef =document.querySelector('.card-backdrop')
  
  backdropRef.addEventListener('click',windowOnClick)
  close.addEventListener('click', closeOnClick)
  
  const favoritesRef = document.querySelector('.card-favorites')
  favoritesRef.addEventListener('click', handleFavorites)

  const cardList = document.querySelector('.card-image-list')
  cardList.addEventListener('click', onGallaryClick )
}

function windowOnClick(event){
 
  if(event.target.className!=='card-backdrop'){
    return 
  } 
  event.target.remove()
}

function closeOnClick(event){
  document.querySelector('.card-backdrop').remove()
}
// const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDI0Zjc0YTc2Zjk5ZDMxNjRhNTczZTQiLCJzaWQiOiI2MDI0ZjgzMTc2Zjk5ZDMxNjRhNTczZTciLCJpYXQiOjE2MTMwMzU1NjksImV4cCI6MTYxNTY2MzU2OX0.d9bAer0nylW7ov9pvniAozEi2lTDhz2_N2FkY89dnEs"
// const headers = {
//   Authorization: `Bearer ${token}`
// }


async function handleFavorites(event) {
  const idCardProd=document.querySelector('.card-code_product');
  const id = idCardProd.dataset.idProduct;
  // const favoritesUrl = 'https://callboard-backend.goit.global/call/favourites'
  const { data } = await axios.post(`/call/favourite/${id}`);
  
  event.target.firstElementChild.classList.add('favorites_red')

  // event.target.textContent 
}

function onGallaryClick(event){
  const cardImageMain = document.querySelector('.card-image_main')
  cardImageMain.addEventListener('click', onGallaryClick )
  if (event.target.nodeName!=='IMG'){
    return
  }
  const imageRef = event.target
  console.log(imageRef.dataset)
  const largeImgUrl = event.target.src

  cardImageMain.src = largeImgUrl
}

export default onOpenModal; 