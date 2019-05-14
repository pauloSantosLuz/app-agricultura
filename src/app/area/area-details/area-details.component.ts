import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import WKT from 'ol/format/WKT.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import { AreaService } from '../area.service';
import { Area } from '../area.model';
import { Solo } from '../solo.model';
import { makeParamDecorator } from '@angular/core/src/util/decorators';


@Component({
  selector: 'app-area-details',
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.css']
})
export class AreaDetailsComponent implements OnInit {

  constructor(private areaService: AreaService,private activateRoute:ActivatedRoute) { }
id;
desc;
geometria;
solos;
coordenadas;
  ngOnInit() {
    this.id =this.activateRoute.snapshot.params['id'];
    this.desc=this.activateRoute.snapshot.params['description'];
    this.geometria=this.activateRoute.snapshot.params['geometria'];
    this.solos=this.activateRoute.snapshot.params['soloID'];
    console.log(this.solos);
    this.getSolo(this.solos);
    this.coordenadas = this.geometria.substr(10);
    
    this.mapa(this.coordenadas);
  }

solo: Solo;

  getSolo(id: string){
    this.areaService.getSoloByID(id).subscribe(
      (data: Solo) =>{
        this.solo=data;
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  

  mapa(wkt){
    var raster = new TileLayer({
      source: new OSM()
    });
   

    var format = new WKT();

    var feature = format.readFeature(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857'
    });

    var vector = new VectorLayer({
      source: new VectorSource({
        features: [feature]
      })
     
    });
    var view = new View({
      center: [0, 0],
      zoom: 1
    });

    view.fit(feature.getGeometry(), {padding: [170, 50, 30, 150], minResolution: 20});
    var map = new Map({
      layers: [raster, vector],
      target: 'map',
      view: view
      
    });
  }

}
declare var ol: any;