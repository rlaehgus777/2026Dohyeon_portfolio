const swiper = new Swiper('.every_wrap', {
    direction: 'vertical',   // 핵심: 가로 → 세로
    slidesPerView: 1,        // 마우스 휠로 다음 슬라이드 넘기고 싶으면
    mousewheel : true,
    speed: 600,
});

const imgswiper = new Swiper('.img_g', {
    direction: 'horizontal',
    slidesPerView: 4,
    simulateTouch: true,   // 마우스로 터치처럼 드래그 (기본값 true)
    grabCursor: true,      // 드래그 시 커서가 손 모양으로 바뀜 (UX용)
    allowTouchMove: true, 
    speed: 4000 ,
    spaceBetween:40,
    loop: true,           // 무한 반복하려면 필수
    autoplay: {
        delay: 1,               // 2초마다 다음 슬라이드로
        disableOnInteraction: false,
    }
});