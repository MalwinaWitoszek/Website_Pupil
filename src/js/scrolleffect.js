function scrollEffect(){
    var header = document.getElementById('header'),
        li = header.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.children,
        // li = header.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.children,
        ypos = window.pageYOffset;
        console.log(li);

    if(ypos > 587){
        header.classList.add('scroll-header');  //header configuration after scroll
        for(var i=0; i<li.length; i++){           //header-nav-li configuration after scroll
            li[i].classList.add('scroll-header-li');
        }
    }else{
        header.classList.remove('scroll-header'); //header base configuration
        for(var i=0; i<li.length; i++){                 //header-nav-li base configuration
            li[i].classList.remove('scroll-header-li');
        }
    }
}
window.addEventListener('scroll',scrollEffect);


// function scrollLogoEffect(){
//     var logo = document.getElementById('logo'),
//         ypos = window.pageYOffset;
// console.dir(logo);
//     if(ypos > 587){
//         logo.classList.add('scroll-header-logo');  //header configuration after scroll
//         // header.firstElementChild.firstElementChild.classList.add('scroll-header-logo');  //header-logo configuration after scroll
//     }else{
//         logo.classList.remove('scroll-header-logo'); //header base configuration
//         // header.firstElementChild.firstElementChild.classList.remove('scroll-header-logo');  //header-logo configuration after scroll
//     }
// }

// window.addEventListener('scroll',scrollLogoEffect);