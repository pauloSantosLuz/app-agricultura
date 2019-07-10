import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { OccurrencetypeService } from 'src/app/occurrencetype/occurrencetype.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PrecipitationService } from '../precipitation.service';
import * as moment from 'moment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-precipitation-update',
  templateUrl: './precipitation-update.component.html',
  styleUrls: ['./precipitation-update.component.css']
})
export class PrecipitationUpdateComponent implements OnInit {

  ownerForm: FormGroup;
  message;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private formBuilder: FormBuilder,private router: Router,
    private occurrencetypeService: PrecipitationService, private activateRoute:ActivatedRoute, private location: Location) { 
    iconRegistry.addSvgIcon('iconClose',sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-close-24px.svg'));
  }
id;
description;
collectionType;
volume;
startDate;
endDate;
area;
ngOnInit() {
    this.id =this.activateRoute.snapshot.params['id'];
    this.description=this.activateRoute.snapshot.params['description'];
    this.collectionType =this.activateRoute.snapshot.params['collectionType'];
    this.volume=this.activateRoute.snapshot.params['volume'];
    this.startDate =this.activateRoute.snapshot.params['startDate'];
    this.endDate=this.activateRoute.snapshot.params['endDate'];
    this.area=this.activateRoute.snapshot.params['area'];
    
    this.ownerForm = this.formBuilder.group({
      observation: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      collectionType: new FormControl('', [Validators.required]),
      volume: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      startDate: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      endDate: new FormControl('', [Validators.required, Validators.maxLength(60)]),

    });
    this.f.observation.setValue(this.description);
    this.f.collectionType.setValue(this.collectionType);
    this.f.volume.setValue(this.volume);
    this.f.startDate.setValue(moment(this.startDate).format("YYYY-MM-DD"));
    this.f.endDate.setValue(moment(this.startDate).format("YYYY-MM-DD"));
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
  get f() {
    return this.ownerForm.controls;
  }
  volta(){
    this.location.back();
  }
  att(){
    this.occurrencetypeService.putPrecipitation(this.id,this.f.observation.value,
      this.f.collectionType.value,this.f.volume.value,moment(this.f.startDate.value).format("YYYY-MM-DDTHH:mm:ssZZ"),
      moment(this.f.endDate.value).format("YYYY-MM-DDTHH:mm:ssZZ"),this.area).subscribe(() => {
        alert("Precipitação atualizada.");
      this.volta();
    },
    (error) => {
      this.message = error;
    });
  }

}
