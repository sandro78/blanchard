document.querySelectorAll('.catalog__artist-lnk').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.catalog__artist-lnk').forEach(function (btn) {
      btn.classList.remove('catalog__artist-lnk--active');
    });

    e.currentTarget.classList.add('catalog__artist-lnk--active');
    document.querySelectorAll('.artist__descr').forEach(function (tabsContent) {
      tabsContent.classList.remove('artist__descr--active');
    });
    let el = document.querySelector(`[data-target="${path}"]`);
    if (!el) {
      el = document.querySelector('#artist-descr-stub');
    }
    el.classList.add('artist__descr--active');
  });
});
