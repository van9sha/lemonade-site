// Swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    //grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// Переключение меню
const body = document.querySelector('body'),
    navMenu = body.querySelector('.menu-content'),
    navOpenBtn = body.querySelector('.navOpen-btn'),
    navCloseBtn = navMenu.querySelector('.navClose-btn');

if( navMenu && navOpenBtn){
    navOpenBtn.addEventListener("click", () =>{
        navMenu.classList.add("open");
        body.style.overflowY = "hidden";
    })
}
if( navMenu && navCloseBtn){
    navCloseBtn.addEventListener("click", () =>{
        navMenu.classList.remove("open");
        body.style.overflowY = "scroll";
    })
}


    /* Изменение цвета шапки */
    window.addEventListener("scroll",() => {
        const scrollY = window.pageYOffset;
        if(scrollY > 5){
            document.querySelector("header").classList.add("header-active");
        }else{
            document.querySelector("header").classList.remove("header-active");
        }


            /*  Промотать кнопку вверх */
        const scrollUpBtn = document.querySelector(".scrollUp-btn");

        if(scrollY > 250){
            scrollUpBtn.classList.add("scrollUpBtn-active");
        }else{
            scrollUpBtn.classList.remove("scrollUpBtn-active");
        }

/* Nav link indicator */

        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section =>{
          const sectionHeight = section.offsetHeight,
                sectionTop = section.offsetTop - 100;

                let navId = document.querySelector(`.menu-content a[href ='#${section.id}']`);

                 if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){


                     navId.classList.add("active-navlink");
                 }else{
                     navId.classList.remove("active-navlink");
                 }

                navId.addEventListener("click",() => {
                    navMenu.classList.remove("open");
                    body.style.overflowY = "scroll";
                })
        })
    })

/* Scroll Reveal Animation */

        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
        })

        sr.reveal(`.section-subtitle, .section-title, .section-description, .brand-image,
         .newsletter, .logo-content, .newsletter-inputBox, .newsletter-mediaIcon,
        .footer-content, .footer-links, .menu-content, .testimonial, .contact-content, .about-details,
        .review-quote, .testi-personDetails`, {interval:100,})


        sr.reveal(`.about-imageContent, .menu-items`, {origin:`left`})
        sr.reveal(`.about-details, .time-table`, {origin:`right`})