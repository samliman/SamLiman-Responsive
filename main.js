// if (typeof jQuery == 'undefined') {
//     console.log('oops! I still have to link my jQuery properly!');
// } else { console.log('I did it! I linked jQuery and this js file!') };

$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate( keyframes, {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, options, 2000);
    });

    $('#up').on('click', function () {
        $('#up').animate( keyframes, {
            scrollTop: 0
        }, options, 2000);
    });
});