$(function(){
  //Mapa
  "use strict";

  var map = L.map('mapa').setView([-27.475956, -58.831277], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([-27.475956, -58.831277]).addTo(map)
    .bindTooltip('GDLWEBCamp 2018')
    .openTooltip();


    console.log(map.getPanes());


    //Index del mapa 1, debajo de la barra de navegacion
    map.getPane('mapPane').style.zIndex = 1;
    map.getPane('popupPane').style.zIndex = 1;
    $('.leaflet-top').css("z-index", 1);
    $('.leaflet-bottom').css("z-index", 1);

})
