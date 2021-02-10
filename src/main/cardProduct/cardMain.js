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
     
     event.target.classList.add('infoBtn-open')
      event.target.textContent = `Продавец - на ОЛХ с ${data.registrationDate}\n${data.email}`
     

     
  })
  
  const close=document.querySelector('.card-close')
  const backdropRef =document.querySelector('.card-backdrop')
  
  backdropRef.addEventListener('click',windowOnClick)
  close.addEventListener('click', closeOnClick)
  // initSlider(sliderSettings())
  // swipContainer = document.querySelector('#swip');
  // const swiperWrapper = document.querySelector('.swiper-wrapper')
  // 
  // openModalBtn.addEventListener('click', sliderSettings)
  // swiperWrapper.addEventListener('click',sliderSettings)
  // swiperSlide.addEventListener('click',sliderSettings)
  // swiperButtonPrev.addEventListener('click',sliderSettings)
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
// function sliderSettings(){
 
//   const swiperButtonPrev=document.querySelector('#prev')
//   const swiperButtonNext=document.querySelector('#next')
//   const widthWindow = Math.max(document.documentElement.clientWidth);
//   const swiperSlide = document.querySelector('[data-action="div-swiper-slide"]');
//     const swiperContainer = document.querySelector('[data-action="div-swiper-container"]');
//     const swiperWrapper = document.querySelector('[data-action="div-swiper-wrapper"]');

//     let el = '#swip';
        
//     if (widthWindow >= 320 && widthWindow<768) {
//       swiperSlide.classList.add('swiper-slide')
//       swiperContainer.classList.add('swiper-container')
//       swiperWrapper.classList.add('swiper-wrapper')
//       swiperButtonPrev.classList.add('swiper-button-prev')
//       swiperButtonNext.classList.add('swiper-button-next')
        
//         // swiperSlide.forEach(element => element.classList.replace('swiper-slide', 'swiper-slide-hidden'));
//         // swiperContainer.forEach(element => element.classList.replace('swiper-container', 'swiper-container-hidden'))
//         // swiperWrapper.forEach(element => element.classList.replace('swiper-wrapper', 'swiper-wrapper-hidden'));
        
//         console.log('sdfghjkl')
//     } 
//     // el= '';
//     if (widthWindow >= 768) {
//       swiperSlide.classList.remove('swiper-slide')
//       swiperContainer.classList.remove('swiper-container')
//       swiperWrapper.classList.remove('swiper-wrapper')
//       swiperButtonPrev.classList.remove('swiper-button-prev')
//       swiperButtonNext.classList.remove('swiper-button-next')

//       el = ''        
//     } 

//     // return {el};
//   }

  
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
{/* <div class="image-list imgWrapper">//id="swip" data-action="div-swiper-container"
      {{!-- <div class="" data-action="div-swiper-wrapper"> --}}
        {{#each imageUrls}}
        {{!-- <div class="" data-action="div-swiper-slide"> --}}

          <div class="imgWrapper">//data-action="div-swiper-slide"
            <div class="image">
              <img class="image_main" src="{{this}}" alt="">

            </div>
          </div>
          <div class="imgWrapper">// data-action="div-swiper-slide"
            <div class="image">
              <img class="image_main" src="{{this}}" alt="">

            </div>
          </div>
          {{!--
        </div> --}}
        {{/each}}
        {{!-- </div> --}}
      {{!-- <div class="swiper-pagination"></div>
      <div class="" id="prev"></div>
      <div class="" id="next"></div> --}}
    </div> */}
