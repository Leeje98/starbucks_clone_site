


/* 검색창 늘이고 줄이기 */
const searchBox = document.querySelector('#search')

searchBox.addEventListener('focus', () => {
    searchBox.setAttribute('placeholder', '  검색어 입력')
            // Element.setAttribute()  지정된 요소의 속성 값을 설정합니다. 속성이 이미 있는 경우 값이 업데이트됩니다. 그렇지 않으면 지정된 이름과 값으로 새 속성이 추가됩니다.
})

searchBox.addEventListener('blur', () => {
    searchBox.setAttribute('placeholder', '')
})


/* 동영상 백그라운드 제이쿼리 */
$(function(){

    jQuery("#bgndVideo").YTPlayer({
        videoURL:'c7Tg5uNTmfg',                   // 동영상주소
        containment:'.movieBg',                   // 선택자
        autoPlay:true,                            // 자동재생 (음소거가 true인 경우에만 가능함)
        mute:true,                                // 음소거여부
        startAt:0,                                // 동영상이 시작되어야 하는 초
        opacity:1,                                // 불투명도
        showControls: false,                      // 영상 컨트롤(재생바 등) 표시여부
        playOnlyIfVisible: true                   // 해당 화면 밖에 있을때, 일시 중지 
    });

})


/* top_btn */
const topBtn = document.querySelector('.top_btn')

topBtn.addEventListener('click', () => {
  gsap.to(window, 0.8, { //gsap.to(요소, 시간, {애니메이션옵션})
    scrollTo: 0
  })
})


/* Badge */
const badge = document.querySelector('.badge')

window.addEventListener('scroll', () => {
  if(window.scrollY > 600) {
    gsap.to(badge, 0.3, {
      opacity: 0
    })
  } else {
    gsap.to(badge, 0.3, {
      opacity: 1
    })
  }
})


/* visual_main */
const visualElements = document.querySelectorAll('.banner_box .v_box')

visualElements.forEach((visualElement, index) => {
  gsap.to(visualElement, 2, {
    delay: index * 0.8,
    opacity: 1
  })
})


/* swiper_notice */
new Swiper('.notice .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})


/* promotion_swiper */
new Swiper('.promotions_box .swiper', {
  slidesPerView: 3,            // 3개의 슬라이드 노출
  spaceBetween: 10,            // 슬라이드간 간격
  loop: true,                  // 무한재생
  centeredSlides: true,        // 센터모드
  autoplay: {
      delay: 3000              // 화면이동속도: 기본값이 3000(3s)이다
  },
  pagination: {                // 인디케이터 클릭이동
      el: '.promotions_box .swiper-pagination',
      clickable: true
  },
  navigation: {
      nextEl: '.promotions_box .swiper-button-next',
      prevEl: '.promotions_box .swiper-button-prev'
  }
})



/* product&event ScrollMagic */
const scrollEls = document.querySelectorAll('.scroll_el')

scrollEls.forEach((scrollEl) => {
    new ScrollMagic
        .Scene({       // 감지할 위치 
            triggerElement:scrollEl,   // 감지할 대상
            triggerHook: 0.7 // 화면 높이를 0에서 1로 봤을때 0.7쯤 오면 이벤트를 일으키기 위해 Hook이라는 고리를 걸어놓고 감지하게 한다 (0.7이나 0.8이 제일 많이 쓰인다)
        })
        .setClassToggle(scrollEl, 'show')     
        // setClassToggle : 트리거의 애니메이션 시작지점부터 종료지점까지 어떠한 대상에 클래스를 넣었다 뺏다(토글)하는 메서드
        .addTo(new ScrollMagic.Controller())
        // addTo : 생성한다
        // Controller : 컨트롤 할수 있다 / 실행한다
})



/* product&event ScrollMagic */
const scrollEl_bgs = document.querySelectorAll('.movieBg .img_box')

scrollEl_bgs.forEach((scrollEl_bg) => {
    new ScrollMagic
        .Scene({       // 감지할 위치 
            triggerElement:scrollEl_bg,   // 감지할 대상
            triggerHook: 0.7 // 화면 높이를 0에서 1로 봤을때 0.7쯤 오면 이벤트를 일으키기 위해 Hook이라는 고리를 걸어놓고 감지하게 한다 (0.7이나 0.8이 제일 많이 쓰인다)
        })
        .setClassToggle(scrollEl_bg, 'up')     
        // setClassToggle : 트리거의 애니메이션 시작지점부터 종료지점까지 어떠한 대상에 클래스를 넣었다 뺏다(토글)하는 메서드
        .addTo(new ScrollMagic.Controller())
        // addTo : 생성한다
        // Controller : 컨트롤 할수 있다 / 실행한다
})



/* footer_slider */
new Swiper('.footer_slider_inner .swiper-container', {
  slidesPerView: 5,            // 슬라이드 노출 수량
  spaceBetween: 10,            // 슬라이드간 간격
  loop: true,                  // 무한재생
  centeredSlides: true,        // 센터모드
  autoplay: {
      delay: 4000              // 화면이동속도: 기본값이 3000(3s)이다
  },
  pagination: {                // 인디케이터 클릭이동
      el: '.footer_slider_inner .swiper-pagination',
      clickable: true
  },
  navigation: {
      nextEl: '.footer_slider_inner .swiper-button-next',
      prevEl: '.footer_slider_inner .swiper-button-prev'
  }
})

















