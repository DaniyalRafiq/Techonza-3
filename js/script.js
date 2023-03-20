$(document).ready(function () {
    $(".search-icon").click(function (e) {
        $(this).children('.fa').toggleClass('fa-times').toggleClass('fa-search');
        $('.header-form').toggleClass("active");
        $('.header-form').children('input').focus()
        $('.search-icon').toggleClass("active");
    });

    $('.menu, .menu-close').click(function () {
        $(".menu, .menu-close").toggleClass("active");
        $('.mobile_menu').toggleClass("active");
       
        $('body').toggleClass("active");

        $('.menu').click(function() {
            $('body').addClass('glass-effect');
          });
          
          $('.mobile-menu-close-button').click(function() {
            $('body').removeClass('glass-effect');
          });
     })

    //  swiper //
    
  var swiper = new Swiper(".hero_slider", {
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    speed:500,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      } , 
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      breakpoints: {
        // When window width is >= 768px

        // When window width is >= 992px
        992: {
          slidesPerView: 1,
        }
      }
  });

//   var swiper = new Swiper(".hero_slider", {
//     pagination: {
//       el: ".swiper-pagination",
//       dynamicBullets: true,
//     }
//   });

"use strict";
// class Dev {
//     constructor() {
//         this.getDay();
//         this.getMonth();
//     }
//     getDay() {
//         var date = new Date();
//         $('.date .num').each((i, element) => {
//             $(element).text(date.getDate());
//         });
//     }
//     getMonth() {
//         var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//         var d = new Date();
//         $('.date .month').each((i, element) => {
//             $(element).text(month[d.getMonth()]);
//         });
//     }
// }
// new Dev();

})