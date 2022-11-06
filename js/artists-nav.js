function artistItemClicked(e) {
  if (e instanceof KeyboardEvent && e.key !== 'Enter') {
    return;
  }
  const path = e.currentTarget.dataset.path;
  document.querySelectorAll('.catalog__artist-lnk').forEach(function (btn) {
    btn.classList.remove('active');
  });

  e.currentTarget.classList.add('active');
  document.querySelectorAll('.artist-descr').forEach(function (tabsContent) {
    tabsContent.classList.remove('active');
  });
  let el = document.querySelector(`[data-target="${path}"]`);
  if (!el) {
    el = document.querySelector('#artist-descr-stub');
  }
  el.classList.add('active');
}

document.querySelectorAll('.catalog__artist-lnk').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', artistItemClicked);
  tabsBtn.addEventListener('keyup', artistItemClicked);
});
