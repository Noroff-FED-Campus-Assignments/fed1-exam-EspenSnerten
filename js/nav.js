const button = document.getElementById('open-menu');
const menu = document.getElementById('menu');

button.addEventListener('click', function() {
  menu.classList.toggle('open');
});