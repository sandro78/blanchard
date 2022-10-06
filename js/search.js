document.querySelector(".header-search__lnk").addEventListener("click", function () {
  document.querySelector(".search-form").classList.add("search-form--active");
  document.querySelector(".header-logo").classList.add("header-logo--search-form-active");
  document.querySelector(".burger-btn").classList.add("burger-btn--search-form-active");
  document.querySelector(".header-search").classList.add("header-search--search-form-active");
});

document.querySelector(".search-form__close-btn").addEventListener("click", function () {
  document.querySelector(".search-form").classList.remove("search-form--active");
  document.querySelector(".header-logo").classList.remove("header-logo--search-form-active")
  document.querySelector(".burger-btn").classList.remove("burger-btn--search-form-active")
  document.querySelector(".header-search").classList.remove("header-search--search-form-active");
});
