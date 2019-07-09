import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OccurenceService } from '../occurence.service';
import { Occurrencetype } from 'src/app/occurrencetype/occurrencetype.model';
import { Occurrence } from '../occurrence.model';
import { Occurrencelocation } from '../occurrencelocation.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-occurence-update',
  templateUrl: './occurence-update.component.html',
  styleUrls: ['./occurence-update.component.css']
})
export class OccurenceUpdateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private location: Location,
    private occurenceService: OccurenceService, private activateRoute: ActivatedRoute) { }
  id;
  geometria;
  coordenadas;
  message;
  descricao;
  selectedOption;
  occurTypeID;
  areaID;
  ownerForm: FormGroup;
  occurenceTipe: Occurrencetype[];
  occurrenceLocation: Occurrencelocation[];
  idLOcation;
  coordenadasLocation;
  ngOnInit() {

    //pega os valor  
    this.id = this.activateRoute.snapshot.params['id'];
    this.descricao = this.activateRoute.snapshot.params['description'];
    this.occurTypeID = this.activateRoute.snapshot.params['occurType'];
    this.areaID = this.activateRoute.snapshot.params['areaID'];
    this.getOccurenceTipe();
    
    this.ownerForm = this.formBuilder.group({
      descricao: new FormControl('', [Validators.required]),
      ocorrencia: new FormControl('', [Validators.required])
    });
    this.f.descricao.setValue(this.descricao);
    this.selectedOption = parseInt(this.occurTypeID);
    

  }
 
  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
  get f() {
    return this.ownerForm.controls;
  }
  volta() {
    this.location.back();
  }
  att() {

    this.occurenceService.putOccurrence(this.id, this.f.descricao.value, this.f.ocorrencia.value, this.areaID).subscribe((id: Occurrence) => {

      alert("Occorencia Atualizada!");
        this.volta();
    },
      (error) => {
        this.message = error;
      }
    );

  }
  
  getOccurenceTipe() {
    this.occurenceService.getOccutenceTypeAll().subscribe(
      (data: Occurrencetype[]) => {
        this.occurenceTipe = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }



}
