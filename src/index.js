// Vlad header
import './main/header/scss/main.scss';
import {receiveHeader} from './main/header/js/api';

// Mukola body
import './style/styles.scss';
import renderCategoriesWithProduct from './main/categories/js/Categories';

receiveHeader();
renderCategoriesWithProduct();