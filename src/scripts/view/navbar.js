const navbarButtonElement = document.querySelector('#navbar');
const drawerElement = document.querySelector('#bar');
const mainElement = document.querySelector('main');
 
navbarButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');

  if (drawerElement.classList.contains("open")) {
    navbarButtonElement.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    navbarButtonElement.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }

  event.stopPropagation();
});

mainElement.addEventListener('click', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
});