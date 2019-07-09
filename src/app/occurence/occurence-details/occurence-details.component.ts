import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OccurenceService } from '../occurence.service';
import { Occurrencetype } from '../occurrencetype.model';
import { Occurrencelocation } from '../occurrencelocation.model';

@Component({
  selector: 'app-occurence-details',
  templateUrl: './occurence-details.component.html',
  styleUrls: ['./occurence-details.component.css']
})
export class OccurenceDetailsComponent implements OnInit {

  constructor(private location: Location,
    private occurenceService: OccurenceService, private activateRoute: ActivatedRoute) { }
  id;
  descricao;
  occurTypeID;
  areaID;
  ownerForm: FormGroup;
;
  occurrenceLocation: Occurrencelocation[];
  
  coordenadasLocation;
  ngOnInit() {

    //pega os valor  
    this.id = this.activateRoute.snapshot.params['id'];
    this.descricao = this.activateRoute.snapshot.params['description'];
    this.occurTypeID = this.activateRoute.snapshot.params['occurType'];
    this.areaID = this.activateRoute.snapshot.params['areaID'];
    this.getOccurenceTipe();
   
    (<HTMLInputElement>document.getElementById("descricao")).value = this.descricao;




    

  }
  

  volta() {
    this.location.back();
  }
 
  getOccurenceTipe() {
    this.occurenceService.getOccutenceType(this.occurTypeID).subscribe(
      (data: Occurrencetype) => {
        (<HTMLInputElement>document.getElementById("ocorrencia")).value = data.description;
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
