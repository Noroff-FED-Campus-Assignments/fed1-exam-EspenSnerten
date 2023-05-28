function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  let windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  let windowWidth = window.innerWidth || document.documentElement.clientWidth;

  let vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  let horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
}

function fadeInSectionsOnScroll() {
  let fadeSections = document.querySelectorAll('.fade-section');

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

  handleScroll();

  window.addEventListener('scroll', handleScroll);
}

fadeInSectionsOnScroll();