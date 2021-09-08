
/**
 * @JavasCript: main.js
 * @Name: Martin Coutinho
 * @Description:
 * Used for main-site, lettering, navbar fixed, hamburger menu, animated numbers and countdown.
 */


$(function () {

  //Variables
  var animNumbersLoaded = false; //To check if the animated numbers are already loaded, to not load them again.

  //Lettering
  $('.nombre-sitio').lettering();
  //Programa conferencia
  $('.info-curso.ocultar:first').show();
  $('.menu-programa a').on('click', function () {

    var enlacePresionado = $(this);
    var enlace = $(this).attr('href');

    $('.menu-programa a').removeClass('activo');
    $('.ocultar').hide();
    $(enlacePresionado).addClass('activo');
    $(enlace).fadeIn(1000);

    return false;
  })

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

  //Menu Hamburguesa
  $('.mobile-menu').on('click', function () {
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


  

  //Numeros animados

  var resumenEvento = jQuery('.resumen-evento');
  //If we reach the section
  if (resumenEvento.length > 0) {
    $('.resumen-evento').waypoint(function () {
      $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1200);
      $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 1500);
      $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1200);
      $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 1500);
      this.destroy();
    }, {
      offset: '60%'
    })
  }

  //Cuenta regresiva
  $('.cuenta-regresiva').countdown('2021/12/23 14:00:00', function (event) {
    $('#dias').html(event.strftime('%D'));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));
  })
})

var navbar = $('.navbar');

$(window).resize(function () {
  if (window.innerWidth <= 994) navbar.addClass('hidden');
  else navbar.removeClass('hiden');
});