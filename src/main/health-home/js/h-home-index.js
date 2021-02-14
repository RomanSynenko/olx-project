import markupTemplateAccountUser from './markupUserAccount';
import markupUserCategoryCalls from './markupUserCategoryCalls';

const rootEl = document.getElementById('root');
rootEl.addEventListener('click', markupUserCategoryCalls);

const buttonMyCabinet = document.querySelector('.btn-my-account');
buttonMyCabinet.addEventListener('click', clickOnMyAccountButton);

// markupTemplateAccountUser();

function clickOnMyAccountButton(event){
    rootEl.innerHTML = '';
    markupTemplateAccountUser(event);
}

export default clickOnMyAccountButton;

