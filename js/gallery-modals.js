const picturesBtns = document.querySelectorAll('.gallery__swiper-slide');
const modalOverlay = document.querySelector('.gallery__modal-overlay ');
const modals = document.querySelectorAll('.gallery__modal');
const closeModalBtns = document.querySelectorAll('.gallery-modal__close-btn');

picturesBtns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('gallery__modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modal--visible');
    modalOverlay.classList.add('gallery__modal-overlay--visible');
  });
});

closeModalBtns.forEach((el) => {
  el.addEventListener('click', () => {

    modalOverlay.classList.remove('gallery__modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('gallery__modal--visible');
    });
  });
});
