import './styles.css';
import footerOpen from './templates/footer_render.hbs';

const markupId = document.querySelector('#root')


markupId.insertAdjacentHTML('beforeend', footerOpen())

