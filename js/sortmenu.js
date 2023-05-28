const sortButton = document.getElementById('sort-menu-btn');
const sortMenu = document.getElementById('sort-menu');
const icon = document.getElementById('sort-icon');

sortButton.addEventListener('click', function() {
  sortMenu.classList.toggle('open');
  icon.classList.toggle('open');
});