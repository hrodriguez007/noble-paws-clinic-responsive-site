// Menu navigation list pop up on side when menu-btn selected
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

// search menu bar drops down
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}



//when the searchForm or navbar has been selected the others cannot butt in unless selected as well
// then previous clicked item goes away and new selected takes over
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

//ability to automate the blogss slide
var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableonInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3
        },
    },
});