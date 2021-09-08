$(function () {

    //Menu Hamburguesa
    $('.mobile-menu').on('click', function () {

        //Navbar fixed
        var windowsHeight = $(window).height();
        var navbarHeight = $('.site-nav').innerHeight();

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > windowsHeight) {
                $('.site-nav').addClass('fixed');
                $('body').css("padding-top", navbarHeight + 'px');
            } else {
                $('.site-nav').removeClass('fixed');
                $('body').css("padding-top", '0px');
            }
        })

        //Hamburger Menu
        var navbar = $(".navbar");
        var show = $(".navbar").hasClass('hidden');
        if (show) {
            navbar.hide();
            navbar.removeClass('hidden')
            navbar.slideDown('slow');
        }
        else {
            navbar.slideUp('slow', function () {
                navbar.addClass('hidden');
                navbar.show();
            });
        }
    })
})


var navbar = $('.navbar');

$(window).resize(function () {
    if (window.innerWidth <= 994) navbar.addClass('hidden');
    else navbar.removeClass('hidden');
});