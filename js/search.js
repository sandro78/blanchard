document.querySelector(".header-menu__search").addEventListener("click", function () {
  document.querySelector(".search-form").classList.add("search-form--active");
  document.querySelector(".header-logo__wrapper").classList.add("header-logo__wrapper--search-form-active");
  document.querySelector(".menu-burger__btn").classList.add("menu-burger__btn--search-form-active");
  document.querySelector(".header-search__wrapper").classList.add("header-search__wrapper--search-form-active");
});

document.querySelector(".search-form__close-btn").addEventListener("click", function () {
  document.querySelector(".search-form").classList.remove("search-form--active");
  document.querySelector(".header-logo__wrapper").classList.remove("header-logo__wrapper--search-form-active")
  document.querySelector(".menu-burger__btn").classList.remove("menu-burger__btn--search-form-active")
  document.querySelector(".header-search__wrapper").classList.remove("header-search__wrapper--search-form-active");
});
