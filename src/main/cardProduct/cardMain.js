import templateModal from '../cardProduct/templates/templateModal.hbs'
import axios from 'axios'
const markupId = document.querySelector('#root')
const openModalBtn=document.querySelector('button[data-action="open-modal"]')
console.log(openModalBtn)

openModalBtn.addEventListener('click', onOpenModal)

async function onOpenModal(event){
  const testProduct= 'https://callboard-backend.goit.global/call/find?search=dog'
  // const searchRef = event.target.dataset.search
  // const testProduct=`https://callboard-backend.goit.global/call/find?search=${searchRef}`
  const{data}=await axios.get(testProduct)
  console.log(data)
  
  markupId.insertAdjacentHTML('beforeend', templateModal(data[0]))

  const infoBtn = document.querySelector('.card-infoBtn')
  infoBtn.addEventListener('click', async (event)=>{
   const userId = event.target.getAttribute('data-userId')
      const userRequest = `https://callboard-backend.goit.global/user/${userId}`
      const{data}= await axios.get(userRequest)
      console.log(data)
     
     event.target.classList.add('card-infoBtn-open')
      event.target.textContent = `Продавец - на ОЛХ с ${data.registrationDate}\n${data.email}`    
  })
  
  const close=document.querySelector('.card-close')
  const backdropRef =document.querySelector('.card-backdrop')
  
  backdropRef.addEventListener('click',windowOnClick)
  close.addEventListener('click', closeOnClick)
  
  const favoritesRef = document.querySelector('.card-favorites')
  favoritesRef.addEventListener('click', handleFavorites)
}

function windowOnClick(event){
  console.dir(event.target)
  if(event.target.className!=='card-backdrop'){
    return 
  } 
  event.target.remove()
}

function closeOnClick(event){
  document.querySelector('.card-backdrop').remove()
}
const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDI0Zjc0YTc2Zjk5ZDMxNjRhNTczZTQiLCJzaWQiOiI2MDI0ZjgzMTc2Zjk5ZDMxNjRhNTczZTciLCJpYXQiOjE2MTMwMzU1NjksImV4cCI6MTYxNTY2MzU2OX0.d9bAer0nylW7ov9pvniAozEi2lTDhz2_N2FkY89dnEs"
const headers = {
  Authorization: `Bearer ${token}`
}


async function handleFavorites(event){
  const favoritesUrl = 'https://callboard-backend.goit.global/call/favourites'
  const{data}=await axios.get(favoritesUrl, {
    headers
  })
  console.log(data)
  event.target.firstElementChild.classList.add('favorites_red')

  // event.target.textContent 
}
