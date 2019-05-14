import { Component, OnInit } from '@angular/core';
import { Solo } from '../solo.model';
import { AreaService } from '../area.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-insert',
  templateUrl: './area-insert.component.html',
  styleUrls: ['./area-insert.component.css']
})
export class AreaInsertComponent implements OnInit {

  constructor(private areaService: AreaService,private formBuilder: FormBuilder, private router: Router) { }
  ownerForm: FormGroup;
  message;
  ngOnInit() {
    this.getSolo();
    this.ownerForm = this.formBuilder.group({
      descricao: new FormControl('', [Validators.required]),
      coordenadas: new FormControl('', [Validators.required]),
      solo: new FormControl('', [Validators.required])
    });
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

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
  get f() {
    return this.ownerForm.controls;
  }
  add() {
    console.log(this.f.descricao.value + this.f.coordenadas.value + this.f.solo.value)
    this.areaService.insertArea(this.f.descricao.value,"SRID=4326;MULTIPOLYGON((("+this.f.coordenadas.value+")))"
    ,this.f.solo.value).subscribe(() => {

      // redireciona a view
      this.router.navigate(['/occurrencetype/list']);
    },
      (error) => {
        this.message = error;
      }

    );
  }
}
