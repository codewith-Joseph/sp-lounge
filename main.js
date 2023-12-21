const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

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

document.addEventListener('DOMContentLoaded', function () {
  // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  var currentDay = new Date().getDay();

  // Define event details based on the day of the week
  var eventDetails;
  if (currentDay === 3) {
    eventDetails = {
      name: 'Wednesday Ladies Night',
      description: 'Ladies enjoy special discounts on drinks all night.',
      date: '02:00am Tuesday - 01:00pm Thursday',
    };
  } else if (currentDay === 5) {
    eventDetails = {
      name: 'Friday All Night Dance',
      description: 'Groove to the beats until the sun comes up!',
      date: '02:00am Friday - 06:00am Saturday',
    };
  } else if (currentDay === 6) {
    eventDetails = {
      name: 'Saturday Birthday Parties and Get Together',
      description: 'Celebrate special occasions with us!',
      date: '08:00pm Saturday - 02:00am Sunday',
    };
  } else if (currentDay === 0) {
    eventDetails = {
      name: 'Sunday Karaoke Night',
      description: 'Unleash your inner rockstar on our stage!',
      date: '06:00pm Sunday - 12:00am Monday',
    };
  } else {
    eventDetails = {
      name: 'Regular Event',
      description: 'Join us for a great night at our venue!',
      date: 'Check our calendar for upcoming events.',
    };
  }

  // Display event name
  document.querySelector('.event-name').textContent =
    "Tonight's Event: " + eventDetails.name;

  // Display event description
  document.querySelector('.event-desc').textContent = eventDetails.description;

  // Display event date
  document.querySelector('.event-date').textContent =
    'Event Period: ' + eventDetails.date;

  // Display countdown
  if (eventDetails.date) {
    updateCountdown(eventDetails.date);
    setInterval(function () {
      updateCountdown(eventDetails.date);
    }, 1000);
  } else {
    document.querySelector('.event-countdown').textContent =
      'No specific time for this event.';
  }
});

function updateCountdown(eventDate) {
  var now = new Date().getTime();
  var eventTime = new Date(eventDate).getTime();
  var distance = eventTime - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days + 'd';
  document.getElementById('hours').textContent = hours + 'h';
  document.getElementById('minutes').textContent = minutes + 'm';
  document.getElementById('seconds').textContent = seconds + 's';
}
