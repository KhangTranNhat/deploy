const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Sticky Nav Bar
const headerNav = $('.header-nav');
const banner = $('.banner');
const introduce = $('.introduce');
const news = $('.news');

if (window.innerWidth > 739) {
    window.onscroll = function() {scrollFunction()};
  }
function scrollFunction() {
    if(document.body.scrollTop > 160) {
        headerNav.classList.add('has-sticky');
        if (window.location.pathname.includes("introduce")) {
            introduce.classList.add('m-t-sticky-header');
            return;
        }
        else if (window.location.pathname.includes("news")) {
            news.classList.add('m-t-sticky-header');
            return;
        }
        banner.classList.add('m-t-sticky-header');
    }
    else {
        headerNav.classList.remove('has-sticky');
        if (window.location.pathname.includes("introduce")) {
            introduce.classList.remove('m-t-sticky-header');
            return;
        }
        else if (window.location.pathname.includes("news")){
            news.classList.remove('m-t-sticky-header');
            return;
        }
        banner.classList.remove('m-t-sticky-header');
    }
}

// Hiển thị Nav Bar trên Mobile
const btnShowNav = $('.list-icon-mobile');
const headerNavList = $('.header-nav__list');
const overlay = $('.overlay');
const btnHideNav = $('.btn-close-nav');

btnShowNav.addEventListener('click', function() {
    if(headerNavList.classList.contains('hide-on-mobile')) {
        headerNavList.classList.remove('hide-on-mobile')
        headerNavList.classList.add('show-block-on-mobile')
        overlay.style.display = 'block';
    }
});

btnHideNav.addEventListener('click', function() {
    headerNavList.classList.add('hide-on-mobile')
    headerNavList.classList.remove('show-block-on-mobile')
    overlay.style.display = 'none';
});

// Hiển thị Sub Nav Bar trên Mobile
const subContainer = $('.sub-nav');
const subNav = $('.sub-nav__list');

subContainer.addEventListener('click', function() {
    if(subNav.style.display == 'none') {
        subNav.style.display = 'block';
    }
    else {
        subNav.style.display = 'none';
    }
});

//Tự dộng chuyển banner
var slideIndex = 0;
showBanner();
function showBanner () {
    const slides = $$('.slide');
    const slideLenght = slides.length;
    var i;
    for(i = 0; i < slideLenght; i++) 
        slides[i].style.display = 'none';
    slideIndex++;
    if(slideIndex > slideLenght)
        slideIndex = 1;
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showBanner, 5000);
}