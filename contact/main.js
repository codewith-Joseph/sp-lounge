document.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;

  // Adjust the value (e.g., 200) based on when you want the button to appear
  if (scrollPosition > 200) {
    document.querySelector('.uk-totop').classList.remove('uk-hidden');
    document.querySelector('.uk-totop').classList.add('uk-visible');
  } else {
    document.querySelector('.uk-totop').classList.add('uk-hidden');
    document.querySelector('.uk-totop').classList.remove('uk-visible');
  }
});
