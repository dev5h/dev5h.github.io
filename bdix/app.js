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
        parent.style.background = "#FFFFFF";
      };

      // Removing the observer
      observer.unobserve(image);
    }
  });
});

document.querySelectorAll(".lazy").forEach((el) => {
  observer.observe(el);
});

// Slideshow buttons
document
  .querySelector(".nav-button-left")
  .addEventListener("click", function () {
    scrollSlider(-1);
  });
document
  .querySelector(".nav-button-right")
  .addEventListener("click", function () {
    scrollSlider(1);
  });

// Function to scroll the slider by one unit
function scrollSlider(direction) {
  const slider = document.querySelector(".preview-parent-container");
  const scrollAmount = slider.clientWidth * direction; // Width of one slide

  slider.scrollTo({
    left: slider.scrollLeft + scrollAmount,
    behavior: "smooth", // Smooth scroll effect
  });
}
