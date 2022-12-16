const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.header-menu1__close-btn');
const menu = document.querySelector('.header-menu1');
const links = document.querySelectorAll('.header-menu1__lnk');
const activeMenuClassName = 'header-menu1--active';

burgerBtn.addEventListener('click', () => {
  menu.classList.add(activeMenuClassName);
  menu.style.transition = 'transform var(--middle-delay) ease-in, visibility var(--middle-delay) ease-in';
});

menu.addEventListener('transitionend', () => {
  if (!menu.classList.contains(activeMenuClassName)) {
    menu.style.transition = '';
  }
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove(activeMenuClassName);
});

links.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menu.classList.remove(activeMenuClassName);
  });
});
