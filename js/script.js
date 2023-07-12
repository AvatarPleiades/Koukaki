// Animations Fade-in
// création d'une nouvelle instance de l'API IntersectionObserver pour le fade in 
const sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');

            // apparition des titres
            // Récupération des titres h2 et h3 et division de chaque mot des titres
            const title = entry.target.querySelector('h2, h3');

            if (title && title.textContent) {
                const words = title.textContent.split(' ');
                title.textContent = ' ';

                // Création d'une span pour stocker les mots découpés
                words.forEach((word) => {
                    const span = document.createElement('span');
                    span.classList.add('titleAnimation');
                    span.textContent = word;
                    title.appendChild(span);
                });

                // Création d'une nodeList des spans qui ont la classe d'animation
                const spans = title.querySelectorAll('.titleAnimation');

                // Ajout d'un délai par rapport à l'index pour déclencher l'animation
                spans.forEach((span, index) => {
                    const delay = (index === 0) ? 400 : index * 600; // Délai de 600 millisecondes pour chaque span à partir du deuxième span

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

// Sélection des sections à animer
const sections = document.querySelectorAll('.story, #characters, #place, #studio, footer');

// Itération sur chaque section et ajout de l'observateur d'intersection
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

// Ajoute un écouteur d'événement qui détecte le défilement de la fenêtre.

window.addEventListener('scroll', function () {

    // Selection des éléments
    const bigCloud = document.querySelector('.nuages');
    const littleCloud = document.querySelector('.petits-nuages');
    const placeSection = document.querySelector('#place');

    // Récuperation de la position verticale (offsetTop) de la section "place" par rapport au haut de la page
    // ainsi que la position de défilement verticale actuelle de la fenêtre.
    const sectionOffsetTop = placeSection.offsetTop;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Verification si la position de défilement actuelle est supérieure ou égale à la position verticale
    if (scrollPosition >= sectionOffsetTop) {

        // calcule la valeur de défilement, détermine l'intensité du déplacement des nuages
        const parallaxValue = (scrollPosition - sectionOffsetTop) / 4;

        // Math.min() limite la valeur de déplacement à 300px
        const translationX = Math.min(parallaxValue, 300);

        // Utilisation de la propriété CSS transform pour modifier la position des nuages avec translateX
        // Le -translationX (distance de déplacement vers la gauche), 'px' pour utiliser le pixel.
        bigCloud.style.transform = 'translateX(' + (-translationX) + 'px)';
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