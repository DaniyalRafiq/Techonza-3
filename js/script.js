$(document).ready(function () {
    $(".search-icon").click(function (e) {
        $(this).children('.fa').toggleClass('fa-minus').toggleClass('fa-search');
        $('.header-form').toggleClass("active");
        $('.header-form').children('input').focus()
    });
})