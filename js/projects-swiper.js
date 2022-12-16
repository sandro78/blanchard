(() => {
  new Swiper(".projects__slides-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    navigation: {
      nextEl: ".projects__btn-next",
      prevEl: ".projects__btn-prev"
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 34
      },

      1024: {
        spaceBetween: 50
      },

      1540: {
        slidesPerView: 3
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
})();
