
(function () {
  "use strict";

  //Variables globales.
  var regalo = document.getElementById('regalo');

  //DocumentContentLoaded
  document.addEventListener('DOMContentLoaded', function () {

    //Campos Datos Usuario
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    //Campos pases
    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');

    //Botones y divs
    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var botonRegistro = document.getElementById('btnRegistro');
    var lista_productos = document.getElementById('lista-productos');
    var suma = document.getElementById('suma-total');

    //Navbar
    $('.mobile-menu').on('click', function(){

      $('.navbar').slideDown();
      $('.navbar').show();
    })

    //Extras
    var etiquetas = document.getElementById('etiquetas');
    var camisas = document.getElementById('camisa_evento');


    $(calcular).on('click', calcularMontos);

    //dias/pases
    pase_dia.addEventListener('blur', mostrarDias);
    pase_dosdias.addEventListener('blur', mostrarDias);
    pase_completo.addEventListener('blur', mostrarDias);
    //validar campos
    nombre.addEventListener('blur', validarCampos);
    apellido.addEventListener('blur', validarCampos);
    email.addEventListener('blur', validarCampos);
    email.addEventListener('blur', validarEmail);


    /**
     * Funcion validar campos
     * */
    function validarCampos() {
      if (this.value == '') {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "este campo es obligatorio";
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
      } else {
        errorDiv.style.display = "none";
        this.style.border = '1px solid #cccccc';
      }
    }//Fin validar campos

    function validarEmail() {
      //verifica si hay un @ arroba
      if (this.value.indexOf("@") > -1) {
        errorDiv.style.display = "none";
        this.style.border = '1px solid #cccccc';
      } else {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "debe tener al menos una @";
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
      }
    }

    /**
     * Funcion para calcular el Monto final
     * */
    function calcularMontos(event) {
      event.preventDefault();

      //Calcular si hay regalo
      if (regalo.value === '') {
        alert("Debes elegir un regalo");
        regalo.focus();
      } else {
        //variables: boletos, camisas y etiquetas
        var boletosDia = pase_dia.value,
          boletos2Dias = pase_dosdias.value,
          boletoCompleto = pase_completo.value,
          cantCamisas = camisas.value,
          cantEtiquetas = etiquetas.value;

        //Suma gastos con porcentaje de descuento
        var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) +
          (boletoCompleto * 50) + ((cantCamisas * 10) * .93) +
          (cantEtiquetas * 2);

        //Array listado de productos
        var listadoProductos = [];

        //Mas de 1
        if (boletosDia > 0) {
          listadoProductos.push(boletosDia + ' Pases por Día');
        }
        if (boletos2Dias > 0) {
          listadoProductos.push(boletos2Dias + ' Pases por 2 Días');
        }

        if (boletoCompleto > 0) {
          listadoProductos.push(boletoCompleto + ' Pases Completo');
        }
        if (cantCamisas > 0) {
          listadoProductos.push(cantCamisas + ' Camisas');
        }
        if (cantEtiquetas > 0) {
          listadoProductos.push(cantEtiquetas + ' Etiquetas');
        }

        lista_productos.style.display = "block"

        //Limpiar lista
        lista_productos.innerHTML = '';
        //Listado productos a comprar
        for (var i = 0; i < listadoProductos.length; i++) {
          lista_productos.innerHTML += listadoProductos[i] + '<br/>';
        }

        //Suma total en la pagina
        suma.innerHTML = "$" + totalPagar.toFixed(2);

      }
    }//Fin calcularMonto

    /**
     * Mostrar dias
     *
     * */
    function mostrarDias() {
      var boletosDia = pase_dia.value,
        boletos2Dias = pase_dosdias.value,
        boletoCompleto = pase_completo.value;

      var diasElegidos = [];

      if (boletosDia > 0) {
        diasElegidos.push('viernes');
      }
      if (boletos2Dias > 0) {
        diasElegidos.push('viernes', 'sabado');
      }

      if (boletoCompleto > 0) {
        diasElegidos.push('viernes', 'sabado', 'domingo');
      }

      //Mostrar
      for (var i = 0; i < diasElegidos.length; i++) {
        document.getElementById(diasElegidos[i]).style.display = "block";
      }
    }//Fin mostrar dia

  }); //DOM CONTENT LOADED
})();
