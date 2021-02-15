import {userFavourites, userOwn} from './fetchUserFavourites';
import cardCall from '../templates/cardCall.hbs';
import deleteUserCall from './deleteUserCall';
import deleteFavouritesCall from './deleteFavCall';


 const markupUserCategoryCalls = async (event) => {
    event.preventDefault();
    
    const { target } = event; 
    const rootEL = document.getElementById('root');

    const { favourites: ownCalls } = await userOwn();
    const { favourites } = await userFavourites();

    const newValue = { itsOwnCall: true };
    const newOwnCalls = ownCalls.map(el => el = {...newValue, ...el});


    if (target.nodeName === "A"){ 
        // рендеринг страницу по клику на СМОТРЕТЬ ВСЕМ МОИ ОБЪЯВЛЕНИЯ
        if(target.getAttribute('data-name') === 'OwnCalls'){ 
            rootEL.innerHTML = '';
            rootEL.insertAdjacentHTML('beforeend', `
            <div class="root-user-account">
              <div class="title-root">
                 <h2 class="title-root__user-calls">Мои Объявления</h2>
              </div>
    
              <ul class='card-container'>
                ${markupCard(newOwnCalls)}
              </ul>
            </div>
            `)
        }
        // рендеринг страницы по клику на СМОТРЕТЬ ВСЕМ ИЗБРАНЫЕ
        if(target.getAttribute('data-name') === 'FavCalls'){
            rootEL.innerHTML = '';
            rootEL.insertAdjacentHTML('beforeend', `
            <div class="root-user-account">
              <div class="title-root">
                 <h2 class="title-root__user-calls">Избранное</h2>
              </div>
    
              <ul class='card-container'>
                ${markupCard(favourites)}
              </ul>
            </div>
            `)
        }
     
        }

    // маркап каждой карточки
    function markupCard(data) { 
        return data
        .map(call => cardCall(call))
        .join(' ')
    }

      if(target.id === 'edit-btn'){ // КНОПКА ДЛЯ РЕДАКТИРОВАНИЯ КАРТОЧКИ
    alert('САШИНА ФУНКЦИЯ')
 }

 if(target.id === 'delete-ownCall-btn'){
    const cardId = target.getAttribute('data-id');
     await  deleteUserCall(cardId);
     target.closest('li').remove();   
 }

 if(target.id === 'delete-favCall-btn'){
    const cardId = target.getAttribute('data-id');
    const {status} = await deleteFavouritesCall(cardId);
    
    if(status === 200){
        console.log('yes');
        target.closest('li').remove(); 
      }   
 }
}

export default markupUserCategoryCalls;