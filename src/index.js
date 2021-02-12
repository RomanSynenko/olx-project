import './style/styles.scss';

// Vlad header
import './main/header/scss/main.scss';
import {receiveHeader} from './main/header/js/api';

// Roman
import './main/banner/js/banner';

// Mukola body
import renderCategoriesWithProduct from './main/categories/js/Categories';

receiveHeader();
renderCategoriesWithProduct();
