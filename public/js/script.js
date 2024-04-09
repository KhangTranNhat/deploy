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


const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }
        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }
    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }
    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);