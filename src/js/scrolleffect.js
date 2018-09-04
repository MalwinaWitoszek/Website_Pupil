function scrollEffect(){
    var header = document.getElementById('header'),
        li = header.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.children,
        // li = header.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.children,
        ypos = window.pageYOffset;
        console.log(li);

    if(ypos > 587){
        header.classList.add('scroll-header');  //header configuration after scroll
        for(var i=1; i<li.length; i++){           //header-nav-li configuration after scroll
            li[i].classList.add('scroll-header-li'); //i=1 means changeing all elements except close-hamburger-menu symbol
        }
    }else{
        header.classList.remove('scroll-header'); //header base configuration
        for(var i=1; i<li.length; i++){                 //header-nav-li base configuration
            li[i].classList.remove('scroll-header-li');
        }
    }
}
window.addEventListener('scroll',scrollEffect);

