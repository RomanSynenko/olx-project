import buttonOpen from '../templates/button-open.hbs';
import checkUserLoginIn from '../../authorization/js/check-user-login';
import handlerOpenFormAuth from '../../forms-actions-js/open-form-auth';

// ! REQUIRED (Refresh Token)
checkUserLoginIn();

// ? Code for Vlad 
const rootRef = document.querySelector('#root');

function open() {
    rootRef.insertAdjacentHTML('beforeend', buttonOpen())

    const btnOpen = document.querySelector('.btn-open');
    
    btnOpen.addEventListener('click', handlerOpenFormAuth);
}
open();
// ? -------------

// ! garbage
import axios from 'axios';
const btnRef = document.querySelector('.second');
btnRef.addEventListener('click', ac);

async function ac() {
    await axios.get('/user')
};
// ! -------


let inputs = document.querySelectorAll('.inputfile');

Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
        labelVal = label.querySelector('.download').innerText;
  
    input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
            countFiles = this.files.length;
  
        if (countFiles)
            label.querySelector('.download').innerText = 'Загружен' + countFiles;
        else
            label.querySelector('.download').innerText = labelVal;
    });
});