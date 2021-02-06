import buttonOpen from '../templates/button-open.hbs';
import handlerOpenFormAuth from '../../forms-actions-js/open-form-auth';

const rootRef = document.querySelector('#root');

function open() {
    rootRef.insertAdjacentHTML('beforeend', buttonOpen())

    const btnOpen = document.querySelector('.btn-open');
    
    btnOpen.addEventListener('click', handlerOpenFormAuth);
}

open();




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
