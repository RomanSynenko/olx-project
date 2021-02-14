import './style/styles.scss';
//Anna
//import '../src/main/cardProduct/cardMain.js'


// Vlad header
import './main/header/scss/main.scss';
import {receiveHeader} from './main/header/js/api';

// Sasha auth
// import authorizationRoot from './main/authorization-and-user-ad/root/js/root';


// Roman
import makeRequestBanner from './main/banner/js/banner';

// Mukola body
import renderCategoriesWithProduct from './main/categories/js/Categories';

receiveHeader();
makeRequestBanner();
renderCategoriesWithProduct();
// authorizationRoot();

