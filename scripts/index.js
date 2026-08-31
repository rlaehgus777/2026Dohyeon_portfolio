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
const toTopBtn = document.getElementById('toTopBtn');

// 첫 슬라이드(hero, index 0)가 아닐 때만 버튼 보이기
swiper.on('slideChange', function () {
    if (swiper.activeIndex === 0) {
        toTopBtn.classList.remove('show');
    } else {
        toTopBtn.classList.add('show');
    }
});

// 클릭하면 첫 슬라이드로 이동
toTopBtn.addEventListener('click', function () {
    swiper.slideTo(0);
});