$(document).ready(function () {

    $(window).scroll(function () {

        if ($(window).scrollTop() > 970) {
            $('.navbar').addClass('navbar-fixed-top');
        } else if($(window).scrollTop() < 971) {
            $('.navbar').removeClass('navbar-fixed-top');
        }

    });//end window
}); //end ready()

$(".navbar-dark ul li a[href^='#']").on('click', function (e) {
    e.preventDefault();

    var hash = this.hash;

    $("html, body").animate({
        scrollTop: $(hash).offset().top},
        400,
        function () {
            window.location.hash = hash;
        }
    ); // end animate()
}); // end on('click')

$("#section-parallax .col-sm-12 a[href^='#']").on('click', function (e) {
    e.preventDefault();

    var hash = this.hash;

    $("html, body").animate({
            scrollTop: $(hash).offset().top},
        400,
        function () {
            window.location.hash = hash;
        }
    ); // end animate()
}); // end on('click')

$(".footer .scroll-to-top-button a[href^='#']").on('click', function (e) {
    e.preventDefault();

    var hash = this.hash;

    $("html, body").animate({
            scrollTop: $(hash).offset().top},
        400,
        function () {
            window.location.hash = hash;
        }
    ); // end animate()
}); // end on('click')