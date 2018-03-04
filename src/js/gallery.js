var current = document.querySelector('#actual'),
    images = document.querySelectorAll('.gallery-container > img'),
    max = images.length,
    opacity = 0.6;

    //set opacity of the first image
    images[0].style.opacity = opacity;
    
    function changeImage(e){
        //reset the opacity
        for(var i=0; i<max; i++){
            images[i].style.opacity = 1;
        }
        //change main image
        actual.src = e.target.src;

        //change opacity
        e.target.style.opacity = opacity;

        //animation - add fade-in class
        actual.classList.add('fade-in');

        //remove fade-in class after 0.7s
        setTimeout(function(){
            actual.classList.remove('fade-in')
        },500);
    }

    for(var i=0; i<max;i++){

        images[i].addEventListener('mouseover',changeImage)


    }




// (function($) {

//     $(document).ready(function() {

//         $(".bxslider").bxSlider({
//             auto: true,
//             pause: 4000,
//             controls: false
//         });

//         $("a.projects__link").lightbox();

//     });

// })(jQuery);


















