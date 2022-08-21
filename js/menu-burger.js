document.querySelector(".menu-burger__btn").addEventListener("click", function () {
  document.querySelector(".menu-burger").classList.add("menu-burger--active");
});

document.querySelector(".menu-burger__close-btn").addEventListener("click", function () {
  document.querySelector(".menu-burger").classList.remove("menu-burger--active");
});
