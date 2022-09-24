document.querySelector(".menu-burger__btn").addEventListener("click", () => {
  document.querySelector(".menu-burger").classList.add("menu-burger--active");
});

document.querySelector(".menu-burger__close-btn").addEventListener("click", () => {
  document.querySelector(".menu-burger").classList.remove("menu-burger--active");
});

document.querySelectorAll(".menu-burger__lnk").forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    document.querySelector(".menu-burger").classList.remove("menu-burger--active");
  });
});
