import templateModal from '../cardProduct/templates/templateModal.hbs'
// import '../cardProduct/cardProduct.scss'
import axios from 'axios'
import '../cardProduct/image/Vector.svg'
import initSlider from '../cardProduct/slider'
const markupId = document.querySelector('#root')
const openModalBtn=document.querySelector('button[data-action="open-modal"]')
console.log(openModalBtn)

openModalBtn.addEventListener('click', onOpenModal)

async function onOpenModal(){
  // const testProduct= 'https://callboard-backend.goit.global/call/find?search=car'
  const testProduct='https://callboard-backend.goit.global/call/find?search=dog'
  const{data}=await axios.get(testProduct)
  
  markupId.insertAdjacentHTML('beforeend', templateModal(data[0]))
  
  const infoBtn = document.querySelector('.infoBtn')
  infoBtn.addEventListener('click', onClickInfo)
  
  const close=document.querySelector('.close')
  const backdropRef =document.querySelector('.backdrop')
  
  backdropRef.addEventListener('click',windowOnClick)
  close.addEventListener('click', closeOnClick)
  }
  function windowOnClick(event){
    console.dir(event.target)
    if(event.target.className!=='backdrop'){
      return 
    }
    
    event.target.remove()
  }
  function closeOnClick(event){
    document.querySelector('.backdrop').remove()
    // event.target.remove()
  }
  
  

function onClickInfo (event){
console.dir(event.target.textContent)
event.target.textContent = event.target.textContent === 'Информация о продавце'?'Ольга на ОЛХ':'Информация о продавце';
}

   