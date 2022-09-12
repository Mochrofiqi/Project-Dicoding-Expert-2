const navbarButtonElement = document.querySelector('#navbar');
const drawerElement = document.querySelector('#bar');
const mainElement = document.querySelector('main');
 
navbarButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
})