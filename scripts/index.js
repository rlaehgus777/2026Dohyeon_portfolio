const swiper = new Swiper('.every_wrap', {
    direction: 'vertical',   // 핵심: 가로 → 세로
    slidesPerView: 1,        // 마우스 휠로 다음 슬라이드 넘기고 싶으면
    mousewheel : true,
    speed: 600,
});
document.querySelectorAll('.contents').forEach(link => {
    link.addEventListener('click', function(e) {
    const slideIndex = this.getAttribute('data-slide'); // this = .contents 링크
    swiper.slideTo(parseInt(slideIndex));
    });
});
