import templateModal from '../cardProduct/templates/templateModal.hbs'
import '../cardProduct/cardProduct.scss'
import axios from 'axios'


const menuData = {
  title: 'Eat it createElement, templates rule!',
  items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html']

};

const markup  = templateModal(menuData);
const markupId = document.querySelector('#root')
markupId.insertAdjacentHTML('beforeend', markup)
//  console.log(markup); 


const openModalBtn=document.querySelector('button[data-action="open-modal"]')
const closeModalBtn=document.querySelector('button[data-action="close-modal"]')
const backdropRef =document.querySelector('.js-backdrop')
openModalBtn.addEventListener('click', ()=>{
  document.body.classList.add('show-modal')
})

closeModalBtn.addEventListener('click', ()=>{
  document.body.classList.remove('show-modal')
})
backdropRef.addEventListener('click',event=>{
  console.log(event)
})

const productsUrl = 'https://callboard-backend.goit.global/call?page=1'

const fetch = async()=>{
  const {data} = await axios.get(`${baseUrl}`)

}