$(document).ready(function () {

    $(window).scroll(function () {

        if ($(window).scrollTop() > 970) {
            $('.navbar').addClass('navbar-fixed-top');
        } else if($(window).scrollTop() < 971) {
            $('.navbar').removeClass('navbar-fixed-top');
        }

    });//end window
}); //end ready()

$("#cover a[href^='#']").on('click', function (e) {
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

$('.js-wp-1').waypoint(function (direction) {
    $('.js-wp-1').addClass('animated fadeInDown');
    },
    {
       offset: '50%'
    }
); // end waypoint()

$('.js-wp-2').waypoint(function (direction) {
    $('.js-wp-2').addClass('animated fadeInLeft');
    },
    {
       offset: '50%'
    }
); // end waypoint()

$('.js-wp-3').waypoint(function (direction) {
    $('.js-wp-3').addClass('animated fadeInRight');
    },
    {
       offset: '50%'
    }
); // end waypoint()

$('.js-wp-4').waypoint(function (direction) {
        $('.js-wp-4').addClass('animated fadeInUp');
    },
    {
        offset: '50%'
    }
); // end waypoint()