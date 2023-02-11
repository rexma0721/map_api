import { Component, ViewChild } from '@angular/core';

// import { MapsTheme, Maps, Marker, MapsTooltip, ILoadEventArgs, Zoom } from '@syncfusion/ej2-angular-maps';

import data from '../json/data.json' ;
import { getName, getCode } from 'country-list';
import { MapTypeStyle } from '@agm/core';
// import { endpointsMap } from './marker-location';

// Maps.Inject(Marker, MapsTooltip, Zoom);
// declare var require: any;
// let worlMap: object[] = require('../json/world-map.json');
// let population: object[] = require('../json/sales-map.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'map_api';

  points : Array<any> = [] ;

  zoom: number = 1;
  current_opened_index : number = -1 ;

  // isShowDataInfo : boolean = false ;
  current_info : any ;

  // initial center position for the map
  ct_lat: number = 0;
  ct_lng: number = 0;

  endpoints_arr : Array<any> = [];

  Styles : MapTypeStyle[] = [] ;

  JSON_MAP_STYLES = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4073a3"
        }
      ]
    },
    {
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "weight": 8
        }
      ]
    }
  ]

  // @ViewChild('maps')
  // public maps!: Maps;
  // // custom code start
  // public load = (args: ILoadEventArgs) => {
  //   let theme: string = location.hash.split('/')[1];
  //   theme = theme ? theme : 'Material';
  //   if(args.maps) args.maps.theme = <MapsTheme>(theme.charAt(0).toUpperCase() +
  //   theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
  // }
  // // custom code end
  // public zoomSettings: object = {
  //   enable: true,
  //   mouseWheelZoom: false,
  //   pinchZooming: false
  // };
  // // public titleSettings: object = {
  // //   text: 'Sales details of products in various countries',
  // //   titleStyle: { size: '16px' }
  // // };
  // public layers: object[] = [{
  //   shapeData: worlMap,
  //   dataSource: population,
  //   shapeSettings: {
  //     fill: '#4073a3'
  //   },
  //   // markerClusterSettings: {
  //   //     allowClustering: true,
  //   //     allowClusterExpand: true,
  //   //     shape: 'Image',
  //   //     height: 24,
  //   //     width: 24,
  //   //     labelStyle: { color: 'white' },
  //   //     imageUrl: './assets/images/map-marker-enable.png'
  //   // },
  //   markerSettings: [{
  //     dataSource: this.endpoints_arr,
  //     visible: true,
  //     animationDuration: 0,
  //     height: 15,
  //     width: 15,
  //     shape: 'Image',
  //     imageUrl: './assets/images/map-marker-enable.png',
  //     tooltipSettings: {
  //       format: '<div><img src="${flag_path}" />${country_name}<br>${ISP}<br></div>',
  //       visible: true,
  //       valuePath: 'name',
  //     }
  //   }]
  // }];
  // // custom code start

  isOpened(index : number) {
    if(index === this.current_opened_index) return true;
    return false;
  }

  showEndpointInfo(data: any) {
    this.current_info = data;
    // this.isShowDataInfo = true ;

    console.log(data);
    return ;
  }

  clickedMarker(label: string, index: number) {
    this.current_opened_index = index;
  }

  getCountryName(code : string) {
    return getName(code) ;
  }

  constructor() {
    this.points = data;
    this.JSON_MAP_STYLES.forEach((style:any) => {
      this.Styles.push(style);
    })
    // if(Array.isArray(endpointsMap)) {
    //   endpointsMap.map((item) => {
    //     this.endpoints_arr.push({
    //       ...item,
    //       country_name : this.getCountryName(item.country_code),
    //       flag_path : `http://purecatamphetamine.github.io/country-flag-icons/3x2/${item.country_code}.svg`
    //     })
    //   })
    //   console.log('dfdf');
    // }
  }

  ngInit() {
  }
}
