import { Component, OnInit } from '@angular/core';
import { AreaService } from '../area.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Solo } from '../solo.model';

@Component({
  selector: 'app-area-update',
  templateUrl: './area-update.component.html',
  styleUrls: ['./area-update.component.css']
})
export class AreaUpdateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router,
    private areaService: AreaService, private activateRoute:ActivatedRoute) { }
id;
description;
geometria;
solos;
coordenadas;
ownerForm: FormGroup;
  message;
  ngOnInit() {
    this.id =this.activateRoute.snapshot.params['id'];
    this.description=this.activateRoute.snapshot.params['description'];
    this.geometria=this.activateRoute.snapshot.params['geometria'];
    this.solos=this.activateRoute.snapshot.params['solo'];
    
    this.ownerForm =  this.formBuilder.group({
      descricao: new FormControl('', [Validators.required]),
      coordenadas: new FormControl('', [Validators.required]),
      solo: new FormControl('', [Validators.required])
      
    });
    this.coordenadas = this.geometria.substr(25);
    this.coordenadas = this.coordenadas.substr(0,this.coordenadas.length-3);
    this.f.descricao.setValue(this.description);
    this.f.coordenadas.setValue(this.coordenadas);
    this.getSolo();
    this.f.solo.setValue(this.solos);
  }

  solo: Solo[];
 
  getSolo(){
    this.areaService.getSoloAll().subscribe(
      (data: Solo[]) =>{
        
        this.solo=data;
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
  get f() {
    return this.ownerForm.controls;
  }
  att(){
    this.areaService.updateArea(this.id,this.f.descricao.value,"SRID=4326;MULTIPOLYGON((("+this.f.coordenadas.value+")))",this.f.solo.value).subscribe(() => {
      this.router.navigate(['/area/list']);
    },
    (error) => {
      this.message = error;
    });
  }

}