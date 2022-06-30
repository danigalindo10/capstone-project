function toggleMenu() {
  document.querySelector('header').classList.toggle('mobile-menu');
  document.querySelector('nav').classList.toggle('mobile-menu');
}

document.getElementById('menu').addEventListener('click', () => {
  document.querySelector('body').classList.toggle('no-scroll');
  toggleMenu();
});

document.getElementById('close').addEventListener('click', () => {
  document.querySelector('body').classList.toggle('no-scroll');
  toggleMenu();
});

const closeMenuElements = document.getElementsByClassName('menu-link');

// eslint-disable-next-line no-plusplus
for (let i = 0; i < closeMenuElements.length; i++) {
  closeMenuElements[i].addEventListener('click', () => {
    document.querySelector('body').classList.toggle('no-scroll');
    toggleMenu();
  });
}