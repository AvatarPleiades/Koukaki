// Apparition des différentes sections

const sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');

            // Titres des sections
            
            const title = entry.target.querySelector('h2, h3');

            if (title && title.textContent) {
                const words = title.textContent.split(' ');
                title.textContent = ' ';

                words.forEach((word) => {
                    const span = document.createElement('span');
                    span.classList.add('titleAnimation');
                    span.textContent = word;
                    title.appendChild(span);
                });

                const spans = title.querySelectorAll('.titleAnimation');

                spans.forEach((span, index) => {
                    const delay = (index === 0) ? 400 : index * 600;

                    setTimeout(function () {
                        span.classList.add('visibility');
                    }, delay);
                });
            }
            observer.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '-100px 0px -100px 0px'
});

const sections = document.querySelectorAll('.story, #characters, #place, #studio, footer');

for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    sectionObserver.observe(section);
}

//Effet Parallax sur la bannière

document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.video-koukaki');
  
    new simpleParallax(video, {
        orientation: 'left',
        scale: 1.2,
        delay: 0.5,
        transition: 'ease-in-out'
    });
  });
  
//SwiperJS Coverflow

const swiper = new Swiper(".swiper", {
    direction: 'horizontal',
    centeredSlides: true,
    slidesPerView: "auto",
    speed: 2000,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    loopedSlides: 2,
    loopAdditionalSlides: 1,
    effect: "coverflow",
    coverflowEffect: {
        slideShadows: false,
        rotate: 70,
        stretch: 0,
        depth: 50,
        modifier: 1, 
    },
});

swiper.slideNext();

//Translation du nuage

window.addEventListener('scroll', function () {

    const Cloud = document.querySelector('.nuages');
    const littleCloud = document.querySelector('.petits-nuages');
    const placeSection = document.querySelector('#place');

    const sectionOffsetTop = placeSection.offsetTop;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition >= sectionOffsetTop) {
        const Parallax = (scrollPosition - sectionOffsetTop) / 4;
        const translationX = Math.min(Parallax, 300);

        Cloud.style.transform = 'translateX(' + (-translationX) + 'px)';
        littleCloud.style.transform = 'translateX(' + (-translationX) + 'px)';
    }
});

//Ouverture Menu Burger

const burger = document.querySelector('.navbar-toggle');
const menuToggle = document.querySelector('.toggle-open');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menuToggle.classList.toggle('open');
});