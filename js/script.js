$(document).ready(function () {
    $(".search-icon").click(function (e) {
        $(this).children('.fa').toggleClass('fa-times').toggleClass('fa-search');
        $('.header-form').toggleClass("active");
        $('.header-form').children('input').focus()
        $('.search-icon').toggleClass("active");
    });

    $('.menu, menu_close').click(function () {
        $(".menu").toggleClass("active");
        $('.mobile_menu').toggleClass("active");
        $(this).children('.fa').toggleClass('fa-bars').toggleClass('fa-times');
     })

})