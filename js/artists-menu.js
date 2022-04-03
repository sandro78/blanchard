document.querySelectorAll('.artists-dropdown__btn').forEach(function (artistsDropdownBtn) {
  artistsDropdownBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.artists-dropdown__btn').forEach(function (btn) {
      if (btn.dataset.path !== path) {
        btn.classList.remove('artists-dropdown__btn--active')
      }
    });

    e.currentTarget.classList.toggle('artists-dropdown__btn--active');
    document.querySelectorAll('.artists-dropdown__content').forEach(function (dropdownContent) {
      if (dropdownContent.dataset.target !== path) {
        dropdownContent.classList.remove('artists-dropdown__content--active')
      }
    });
    document.querySelector(`[data-target="${path}"]`).classList.toggle('artists-dropdown__content--active');
  });
});
