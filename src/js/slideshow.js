var x= document.querySelector('h1 span:first-child');
console.log(x);
var currentSlide = 0;
//chcemy wiedziec ile mamy naszych sliderow
var slides = document.querySelectorAll('#slides .slide')
var sliderInterval = setInterval(nextSlide,4000);

function nextSlide(){
  slides[currentSlide].className = "slide";
  currentSlide = (++currentSlide)%slides.length  //wychwycenie ktory slide jest aktualny i zamiana go na nastepny
  slides[currentSlide].className = "slide showing"
}

