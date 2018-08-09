var slideInElements = document.querySelectorAll(".slide-in");

// debounce function is essential to ensuring a given task doesn't fire
// so often that it bricks browser performance.
// It limits the rate at which a function can fire
function debounce(func, wait, immediate) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

function checkElement(event) {
  slideInElements.forEach(function(slideElement) {
    //where the element is on the page
    var elementPositiontoSlideIn =
      window.scrollY + window.innerHeight - slideElement.clientHeight / 2; //position of the middle of the element in pixels
    var elementbottom = slideElement.offsetTop + slideElement.clientHeight; //position of the bottom of the element in pixels
    var checkHalfVisible = elementPositiontoSlideIn > slideElement.offsetTop;
    var checkNotScrolledPast = window.scrollY < elementbottom;

    if (checkHalfVisible && checkNotScrolledPast) {
      slideElement.classList.add("active");
    } else {
      slideElement.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkElement), 30, true);
