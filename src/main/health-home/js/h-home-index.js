import markupTemplateAccountUser from './markupUserAccount';
import markupUserCategoryCalls from './markupUserCategoryCalls';
import { removeActiveFilter } from '../../header/js/utils';

function clickOnMyAccountButtonEgor(event) {
   const filter= document.querySelector('#filter')
    document.getElementById('root').innerHTML = '';
    removeActiveFilter(filter);
    markupTemplateAccountUser(event);

    // const rootUserAccount = document.querySelector('.root-user-account');
    // rootUserAccount.addEventListener('click', markupUserCategoryCalls);
}

export default clickOnMyAccountButtonEgor;

