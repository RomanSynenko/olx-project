// fetch('https://callboard-backend.goit.global/call/russian-categories').then(res => res.json()).then(console.log);
import templateHeader from '../templates/header.hbs'
const root = document.querySelector('#root');


fetch('https://callboard-backend.goit.global/call/russian-categories').then(res => res.json()).then(data => {
    const markup = templateHeader(data);
    root.insertAdjacentHTML('beforeend', markup);
});


// fetch('https://callboard-backend.goit.global/call/russian-categories').then(console.log);