document.addEventListener("DOMContentLoaded", function() {
  var imageContainers = document.querySelectorAll('.image-container');

  function fadeInImages() {
    imageContainers.forEach(function(container) {
      if (isInViewport(container)) {
        container.style.opacity = 1;
      }
    });
  }

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  fadeInImages();

  window.addEventListener('scroll', function() {
    fadeInImages();
  });
});
