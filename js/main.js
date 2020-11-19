
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



})
