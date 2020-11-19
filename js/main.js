
$(function(){

  //Programa conferencia
  $('.info-curso.ocultar:first').show();
  $('.menu-programa a').on('click',function(){

    var enlacePresionado = $(this);
    var enlace = $(this).attr('href');

    $('.menu-programa a').removeClass('activo');
    $('.ocultar').hide();
    $(enlacePresionado).addClass('activo');
    $(enlace).fadeIn(1000);

    return false;
  })


  $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200);
  $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1500);
  $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1200);
  $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1500);
})
