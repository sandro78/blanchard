const picturesBtns = document.querySelectorAll('.gallery__swiper-slide');
const modalOverlay = document.querySelector('.gallery-modal-overlay ');
const modals = document.querySelectorAll('.gallery-modal');
const closeModalBtns = document.querySelectorAll('.gallery-modal__close-btn');
const bodyElement = document.querySelector('body');

picturesBtns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('gallery-modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('gallery-modal--visible');
    modalOverlay.classList.add('gallery-modal-overlay--visible');
    bodyElement.style.overflow = 'hidden';
  });
});

const closeModalFunc = function () {
  modalOverlay.classList.remove('gallery-modal-overlay--visible');
  modals.forEach((el) => {
    el.classList.remove('gallery-modal--visible');
  });
  bodyElement.style.overflow = "auto";
}

modals.forEach((el) => el.addEventListener('click', (e) => e.stopPropagation()));
modalOverlay.addEventListener('click', closeModalFunc);
closeModalBtns.forEach((el) => {
  el.addEventListener('click', closeModalFunc);
});
