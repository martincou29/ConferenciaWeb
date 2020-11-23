
$(function () {
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

  //Menu Hamburguesa
  $('.mobile-menu').on('click',function(){
    // $('.navbar').css({'display': 'block'});
    $('.navbar').slideToggle();
  })

  //Numeros animados
  $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1200);
  $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 1500);
  $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1200);
  $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 1500);

  //Cuenta regresiva
  $('.cuenta-regresiva').countdown('2020/12/10 09:00:00', function (event) {
    $('#dias').html(event.strftime('%D'));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));


  })

})
