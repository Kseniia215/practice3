document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
})


// window.addEventListener("DOMContentLoaded", function(){
//     "use strict";
// });
// let tab = document.querySelectorAll(".block_one_info-header-tab"),
//     info = document.querySelector(".block_one_info-header"),
//     tabContent = document.querySelectorAll(".block_one_info-tabcontent");

// function hideTabContent(a) {
//     for (let i = a; i < tabContent.length; i++) {
//         tabContent[i].classList.remove("show");
//         tabContent[i].classList.add("hide");
//     }
// }
// hideTabContent(0);

// function ShowTabContent(b) {
//     if (tabContent[b].classList.contains("hide")){
//         tabContent[b].classList.remove("hide");
//         tabContent[b].classList.add("show");
//     }
// }

// info.addEventListener('click', function(event){
//     let target = event.target;

//     if (target && target.classList.contains("block_one_info-header-tab")){
//         for (let i = 0; i < tab.length; i++){
//             if (target == tab[i]){
//                 hideTabContent(0);
//                 tab.forEach(item => {
//                 item.classList.remove('active');
//                 });
//                 target.classList.add('active');
//                 ShowTabContent(i);
//                 break
//             }
//         }
//     }
// })

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("block_one_tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("block_one_tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

 
// var track = document.querySelector('.block_two_slide-track');
// var slides = Array.from(track.children);
// var nextButton = document.querySelector('.block_two_slider .next');
// var prevButton = document.querySelector('.block_two_slider .prev');

// var slideWidth = slides[0].getBoundingClientRect().width;

// // Устанавливаем начальное положение слайдов
// slides.forEach((slide, index) => {
//   slide.style.left = slideWidth * index + 'px';
// });

// nextButton.addEventListener('click', e => {
//   var currentSlide = track.querySelector('.current-slide');
//   var nextSlide = currentSlide.nextElementSibling;

//   // Перемещаем слайд
//   track.style.transform = 'translateX(-' + nextSlide.style.left + ')';
//   currentSlide.classList.remove('current-slide');
//   nextSlide.classList.add('current-slide');
// });

// prevButton.addEventListener('click', e => {
//   var currentSlide = track.querySelector('.current-slide');
//   var prevSlide = currentSlide.previousElementSibling;

//   // Перемещаем слайд
//   track.style.transform = 'translateX(-' + prevSlide.style.left + ')';
//   currentSlide.classList.remove('current-slide');
//   prevSlide.classList.add('current-slide');
// });


// JavaScript
var track = document.querySelector('.block_two_slide-track');
var slides = Array.from(track.children);
var nextButton = document.querySelector('.block_two_slider .next');
var prevButton = document.querySelector('.block_two_slider .prev');

var slideWidth = slides[0].getBoundingClientRect().width;

// Устанавливаем начальное положение слайдов
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
});

nextButton.addEventListener('click', e => {
  var currentSlide = track.querySelector('.current-slide');
  var nextSlide = currentSlide.nextElementSibling || slides[0];

  moveSlide(track, currentSlide, nextSlide);
});

prevButton.addEventListener('click', e => {
  var currentSlide = track.querySelector('.current-slide');
  var prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];

  moveSlide(track, currentSlide, prevSlide);
});

function moveSlide(track, currentSlide, targetSlide) {
  var moveAmount = targetSlide.style.left;
  track.style.transform = 'translateX(-' + moveAmount + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}




let accordion = function() {
  const btns = document.querySelectorAll(".accordion-head");
  btns.forEach((btn) => {
      btn.addEventListener("click", function () {
          this.classList.toggle("active-style");
          //Следующий элемент
          this.nextElementSibling.classList.toggle("active-content");
          if (this.classList.contains("active-style")) {
              this.nextElementSibling.style.maxHeight =
                  this.nextElementSibling.scrollHeight + 50 + "px";
          } else {
              this.nextElementSibling.style.maxHeight = "0px";
          }
      });
  });
};
accordion();



function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("block_four_tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("block_four_tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


const modal = document.getElementById("modal");
 const btn = document.getElementById("open-modal__btn");
 const closeBtn = document.querySelector(".modal__close");

 btn.addEventListener("click", function () {
  modal.classList.add("modal_active");

  closeBtn.addEventListener("click", closeModal);

  function closeModal() {
   modal.classList.remove("modal_active");

   closeBtn.removeEventListener("click", closeModal);

   modal.removeEventListener("click", hideModal);
  }

  modal.addEventListener("click", hideModal);

  //Закрытие при клике вне зоны модального окна
  function hideModal(event) {
   if (event.target === modal) {
    closeModal();
   }
  }
 });