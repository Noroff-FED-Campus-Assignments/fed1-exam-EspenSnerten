function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;

  var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
}

function fadeInSectionsOnScroll() {
  var fadeSections = document.querySelectorAll('.fade-section');

  function fadeInSection(section) {
    section.classList.add('fade-in');
  }

  function handleScroll() {
    fadeSections.forEach(function(section) {
      if (isElementInViewport(section)) {
        fadeInSection(section);
      }
    });
  }

  handleScroll(); // Check on initial page load

  window.addEventListener('scroll', handleScroll);
}

fadeInSectionsOnScroll();