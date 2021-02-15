import markupTemplateAccountUser from './markupUserAccount';
import markupUserCategoryCalls from './markupUserCategoryCalls';

function clickOnMyAccountButtonEgor(event){
    document.getElementById('root').innerHTML = '';
    markupTemplateAccountUser(event);

    // const rootUserAccount = document.querySelector('.root-user-account');
    // rootUserAccount.addEventListener('click', markupUserCategoryCalls);
}

export default clickOnMyAccountButtonEgor;

