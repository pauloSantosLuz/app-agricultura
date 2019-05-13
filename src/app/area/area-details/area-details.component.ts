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


@Component({
  selector: 'app-area-details',
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.css']
})
export class AreaDetailsComponent implements OnInit {

  constructor(private areaService: AreaService,private activateRoute:ActivatedRoute) { }
id;
  ngOnInit() {
    this.id =this.activateRoute.snapshot.params['id'];
    this.getAREA();
    
    
  }

solo: Solo;
  area: Area;
  getSolo(id: string){
    this.areaService.getSolo(id).subscribe(
      (data: Solo) =>{
        this.solo=data;
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  getAREA(){
    this.areaService.getArea(this.id).subscribe(
      (data: Area) =>{
        this.area=data;
        this.mapa(this.area.geometry.substr(10));
        console.log(this.area.soil.id);
        this.getSolo(this.area.soil.id);
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

    view.fit(feature.getGeometry(), {padding: [170, 50, 30, 150], minResolution: 50});
    var map = new Map({
      layers: [raster, vector],
      target: 'map',
      view: view
      
    });
  }

}
declare var ol: any;