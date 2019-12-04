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
    let mapProp = {
      center: new google.maps.LatLng(2.92504, -75.2897),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
}
