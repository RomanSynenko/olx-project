import templateModal from '../cardProduct/templates/templateModal.hbs'
// import '../cardProduct/cardProduct.scss'
import axios from 'axios'
import '../cardProduct/image/Vector.svg'
import initSlider from '../cardProduct/slider'
const markupId = document.querySelector('#root')
const openModalBtn=document.querySelector('button[data-action="open-modal"]')
console.log(openModalBtn)

openModalBtn.addEventListener('click', onOpenModal)

async function onOpenModal(event){
  const testProduct= 'https://callboard-backend.goit.global/call/find?search=car'
  // const searchRef = event.target.dataset.search
  // const testProduct=`https://callboard-backend.goit.global/call/find?search=${searchRef}`
  const{data}=await axios.get(testProduct)
  console.log(data)
  
  markupId.insertAdjacentHTML('beforeend', templateModal(data[0]))
  
  const infoBtn = document.querySelector('.infoBtn')
  infoBtn.addEventListener('click', async (event)=>{
   const userId = event.target.getAttribute('data-userId')
      const userRequest = `https://callboard-backend.goit.global/user/${userId}`
      const{data}= await axios.get(userRequest)
      console.log(data)
      // if(event.target.className==='infoBtn'){
      //   event.target.textContent.classList.add('infoBtn-open')
    
      //  `Ольга на ОЛХ c ${registrationDate} ${email}`
      // }else{
      //   'Информация о продавце'
      // }
      event.target.classList.add('infoBtn-open')
      event.target.textContent = `Продавец ${data.registrationDate}\n${data.email} `
      
  })
  

  const close=document.querySelector('.close')
  const backdropRef =document.querySelector('.backdrop')
  
  backdropRef.addEventListener('click',windowOnClick)
  close.addEventListener('click', closeOnClick)
  // initSlider()
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
}
  
// function onClickInfo (event){
//   console.dir(event.target.textContent)
//   event.target.textContent = event.target.textContent === 'Информация о продавце'?'Ольга на ОЛХ':'Информация о продавце';
// }


{/* <div class="imgWrapper">

<div class="image">

  <img class="image_main" src="{{this}}" alt="">

</div>
</div>
<div class="imgWrapper">

<div class="image">

  <img class="image_main" src="{{this}}" alt="">

</div>
</div>
<div class="imgWrapper">

<div class="image">

  <img class="image_main" src="{{this}}" alt="">

</div>
</div> */}