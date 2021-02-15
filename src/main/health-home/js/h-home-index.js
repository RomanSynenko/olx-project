import markupTemplateAccountUser from './markupUserAccount';
import markupUserCategoryCalls from './markupUserCategoryCalls';

const rootEl = document.getElementById('root');
rootEl.addEventListener('click', markupUserCategoryCalls);

// const buttonMyCabinet = document.querySelector('#officeBtn');
// console.log(buttonMyCabinet);
// buttonMyCabinet.addEventListener('click', clickOnMyAccountButton);

// markupTemplateAccountUser();

function clickOnMyAccountButton(event){
    rootEl.innerHTML = '';
    console.log(event.target);
    markupTemplateAccountUser(event);
}

export default clickOnMyAccountButton;

