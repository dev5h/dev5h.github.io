// document.addEventListener("DOMContentLoaded", function() {
//     var lazyImages = document.querySelectorAll('.preview-wrapper');

//     var lazyLoad = function() {
//       lazyImages.forEach(function(image) {

//           var img = image.getAttribute("data-src")

//       });
//     };

//     lazyLoad();
//     window.addEventListener('scroll', lazyLoad);
//     window.addEventListener('resize', lazyLoad); // Add resize event listener
//     window.addEventListener('orientationchange', lazyLoad); // Add orientation change event listener
//   });

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > 0 || entry.isIntersecting) {
      const image = entry.target;
      observer.unobserve(image);

      if (image.hasAttribute("src")) {
        // Image has been loaded already
        return;
      }

      // Image has not been loaded so load it
      const sourceUrl = image.getAttribute("data-src");
      image.setAttribute("src", sourceUrl);

      image.onload = () => {
        var parent = image.parentElement;
        parent.removeChild(parent.querySelector(".prev-loader-wrapper"));
      };

      // Removing the observer
      observer.unobserve(image);
    }
  });
});

document.querySelectorAll(".lazy").forEach((el) => {
  observer.observe(el);
});
