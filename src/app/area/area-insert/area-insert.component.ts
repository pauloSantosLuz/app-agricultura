import { Component, OnInit } from '@angular/core';
import { Solo } from '../solo.model';
import { AreaService } from '../area.service';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import WKT from 'ol/format/WKT.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style.js';
import { OSM, Vector as VectorSource } from 'ol/source.js';

import BingMaps from 'ol/source/BingMaps.js';
import { ZoomSlider } from 'ol/control.js';
import MousePosition from 'ol/control/MousePosition.js';
import { createStringXY } from 'ol/coordinate.js';
import { defaults as defaultControls } from 'ol/control.js';
import { transform } from 'ol/proj';
import Draw from 'ol/interaction/Draw.js';

@Component({
  selector: 'app-area-insert',
  templateUrl: './area-insert.component.html',
  styleUrls: ['./area-insert.component.css']
})


export class AreaInsertComponent implements OnInit {

  constructor(private areaService: AreaService, private formBuilder: FormBuilder, private router: Router) { }
  ownerForm: FormGroup;
  message;

  ngOnInit() {
    this.getSolo();
    this.ownerForm = this.formBuilder.group({
      descricao: new FormControl('', [Validators.required]),

      solo: new FormControl('', [Validators.required])
    });

    this.mapa();
  }
  solo: Solo[];

  getSolo() {
    this.areaService.getSoloAll().subscribe(
      (data: Solo[]) => {

        this.solo = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
  get f() {
    return this.ownerForm.controls;
  }

  add() {
    console.log(this.f.descricao.value + this.f.solo.value)
    var coordenadas = (<HTMLInputElement>document.getElementById("coordenada")).value;
    if (coordenadas == "") {
      alert("Selecione os pontos da area!!!!");
    } else {

      this.areaService.insertArea(this.f.descricao.value, "SRID=4326;MULTIPOLYGON(((" + coordenadas + ")))"
        , this.f.solo.value).subscribe(() => {
          alert("Area cadastrada!");
          // redireciona a view
          this.router.navigate(['/area/list']);
        },
          (error) => {
            this.message = error;
          }
        );
    }
  }
  limpaMapa() {
    document.getElementById("map").innerHTML = "";
    (<HTMLInputElement>document.getElementById("coordenada")).value = "";
    this.mapa();
  }

  mapa() {

    var format = new WKT();

    var feature = format.readFeature("MULTIPOLYGON((( -47.9292 -15.7801 )))", {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857'
    });

    //mouse controle
    var mousePositionControl = new MousePosition({
      coordinateFormat: createStringXY(14),
      projection: 'EPSG:4326',
      // comment the following two lines to have the mouse position
      // be placed within the map.
      className: 'custom-mouse-position',
      target: document.getElementById('mousePos'),
      undefinedHTML: '&nbsp;'
    });
    //Chama mapa Bing
    var raster = new TileLayer({
      source: new BingMaps({
        imagerySet: 'AerialWithLabels',
        key: 'AiFl58LN-AEl9p55F1fEXD3nZx8EydZjJUqWL9-eeq4aLxgIdIF13rjAxD9ARpZE'
      })
    });
    var styles = {
      "Polygon": new Style({
        fill: new Fill({
          color: 'rgba(255,165,0, 0.2)'
        }),
        stroke: new Stroke({
          color: 'orange',
          width: 2
        })
      })
    }
    var styleFunction = function (feature) {
      return styles[feature.getGeometry().getType()];
    };
    var vectorSource = new VectorSource({});
    var vector = new VectorLayer({
      source: vectorSource,
      style: styleFunction
    });
    var view = new View({
      center: [0, 0],
      zoom: 1
    });

    view.fit(feature.getGeometry(), { padding: [170, 50, 30, 150], minResolution: 50 });
    var map = new Map({
      controls: defaultControls().extend([mousePositionControl]),
      layers: [raster, vector],
      target: 'map',
      view: view

    });


    var draw = new Draw({
      source: vectorSource,
      type: 'Polygon'

    });
    map.addInteraction(draw);

    draw.on('drawend', function (event) {
      var poligono;
      var EPSG4326;
      var feature = event.feature;
      var p = feature.getGeometry().getCoordinates();

      EPSG4326 = transform(p[0][0], 'EPSG:3857', 'EPSG:4326');
      poligono = EPSG4326[0] + " " + EPSG4326[1];
      for (var x = 0; x < p[0].length; x++) {
        EPSG4326 = transform(p[0][x], 'EPSG:3857', 'EPSG:4326');
        poligono = poligono + "," + EPSG4326[0] + " " + EPSG4326[1];
      }
      console.log(poligono);

      (<HTMLInputElement>document.getElementById("coordenada")).value = poligono;
      return;
    });

    //zoom
    var zoomslider = new ZoomSlider();
    map.addControl(zoomslider);
    map.on('');

  };
}

