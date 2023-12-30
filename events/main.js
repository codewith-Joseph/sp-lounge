document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('event-search');
  const allEvents = document.querySelectorAll('.event-card');

  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    // Loop through all events and hide those that don't match the search term
    for (let i = 0; i < allEvents.length; i++) {
      const eventText = allEvents[i].innerText.toLowerCase();
      if (eventText.includes(searchTerm)) {
        allEvents[i].style.display = 'flex';
      } else {
        allEvents[i].style.display = 'none';
      }
    }
  });
});
