$(document).ready(function () {
    $('.l-header-bars').click(function (e) {
        e.preventDefault();
        $('.l-header-bars i').toggleClass('far fa-times');
        $('.l-header-nav').toggleClass('active');
    })
})
