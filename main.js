const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    target.classList.add('active');
    tab.classList.add('active');
  });
});

// UIkit.countdown('[uk-countdown]').start();

var splide = new Splide('.splide', {
  type: 'loop',
  gap: '35px',
  perPage: 3,
  breakpoints: {
    640: {
      perPage: 1,
    },
    950: {
      perPage: 2,
    },
  },
});

var eventSplide = new Splide('.event-splide', {
  type: 'loop',
  gap: '35px',
  perPage: 1,
});

var bar = splide.root.querySelector('.my-carousel-progress-bar');
var eventBar = eventSplide.root.querySelector('.my-carousel-progress-bar');

// Updates the bar width whenever the carousel moves:
splide.on('mounted move', function () {
  var end = splide.Components.Controller.getEnd() + 1;
  var rate = Math.min((splide.index + 1) / end, 1);
  bar.style.width = String(100 * rate) + '%';
});

eventSplide.on('mounted move', function () {
  var end = eventSplide.Components.Controller.getEnd() + 1;
  var rate = Math.min((eventSplide.index + 1) / end, 1);
  eventBar.style.width = String(100 * rate) + '%';
});

splide.mount(window.splide.Extensions);

eventSplide.mount(window.splide.Extensions);
