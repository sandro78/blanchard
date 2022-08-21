document.querySelector(".header-menu__search").addEventListener("click", function () {
  document.querySelector(".search-form").classList.add("search-form--active");
});

document.querySelector(".search-form__close-btn").addEventListener("click", function () {
  document.querySelector(".search-form").classList.remove("search-form--active");
});
