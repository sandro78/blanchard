document.querySelector(".burger-btn").addEventListener("click", () => {
  document.querySelector(".header-menu1").classList.add("header-menu1--active");
});

document.querySelector(".header-menu1__close-btn").addEventListener("click", () => {
  document.querySelector(".header-menu1").classList.remove("header-menu1--active");
});

document.querySelectorAll(".header-menu1__lnk").forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    document.querySelector(".header-menu1").classList.remove("header-menu1--active");
  });
});
