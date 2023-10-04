console.log("first project script");

//사이드바 버튼
openBtn.addEventListener('click', function () {
    sideBar.classList.remove('hidden');
  })

closeBtn.addEventListener('click', function () {
  sideBar.classList.add('hidden');
})

//네비게이션 바
//정보마당
var nav_1 = document.getElementById('nav_1');
var navbar_1 = document.getElementById('navbar_1');

nav_1.addEventListener('mouseover', function (){
  navbar_1.classList.remove('hidden');
})

nav_1.addEventListener('mouseout', function (){
  navbar_1.classList.add('hidden');
})

//학사마당
var nav_2 = document.getElementById('nav_2');

nav_2.addEventListener('mouseover', function (){
  navbar_2.classList.remove('hidden');
})

nav_2.addEventListener('mouseout', function (){
  navbar_2.classList.add('hidden');
})

//e-상담센터
var nav_3 = document.getElementById('nav_3');

nav_3.addEventListener('mouseover', function (){
  navbar_3.classList.remove('hidden');
})

nav_3.addEventListener('mouseout', function (){
  navbar_3.classList.add('hidden');
})

//학부모마당
var nav_4 = document.getElementById('nav_4');

nav_4.addEventListener('mouseover', function (){
  navbar_4.classList.remove('hidden');
})

nav_4.addEventListener('mouseout', function (){
  navbar_4.classList.add('hidden');
})

//주요사이트
var nav_5 = document.getElementById('nav_5');

nav_5.addEventListener('mouseover', function (){
  navbar_5.classList.remove('hidden');
})

nav_5.addEventListener('mouseout', function (){
  navbar_5.classList.add('hidden');
})


//슬라이드
window.onload = function() {
  const kindWrap =  document.querySelector('.kind_wrap');
  const slider = kindWrap.querySelector('.slider');
  const slideLis = slider.querySelectorAll('li')
  const moveButton = kindWrap.querySelector('.arrow');

  /* 클론 */
  const clone1 = slideLis[0].cloneNode(true);
  const cloneLast = slideLis[slideLis.length - 1].cloneNode(true);
  slider.insertBefore(cloneLast, slideLis[0]);
  slider.appendChild(clone1);

  /* 주요 변수 초기화 */  
  let currentIdx = 0;
  let translate = 0;
  const speedTime = 500;

  /* CSSOM 셋업 */
  const sliderCloneLis = slider.querySelectorAll('li');
  const liWidth = slideLis[0].clientWidth;
  const sliderWidth = liWidth * sliderCloneLis.length;
  slider.style.width = `${sliderWidth}px`;
  currentIdx = 1;
  translate = -liWidth;
  slider.style.transform = `translateX(${translate}px)`

  /* 리스너 설치하기 */
  moveButton.addEventListener('click', moveSlide);

  /* 슬라이드 실행 */
  function move(D) {
    currentIdx += (-1 * D);
    translate += liWidth * D;
    slider.style.transform = `translateX(${translate}px)`;
    slider.style.transition = `all ${speedTime}ms ease`
  }

  /* 클릭 버튼 */
  function moveSlide(event) {
    event.preventDefault();
    if (event.target.className === 'next') {
      move(-1);
      if (currentIdx === sliderCloneLis.length -1)
        setTimeout(() => {
          slider.style.transition = 'none';
          currentIdx = 1;
          translate = -liWidth;
          slider.style.transform = `translateX(${translate}px)`;
        }, speedTime);
    } else {
        move(1);
        if (currentIdx === 0) {
          setTimeout(() => {
            slider.style.transition = 'none';
            currentIdx = sliderCloneLis.length -2;
            translate = -(liWidth * currentIdx);
            slider.style.transform = `translateX(${translate}px)`;
          }, speedTime);
        }
      }
  }
}
