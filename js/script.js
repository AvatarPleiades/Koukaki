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