import {userFavourites, userOwn} from './fetchUserFavourites';
import cardCall from '../templates/cardCall.hbs';
import slider from './slider';
import { handlerPatchUserAd } from '../../authorization-and-user-ad/user-ad/js/patch-user-ad';
import markupUserCategoryCalls from './markupUserCategoryCalls';

const markupTemplateAccountUser = async (event) => {
    const { target } = event;
    const rootEl = document.getElementById('root');

    const { favourites: ownCalls } = await userOwn();
    const { favourites } = await userFavourites();

    const newValue = { itsOwnCall: true };
    const newOwnCalls = ownCalls.map(el => el = {...newValue, ...el});

    rootEl.insertAdjacentHTML('beforeend', `
    <div class="root-user-account">

        <div class="title-root">
          <h2 class="title-root__user-calls">Мои Объявления</h2>
          <a href="" class="title-root__lookall-btn" data-name="OwnCalls">Cмотреть все</a>
        </div>

        <ul class='card-container  js-fav swiper-container'>
          ${markupCard(newOwnCalls)}
        </ul>
  
        <div class="title-root">
          <h2 class="title-root__user-calls">Избранное</h2>
          <a href="" class="title-root__lookall-btn" data-name="FavCalls">Cмотреть все</a>
        </div>

        <ul class='card-container js-own swiper-container'>
           ${markupCard(favourites)}
        </ul>
    </div>
    `)
  
  const btnEditUserAd = document.querySelector('#edit-btn');
  btnEditUserAd.addEventListener('click', handlerPatchUserAd);

  const rootUserAccount = document.querySelector('.root-user-account');
  rootUserAccount.addEventListener('click', markupUserCategoryCalls);

    function markupCard(data) {
      return data.slice(0,4)
      .map(call => cardCall(call))
      .join(' ')
     }

     if(target.id === 'delete-ownCall-btn'){
      const cardId = target.getAttribute('data-id');
       await  deleteUserCall(cardId);
        if(status === 200){
        target.closest('li').remove();
        }
      }


     if(target.id === 'delete-favCall-btn'){
        const cardId = target.getAttribute('data-id');
        const {status} = await deleteFavouritesCall(cardId);

         if(status === 200){
         target.closest('li').remove();
         markupTemplateAccountUser();
         }
   }

}

export default markupTemplateAccountUser;
