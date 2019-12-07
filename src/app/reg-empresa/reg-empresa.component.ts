/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reg-empresa',
  templateUrl: './reg-empresa.component.html',
  styleUrls: ['./reg-empresa.component.css']
})
export class RegEmpresaComponent implements OnInit {

  constructor() {}

  @ViewChild('gmap', {static: true}) gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    this.obtenerUbicacion();
  }

  obtenerUbicacion() {
    let coords = {};
    navigator.geolocation.getCurrentPosition(
      (position) => {
        coords = {
          lng: position.coords.longitude,
          lat: position.coords.latitude
        };
        this.mapear(coords);
      }, (error) => {console.log(error); });
  }

  mapear(coords) {
    let map = {
          center: new google.maps.LatLng(coords.lat, coords.lng),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, map);
    // agrego marcador en la posicion del usuario
    let marker1 = new google.maps.Marker({
      position: {lat: coords.lat, lng: coords.lng},
      draggable: true,
      animation: google.maps.Animation.DROP
      });
    // Le asignamos el mapa a los marcadores.
    marker1.setMap(this.map);
    marker1.addListener('dragend', (event) => {
      console.log(marker1.getPosition().lat() + ' longitud = ' + marker1.getPosition().lng());
    });
  }
}
