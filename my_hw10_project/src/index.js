import menu from './menu.json';
import menuCards from './templates/menu-cards.hbs';
import './styles.css';
import './changeTheme.js';

const menuEl = document.querySelector('.js-menu');
menuEl.insertAdjacentElement('beforeend', menuMarkup);

const menuMarkup = creatMenu(menu);

function creatMenu(menu) {
  return menuCards(menu);
}
