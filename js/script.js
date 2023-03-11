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
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed:500,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      } , 
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    
  });

//   var swiper = new Swiper(".hero_slider", {
//     pagination: {
//       el: ".swiper-pagination",
//       dynamicBullets: true,
//     }
//   });

})