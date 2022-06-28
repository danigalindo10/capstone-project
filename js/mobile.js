/* eslint-disable no-plusplus */
function toggleMenu() {
  document.querySelector('header').classList.toggle('mobile-menu');
  document.querySelector('nav').classList.toggle('mobile-menu');
}

document.getElementById('menu').addEventListener('click', () => {
  toggleMenu();
});

document.getElementById('close').addEventListener('click', () => {
  toggleMenu();
});

const closeMenuElements = document.getElementsByClassName('menu-link');

for (let i = 0; i < closeMenuElements.length; i++) {
  closeMenuElements[i].addEventListener('click', () => {
    toggleMenu();
  });
}