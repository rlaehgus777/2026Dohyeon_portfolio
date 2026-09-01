const swiper = new Swiper('.every_wrap', {
    direction: 'vertical',  
    slidesPerView: 1,        
    mousewheel : true,
    speed: 600,
});

const imgswiper = new Swiper('.img_g', {
    direction: 'horizontal',
    slidesPerView: 4,
    simulateTouch: true,   
    grabCursor: true,      
    allowTouchMove: true, 
    speed: 5000 ,
    spaceBetween:15,
    loop: true,           
    autoplay: {
        delay: 1,              
        disableOnInteraction: false,
    }
});
const ctaToggle = document.querySelector('.cta-toggle');
const ctaList = document.querySelector('.cta-list');

ctaToggle.addEventListener('click', () => {
    const isOpen = ctaToggle.classList.toggle('active');
    ctaList.classList.toggle('open');
    ctaToggle.setAttribute('aria-expanded', isOpen);
    ctaToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});

document.querySelector('.cta-list').addEventListener('click', (e) => {
    const link = e.target.closest('a[data-slide-target]');
    if (!link) return;

    e.preventDefault();
    const targetIndex = parseInt(link.dataset.slideTarget, 10);
    swiper.slideTo(targetIndex);
});