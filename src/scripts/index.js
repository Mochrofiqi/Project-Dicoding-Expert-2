/* eslint-disable  */
import 'regenerator-runtime'; 
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/navbar.css';
import '../styles/loading.css';
import '../styles/detail.css';
import '../scripts/view/navbar';
import registerSW from './utils/register-sw';
import Main from './view/main';

document.addEventListener('DOMContentLoaded', () => {
  registerSW();
  Main.renderPage();
});

window.addEventListener('hashchange', () => {
  Main.renderPage();
});
