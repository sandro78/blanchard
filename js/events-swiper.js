(() => {
  new Swiper(".events__slides-container", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    navigation: {
      nextEl: ".events__btn-next",
      prevEl: ".events__btn-prev"
    },
    pagination: {
      el: '.events__swiper-pagination',
      clickable: true
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },

      1244: {
        slidesPerView: 2,
        slidesPerGroup: 2
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
          const link = slide.querySelector('.event__lnk');
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
            link.tabIndex = "-1";
          } else {
            slide.tabIndex = "0";
            link.tabIndex = "0";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          const link = slide.querySelector('.event__lnk');
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
            link.tabIndex = "-1";
          } else {
            slide.tabIndex = "0";
            link.tabIndex = "0";
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
