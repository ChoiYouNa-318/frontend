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
var overlay = document.getElementById('overlay');
var nav_1 = document.getElementById('nav_1');
var navbar_1 = document.getElementById('navbar_1');

nav_1.addEventListener('mouseover', function (){
  navbar_1.classList.remove('hidden');
  navbar_2.classList.add('hidden');
  navbar_3.classList.add('hidden');
  navbar_4.classList.add('hidden');
  navbar_5.classList.add('hidden');
  overlay.classList.remove('hidden');
})

navbar_1.addEventListener('mouseleave', function (){
   navbar_1.classList.add('hidden');
   overlay.classList.add('hidden');
})

//학사마당
var nav_2 = document.getElementById('nav_2');
var navbar_2 = document.getElementById('navbar_2');

nav_2.addEventListener('mouseover', function (){
  navbar_2.classList.remove('hidden');
  navbar_1.classList.add('hidden');
  navbar_3.classList.add('hidden');
  navbar_4.classList.add('hidden');
  navbar_5.classList.add('hidden');
  overlay.classList.remove('hidden');
})

navbar_2.addEventListener('mouseleave', function (){
  navbar_2.classList.add('hidden');
  overlay.classList.add('hidden');
})

//e-상담센터
var nav_3 = document.getElementById('nav_3');
var navbar_3 = document.getElementById('navbar_3');

nav_3.addEventListener('mouseover', function (){
  navbar_3.classList.remove('hidden');
  navbar_1.classList.add('hidden');
  navbar_2.classList.add('hidden');
  navbar_4.classList.add('hidden');
  navbar_5.classList.add('hidden');
  overlay.classList.remove('hidden');
})

navbar_3.addEventListener('mouseleave', function (){
  navbar_3.classList.add('hidden');
  overlay.classList.add('hidden');
})

//학부모마당
var nav_4 = document.getElementById('nav_4');
var navbar_4 = document.getElementById('navbar_4');

nav_4.addEventListener('mouseover', function (){
  navbar_4.classList.remove('hidden');
  navbar_1.classList.add('hidden');
  navbar_2.classList.add('hidden');
  navbar_3.classList.add('hidden');
  navbar_5.classList.add('hidden');
  overlay.classList.remove('hidden');
})

navbar_4.addEventListener('mouseleave', function (){
  navbar_4.classList.add('hidden');
  overlay.classList.add('hidden');
})

//주요사이트
var nav_5 = document.getElementById('nav_5');
var navbar_5 = document.getElementById('navbar_5');

nav_5.addEventListener('mouseover', function (){
  navbar_5.classList.remove('hidden');
  navbar_1.classList.add('hidden');
  navbar_2.classList.add('hidden');
  navbar_3.classList.add('hidden');
  navbar_4.classList.add('hidden');
  overlay.classList.remove('hidden');
})

navbar_5.addEventListener('mouseleave', function (){
  navbar_5.classList.add('hidden');
  overlay.classList.add('hidden');
})


//슬라이드 
//학교소개
var container = document.getElementById('container');
var images = document.getElementsByClassName("image");
// console.log(`이동량 : ${imageWidth}`);
// buttons
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var imageWidth = images[0].clientWidth;

// index and left
var index = 0;
var firstIndex = 0;
var lastIndex = images.length - 1;
var left = 0;

window.addEventListener("resize", function () {
  imageWidth = images[0].clientWidth;
  console.log(`너비: ${imageWidth}`)
  if(index !== firstIndex){
     if (imageWidth++){
       console.log("1증가")
       container.style.transform = `translateX(${-((imageWidth*index)+1)}px)`;
    }
   }
})

function turnOver(data) {
  index += data;

  // 컨테이너의 이동량
  left = -(index * imageWidth);

  console.log(`이동량 : ${left}`)
  // 실시간으로 업데이트해야하는 스타일의 경우 style 애트리뷰트를 사용할 수 있다
  container.style.transform = `translateX(${left}px)`;

  // 이전 버튼
  if (index === firstIndex) { // 첫번째 사진인 경우
    prev.classList.add('hidden');
  } else { // 나머지 사진
    prev.classList.remove('hidden');
  }

  // 다음 버튼
  if (index === lastIndex) { // 마지막 사진인 경우
    next.classList.add('hidden');
  } else { // 나머지 사진
    next.classList.remove('hidden');
  }
}

//뉴스
var News_container = document.getElementById('News_container');
var n_images = document.getElementsByClassName("n_image");
var News_prev = document.getElementById('News_prev');
var News_next = document.getElementById('News_next');
var n_imageWidth = n_images[0].clientWidth;

// index and left
var n_index = 0;
var n_firstIndex = 0;
var n_lastIndex = n_images.length - 1;
var n_left = 0;

window.addEventListener("resize", function () {
  n_imageWidth = n_images[0].clientWidth;
  if(n_index !== n_firstIndex){
     if (n_imageWidth++){
       container.style.transform = `translateX(${-((n_imageWidth*index)+1)}px)`;
    }
   }
})

function n_turnOver(data) {
  n_index += data;
  n_left = -(n_index * n_imageWidth);
  News_container.style.transform = `translateX(${n_left}px)`;

  // 이전 버튼
  if (n_index === n_firstIndex) { // 첫번째 사진인 경우
    News_prev.classList.add('hidden');
  } else { // 나머지 사진
    News_prev.classList.remove('hidden');
  }

  // 다음 버튼
  if (n_index === n_lastIndex) { // 마지막 사진인 경우
    News_next.classList.add('hidden');
  } else { // 나머지 사진
    News_next.classList.remove('hidden');
  }
}


    //더보기
    // 입시정보
      var contents = document.getElementsByClassName("content");
      var openlen = contents.length - 5;
      var closelen = contents.length - 5;
      var viewOpenBtn = document.getElementById("viewOpenBtn");
      var viewCloseBtn = document.getElementById("viewCloseBtn");

      viewOpenBtn.addEventListener("click", function () {
        if(openlen/5 > 1){
          for(var i=5;i<10;i++){
            contents[i].classList.remove("hidden");
          }
          openlen-=5;
        }
        else{
          for(var i=5;i<contents.length;i++){
            contents[i].classList.remove("hidden");
          }
          viewOpenBtn.classList.add("hidden");
          viewCloseBtn.classList.remove("hidden");
          openlen = contents.length - 5;
          }
      })

      viewCloseBtn.addEventListener("click", function () {
          for(var i=contents.length-1;i>=5;i--){
            contents[i].classList.add("hidden");
        }

          viewOpenBtn.classList.remove("hidden");
          viewCloseBtn.classList.add("hidden");
          // closelen = contents.length - 5;
      })

    //생략
     var ellipis = document.getElementsByClassName("ellipis");
    
     for(var i=0; i<ellipis.length; i++){
       var content = ellipis[i].textContent;
       if(content.length > 20){
         ellipis[i].textContent = content.substring(0, 20) + "...";
       }
       else{
        ellipis[i].textContent = content.substring(0, 20);
       }
     }


     //전화번호 찾기
    var input_s = document.getElementById('input_s');
    var items = document.getElementsByClassName('item');

    //서울
    var s_search = document.getElementById('s_search'); 

    s_search.addEventListener("click",function(){
      var q = input_s.value;
      for (var i=0; i<items.length; i++) {
        var itemName = items[i].textContent;
            
        // 검색어와 각각의 이름을 비교한다

        // 이름이 검색어를 포함하는 경우
        if (itemName.indexOf(q) > -1) {
          items[i].classList.remove("hidden")
        } else{
          items[i].classList.add("hidden")
        }
     }
  })

  //다빈치
  var input_d = document.getElementById('input_d');
  var items = document.getElementsByClassName('item');
  var d_search = document.getElementById('d_search'); 

  d_search.addEventListener("click",function(){
    var q = input_d.value;
    for (var i=0; i<items.length; i++) {
      var itemName = items[i].textContent;
          
      // 검색어와 각각의 이름을 비교한다

      // 이름이 검색어를 포함하는 경우
      if (itemName.indexOf(q) > -1) {
        items[i].classList.remove("hidden")
      } else{
        items[i].classList.add("hidden")
      }
   }
})

//식단표 날짜
//서울
var today = new Date(); 
var year = today.getFullYear(); // 년
var month = today.getMonth();   // 월
var day = today.getDate();      // 일

var s_menu_date_prev = document.getElementById('s_menu_date_prev');
var s_menu_date_next = document.getElementById('s_menu_date_next');

var date = document.getElementById("date");
date.textContent = today.toLocaleDateString(); 

  s_menu_date_prev.addEventListener("click",function(){
    day = day-1;
    today = new Date(year, month, day).toLocaleDateString();
    date.textContent = today;
  })

  s_menu_date_next.addEventListener("click",function(){
    day = day+1;
    today = new Date(year, month, day).toLocaleDateString();
    date.textContent = today;
  })



  //다빈치
var today = new Date(); 
var year = today.getFullYear(); // 년
var month = today.getMonth();   // 월
var day = today.getDate();      // 일

var d_menu_date_prev = document.getElementById('d_menu_date_prev');
var d_menu_date_next = document.getElementById('d_menu_date_next');

var d_date = document.getElementById("d_date");
d_date.textContent = today.toLocaleDateString(); 

d_menu_date_prev.addEventListener("click",function(){
  day = day-1;
  today = new Date(year, month, day).toLocaleDateString();
  d_date.textContent = today;
})

d_menu_date_next.addEventListener("click",function(){
  day = day+1;
  today = new Date(year, month, day).toLocaleDateString();
  d_date.textContent = today;
})
