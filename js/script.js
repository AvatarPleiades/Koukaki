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
        orientation: 'right',
        scale: 1.15,
        delay: 0.5,
        transition: 'cubic-bezier(0,0,0,1)'
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