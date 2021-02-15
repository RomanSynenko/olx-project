import markupTemplateAccountUser from './markupUserAccount';
import markupUserCategoryCalls from './markupUserCategoryCalls';

const rootEl = document.getElementById('root');
rootEl.addEventListener('click', markupUserCategoryCalls);

// const buttonMyCabinet = document.querySelector('#officeBtn');

// buttonMyCabinet.addEventListener('click', clickOnMyAccountButton);


function clickOnMyAccountButtonEgor(event){
    rootEl.innerHTML = '';
    // console.log(event.target);
    markupTemplateAccountUser(event);
}

export default clickOnMyAccountButtonEgor;

